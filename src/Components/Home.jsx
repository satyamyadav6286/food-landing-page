import React from "react";
import Navbar from "./Navbar";
import banner_background from "../assets/home-banner-background.png";
import banner_image from "../assets/home-banner-image.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-banner-image-container">
          <img src={banner_background} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FaArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={banner_image} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
