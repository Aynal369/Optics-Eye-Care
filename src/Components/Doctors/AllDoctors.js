import React from "react";
import Doctor from "./Doctor";

const doctorsData = [
  {
    id: 1,
    img: "https://i.ibb.co/pPt9025/doctors-1.jpg",
    title: "Dr. Mark G. Baxter",
    specialist: "Surgery Specialist",
  },
  {
    id: 2,
    img: "https://i.ibb.co/PhvYGnH/doctors-2.jpg",
    title: "Dr. Cheryl H. Mitcham",
    specialist: "Surgery Specialist",
  },
  {
    id: 3,
    img: "https://i.ibb.co/4tzh1hN/doctors-3.jpg",
    title: "Dr. John S. Carlucci",
    specialist: "Lasik Specialist",
  },
  {
    id: 4,
    img: "https://i.ibb.co/0rYnhf7/doctors-4.jpg",
    title: "Dr. Fern T. Frick",
    specialist: "Contact Lens Specialist",
  },
];

const AllDoctors = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">
              Optics Eye Care{" "}
              <span className="text-primary border-bottom border-primary">
                Specialist
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 mt-3">
          {doctorsData.map((data, index) => (
            <Doctor key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDoctors;
