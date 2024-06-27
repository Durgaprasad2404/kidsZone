import React from "react";
import learnplay from "../../assets/learnplay.png";
import { Link } from "react-router-dom";
function Gamelanding() {
  return (
    <div className="bg-cyan-200 py-10 px-5 lg:px-20">
      <h1 className="text-4xl font-comic text-center font-bold mb-10 decoration-yellow-500 underline underline-offset-8">
        Learn &#127872; Play
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex-1 text-center lg:text-left lg:pr-10">
          <h4 className="text-2xl font-bold mb-4 font-comic">Our Vision</h4>
          <p className="text-lg text-gray-700 mb-6 font-comic">
            Our vision is to become the go-to platform for children’s
            educational games, inspiring a love for learning in kids around the
            world.
          </p>
          <Link to="/games">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full">
              Click to Play
            </button>
          </Link>
        </div>
        <div className="flex-1 mt-10 lg:mt-0 lg:pl-10">
          <img
            src={learnplay}
            alt="Learning and playing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Gamelanding;
