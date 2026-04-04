import React from "react";
import meals from "../assets/pick-meals-image.png";
import delivery from "../assets/delivery-image.png";
import choose from "../assets/choose-image.png";

const Work = () => {
  let workInfo = [
    {
      image: meals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit exercitationem, nam architecto mollitia error ullam nulla",
    },
    {
      image: choose,
      title: "Choose How Often",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit exercitationem, ",
    },
    {
      image: delivery,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit exercitationem, nam architecto mollitia",
    },
  ];
  return (
    <div className="work-section-container" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it works!</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          tempore, beatae ab praesentium, pariatur fuga voluptatibus commodi
          error ipsam maxime sint molestiae ex eligendi veritatis modi
        </p>
      </div>
      <div className="work-section-bottom">
        {/* <div> */}
        {workInfo.map((data) => {
          return (
            <div className="work-section-info">
              <div>
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Work;
