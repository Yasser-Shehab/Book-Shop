import React from "react";
import Book from "../Book/Book";

function BookList({ books }: { books: any }) {
  return (
    <div className="flex flex-wrap gap-10 justify-around mx-auto max-w-screen-xl py-2 px-4 lg:px-1 lg:py-4 mt-9">
      {books &&
        books.results.map((singleBook: any) => {
          return (
            <Book
              key={singleBook.id}
              img={singleBook.formats}
              title={singleBook.title}
              author={singleBook.authors}
            />
          );
        })}
    </div>
  );
}

export default BookList;
