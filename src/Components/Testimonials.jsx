import React from "react";
import profileImg from "../assets/john-doe-image.png";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="work-section-container" id="testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What they are saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          tempore, beatae ab praesentium, pariatur fuga voluptatibus commodi
          error ipsam maxime sint molestiae ex eligendi veritatis modi
        </p>
      </div>
      <div className="testimonials-section-bottom">
        <img src={profileImg} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          corporis beatae ipsam. Dolorem doloribus iure omnis odit eos, in
          repellendus
        </p>
        <div className="testimonials-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonials;
