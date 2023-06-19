import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setStoredToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          navigate("/adminpage");
        } else {
          alert("Invalid credentials");
        }
      });

    setEmail("");

    setPassword("");
  };

  return (
    <div class="h-[100vh] adminloginbg bg-cover bg-no-repeat flex justify-center items-center">
      <div class="h-[500px] w-[500px] bg-[#1F2024]/80 text-white rounded-lg flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold mb-4">Login</h1>
        <div class="flex flex-col w-[80%]">
          <label>Email</label>
          <input
            type="text"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            Already have an account?{" "}
            <a class="text-blue-500" onClick={() => navigate("/adminsignup")}>
              Signup
            </a>
          </p>

          <button
            class="w-[100%] h-[50px] bg-white hover:scale-105 transition-all duration-500 ease-in-out text-black rounded-lg mt-4"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
