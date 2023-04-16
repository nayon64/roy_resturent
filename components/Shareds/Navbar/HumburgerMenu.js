import React from 'react';

const HumburgerMenu = ({ humburgerOpen }) => {
  return (
    <div>
      <div className="w-6 h-4  flex flex-col justify-between mx-2 cursor-pointer duration-1000 humbuger">
        <div
          className={`bg-black  duration-500 rounded-full  ${
            humburgerOpen ? "w-full rotate-45 translate-y-2" : "w-4/5"
          }`}
        ></div>
        <div
          className={`bg-black w-full duration-200 rounded-full ${
            humburgerOpen ? "scale-0 -translate-x-4 w-2/4" : "scale-100"
          }`}
        ></div>
        <div
          className={`bg-black  duration-500 rounded-full ${
            humburgerOpen ? "w-full -rotate-45 -translate-y-1.5" : "w-3/5"
          }`}
        ></div>
      </div>
      
    </div>
  );
};

export default HumburgerMenu;