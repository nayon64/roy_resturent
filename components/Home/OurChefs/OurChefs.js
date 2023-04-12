import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ChefCard from "./ChefCard";

const OurChefs = () => {
	return (
    <section className="max-w-6xl mx-auto">
      <div className="max-w-xl my-12">
        <h1 className="text-4xl font-bold font-mono">Our Popular Chefs</h1>
        <p>
          A restaurant is a business that prepares and serves food and drinks to
          customers meals are generally served
        </p>
      </div>
      <div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            // loop={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[ FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
            <SwiperSlide>
              <ChefCard />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default OurChefs;
