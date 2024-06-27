import React, { useEffect, useState } from "react";
import Teluguchart from "../../assets/numberschart.avif";

function Numbers() {
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

  const numbers = [
    { teluguWord: "ఒకటి", letter: "1", word: "One" },
    { teluguWord: "రెండు", letter: "2", word: "Two" },
    { teluguWord: "మూడు", letter: "3", word: "Three" },
    { teluguWord: "నాలుగు", letter: "4", word: "Four" },
    { teluguWord: "ఐదు", letter: "5", word: "Five" },
    { teluguWord: "ఆరు", letter: "6", word: "Six" },
    { teluguWord: "ఏడు", letter: "7", word: "Seven" },
    { teluguWord: "ఎనిమిది", letter: "8", word: "Eight" },
    { teluguWord: "తొమ్మిది", letter: "9", word: "Nine" },
    { teluguWord: "పది", letter: "10", word: "Ten" },
    { teluguWord: "పదకొండు", letter: "11", word: "Eleven" },
    { teluguWord: "పన్నెండు", letter: "12", word: "Twelve" },
    { teluguWord: "పదమూడు", letter: "13", word: "Thirteen" },
    { teluguWord: "పద్నాలుగు", letter: "14", word: "Fourteen" },
    { teluguWord: "పదిహేను", letter: "15", word: "Fifteen" },
    { teluguWord: "పదహారు", letter: "16", word: "Sixteen" },
    { teluguWord: "పదిహేడు", letter: "17", word: "Seventeen" },
    { teluguWord: "పదెనిమిది", letter: "18", word: "Eighteen" },
    { teluguWord: "పందొమ్మిది", letter: "19", word: "Nineteen" },
    { teluguWord: "ఇరవై", letter: "20", word: "Twenty" },
    { teluguWord: "ఇరవై ఒకటి", letter: "21", word: "Twenty-one" },
    { teluguWord: "ఇరవై రెండు", letter: "22", word: "Twenty-two" },
    { teluguWord: "ఇరవై మూడు", letter: "23", word: "Twenty-three" },
    { teluguWord: "ఇరవై నాలుగు", letter: "24", word: "Twenty-four" },
    { teluguWord: "ఇరవై ఐదు", letter: "25", word: "Twenty-five" },
    { teluguWord: "ఇరవై ఆరు", letter: "26", word: "Twenty-six" },
    { teluguWord: "ఇరవై ఏడు", letter: "27", word: "Twenty-seven" },
    { teluguWord: "ఇరవై ఎనిమిది", letter: "28", word: "Twenty-eight" },
    { teluguWord: "ఇరవై తొమ్మిది", letter: "29", word: "Twenty-nine" },
    { teluguWord: "ముప్పై", letter: "30", word: "Thirty" },
    { teluguWord: "ముప్పై ఒకటి", letter: "31", word: "Thirty-one" },
    { teluguWord: "ముప్పై రెండు", letter: "32", word: "Thirty-two" },
    { teluguWord: "ముప్పై మూడు", letter: "33", word: "Thirty-three" },
    { teluguWord: "ముప్పై నాలుగు", letter: "34", word: "Thirty-four" },
    { teluguWord: "ముప్పై ఐదు", letter: "35", word: "Thirty-five" },
    { teluguWord: "ముప్పై ఆరు", letter: "36", word: "Thirty-six" },
    { teluguWord: "ముప్పై ఏడు", letter: "37", word: "Thirty-seven" },
    { teluguWord: "ముప్పై ఎనిమిది", letter: "38", word: "Thirty-eight" },
    { teluguWord: "ముప్పై తొమ్మిది", letter: "39", word: "Thirty-nine" },
    { teluguWord: "నలభై", letter: "40", word: "Forty" },
    { teluguWord: "నలభై ఒకటి", letter: "41", word: "Forty-one" },
    { teluguWord: "నలభై రెండు", letter: "42", word: "Forty-two" },
    { teluguWord: "నలభై మూడు", letter: "43", word: "Forty-three" },
    { teluguWord: "నలభై నాలుగు", letter: "44", word: "Forty-four" },
    { teluguWord: "నలభై ఐదు", letter: "45", word: "Forty-five" },
    { teluguWord: "నలభై ఆరు", letter: "46", word: "Forty-six" },
    { teluguWord: "నలభై ఏడు", letter: "47", word: "Forty-seven" },
    { teluguWord: "నలభై ఎనిమిది", letter: "48", word: "Forty-eight" },
    { teluguWord: "నలభై తొమ్మిది", letter: "49", word: "Forty-nine" },
    { teluguWord: "యాభై", letter: "50", word: "Fifty" },
    { teluguWord: "యాభై ఒకటి", letter: "51", word: "Fifty-one" },
    { teluguWord: "యాభై రెండు", letter: "52", word: "Fifty-two" },
    { teluguWord: "యాభై మూడు", letter: "53", word: "Fifty-three" },
    { teluguWord: "యాభై నాలుగు", letter: "54", word: "Fifty-four" },
    { teluguWord: "యాభై ఐదు", letter: "55", word: "Fifty-five" },
    { teluguWord: "యాభై ఆరు", letter: "56", word: "Fifty-six" },
    { teluguWord: "యాభై ఏడు", letter: "57", word: "Fifty-seven" },
    { teluguWord: "యాభై ఎనిమిది", letter: "58", word: "Fifty-eight" },
    { teluguWord: "యాభై తొమ్మిది", letter: "59", word: "Fifty-nine" },
    { teluguWord: "అరవై", letter: "60", word: "Sixty" },
    { teluguWord: "అరవై ఒకటి", letter: "61", word: "Sixty-one" },
    { teluguWord: "అరవై రెండు", letter: "62", word: "Sixty-two" },
    { teluguWord: "అరవై మూడు", letter: "63", word: "Sixty-three" },
    { teluguWord: "అరవై నాలుగు", letter: "64", word: "Sixty-four" },
    { teluguWord: "అరవై ఐదు", letter: "65", word: "Sixty-five" },
    { teluguWord: "అరవై ఆరు", letter: "66", word: "Sixty-six" },
    { teluguWord: "అరవై ఏడు", letter: "67", word: "Sixty-seven" },
    { teluguWord: " అరవై ఎనిమిది", letter: "68", word: "Sixty-eight" },
    { teluguWord: "అరవై తొమ్మిది", letter: "69", word: "Sixty-nine" },
    { teluguWord: "డెబ్బై", letter: "70", word: "Seventy" },
    { teluguWord: "డెబ్బై ఒకటి", letter: "71", word: "Seventy-one" },
    { teluguWord: "డెబ్బై రెండు", letter: "72", word: "Seventy-two" },
    { teluguWord: "డెబ్బై మూడు", letter: "73", word: "Seventy-three" },
    { teluguWord: " డెబ్బై నాలుగు", letter: "74", word: "Seventy-four" },
    { teluguWord: " డెబ్బై ఐదు", letter: "75", word: "Seventy-five" },
    { teluguWord: "డెబ్బై ఆరు", letter: "76", word: "Seventy-six" },
    { teluguWord: "డెబ్బై ఏడు", letter: "77", word: "Seventy-seven" },
    { teluguWord: "డెబ్బై ఎనిమిది", letter: "78", word: "Seventy-eight" },
    { teluguWord: "డెబ్బై తొమ్మిది", letter: "79", word: "Seventy-nine" },
    { teluguWord: "ఎనభై", letter: "80", word: "Eighty" },
    { teluguWord: "ఎనభై ఒకటి", letter: "81", word: "Eighty-one" },
    { teluguWord: "ఎనభై రెండు", letter: "82", word: "Eighty-two" },
    { teluguWord: "ఎనభై మూడు", letter: "83", word: "Eighty-three" },
    { teluguWord: "ఎనభై నాలుగు", letter: "84", word: "Eighty-four" },
    { teluguWord: "ఎనభై ఐదు", letter: "85", word: "Eighty-five" },
    { teluguWord: "ఎనభై ఆరు", letter: "86", word: "Eighty-six" },
    { teluguWord: "ఎనభై ఏడు", letter: "87", word: "Eighty-seven" },
    { teluguWord: "ఎనభై ఎనిమిది", letter: "88", word: "Eighty-eight" },
    { teluguWord: "ఎనభై తొమ్మిది", letter: "89", word: "Eighty-nine" },
    { teluguWord: "తొంభై", letter: "90", word: "Ninety" },
    { teluguWord: "తొంభై ఒకటి", letter: "91", word: "Ninety-one" },
    { teluguWord: "తొంభై రెండు", letter: "92", word: "Ninety-two" },
    { teluguWord: "తొంభై మూడు", letter: "93", word: "Ninety-three" },
    { teluguWord: "తొంభై నాలుగు", letter: "94", word: "Ninety-four" },
    { teluguWord: "తొంభై ఐదు", letter: "95", word: "Ninety-five" },
    { teluguWord: "తొంభై ఆరు", letter: "96", word: "Ninety-six" },
    { teluguWord: "తొంభై ఏడు", letter: "97", word: "Ninety-seven" },
    { teluguWord: "తొంభై ఎనిమిది", letter: "98", word: "Ninety-eight" },
    { teluguWord: "తొంభై తొమ్మిది", letter: "99", word: "Ninety-nine" },
    { teluguWord: "వంద", letter: "100", word: "One hundred" },
  ];

  return (
    <div className="bg-cyan-100 py-10 px-5 lg:px-20">
      <h1 className="text-4xl font-comic text-center font-bold mb-10">
        Numbers
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
        {numbers.map(({ letter, word, teluguWord }) => (
          <div key={letter} className="flex flex-col items-center space-y-2">
            <button
              onClick={() => speak(letter)}
              className="text-5xl font-extrabold bg-pink-300  text-white py-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 w-full"
            >
              {letter}
            </button>
            <button
              onClick={() => speak(teluguWord)}
              className="text-xl font-extrabold bg-pink-300  text-white py-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 w-full"
            >
              {teluguWord}
            </button>
            <button
              onClick={() => speak(word)}
              className="text-xl font-semibold bg-white text-black py-2 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 w-full flex items-center justify-center space-x-2"
            >
              {/* <span>{icon}</span> */}
              <span>{word}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;
