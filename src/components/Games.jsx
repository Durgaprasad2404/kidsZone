import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Games() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <>
      <div className="bg-cyan-300">
        <Navbar />
      </div>
      <div className="bg-cyan-100 py-10 px-5 lg:px-20">
        <h1 className="text-4xl font-comic text-center font-bold mb-10">
          &#127872;GAMES&#127872;
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-cyan-400 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-center font-comic">
              Click By Click To Magic
            </h3>
            <Link to="/game1">
              <img
                src="./gameCovers/clickbyclickCover.png"
                alt="ClickByClickToMagic"
                loading="lazyloading"
                className="w-full h-48 object-contain rounded-lg"
              />
            </Link>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-cyan-400 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-center font-comic">
              Tic Tac Toe
            </h3>
            <Link to="/game2">
              <img
                src="./gameCovers/tictactoeCover.jpg"
                alt="TicTacToe"
                className="w-full h-48 object-contain rounded-lg"
              />
            </Link>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-cyan-400 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-center font-comic">
              AlphabetsGM
            </h3>
            <Link to="/game3">
              <img
                src="./gameCovers/152Z_3.jpg"
                alt="AlphabetsGM"
                className="w-full h-48 object-contain rounded-lg"
              />
            </Link>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-cyan-400 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-center font-comic">
              Colors
            </h3>
            <Link to="/game4">
              <img
                src="./gameCovers/colorsCover.jpeg"
                alt="Colors"
                className="w-full h-48 object-contain rounded-lg"
              />
            </Link>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-cyan-400 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4 text-center font-comic">
              AlphabetEN
            </h3>
            <Link to="/game5">
              <img
                src="./gameCovers/26271.jpg"
                alt="AlphabetEN"
                className="w-full h-48 object-contain rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;
