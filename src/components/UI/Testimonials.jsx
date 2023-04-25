import React from "react";
import "../../styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/5.jpg";
import avatar02 from "../../assets/6.jpg";


export default function Testimonial() {
  return (
    <>
      <section id="blog">
        <div className="container sliders">
          <h2 className="section__title">Gym <span className="highlights">Blogs!</span></h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Dark Gym Blog</h4>
                <p>
                 A health club (also known as a fitness club, fitness center, health spa, weight room and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise.Regular physical activity is one of the most important things you can do for your health.
                </p>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </section>
    </>
  );
}
