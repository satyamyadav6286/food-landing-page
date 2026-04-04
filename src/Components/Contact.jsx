import React from "react";

const Contact = () => {
  return (
    <div className="contact-section-wrapper" id="contact">
      <h1 className="primary-heading">Have Question In Mind</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-section-info">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;