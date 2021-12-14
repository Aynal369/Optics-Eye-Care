import React from "react";
import AllDoctors from "../Components/Doctors/AllDoctors";

const Doctors = () => {
  return (
    <main>
      <div className="container-fluid bg-primary py-5">
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">
              <span className="text-white">Doctors</span>
            </h2>
          </div>
        </div>
      </div>
      <AllDoctors />
    </main>
  );
};

export default Doctors;
