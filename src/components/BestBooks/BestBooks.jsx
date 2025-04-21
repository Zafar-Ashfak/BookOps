import React from "react";
import Image1 from "../../assets/books/book1.png";
import Image2 from "../../assets/books/book2.png";
import Image3 from "../../assets/books/book3.webp";
import Image4 from "../../assets/books/book20.jpg";
import Image5 from "../../assets/books/book6.webp";
import Image6 from "../../assets/books/book9.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  {
    id: 1,
    img: Image1,
    title: "Rich Dad Poor Dad",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "The Psychology of Money",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "Think and Grow Rich",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua.",
  },
  {
    id: 4,
    img: Image4,
    title: "Red Queen",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua.",
  },
  {
    id: 5,
    img: Image5,
    title: "Atomic Habits",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua.",
  },
  {
    id: 6,
    img: Image6,
    title: "The Good Sister",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore manga aliqua.",
  },
];

function BestBooks({ handleOrderPopup }) {
  return (
    <div className="py-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            delectus.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-20 place-items-center lg:gap-y-24">
          {BooksData.map((book) => (
            <div
              key={book.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[100px]">
                <img
                  src={book.img}
                  alt=""
                  className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md border-[0.1px] border-gray-300"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl md:text-sm lg:text-xl font-bold">{book.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {book.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestBooks;
