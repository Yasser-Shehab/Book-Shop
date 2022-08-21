import React, { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import BookList from "../../container/BookList/BookList";
import Nav from "../../container/Navbar/Nav";
import { BounceLoader } from "react-spinners";

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
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Nav searchHandle={searchHandle} />
      <NavigationMenu />
      {books ? (
        <div>
          <BookList books={books} />
          <Pagination nextPage={nextPage} prevPage={prevPage} newPageHandle={newPageHandle} />
        </div>
      ) : (
        <div className="w-72 flex items-center justify-center mx-auto align-middle mt-20">
          <BounceLoader color="#8A99FE" loading={isLoading} size={100} />
        </div>
      )}
    </>
  );
}

export default MainPage;
