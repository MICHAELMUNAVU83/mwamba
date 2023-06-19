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
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminHome from "./pages/AdminHome";

import "./App.css";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
  useEffect(() => {
    console.log(storedToken);

    fetch("http://127.0.0.1:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedInUserEmail(data.user.email);
       
      });
  }, [storedToken]);
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

        {storedToken ? (
          <Route
            path="/adminpage"
            element={<AdminHome setStoredToken={setStoredToken} loggedInUserEmail={loggedInUserEmail} />}
          />
        ) : (
          <Route
            path="/adminpage"
            element={<AdminLogin setStoredToken={setStoredToken} />}
          />
        )}

        <Route
          path="/adminsignup"
          element={<AdminSignup setStoredToken={setStoredToken} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
