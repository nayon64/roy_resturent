import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => {
        setBannerData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const banners =()=>{
   return bannerData.map((d) => (
      <SwiperSlide key={d._id}>
        {/* <BannerCard bannerData={d} /> */}
        <div className="mt-6"
          style={{
            height: "100vh",
            backgroundSize: "cover",
            objectFit: "cover",
            width: "100%",
            backgroundImage: `url(${d?.picture})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment:"fixed",
          }}
        >
          <div
            className="bg-gradient-to-r from-black/0 via-black/50 to-black/0 flex justify-center items-center"
            style={{ height: "100vh" }}
          >
            <section className="text-center text-white">
              <p className="font-mono">{d?.tag}</p>
              <h1 className="text-5xl font-bold text-orange-300 my-3 ">
                {d?.title}
              </h1>
              <h5 className="font-mono mt-6">{d?.about}</h5>
              <button className="border border-orange-300 px-4 py-2 rounded-sm mt-4 font-mono">
                <a href="#">Book A Table</a>
              </button>
            </section>
          </div>
        </div>
      </SwiperSlide>
    ));
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000}}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {banners()}
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Banner;
