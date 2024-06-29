import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const videos = [
  { src: "https://www.youtube.com/embed/3CbHF4OCOGA", language: "Telugu" },
  { src: "https://www.youtube.com/embed/3CbHF4OCOGA", language: "Telugu" },
  { src: "https://www.youtube.com/embed/3CbHF4OCOGA", language: "English" },
  { src: "https://www.youtube.com/embed/3CbHF4OCOGA", language: "English" },
  { src: "https://www.youtube.com/embed/3CbHF4OCOGA", language: "Hindi" },
  { src: "https://www.youtube.com/embed/3CbHF4OCOGA", language: "Hindi" },
];

function Stories() {
  const [filter, setFilter] = useState("All");

  const filteredVideos =
    filter === "All"
      ? videos
      : videos.filter((video) => video.language === filter);

  return (
    <>
      <div className="bg-cyan-300">
        <Navbar />
      </div>
      <div className=" p-4">
        <h1 className="text-4xl font-comic font-bold mb-6 text-center text-black">
          &#127872;STORIES&#127872;
        </h1>
        <div className="flex flex-wrap justify-end mb-6">
          {["All", "Telugu", "English", "Hindi"].map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-6 py-2 m-2 border rounded-full transition duration-300 ${
                filter === lang
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-blue-700 hover:bg-yellow-400 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {filteredVideos.map((video, index) => (
            <div key={index} className="w-full aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src={video.src}
                title="Video"
                loading="lazyloading"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Stories;
