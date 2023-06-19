import React from "react";
import { useNavigate } from "react-router-dom";
import AddBlogs from "../components/BlogAdminComponents/AddBlogs";
const BlogAdmin = ({ setStoredToken }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center bg-[#1F2024] text-white">
      <button
        className="bg-gray-700 bg-opacity-75   w-[150px] hover:scale-105 duration-500 transition-all ease-in-out h-[40px] flex items-center justify-center my-4 text-white text-xl"
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
          navigate("/");
        }}
      >
        Log out
      </button>
      <AddBlogs />
    </div>
  );
};

export default BlogAdmin;
