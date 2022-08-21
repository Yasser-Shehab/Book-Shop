import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

import { getAllBooks, getBook, newPage, search } from "./api/booksApi";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [booksData, setBookData] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const allBooksFetch = async () => {
    const dataObject = await getAllBooks();
    setBookData(dataObject);
    setNextPage(dataObject.next);
    setPrevPage(dataObject.previous);
  };
  const newPageFetch = async (pageUrl: any) => {
    const dataObject = await newPage(pageUrl);
    setBookData(dataObject);
    setNextPage(dataObject.next);
    setPrevPage(dataObject.previous);
  };

  const searchQuery = async (query: string) => {
    try {
      const searchRes = await search(query);

      setBookData(searchRes);
    } catch (error) {
      console.log("Error While Searching");
    }
  };
  const handleBookSearch = (searchTerm: string) => {
    console.log("working");

    if (searchTerm.length > 0) {
      searchQuery(searchTerm);
    } else if (searchTerm.length === 0) {
      allBooksFetch();
    }
  };
  // Using Lodash Library to Minimize the Requests going to the server
  const delayedSearch = useCallback(
    debounce((query: string) => handleBookSearch(query), 600),
    []
  );

  useEffect(() => {
    allBooksFetch();
  }, []);

  return (
    <MainPage
      books={booksData}
      searchHandle={delayedSearch}
      newPageHandle={newPageFetch}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
}

export default App;
