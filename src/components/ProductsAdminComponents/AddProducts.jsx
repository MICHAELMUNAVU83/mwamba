import React, { useState } from "react";
import gif from "../images/gif.png";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    fetch("http://127.0.0.1:3000/api/v1/products", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        photo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product added successfully");
      });

    setName("");
    setPhoto("");
  };
  const uploadPhoto = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setPhoto(data.secure_url);
      });
  };

  return (
    <div className="bg-white h-[60%] w-[50%]  mx-auto">
      <form className="flex flex-col justify-evenly items-center h-[100%]">
        <div class="flex flex-col mx-auto w-[80%]">
          <label className="text-gray-900">Name</label>

          <input
            type="text"
            placeholder="Name"
            className="w-[100%] h-[50px] border-2 bg-gray-900 p-2 focus:outline-none  rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <img
          src={photo ? photo : gif}
          className="h-[200px] w-[200px] object-cover rounded-full"
          alt="photo"
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="uploadPhoto"
          onChange={(e) => uploadPhoto(e.target.files)}
        />
        <label
          htmlFor="uploadPhoto"
          className="w-[312px] h-[41px] flex justify-center items-center  bg-gray-900"
          style={{
            borderRadius: "8px",

            cursor: "pointer",
          }}
        >
          Upload Photo
        </label>
        <button
          className="w-[80%] h-[50px] border-2 bg-gray-900 p-2 focus:outline-none  rounded-md"
          type="button"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
