import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Kulabu from "./pages/Kulabu";
import Kababeri from "./pages/Kababeri";
import News from "./pages/News";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kulabu" element={<Kulabu />} />
        <Route path="/kababeri" element={<Kababeri />} />
        <Route path="/news" element={<News/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
