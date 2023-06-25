import React, { useState, useEffect } from "react";
import away from "../images/shop/away.jpeg";
import home from "../images/shop/home.jpeg";
import hat from "../images/shop/hat.jpeg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const ShopItems = ({
  storedToken,
  setStoredToken,
  setLoggedInUserId,
  loggedInUserId,
}) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cart_items, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/cart_items")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const LoginFunction = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          setLoggedInUserId(data.user.id);
          setShowLoginModal(false);
          toast.success("Login successful", {
            position: "top-center",
            autoClose: 2000,

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Invalid credentials", {
            position: "top-center",
            autoClose: 2000,

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    setEmail("");

    setPassword("");
  };

  const SignUpFunction = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          setLoggedInUserId(data.user.id);
          setShowSignupModal(false);
          toast.success("Signup successful", {
            position: "top-center",
            autoClose: 2000,

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Email already exists", {
            position: "top-center",
            autoClose: 2000,

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    setEmail("");
    setUsername("");
    setPassword("");
  };

  const shop_items = [
    {
      id: 1,
      name: "Home Jersey",
      picture: home,
      categories: [
        {
          name: "kiddie",

          sizes: ["small", "medium", "large", "extra large"],
          price: 2000,
        },
        {
          name: "adult",

          sizes: ["small", "medium", "large", "extra large"],
          price: 4000,
        },
      ],
    },
    {
      id: 2,
      name: "Away Jersey",
      picture: away,
      categories: [
        {
          name: "kiddie",

          sizes: ["small", "medium", "large"],
          price: 500,
        },
        {
          name: "adult",

          sizes: ["small", "medium", "large", "extra large"],
          price: 1000,
        },
      ],
    },
    {
      id: 3,
      name: "hat",
      picture: hat,
      categories: [
        {
          name: "kiddie",

          sizes: ["small", "medium", "large", "extra large"],
          price: 3000,
        },
        {
          name: "adult",

          sizes: ["small", "medium", "large", "extra large"],
          price: 5000,
        },
      ],
    },
  ];

  const addToCart = (e) => {
    e.preventDefault();
    if (
      selectedCategory === "" ||
      selectedSize === "" ||
      selectedImage === ""
    ) {
      toast.error("Please select category and size", {
        position: "top-center",
        autoClose: 2000,

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      cart_items.find(
        (item) =>
          item.name === selectedProduct.name &&
          item.user.id === Number(loggedInUserId) &&
          item.category === selectedCategory &&
          item.size === selectedSize
      )
    ) {
      toast.error("Item already in cart", {
        position: "top-center",
        autoClose: 2000,

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        setShowProductModal(false);
      }, 2000);
      setSelectedCategory("");
      setSelectedSize("");
    } else {
      fetch("http://localhost:3000/api/v1/cart_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: selectedProduct.name,
          category: selectedCategory,
          size: selectedSize,
          price: selectedPrice,
          user_id: loggedInUserId,
          picture: selectedImage,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Added to cart", {
            position: "top-center",
            autoClose: 2000,

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setSelectedCategory("");
          setSelectedSize("");
          setTimeout(() => {
            setShowProductModal(false);
          }, 2000);
          setTimeout(() => {
            toast.info("Redirecting to cart", {
              position: "top-center",
              autoClose: 2000,

              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }, 3000);
          setTimeout(() => {
            navigate("/cart");
          }, 6000);
        })

        .catch((err) => {
          alert("Error adding to cart");
        });
    }
  };

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
            <div className="w-[48%] flex flex-col">
              <div className="flex justify-center items-center">
                <div
                  className="bg-[#1F2024] p-2 cursor-pointer"
                  onClick={swipeBack}
                >
                  <MdArrowBackIosNew className="text-white" />
                </div>

                <Swiper
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="flex justify-center  h-[550px] w-[90%] items-center swiper-container"
                >
                  {selectedProduct.rotating_images.map((photo) => (
                    <SwiperSlide
                      key={photo}
                      className="bg-cover cursor-pointer bg-no-repeat h-[550px] text-black  bg-center  "
                    >
                      <img
                        src={photo}
                        alt={selectedProduct.name}
                        className="w-[100%] h-[100%]  object-fill"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="bg-[#1F2024] p-2 cursor-pointer"
                  onClick={swipe}
                >
                  <MdArrowForwardIos className="text-white" />
                </div>
              </div>
              <p className="poppins-bold text-[#1F2024] text-5xl ml-8 text-start ">
                {selectedProduct.name}
              </p>
            </div>

            <div className="w-[45%] flex flex-col justify-start">
              <p className="poppins-regular text-gray-700 text-3xl ">
                Categories Avaliable
              </p>
              <div className="flex flex-col justify-start">
                {selectedProduct.categories.map((category) => (
                  <div className="flex flex-col border-b-2 p-4 border-gray-600 justify-start">
                    <p className="poppins-bold uppercase text-[#1F2024] text-2xl text-start ">
                      {category.name}
                    </p>
                    <p>Sizes available: </p>
                    <div className="flex flex-row gap-4 justify-start">
                      {category.sizes.map((size) => (
                        <div className="flex flex-col justify-start">
                          <p className="poppins-light border-2 border-gray-400  text-sm p-2 hover:bg-gray-400 hover:text-white cursor-pointer text-[#1F2024]  text-start ">
                            {size}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="poppins-bold my-2 text-[#1F2024] text-2xl text-start ">
                      Ksh. {category.price}
                    </p>
                  </div>
                ))}
              </div>

              <p className="poppins-regular text-gray-700 text-3xl ">
                Select And Add to Cart
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-start">
                  <p className="poppins-bold uppercase text-[#1F2024] text-sm text-start ">
                    Category
                  </p>
                  <select
                    className="poppins-light  text-sm p-2 bg-gray-500 focus:outline-none hover:outline-none text-white  cursor-pointer  text-start "
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedPrice(
                        selectedProduct.categories.find(
                          (category) => category.name === e.target.value
                        ).price
                      );
                    }}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="kiddie">Kiddie</option>
                    <option value="adult">Adult</option>
                  </select>
                </div>

                <div className="flex flex-col justify-start">
                  <p className="poppins-bold uppercase text-[#1F2024] text-sm text-start ">
                    Size
                  </p>
                  <select
                    className="poppins-light  text-sm p-2 bg-gray-500 focus:outline-none hover:outline-none text-white  cursor-pointer  text-start "
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select Size
                    </option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra large">Extra Large</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <button
                  className="bg-[#1F2024] w-[40%] mxauto  hover:scale-105 transition-all duration-500 ease-in-out text-white px-4 py-2 rounded-md my-4"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const LoginModal = showLoginModal && (
    <div className="fixed poppins-regular bg-white shadow-xl h-[500px] my-auto w-[50%] inset-0 bg-opacity z-10 flex flex-col justify-center items-center   mx-auto">
      <div className="flex justify-end w-full p-4">
        <button
          className=" bg-[#1F2024] text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setShowLoginModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="w-[90%] flex flex-col  justify-center items-center px-8 mx-auto">
        <h1 class="text-4xl font-bold mb-4">Login</h1>
        <div class="flex flex-col w-[80%]">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center flex items-center my-2 justify-center">
            <p>Don't have an account?</p>
            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setShowLoginModal(false);
                setShowSignupModal(true);
              }}
            >
              Sign Up
            </p>
          </div>

          <button
            class=" mx-auto  shadow-xl shadow-gray-200 h-[50px] bg-[#1F2024] hover:scale-105 transition-all duration-500 w-[50%] ease-in-out text-white rounded-lg mt-4"
            onClick={LoginFunction}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );

  const SignUpModal = showSignupModal && (
    <div className="fixed poppins-regular bg-white shadow-xl h-[500px] my-auto w-[50%] inset-0 bg-opacity z-10 flex flex-col justify-center items-center   mx-auto">
      <div className="flex justify-end w-full p-4">
        <button
          className=" bg-[#1F2024] text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setShowSignupModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="w-[90%] flex flex-col  justify-center items-center px-8 mx-auto">
        <h1 class="text-4xl font-bold mb-4">Sign Up</h1>
        <div class="flex flex-col w-[80%]">
          <label>Username</label>
          <input
            type="text"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            class="w-[100%] h-[50px] text-white focus:outline-none placeholder-white bg-[#1F2024] rounded-lg px-4"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center flex items-center my-2 justify-center">
            <p>Already have an account? </p>
            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setShowSignupModal(false);
                setShowLoginModal(true);
              }}
            >
              Login here
            </p>
          </div>

          <button
            class=" mx-auto  shadow-xl shadow-gray-200 h-[50px] bg-[#1F2024] hover:scale-105 transition-all duration-500 w-[50%] ease-in-out text-white rounded-lg mt-4"
            onClick={SignUpFunction}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <p className="poppins-bold text-[80px] text-[#1F2024] text-start py-8">
        Get Mwamba Merch
      </p>
      {ProductModal}

      {LoginModal}
      {SignUpModal}
      <div className="flex justify-around w-[90%] mx-auto  p-8">
        {products.map((item) => (
          <div
            className="bg-[#1F2024] w-[30%] hover:scale-105 transition-all duration-500 ease-out cursor-pointer pb-4 rounded-xl"
            key={item.name}
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-[100%] h-[300px] rounded-t-xl object-fill"
            />
            <div className="flex flex-col justify-center items-center pt-2">
              <h3 className="text-xl text-white poppins-regular">
                {item.name}
              </h3>
              <button
                className="bg-white poppins-regular my-4 hover:scale-105 transition-all duration-500 ease-in-out  text-[#1F2024] p-2"
                onClick={() => {
                  if (storedToken) {
                    setShowProductModal(true);
                    setSelectedProduct(item);
                    setSelectedImage(item.photo);
                  } else {
                    toast.error("Please login to view product", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });

                    setTimeout(() => {
                      setShowLoginModal(true);
                    }, 3000);
                  }
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopItems;
