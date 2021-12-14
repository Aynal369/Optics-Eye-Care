import React from "react";
import ContactBooking from "../Components/ContactBooking/ContactBooking";
import AllDoctors from "../Components/Doctors/AllDoctors";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import AllServices from "../Components/Services/AllServices";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <AllServices />
      <ContactBooking />
      <AllDoctors />
    </main>
  );
};

export default Home;
