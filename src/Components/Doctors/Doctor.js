import React from "react";

const Doctor = ({ data }) => {
  const { img, title, specialist } = data;
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="card shadow h-100">
        <div className="cover-img">
          <img src={img} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text text-center text-muted">{specialist}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
