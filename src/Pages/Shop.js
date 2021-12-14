import React from "react";
import AllShop from "../Components/Shop/AllShop";

const Shop = () => {
  return (
    <main>
      <div className="container-fluid bg-primary py-5">
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">
              <span className="text-white">Shop</span>
            </h2>
          </div>
        </div>
      </div>
      <AllShop />
    </main>
  );
};

export default Shop;
