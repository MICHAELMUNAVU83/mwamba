import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ImBin2 } from "react-icons/im";

const Cart = () => {
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
        setCartItems(data);
      });
  }, []);

  return (
    <div className="bg-[#1F2024] min-h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="flex f  h-[700px] justify-between bg-white w-[80%] mx-auto ">
        <div className="w-[70%]  flex flex-col h-[100%] p-4">
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
                  <th className="p-4">Category</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr className="poppins-regular">
                    <td className="p-4">{item.name}</td>
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
                      <ImBin2 className="text-[#1F2024] text-2xl cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[30%] h-[100%] bg-gray-300">gh jnmk</div>
      </div>
    </div>
  );
};

export default Cart;
