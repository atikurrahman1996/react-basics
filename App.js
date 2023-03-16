import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
