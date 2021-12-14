import React from "react";

const ShopItem = ({ data }) => {
  const { img, name, price } = data;
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card shadow h-100">
        <img src={img} className="card-img-top" alt={name} />

        <div className="card-body">
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text text-center text-muted">Price:- {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
