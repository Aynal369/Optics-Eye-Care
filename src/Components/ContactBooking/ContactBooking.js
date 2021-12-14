import React from "react";
import { Link } from "react-router-dom";

const ContactBooking = () => {
  return (
    <section id="contact-booking" className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-5 mb-lg-0">
            <h2>Are You Looking For Eye Care Consultation?</h2>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <button type="button" className="btn btn-info px-4">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Book Appointment
                </Link>
              </button>
              <div className="ms-4">
                <h2>214-432-9565</h2>
                <p className="text-center">For Emergency Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;
