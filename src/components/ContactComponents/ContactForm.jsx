import React, { useEffect, useState, useRef } from "react";
import aboutpic from "../images/about/aboutpic.png";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Email not sent ,Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      emailjs
        .sendForm(
          "service_abzd5cf",
          "template_ncd937d",
          form.current,
          "cea2TAaV7fu3Aqtyp"
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
              toast.success("Email Sent , I will get back to you soon", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div class="bg-white poppins-regular flex flex-col-reverse md:flex-row justify-between">
      <div className="md:w-[50%] w-[100%] md:text-xl mx-auto uppercase flex flex-col justify-center p-24 ">
        <h2 class="poppins-regular mb-2 text-4xl">
          Fill in the Form Below to Send Us An Email
        </h2>
        <form onSubmit={sendEmail} ref={form}>
          <div class="flex justify-between items-center w-[100%]">
            <div class="w-[48%] flex flex-col">
              <h2 className="text-[black] poppins-regular mb-2">Name</h2>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-[100%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="w-[48%] flex flex-col">
              <h2 className="text-[black] poppins-regular mb-2">
                Email address
              </h2>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-[100%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <h2 className="text-[black] poppins-regular my-2">Subject </h2>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            className="w-[100%] h-[50px] focus:outline-none text-white bg-[#1F2024] rounded-lg px-4"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <h2 className="text-[black] poppins-regular mb-2">Message</h2>
          <textarea
            name="message"
            placeholder="Enter your message"
            id="message"
            cols="30"
            rows="10"
            className="bg-[#181822] text-[#fff] w-full  outline-none py-1 px-4 rounded-md shadow-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-[100%] h-[57px] shadow-xl mt-8 uppercase font-bold shadow-gray-400 rounded-lg px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          >
            Send Email
          </button>
        </form>
        <ToastContainer />
      </div>

      <div class="md:w-[40%] w-[100%] flex flex-col justify-center items-center ">
        <img src={aboutpic} alt="" class="w-[100%] h-[80vh] object-cover" />
        <p className="text-7xl py-4 poppins-bold font-bold">Talk to Us</p>
      </div>
    </div>
  );
};

export default ContactForm;
