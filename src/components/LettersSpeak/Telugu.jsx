import React, { useEffect, useState } from "react";
import Teluguchart from "../../assets/telugu-aksharamala.webp";

function Telugu() {
  // scroll to top on reload
  const [chart, setChart] = useState(false);
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

  const telugu = [
    { letter: "అ", example: "అమ్మ" },
    { letter: "ఆ", example: "ఆవు" },
    { letter: "ఇ", example: "ఇల్లు " },
    { letter: "ఈ", example: "ఈగ" },
    { letter: "ఉ", example: "ఉదత" },
    { letter: "ఊ", example: "ఊయల" },
    { letter: "ఋ", example: "ఋషి " },
    { letter: "ౠ", example: "ౠ " },
    { letter: "ఎ", example: "ఎలుక " },
    { letter: "ఏ", example: "ఏనుగు" },
    { letter: "ఐ", example: "ఐదు" },
    { letter: "ఒ", example: "ఒంటె" },
    { letter: "ఓ", example: "ఓడ" },
    { letter: "ఔ", example: "ఔషధం" },
    { letter: "అం", example: "అంగడి" },
    { letter: "అః", example: "అః" },

    { letter: "క", example: "కలము" },
    { letter: "ఖ", example: "ఖడ్గం" },
    { letter: "గ", example: "గడియారం" },
    { letter: "ఘ", example: "ఘరం" },
    { letter: "ఙ", example: "ఙ" },
    { letter: "చ", example: "చక్రం" },
    { letter: "ఛ", example: "ఛత్రపతి" },
    { letter: "జ", example: "జడ" },
    { letter: "ఝ", example: "ఝంకర" },
    { letter: "ఞ", example: "ఞ" },
    { letter: "ట", example: "టమోటా" },
    { letter: "ఠ", example: "ఠండ" },
    { letter: "డ", example: "డబ్బు" },
    { letter: "ఢ", example: "ఢోలు" },
    { letter: "ణ", example: "ణాగం " },
    { letter: "త", example: "తల " },
    { letter: "థ", example: "థాలి " },
    { letter: "ద", example: "దందా " },
    { letter: "ధ", example: "ధనస్సు " },
    { letter: "న", example: "నది " },
    { letter: "ప", example: "పలక " },
    { letter: "ఫ", example: "ఫలం " },
    { letter: "బ", example: "బంతి" },
    { letter: "భ", example: "భారతం" },
    { letter: "మ", example: "మచ్చ" },
    { letter: "య", example: "యమున" },
    { letter: "ర", example: "రధం" },
    { letter: "ల", example: "లడ్డూ" },
    { letter: "వ", example: "వరం" },
    { letter: "శ", example: "శ్రీ" },
    { letter: "ష", example: "షట్కోణం" },
    { letter: "స", example: "సర్పం" },
    { letter: "హ", example: "హలం" },
    { letter: "ళ", example: "ళ" },
    { letter: "క్ష", example: "క్షమ" },
    { letter: "ఱ", example: "ఱ" },
  ];

  return (
    <div className="bg-cyan-200 py-10 px-5 lg:px-20">
      <h1 className="text-4xl font-comic text-center font-bold mb-10">
        Telugu
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
          <img src={Teluguchart} alt="#" className="my-6 w-full" />
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {telugu.map(({ letter, example }) => (
          <div key={letter} className="flex flex-col items-center space-y-2">
            <button
              onClick={() => speak(letter)}
              className="text-5xl font-extrabold bg-pink-100  text-black py-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 w-full"
            >
              {letter}
            </button>
            <button
              onClick={() => speak(example)}
              className="text-xl font-semibold bg-white text-black py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 w-full flex items-center justify-center space-x-2"
            >
              {/* <span>{icon}</span> */}
              <span>{example}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Telugu;
