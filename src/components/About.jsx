import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="bg-cyan-100 h-screen">
      <Navbar />
      <h1 className="font-comic font-bold text-4xl text-center pt-12">About</h1>
      <p className="font-serif text-3xl hover:bg-red-600 p-6">
        Need to Research------
      </p>
    </div>
  );
}

export default About;
