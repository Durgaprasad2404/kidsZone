import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaGamepad, FaEnvelope } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center md:flex-wrap pt-12 p-5">
        <Link
          to="/"
          className="no-underline text-black selection:bg-red-400"
          onClick={() => window.reload()}
        >
          <div className="text-4xl font-bold font-comic">.KidsZone</div>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="flex items-center text-black text-2xl font-comic font-semibold px-2 py-2 rounded-full hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center text-black text-2xl font-comic font-semibold px-2 py-2 rounded-full hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          >
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link
            to="/stories"
            className="flex items-center text-black text-2xl font-comic font-semibold px-2 py-2 rounded-full hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          >
            <MdMenuBook className="mr-2" /> Stories
          </Link>
          <Link
            to="/games"
            className="flex items-center text-black text-2xl font-comic font-semibold px-2 py-2 rounded-full hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          >
            <FaGamepad className="mr-2" /> Games
          </Link>
          <Link
            to="/contactus"
            className="flex items-center text-black text-2xl font-comic font-semibold px-2 py-2 rounded-full hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          >
            <FaEnvelope className="mr-2" /> Contact Us
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl p-1 px-2 bg-pink-400 border"
          >
            &#9776;
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-pink-100`}>
        <Link
          to="/"
          className="flex items-center px-4 py-2 text-black text-2xl font-comic font-semibold hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          onClick={toggleMenu}
        >
          <FaHome className="mr-2" /> Home
        </Link>
        <Link
          to="/about"
          className="flex items-center px-4 py-2 text-black text-2xl font-comic font-semibold hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          onClick={toggleMenu}
        >
          <FaInfoCircle className="mr-2" /> About
        </Link>
        <Link
          to="/stories"
          className="flex items-center text-black text-2xl font-comic font-semibold px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
        >
          <MdMenuBook className="mr-2" /> Stories
        </Link>
        <Link
          to="/games"
          className="flex items-center px-4 py-2 text-black text-2xl font-comic font-semibold hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          onClick={toggleMenu}
        >
          <FaGamepad className="mr-2" /> Games
        </Link>
        <Link
          to="/contactus"
          className="flex items-center px-4 py-2 text-black text-2xl font-comic font-semibold hover:bg-pink-500 hover:text-white no-underline hover:font-bold"
          onClick={toggleMenu}
        >
          <FaEnvelope className="mr-2" /> Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
