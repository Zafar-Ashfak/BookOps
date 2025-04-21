import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Logo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 1,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 1,
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <div className="flex gap-2 items-center mb-3">
              <img src={Logo} alt="BookOps store logo" className="w-9 sm:w-11" />
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify uppercase">
                BookOps
              </h1>
            </div>
            <p className="ml-1">
              BookOps is a user-friendly bookstore app offering a vast
              collection of books, seamless search, and convenient purchasing
              options.
            </p>
            <br />
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-red-600 duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-blue-700 duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-blue-700 duration-300" />
              </a>
            </div>
          </div>
          {/* Link Section */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50">
            <p className="text-gray-400 text-center py-10">
              {" "}
              &copy; 2024 Md Ashfak Alam | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
