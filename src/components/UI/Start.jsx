import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/4.jpg";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to Join our <span className="highlights">Gym?</span>
            </h2>
            <p>
            <span className="highlights">ABOUT:</span>  A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds.
            </p>

            <button className="register__btn">Join</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
