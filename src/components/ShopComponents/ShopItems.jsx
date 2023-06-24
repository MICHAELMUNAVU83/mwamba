import React from "react";
import shoppic from "../images/shop/shoppic.png";

const ShopItems = () => {
  const shop_items = [
    {
      id: 1,
      name: "Home Jersey",
      picture: shoppic,
      categories: [
        {
          name: "kiddie",
          colors: ["red", "blue", "green"],
          sizes: ["small", "medium", "large"],
        },
        {
          name: "adult",
          colors: ["red", "blue", "green"],
          sizes: ["small", "medium", "large"],
        },
      ],
    },
    {
      id: 1,
      name: "Away Jersey",
      picture: shoppic,
      categories: [
        {
          name: "kiddie",
          colors: ["red", "blue", "green"],
          sizes: ["small", "medium", "large"],
        },
        {
          name: "adult",
          colors: ["red", "blue", "green"],
          sizes: ["small", "medium", "large"],
        },
      ],
    },
    {
      id: 1,
      name: "hat",
      picture: shoppic,
      categories: [
        {
          name: "kiddie",
          colors: ["red", "blue", "green"],
          sizes: ["small", "medium", "large"],
        },
        {
          name: "adult",
          colors: ["red", "blue", "green"],
          sizes: ["small", "medium", "large"],
        },
      ],
    },
  ];
  return (
    <div className="flex justify-between  p-8">
      {shop_items.map((item) => (
        <div className="bg-[#1F2024] w-1/3 pb-4 rounded-xl" key={item.id}>
          <img
            src={item.picture}
            alt={item.name}
            className="w-[100%] h-[300px] object-cover rounded-t-xl "
          />
          <div className="flex flex-col justify-center items-center pt-2">
            <h3 className="text-xl text-white poppins-regular">{item.name}</h3>
            <button className="bg-white poppins-regular my-4 hover:scale-105 transition-all duration-500 ease-in-out  text-[#1F2024] p-2">
              View Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopItems;
