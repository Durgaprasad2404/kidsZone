import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Home";
import Games from "./components/Games";
// import About from "./components/About";
import "./App.css";
import ClickByClick from "./components/clickByclick/ClickByClick";
import TicTacToe from "./components/tic tac tao/TicTacToe";
import ColorFill from "./components/colors/ColorFill";
import SpeakOut from "./components/Alpha&Numbers/AlphaNumbers";
import AlphabetGame from "./components/WhatIsNext/WhatNext";
import ContactUs from "./components/homeComponents/ContactUs";
import English from "./components/LettersSpeak/English";
import Numbers from "./components/LettersSpeak/Numbers";
import Hindi from "./components/LettersSpeak/Hindi";
import Telugu from "./components/LettersSpeak/Telugu";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* alphabets */}
          <Route path="/ENalphas" element={<English />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/telugu-varnamala" element={<Telugu />} />
          {/* alphabets */}
          {/* Games */}
          <Route path="/game1" element={<ClickByClick />} />
          <Route path="/game2" element={<TicTacToe />} />
          <Route path="/game3" element={<AlphabetGame />} />
          <Route path="/game4" element={<ColorFill />} />
          <Route path="/game5" element={<SpeakOut />} />
          {/* Games */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
