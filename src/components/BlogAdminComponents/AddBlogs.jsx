import React, { useState } from "react";

const AddBlogs = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  const handleSubmit = (e) => {
    fetch("http://127.0.0.1:3000/api/v1/blogs", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        title,
        excerpt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Blog added successfully");
      });

    setAuthor("");
    setTitle("");
    setExcerpt("");
  };

  return (
    <div className="bg-white h-[60%] w-[50%]  mx-auto">
      <form className="flex flex-col justify-evenly items-center h-[100%]">
        <input
          type="text"
          placeholder="Title"
          className="w-[80%] h-[50px] border-2 bg-gray-900 p-2 focus:outline-none  rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="w-[80%] h-[50px] border-2 bg-gray-900 p-2 focus:outline-none  rounded-md"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="Excerpt"
          className="w-[80%] h-[200px] border-2 bg-gray-900 p-2 focus:outline-none  rounded-md"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <button
          className="w-[80%] h-[50px] border-2 bg-gray-900 p-2 focus:outline-none  rounded-md"
          type="button"
          onClick={handleSubmit}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogs;
