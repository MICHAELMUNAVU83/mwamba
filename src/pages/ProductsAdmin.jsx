import React from "react";
import { useNavigate } from "react-router-dom";
const ProductsAdmin = ({ setStoredToken }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
          navigate("/");
        }}
      >
        Log out
      </button>
      ProductsAdmin
    </div>
  );
};

export default ProductsAdmin;
