import { useState } from "react";
import React from "react";
import Book1 from "../../assets/books/book1.png";
import Book2 from "../../assets/books/book2.png";
import Book3 from "../../assets/books/book3.webp";
import Book4 from "../../assets/books/book4.webp";
import Book5 from "../../assets/books/book5.jpg";
import Book6 from "../../assets/books/book6.webp";
import Book7 from "../../assets/books/book7.jpg";
import Book8 from "../../assets/books/book8.jpg";
import Book9 from "../../assets/books/book9.jpg";
import Book10 from "../../assets/books/book10.jpg";
import Book11 from "../../assets/books/book11.jpg";
import Book12 from "../../assets/books/book12.jpg";
import Book13 from "../../assets/books/book13.jpg";
import Book14 from "../../assets/books/book14.png";
import Book15 from "../../assets/books/book15.jpg";
import Book16 from "../../assets/books/book16.jpg";
import Book17 from "../../assets/books/book17.jpg";
import Book18 from "../../assets/books/book18.png";
import Book19 from "../../assets/books/book19.jpg";
import Book20 from "../../assets/books/book20.jpg";
import Book21 from "../../assets/books/book21.jpg";
import Book22 from "../../assets/books/book22.png";
import Book23 from "../../assets/books/book23.jpg";
import Book24 from "../../assets/books/book24.jpg";
import Book25 from "../../assets/books/book25.jpg";
import { FaStar } from "react-icons/fa";

const BookData = [
  {
    id: 1,
    img: Book1,
    title: "Rich Dad Poor Dad",
    rating: 5.0,
    author: "Robert T. Kiyosaki",
  },
  {
    id: 2,
    img: Book2,
    title: "The Psychology of Money",
    rating: 5,
    author: "Morgan Housel",
  },
  {
    id: 3,
    img: Book3,
    title: "Think and Grow Rich",
    rating: 4.7,
    author: "Napoleon Hill",
  },

  {
    id: 4,
    img: Book4,
    title: "The Power Of Your Subconscious Mind",
    rating: 4.9,
    author: "Joseph Murphy",
  },
  {
    id: 5,
    img: Book5,
    title: "Lost Boy",
    rating: 4.2,
    author: "Lost Girl",
  },
  {
    id: 6,
    img: Book6,
    title: "Atomic Habits",
    rating: 4.6,
    author: "James Clear",
  },
  {
    id: 7,
    img: Book7,
    title: "Company of One",
    rating: 3.8,
    author: "Paul Jarvis",
  },
  {
    id: 8,
    img: Book8,
    title: "His Life",
    rating: 4.4,
    author: "Isaac Asimov",
  },
  {
    id: 9,
    img: Book9,
    title: "The Good Sister",
    rating: 4.1,
    author: "Alexa Blye",
  },
  {
    id: 10,
    img: Book10,
    title: "The Winner Maker",
    rating: 3.5,
    author: "Jeff Bond",
  },
  {
    id: 11,
    img: Book11,
    title: "Who's There",
    rating: 4.4,
    author: "J. Doe",
  },

  {
    id: 12,
    img: Book12,
    title: "Manualul Femeii De Succes",
    rating: 4.7,
    author: "Andra Olarean",
  },
  {
    id: 13,
    img: Book13,
    title: "Seven Endless Forests",
    rating: 4.2,
    author: "April Genevieve Tucholke",
  },
  {
    id: 14,
    img: Book14,
    title: "Zero To One",
    rating: 4.7,
    author: "Peter Thiel",
  },

  {
    id: 15,
    img: Book15,
    title: "Learning To Breathe Again",
    rating: 4.4,
    author: "Lark Dean Galley",
  },
  {
    id: 16,
    img: Book16,
    title: "Change Your Career Change Your Life",
    rating: 3.6,
    author: "Adrian Knight",
  },
  {
    id: 17,
    img: Book17,
    title: "Escaping Relationship Crisis",
    rating: 4.6,
    author: "Yemi Davids",
  },
  {
    id: 18,
    img: Book18,
    title: "Soulcation",
    rating: 4.0,
    author: "Mel Miles",
  },
  {
    id: 19,
    img: Book19,
    title: "Truly Yours",
    rating: 4.3,
    author: "Drea Stein",
  },
  {
    id: 20,
    img: Book20,
    title: "Red Queen",
    rating: 4.8,
    author: "Victoria Aveyard",
  },
  {
    id: 21,
    img: Book21,
    title: "Self-Care After A Breakup",
    rating: 4.4,
    author: "Frank Montalbo",
  },
  {
    id: 22,
    img: Book22,
    title: "Instant Positivity",
    rating: 3.9,
    author: "Kristen Butler",
  },
  {
    id: 23,
    img: Book23,
    title: "The Bell Jar",
    rating: 4.4,
    author: "Sylvia Plath",
  },
  {
    id: 24,
    img: Book24,
    title: "Strange Days In The Hockomock Swamp",
    rating: 3.5,
    author: "Kevin J. Foster",
  },
  {
    id: 25,
    img: Book25,
    title: "The Essential Guide To A Lasting Relationship",
    rating: 4.1,
    author: "Anna Anson",
  },
];

function useToggleBooks(initialVisibleCount = 10) {
  const [showAll, setShowAll] = useState(false);
  const visibleBooks = showAll
    ? BookData
    : BookData.slice(0, initialVisibleCount);

  const toggleBooks = () => setShowAll((prev) => !prev);

  return { visibleBooks, showAll, toggleBooks };
}

function AllBooks() {
  const { visibleBooks, showAll, toggleBooks } = useToggleBooks();
  return (
    <>
      <div className="py-10">
        <div className="container placeholder-gray-100">
          {/* Header */}

          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, delectus.{" "}
            </p>
          </div>
          {/* Card */}
          <div data-aos="slide-up">
            <div
              className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 place-items-center md:gap-x-10 
            gap-y-8 sm:gap-y-10">
              {visibleBooks.map((book) => (
                <div
                  className="h-[380px] space-y-2
                space-x-4 lg:w-[180px] xl:w-[200px] md:mt-5 mx-auto">
                  <img
                    src={book.img}
                    alt=""
                    className="h-[275px] w-[170px] sm:w-[190px] sm:h-[280px] lg:w-[180px] lg:h-[300px] xl:w-[200px] object-cover rounded-md border-[0.1px] border-gray-300"
                  />
                  <div>
                    <h2 className="font-semibold w-[150px] break-words">
                      {book.title}
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {" "}
                      {book.author}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleBooks}
              className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">
              {showAll ? "Show Less" : "View All Books"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBooks;
