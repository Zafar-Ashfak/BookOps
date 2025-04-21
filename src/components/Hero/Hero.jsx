import React, { useState } from "react";

import Book1 from "../../assets/books/book1.png";
import Book2 from "../../assets/books/book2.png";
import Book3 from "../../assets/books/book4.webp";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Rich Dad Poor Dad",
    author: "ROBERT T. KIYOSAKI",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Book2,
    title: "The Psychology of Money",
    author: "MORGAN HOUSEL",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Book3,
    title: "The Power Of Your Subconscious Mind",
    author: "JOSEPH MURPHY",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function Hero({handleOrderPopup}) {
  const [imageId, setImageId] = useState(Book2);
  const [title, setTitle] = useState("The Psychology of Money");
  const [author, setAuthor] = useState("MORGAN HOUSEL");
  const [description, setDescription] = useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    //height: "100%",
    width: "100%",
  };
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 overflow-x-hidden"
        style={bgImage}>
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Text Content Section */}
            <div
            data-aos-once="true"
             className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                className="text-5xl sm:text-[55px] lg:text-7xl font-bold"
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                >
                  
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm mt-3">
                  By {author}
                </p>
              </h1>
              <p
                className="text-sm "
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100">
                {description}
              </p>
              <div>
                <button 
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                data-aos="zoom-in"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* Main Image */}
              <div className="h-[300px]  sm:h-[450px] sm:w-[270px] lg:w-[320px] overflow-hidden flex justify-center items-center">
                <img
                data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>

              {/* Other image list*/}
              <div className="flex lg:flex-col lg:top-1/2
               lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((data) => (
                  <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                    src={data.img}
                    alt=""
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 border-[0.1px] border-gray-400"
                    onClick={() => {
                      setImageId(
                        data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3
                      );
                      setTitle(data.title);
                      setAuthor(data.author);
                      setDescription(data.description);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
