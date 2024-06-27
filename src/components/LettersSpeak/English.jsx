import React, { useEffect, useState } from "react";
import englishchart from "../../assets/The-Alphabet.webp";
import {
  FaAppleAlt,
  FaBaseballBall,
  FaCat,
  FaDog,
  FaFish,
  FaHatCowboy,
  FaIceCream,
  FaRobot,
  FaSun,
  FaUmbrella,
  FaXRay,
  FaYinYang,
} from "react-icons/fa";
import {
  GiElephant,
  GiGrapes,
  GiJug,
  GiKite,
  GiLion,
  GiMonkey,
  GiNestBirds,
  GiOrangeSlice,
  GiParrotHead,
  GiCardQueenClubs,
  GiWatch,
  GiTigerHead,
  GiViolin,
  GiTiger,
} from "react-icons/gi";

function English() {
  const [chart, setChart] = useState(false);
  // scroll to top on reload
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  // Function to handle text-to-speech
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const alphabets = [
    { letter: "A", example: "Apple", icon: <FaAppleAlt /> },
    { letter: "B", example: "Ball", icon: <FaBaseballBall /> },
    { letter: "C", example: "Cat", icon: <FaCat /> },
    { letter: "D", example: "Dog", icon: <FaDog /> },
    { letter: "E", example: "Elephant", icon: <GiElephant /> },
    { letter: "F", example: "Fish", icon: <FaFish /> },
    { letter: "G", example: "Grapes", icon: <GiGrapes /> },
    { letter: "H", example: "Hat", icon: <FaHatCowboy /> },
    { letter: "I", example: "Ice Cream", icon: <FaIceCream /> },
    { letter: "J", example: "Jug", icon: <GiJug /> },
    { letter: "K", example: "Kite", icon: <GiKite /> },
    { letter: "L", example: "Lion", icon: <GiLion /> },
    { letter: "M", example: "Monkey", icon: <GiMonkey /> },
    { letter: "N", example: "Nest", icon: <GiNestBirds /> },
    { letter: "O", example: "Orange", icon: <GiOrangeSlice /> },
    { letter: "P", example: "Parrot", icon: <GiParrotHead /> },
    { letter: "Q", example: "Queen", icon: <GiCardQueenClubs /> },
    { letter: "R", example: "Rabbit", icon: <FaRobot /> },
    { letter: "S", example: "Sun", icon: <FaSun /> },
    { letter: "T", example: "Tiger", icon: <GiTigerHead /> },
    { letter: "U", example: "Umbrella", icon: <FaUmbrella /> },
    { letter: "V", example: "Violin", icon: <GiViolin /> },
    { letter: "W", example: "Watch", icon: <GiWatch /> },
    { letter: "X", example: "Xylophone", icon: <FaXRay /> },
    { letter: "Y", example: "Yak", icon: <FaYinYang /> },
    { letter: "Z", example: "Zebra", icon: <GiTiger /> },
  ];

  return (
    <div className="bg-cyan-100 py-10 px-5 lg:px-20">
      <h1 className="text-4xl font-comic text-center font-bold mb-10">
        English Alphabets
      </h1>
      {!chart && (
        <div className="text-right">
          <button
            className="bg-transparent hover:bg-pink-500 text-black font-semibold hover:text-white py-2 px-4 mb-6 border-2 border-black-500  rounded hover:scale-110 transition-transform duration-200"
            onClick={() => {
              setChart(true);
            }}
          >
            Get Chart
          </button>
        </div>
      )}
      {chart && (
        <div className="text-center">
          <button
            onClick={() => {
              setChart(false);
            }}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded hover:scale-110 transition-transform duration-200"
          >
            close Chart
          </button>{" "}
          <br />
          <img src={englishchart} alt="#" className="my-6 w-full" />
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {alphabets.map(({ letter, example, icon }) => (
          <div key={letter} className="flex flex-col items-center space-y-2">
            <button
              onClick={() => speak(letter)}
              className="text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 text-white py-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 w-full"
            >
              {letter}
            </button>
            <button
              onClick={() => speak(letter.toLowerCase())}
              className="text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 text-white py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 w-full"
            >
              {letter.toLowerCase()}
            </button>
            <button
              onClick={() => speak(example)}
              className="text-xl font-semibold bg-white text-black py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 w-full flex items-center justify-center space-x-2"
            >
              <span>{icon}</span>
              <span>{example}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default English;
