import React from "react";
import logo from "../assets/Logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section-wrapper">
      <div className="footer-section-one">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>

          <div className="footer-icons">
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-section-two">
          <div className="footer-section-col">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carriers</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>

          <div className="footer-section-col">
            <span>244-5333-268</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
          </div>

          <div className="footer-section-col">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
