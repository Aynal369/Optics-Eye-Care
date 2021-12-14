import {
  faClock,
  faMapMarkedAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../Images/logo.png";

const TopBar = () => {
  return (
    <section id="top-bar" style={{ backgroundColor: "#D6FFFA" }}>
      <div className="container">
        <div className="d-flex justify-content-between py-2">
          <div className="logo">
            <img src={logo} alt="logo" height="30px" width="250px" />
          </div>
          <div className="info d-flex">
            <div className="d-flex me-5">
              <div className="me-2">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <p>214-432-9565</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <p>4286 Ersel Street Dallas</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
