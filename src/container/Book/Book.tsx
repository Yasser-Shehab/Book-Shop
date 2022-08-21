import React from "react";

const Book = ({ img, title, author }: { img: any; title: string; author: [] }) => {
  return (
    <div className="w-50">
      <img src={img["image/jpeg"]} className="w-50 h-50 object-fill" alt="book" />
      <h3 className="font-bold my-2 text-xl">
        {title.length > 19 ? `${title.slice(0, 19)}..` : title}
      </h3>
      <div className="flex flex-col">
        {author &&
          author.map((author: any, index) => {
            return (
              <p key={index} className="opacity-40">
                {author.name.slice(0, 15)}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Book;
