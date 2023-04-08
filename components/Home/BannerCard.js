import Link from "next/link";
import { SwiperSlide } from "swiper/react";


const BannerCard = ({ bannerData }) => {
  console.log(bannerData);
  // const bannerData = {
  //   _id: "642fdf06969e7b359796b815",
  //   index: 0,
  //   picture:
  //     "https://images.unsplash.com/photo-1596450514735-111a2fe02935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80",
  //   company: "QNEKT",
  //   about: "Mistaken Idea of Denouncing Pleasure and Praising Pain.",
  //   tag: "Wellcome to Roy",
  //   title: "Restaurant & Wine Bar",
  // };
  console.log(bannerData.picture);

  return (
    <div
      style={{
        height: "100vh",
        backgroundSize: "cover",
        objectFit: "cover",
        width: "100%",
        backgroundImage: `url(${bannerData?.picture})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="bg-gradient-to-r from-black/0 via-black/50 to-black/0 flex justify-center items-center"
        style={{ height: "100vh" }}
      >
        <section className="text-center text-white">
          <p className="font-mono">{bannerData?.tag}</p>
          <h1 className="text-5xl font-bold text-orange-300 my-3 ">
            {bannerData?.title}
          </h1>
          <h5 className="font-mono mt-6">{bannerData?.about}</h5>
          <button className="border border-orange-300 px-4 py-2 rounded-sm mt-4 font-mono">
            <a href="#">Book A Table</a>
          </button>
        </section>
      </div>
    </div>
  );
};

export default BannerCard;
