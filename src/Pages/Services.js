import React from "react";
import AllServices from "../Components/Services/AllServices";

const Services = () => {
  return (
    <main>
      <div className="container-fluid bg-primary py-5">
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">
              <span className="text-white">Services</span>
            </h2>
          </div>
        </div>
      </div>
      <AllServices />
    </main>
  );
};

export default Services;
