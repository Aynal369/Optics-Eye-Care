import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Doctors from "./Pages/Doctors";
import Shop from "./Pages/Shop";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import ServiceDetails from "./Components/Services/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/shop"
            element={
              <RequireAuth>
                <Shop />
              </RequireAuth>
            }
          />
          <Route
            path="/doctors"
            element={
              <RequireAuth>
                <Doctors />
              </RequireAuth>
            }
          />
          <Route
            path="/services"
            element={
              <RequireAuth>
                <Services />
              </RequireAuth>
            }
          />
          <Route
            path="/service/:serviceId"
            element={
              <RequireAuth>
                <ServiceDetails />
              </RequireAuth>
            }
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
