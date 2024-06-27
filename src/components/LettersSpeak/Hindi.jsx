import React, { useEffect, useState } from "react";
import Hindichart from "../../assets/hindiVarnamala.webp";

function Hindi() {
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

  const hindi = [
    { letter: "अ", example: "आम" },
    { letter: "आ", example: "आदमी" },
    { letter: "इ", example: "इंग्लिश" },
    { letter: "ई", example: "ईंट" },
    { letter: "उ", example: "उड़ना" },
    { letter: "ऊ", example: "ऊंट" },
    { letter: "ऋ", example: "ऋषि" },
    { letter: "ए", example: "एक" },
    { letter: "ऐ", example: "ऐसा" },
    { letter: "ओ", example: "ओर" },
    { letter: "औ", example: "औरत" },
    { letter: "अं", example: "अंगूर)" },
    { letter: "अः", example: "अः" },
    { letter: "क", example: "कमरा" },
    { letter: "ख", example: "खरगोश" },
    { letter: "ग", example: "गाड़ी" },
    { letter: "घ", example: "घर" },
    { letter: "ङ", example: "अंगूर" },
    { letter: "च", example: "चाय" },
    { letter: "छ", example: "छाती" },
    { letter: "ज", example: "जानवर" },
    { letter: "झ", example: "झूला" },
    { letter: "ञ", example: "ज्ञान " },
    { letter: "ट", example: "टोपी" },
    { letter: "ठ", example: "ठंडा" },
    { letter: "ड", example: "डाक" },
    { letter: "ढ", example: "ढोल" },
    { letter: "ण", example: "णग" },
    { letter: "त", example: "ताला" },
    { letter: "थ", example: "थली" },
    { letter: "द", example: "दाल" },
    { letter: "ध", example: "धोबी" },
    { letter: "न", example: "नदी" },
    { letter: "प", example: "पेड़" },
    { letter: "फ", example: "फूल" },
    { letter: "ब", example: "बिल्ली" },
    { letter: "भ", example: "भारत " },
    { letter: "म", example: "मच्छर " },
    { letter: "य", example: "यह " },
    { letter: "र", example: "रात " },
    { letter: "ल", example: "लड़की" },
    { letter: "व", example: "वन " },
    { letter: "श", example: "शेर " },
    { letter: "ष", example: "षट्कोण " },
    { letter: "स", example: "सूरज " },
    { letter: "ह", example: "हाथी " },
    { letter: "क्ष", example: "क्षमा " },
    { letter: "त्र", example: "त्रिकोण " },
    { letter: "ज्ञ", example: "ज्ञान " },
  ];

  return (
    <div className="bg-cyan-100 py-10 px-5 lg:px-20">
      <h1 className="text-4xl font-comic text-center font-bold mb-10">Hindi</h1>
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
          <img src={Hindichart} alt="#" className="my-6 w-full" />
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {hindi.map(({ letter, example }) => (
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

export default Hindi;
