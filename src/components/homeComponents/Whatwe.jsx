import React from "react";
import whatEdu from "../../assets/whatEdu.png";
import whatfun from "../../assets/whatfun.png";
import whatskill from "../../assets/whatskill.png";

function Whatwe() {
  return (
    <div className="bg-cyan-200 p-5 md:p-10">
      <h1 className="text-4xl text-center font-bold mb-8 font-comic decoration-yellow-500 underline underline-offset-4">
        <span className="text-3xl">&#127872;</span>What are We?
        <span className="text-3xl">&#127872;</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-5 rounded-lg shadow-lg  hover:border-solid hover:border hover:-translate-y-2">
          <img src={whatEdu} alt="#education" className="w-28" />
          <h3 className="text-2xl font-semibold mb-4 font-comic">Education</h3>
          <p className="text-gray-700 font-comic">
            We offer a wide range of educational games that cover subjects like
            math, science, language arts, and more, tailored to different age
            groups and learning styles.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:border-solid hover:border hover:-translate-y-2">
          <img src={whatfun} alt="#education" className="w-28" />
          <h3 className="text-2xl font-semibold mb-4 font-comic">
            Fun Learning
          </h3>
          <p className="text-gray-700 font-comic">
            Our games are designed to make learning fun and engaging,
            encouraging kids to explore new topics and develop a love for
            learning.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg hover:border-solid hover:border hover:-translate-y-2">
          <img src={whatskill} alt="#education" className="w-28" />
          <h3 className="text-2xl font-semibold mb-4 font-comic">
            Skill Development
          </h3>
          <p className="text-gray-700 font-comic">
            Each game is crafted to help children build essential skills such as
            critical thinking, problem-solving, and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whatwe;
