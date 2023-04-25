import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ChefCard from "./ChefCard";

const OurChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("chefs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChefs(data)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-4 my-20">
      <div className="my-4">
        <h2 className="text-xl font-mono  text-orange-500">Best Of Best</h2>
        <h1 className={`text-2xl font-bold mb-3 uppercase tracking-wide`}>
          Our Popular Chefs
        </h1>
        <div className="flex items-center  ">
          <div className="w-2 h-2 rounded-full mr-2 bg-orange-500"></div>
          <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
        </div>
      </div>

      <div>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            autoplay={{ delay: 5000}}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {chefs.map((chef) => (
              <SwiperSlide key={chef._id} >
                <ChefCard chef={chef} />
              </SwiperSlide>
            ))}
            <SwiperSlide >
              <ChefCard />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default OurChefs;
