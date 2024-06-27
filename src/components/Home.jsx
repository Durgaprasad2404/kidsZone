import React from "react";
import Navbar from "./Navbar";
import Whatwe from "./homeComponents/Whatwe";
import Learn from "./homeComponents/Learn";
import Gamelanding from "./homeComponents/Gamelanding";
import ContactUs from "./homeComponents/ContactUs";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="home-bgcontainer bg-fixed">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center px-4 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 mt-20 md:mt-32 font-comic">
            EDUCATION IS POWER
          </h1>
          <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto font-comic">
            Education is the most powerful weapon which you can use to change
            the world. Online education provides access to a wide range of
            courses and programs, often allowing students to learn from anywhere
            in the world.
          </p>
        </div>
      </div>
      <Whatwe />
      <Learn />
      <Gamelanding />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
