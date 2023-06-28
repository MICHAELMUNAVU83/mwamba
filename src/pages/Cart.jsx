import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ImBin2 } from "react-icons/im";

const Cart = ({ loggedInUserId }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [selectedCart, setSelectedCart] = useState({});

  const addQuantity = (id, quantity) => {
    fetch(`http://localhost:3000/api/v1/cart_items/${id}`, {
      method: "PATCH",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity + 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Quantity added", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setCartItems(data);
      });
  };

  const reduceQuantity = (id, quantity) => {
    fetch(`http://localhost:3000/api/v1/cart_items/${id}`, {
      method: "PATCH",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity - 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Quantity reduced", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setCartItems(data);
      });
  };

  const removeFromCart = (id) => {
    fetch(`http://localhost:3000/api/v1/cart_items/${id}`, {
      method: "DELETE",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item removed from cart", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          setCartItems(data);
        }, 1000);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.filter((item) => item.user.id === loggedInUserId));
      });
  }, []);

  return (
    <div className="bg-[#1F2024] min-h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="flex md:flex-row flex-col h-[700px] overflow-y-scroll  justify-between bg-white w-[80%] mx-auto ">
        <div className="md:w-[70%] w-[100%]  flex flex-col h-[100%] p-4">
          <div className="flex justify-between items-center">
            <p className="text-[#1F2024] text-2xl poppins-bold">Cart</p>
            <p className="text-[#1F2024] text-2xl poppins-bold">
              {cartItems.length} items
            </p>
          </div>
          <p className="bg-[#1F2024]  my-2 h-[2px] w-[100%]" />
          <div>
            <table className="w-[100%] text-center">
              <thead>
                <tr className="poppins-bold">
                  <th className="p-4">Product</th>
                  <th className="p-4">Image </th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(
                  (item) =>
                    item.user.id === loggedInUserId && (
                      <tr className="poppins-regular">
                        <td className="p-4">{item.name}</td>
                        <td className="p-4">
                          <img
                            src={item.picture}
                            alt="product"
                            className="h-[50px] rounded-lg w-[50px] object-cover"
                          />
                        </td>
                        <td className="p-4">{item.category}</td>
                        <td className="p-4">{item.size}</td>
                        <td className="p-4">{item.price}</td>
                        <td className="p-4 flex gap-2 justify-center items-center">
                          <button
                            className="bg-[#1F2024] text-white  h-8 w-8 rounded-lg"
                            onClick={() => {
                              if (item.quantity > 1) {
                                reduceQuantity(item.id, item.quantity);
                              } else {
                                alert("Quantity cannot be less than 1");
                              }
                            }}
                          >
                            -
                          </button>

                          {item.quantity}
                          <button
                            className="bg-[#1F2024] text-white  h-8 w-8 rounded-lg"
                            onClick={() => {
                              addQuantity(item.id, item.quantity);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td className="p-4">
                          {(item.price * item.quantity).toLocaleString()} Ksh
                        </td>
                        <td className="p-4 flex justify-center items-center">
                          <ImBin2
                            className="text-[#1F2024] text-2xl cursor-pointer"
                            onClick={() => {
                              removeFromCart(item.id);
                            }}
                          />
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:w-[30%] w-[100%]  p-4 md:h-[100%] h-[200px] flex flex-col justify-between  bg-gray-300">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-[#1F2024] text-2xl poppins-bold">Cart</p>
              <p className="text-[#1F2024] text-2xl poppins-bold">
                {cartItems.length} items
              </p>
            </div>
            <p className="bg-[#1F2024]   h-[2px] w-[100%]" />
          </div>
          <div>
            <p className="h-[2px] w-[100%] bg-[#1F2024]" />
            <div className="flex justify-between items-center">
              <p className="text-[#1F2024] text-2xl poppins-bold">Total</p>
              <p className="text-[#1F2024] text-2xl poppins-bold">
                {cartItems
                  .reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                  .toLocaleString()}{" "}
                Ksh
              </p>
            </div>
            <button className="bg-[#1F2024] w-[100%] shadow-xl shadow-white my-4 hover:scale-105 transition-all duration-500 ease-in-out text-white py-2 px-4 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
