import Image from "next/image";
import React from "react";

const SpecialMenuCard = ({ menu, customStyle }) => {
  const { title, picture, details, price } = menu;
  return (
    <div className="flex items-center my-3 select-none">
      <div className="bg-gray-200 inline-block  ">
        <Image
          className="p-2 object-cover w-20 h-20"
          src={picture}
          width={120}
          height={120}
          alt=""
        />
      </div>
      <div className="px-4 max-w-xs text-start">
        <h3 className="text-lg font-semibold text-orange-500 ">
          {title ? title : "No Title"}
        </h3>
        <p
          className={`text-xs text-gray-500 mt-2 ${
            customStyle ? "text-white" : "text-gray-500"
          }`}
        >
          {details ? details : "no details"}
        </p>
      </div>
      <div className="h-16 w-16 border border-gray-300 rounded-full flex justify-center items-center">
        <h3
          className={`text-xl font-semibold ${customStyle ? "text-white" : ""}`}
        >
          $<span>{price ? price : "00"}</span>
        </h3>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
