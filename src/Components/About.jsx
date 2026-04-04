import React from "react";
import backgroundImage from "../assets/about-background.png";
import dish from "../assets/about-background-image.png";
import { FaPlayCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={backgroundImage} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={dish} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero in,
          exercitationem, nam architecto mollitia error ullam nulla
        </p>

        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero in,
          exercitationem, nam architecto mollitia error ullam{" "}
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video"><FaPlayCircle /> Watch Videos</button>
        </div>
      </div>
    </div>
  );
};

export default About;
