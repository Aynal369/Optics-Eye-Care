import React from "react";
import { Link, NavLink } from "react-router-dom";
import FooterColumns2 from "./FooterColumns";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Contact = [
  { name: "Phone:" },
  { name: "214-432-9565", fIcon: faCaretRight, link: "/" },
  { name: "Email:" },
  { name: "hello@opticseyecare.com", fIcon: faCaretRight, link: "/" },
  { name: "Address:" },
  {
    name: "2331 Lakeland Park Drive Marietta, GA 30067",
    fIcon: faCaretRight,
    link: "/",
  },
];
const About = [
  { name: "Doctors", link: "/", fIcon: faCaretRight },
  { name: "About", link: "/", fIcon: faCaretRight },
  { name: "Services", link: "/", fIcon: faCaretRight },
  { name: "Departments", link: "/", fIcon: faCaretRight },
  { name: "Contact", link: "/", fIcon: faCaretRight },
];
const Explore = [
  { name: "Blog", link: "/", fIcon: faCaretRight },
  { name: "Appointment", link: "/", fIcon: faCaretRight },
  { name: "Shop", link: "/", fIcon: faCaretRight },
  { name: "Portfolio", link: "/", fIcon: faCaretRight },
  { name: "Support", link: "/", fIcon: faCaretRight },
];
const Support = [
  { name: "Online Support", link: "/", fIcon: faCaretRight },
  { name: "Free Consultancy", link: "/", fIcon: faCaretRight },
  { name: "24/7 Service", link: "/", fIcon: faCaretRight },
  { name: "Make Call", link: "/", fIcon: faCaretRight },
  { name: "Contact Support", link: "/", fIcon: faCaretRight },
];
const OpeningHours = [
  { name: "Sun: 09:00 AM - 09:00 PM" },
  { name: "Mon: 09:00 AM - 09:00 PM" },
  { name: "Tue: 09:00 AM - 09:00 PM" },
  { name: "Wed: 09:00 AM - 09:00 PM" },
  { name: "Thu: 09:00 AM - 09:00 PM" },
];

const Footer = () => {
  return (
    <footer className="clear-both bg-dark mt-5">
      <div className="container-fluid">
        <div className="row">
          <FooterColumns2 key={1} Title="Contact" Items={Contact} />
          <FooterColumns2 key={2} Title="About Us" Items={About} />
          <FooterColumns2 key={3} Title="Explore" Items={Explore} />
          <FooterColumns2 key={4} Title="Support" Items={Support} />
          <FooterColumns2 key={5} Title="Opening Hours" Items={OpeningHours} />
        </div>
      </div>
      <hr className="text-secondary" />
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="text-sm-center">
          <small className="text-white">
            Copyright &copy; {new Date().getFullYear()}
            <Link
              to="https://opticseyecare.com/"
              style={{ textDecoration: "none" }}
            >
              <span> opticseyecare.com </span>
            </Link>
            . All Rights Reserved
          </small>
        </div>
        <ul className="list-unstyled d-flex">
          <li className="nav-item">
            <NavLink className="nav-link" to="/tos">
              <small>Terms Of Service</small>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/privacy-policy">
              <small>Privacy Policy</small>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
