import React from "react";

const HeroBanner = () => {
  return (
    <section id="hero-banner">
      <div className="container min-vh-100">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-8">
            <div className="hero-info text-center">
              <h1>Welcome To Optics Eye Care</h1>
              <p className="mb-4">
                Your eyes are an important part of your health. Most people rely
                on their eyes to see and make sense of the world around them.
                But some eye diseases can lead to vision loss, so it is
                important to identify and treat eye diseases as early as
                possible.
              </p>
              <button
                type="button"
                className="btn btn-dark me-4 px-5 rounded-pill"
              >
                LearnMore
              </button>
              <button
                type="button"
                className="btn btn-outline-light px-5 rounded-pill my-3 my-md-0"
              >
                GetAppointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
