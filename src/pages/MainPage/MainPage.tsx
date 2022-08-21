import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import BookList from "../../container/BookList/BookList";
import Nav from "../../container/Navbar/Nav";
import { NavigationMenu } from "../../container/NavigationMenu/NavigationMenu";

function MainPage({
  books,
  newPageHandle,
  searchHandle,
  nextPage,
  prevPage,
}: {
  books: any;
  newPageHandle: any;
  searchHandle: any;
  nextPage: any;
  prevPage: any;
}) {
  return (
    <>
      <Nav searchHandle={searchHandle} />
      <NavigationMenu />
      {books && (
        <div>
          <BookList books={books} />
          <Pagination nextPage={nextPage} prevPage={prevPage} newPageHandle={newPageHandle} />
        </div>
      )}
    </>
  );
}

export default MainPage;
