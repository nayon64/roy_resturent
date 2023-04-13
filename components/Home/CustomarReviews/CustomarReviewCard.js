import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination,Autoplay } from "swiper";
import Image from "next/image";


const CustomarReviewCard = () => {

  const [people, setPeople] = useState([])
  useEffect(() => {
    fetch("/people.json").then(res => res.json()).then(data => {
      setPeople(data)
    }).catch(err => {
      console.error(err)
    })
  },[])
console.log(people);

	return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{delay:5000}}
        modules={[Autoplay ,Pagination]}
        className=""
      >
        {people.map((p) => (
          <SwiperSlide key={p._id} >
            <div className="px-4 py-8 text-center">
              <Image
                className="rounded-full h-20 w-20 mx-auto"
                src={p.picture}
                width={100}
                height={100}
                alt=""
              />
              <div>
                <h1 className="my-4 text-2xl font-mono font-semibold">
                  {p.name}
                </h1>
                <p>
                  {p.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default CustomarReviewCard;