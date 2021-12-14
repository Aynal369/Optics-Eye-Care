import React from "react";
import ShopItem from "./ShopItem";

const shopData = [
  {
    id: 1,
    img: "https://i.ibb.co/6NHKRZx/1.png",
    name: "Adult Eye Glass",
    price: "$80.00",
  },
  {
    id: 2,
    img: "https://i.ibb.co/HPqJ6bx/2.png",
    name: "Contact Lenses",
    price: "$70.00",
  },
  {
    id: 3,
    img: "https://i.ibb.co/fvz067D/3.png",
    name: "Gucci Eye Glass",
    price: "$90.00",
  },
  {
    id: 4,
    img: "https://i.ibb.co/KLzxj2Y/4.png",
    name: "Contact Lenses",
    price: "$280.00",
  },
  {
    id: 5,
    img: "https://i.ibb.co/Y8MctbW/5.png",
    name: "Tahoma Eye Glass",
    price: "$300.00",
  },
  {
    id: 6,
    img: "https://i.ibb.co/cYBgMw8/6.png",
    name: "Stereo Eye Glass",
    price: "$270.00",
  },
];

const AllShop = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">
              Optics Eye Care <span className="text-primary">Shop</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 mt-3">
          {shopData.map((data, index) => (
            <ShopItem key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllShop;
