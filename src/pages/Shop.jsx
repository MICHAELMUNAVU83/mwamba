import React from "react";
import ShopHome from "../components/ShopComponents/ShopHome";
import ShopItems from "../components/ShopComponents/ShopItems";
const Shop = ({
  setStoredToken,
  storedToken,
  setLoggedInUserId,
  loggedInUserId,
}) => {
  return (
    <div>
      <ShopHome />
      <ShopItems
        setStoredToken={setStoredToken}
        storedToken={storedToken}
        setLoggedInUserId={setLoggedInUserId}
        loggedInUserId={loggedInUserId}
      />
    </div>
  );
};

export default Shop;
