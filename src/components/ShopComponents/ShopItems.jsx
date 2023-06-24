import React, { useState } from "react";
import shoppic from "../images/shop/shoppic.png";

const ShopItems = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
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

  const ProductModal = (
    <div>
      {showProductModal && (
        <div className="fixed poppins-regular bg-white shadow-xl h-[800px] my-auto w-[70%] inset-0 bg-opacity z-10 flex flex-col   mx-auto">
          <div className="flex justify-end w-full p-4">
            <button
              className=" bg-[#1F2024] text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setShowProductModal(false);
              }}
            >
              X
            </button>
          </div>

          <div className="w-[90%] flex justify-between px-8 mx-auto">
            <div className="w-[45%] flex flex-col justify-start">
              <img
                src={selectedProduct.picture}
                alt=""
                className="h-[550px] w-[100%] object-cover"
              />
              <p className="poppins-bold text-[#1F2024] text-5xl text-start ">
                {selectedProduct.name}
              </p>
            </div>

            <div className="w-[45%] flex flex-col justify-start">
              <p className="poppins-regular text-3xl underline uppercase">
                Categories Avaliable
              </p>
              <div className="flex flex-col justify-start">
                {selectedProduct.categories.map((category) => (
                  <div className="flex flex-col border-b-2 p-4 border-gray-600 justify-start">
                    <p className="poppins-bold text-[#1F2024] text-2xl text-start ">
                      {category.name}
                    </p>
                    <div className="flex flex-row gap-4 justify-start">
                      {category.sizes.map((size) => (
                        <div className="flex flex-col justify-start">
                          <p className="poppins-light border-2 border-gray-400 p-2 text-[#1F2024] text-xl text-start ">
                            {size}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div>
      <p className="poppins-bold text-[80px] text-[#1F2024] text-start py-8">
        Get Mwamba Merch
      </p>
      {ProductModal}
      <div className="flex justify-around w-[90%] mx-auto  p-8">
        {shop_items.map((item) => (
          <div
            className="bg-[#1F2024] w-[30%] hover:scale-105 transition-all duration-500 ease-out cursor-pointer pb-4 rounded-xl"
            key={item.id}
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-[100%] h-[300px] object-cover rounded-t-xl "
            />
            <div className="flex flex-col justify-center items-center pt-2">
              <h3 className="text-xl text-white poppins-regular">
                {item.name}
              </h3>
              <button
                className="bg-white poppins-regular my-4 hover:scale-105 transition-all duration-500 ease-in-out  text-[#1F2024] p-2"
                onClick={() => {
                  setShowProductModal(true);
                  setSelectedProduct(item);
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
