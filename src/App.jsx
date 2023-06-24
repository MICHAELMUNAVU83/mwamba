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
import ScrollToTop from "./components/ScrollToTop";
import Team from "./pages/Team";
import AdminPage from "./pages/AdminPage";
import Shop from "./pages/Shop";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/kulabu" element={<Kulabu />} />
        <Route path="/kababeri" element={<Kababeri />} />
        <Route path="/news" element={<News />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
