import React from "react";
import BlogAdmin from "./BlogAdmin";
import ProductsAdmin from "./ProductsAdmin";
import { useNavigate } from "react-router-dom";

const AdminHome = ({ loggedInUserEmail, setStoredToken }) => {
  const navigate = useNavigate();
  return (
    <div>
      {loggedInUserEmail === "alvas@mwamba.gmail.com" && (
        <div>
          <ProductsAdmin setStoredToken={setStoredToken} />
        </div>
      )}
      {loggedInUserEmail === "blogger@mwamba.gmail.com" && (
        <div>
          <BlogAdmin setStoredToken={setStoredToken} />
        </div>
      )}
    </div>
  );
};

export default AdminHome;
