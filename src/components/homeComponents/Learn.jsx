import React from "react";
import "./styles.css";
import side from "../../assets/side.png";
import telugu from "../../assets/telugu.png";
import hindi from "../../assets/hindi.png";
import number from "../../assets/numbers.png";
import english from "../../assets/english.jpg";
import { Link } from "react-router-dom";
function Learn() {
  return (
    <div className="bg-cyan-100 py-10">
      <h1 className="text-4xl text-center font-bold py-5 font-comic decoration-yellow-500 underline underline-offset-8">
        <span className="text-xl">&#127872;</span>Learn Our Alphabets
        <span className="text-xl">&#127872;</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto p-5">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src={side}
            alt="Kids learning alphabets"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="learn-box bg-white  shadow-md p-4 flex flex-col items-center text-center ">
            <div className="h-24 flex items-center justify-center mb-4">
              <img src={telugu} alt="Telugu" className="h-full" />
            </div>
            <h2 className="text-xl font-bold mt-2">Telugu</h2>
            <p className="text-gray-700 mt-2 font-comic">
              Telugu is a Dravidian language that is native to the Indian states
              of Andhra Pradesh and Telangana.
            </p>
            <Link to="/telugu-varnamala">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 font-comic rounded-full mt-4">
                Get Alphabets
              </button>
            </Link>
          </div>
          <div className="learn-box bg-white  shadow-md p-4 flex flex-col items-center text-center">
            <div className="h-24 flex items-center justify-center mb-4">
              <img src={english} alt="English" className="h-full" />
            </div>
            <h2 className="text-xl font-bold mt-2 font-comic">English</h2>
            <p className="text-gray-700 mt-2 font-comic">
              English is a widely spoken language around the world. It is the
              primary language of several countries.
            </p>
            <Link to="/ENalphas">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 font-comic px-4 rounded-full mt-4">
                Get Alphabets
              </button>
            </Link>
          </div>
          <div className="learn-box bg-white shadow-md p-4 flex flex-col items-center text-center">
            <div className="h-24 flex items-center justify-center mb-4">
              <img src={hindi} alt="Hindi" className="h-full" />
            </div>
            <h2 className="text-xl font-bold mt-2 font-comic">Hindi</h2>
            <p className="text-gray-700 mt-2 font-comic">
              Hindi is an Indo-Aryan language spoken chiefly in North India, and
              serves as the lingua franca of the Hindi Belt region.
            </p>
            <Link to="/hindi">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 font-comic px-4 rounded-full mt-4">
                Get Alphabets
              </button>
            </Link>
          </div>
          <div className="learn-box bg-white  shadow-md p-4 flex flex-col items-center text-center ">
            <div className="h-24 flex items-center justify-center mb-4">
              <img src={number} alt="Numbers" className="h-full" />
            </div>
            <h2 className="text-xl font-bold mt-2 font-comic">Numbers</h2>
            <p className="text-gray-700 mt-2 font-comic">
              A number is an arithmetic value used for representing the quantity
              and used in making calculations.
            </p>
            <Link to="numbers">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 font-comic px-4 rounded-full mt-4">
                Get Alphabets
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
