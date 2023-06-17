import React from "react";

const AdminLogin = () => {
  return (
    <div class="h-[100vh] adminloginbg bg-cover bg-no-repeat flex justify-center items-center">
      <div class="h-[500px] w-[500px] bg-[#1F2024]/80 text-white rounded-lg flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold mb-4">Login</h1>
        <div class="flex flex-col w-[80%]">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
                  />
                  <p>
                      
                      Already have an account? <a href="/admin/signup" class="text-blue-500">Signup</a>
                  </p>

          <button class="w-[100%] h-[50px] bg-white hover:scale-105 transition-all duration-500 ease-in-out text-black rounded-lg mt-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
