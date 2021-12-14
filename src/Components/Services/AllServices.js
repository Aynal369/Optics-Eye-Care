import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const AllServices = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "/service-data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-5">
          <h2 className="text-center">
            Optics Eye Care
            <span className="text-primary border-bottom border-primary">
              Services
            </span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 mt-3">
          {items.map((data, index) => (
            <ServiceItem key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
