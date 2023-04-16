import SpecialMenuCard from "@/components/Home/SpeacialMenus/SpecialMenuCard";
import { useEffect, useState } from "react";


const LunchMenu = ({ sectionTitle, customStyle }) => {
  const [count, setCount] = useState(customStyle?2:1);
  const [menus, setMenus] = useState([]);
  const [menusTwo, setMenusTwo] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 4) {
        setCount(1);
      } else {
        setCount(count + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    fetch("specialMenus.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((err) => console.error(err));
    fetch("lunchMenuTwo.json")
      .then((res) => res.json())
      .then((data) => {
        setMenusTwo(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const lunchMenuOne = menus.map((m, i) => (
    <SpecialMenuCard key={i} menu={m} customStyle={customStyle} />
  ));
  const lunchMenuTwo = menusTwo.map((m, i) => (
    <SpecialMenuCard key={i} menu={m} customStyle={customStyle} />
  ));

  return (
    <section
      className={`text-center py-16 ${customStyle ? " bg-zinc-900" : ""}`}
    >
      <h2 className="text-xl font-mono  text-orange-500">Roy Resturent</h2>
      <h1
        className={`text-3xl font-bold mt-2 mb-4 ${
          customStyle ? "text-white" : ""
        }`}
      >
        {sectionTitle}
      </h1>
      <div className="flex items-center  justify-center">
        <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
        <div className="w-2 h-2 rounded-full mx-2 bg-orange-500"></div>
        <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
      </div>
      <div className="max-w-3xl mx-auto mt-4">
        <p className={`text-sm ${customStyle ? "text-white" : ""}`}>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit.
        </p>
      </div>
      {/* <h1 className="text-2xl text-center my-12">{newValue}</h1> */}
      <div className="  max-w-5xl mx-auto mt-12">
        <div
          className={`grid grid-cols-2 ${
            count == 1 ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {lunchMenuOne}
        </div>
        <div
          className={` grid grid-cols-2 ${
            count == 2 ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {lunchMenuTwo}
        </div>
        <div
          className={`grid grid-cols-2 ${
            count == 3 ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {lunchMenuOne}
        </div>
        <div
          className={`grid grid-cols-2 ${
            count == 4 ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          {lunchMenuTwo}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div
          onClick={() => setCount(1)}
          className={`w-2 h-2 rounded-full mx-2  border cursor-pointer  ${
            count == 1 ? "bg-orange-500 border-orange-400" : "border-gray-500"
          }`}
        ></div>
        <div
          onClick={() => setCount(2)}
          className={`w-2 h-2 rounded-full mx-2  border cursor-pointer  ${
            count == 2 ? "bg-orange-500 border-orange-400" : "border-gray-500"
          }`}
        ></div>
        <div
          onClick={() => setCount(3)}
          className={`w-2 h-2 rounded-full mx-2  border cursor-pointer  ${
            count == 3 ? "bg-orange-500 border-orange-400" : "border-gray-500"
          }`}
        ></div>
        <div
          onClick={() => setCount(4)}
          className={`w-2 h-2 rounded-full mx-2  border cursor-pointer ${
            count == 4 ? "bg-orange-500 border-orange-400" : "border-gray-500"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default LunchMenu;