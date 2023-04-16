import Image from "next/image";
import React from "react";

const SpecialMenuCard = ({ menu }) => {
	const { title, picture, details, price } = menu;
  return (
    <div className="flex items-center my-3">
      <div className="bg-gray-200 inline-block">
        <Image className="p-2 " src={picture} width={90} height={100} alt="" />
      </div>
      <div className="px-4 max-w-xs">
        <h3 className="text-lg font-semibold text-orange-500 ">{title?title:"No Title"}</h3>
        <p className="text-xs text-gray-500 mt-2">
          {details?details:"no details"}
        </p>
      </div>
      <div className="h-16 w-16 border border-gray-300 rounded-full flex justify-center items-center">
        <h3 className="text-xl font-semibold">
				  $<span>{ price?price:"00"}</span>
        </h3>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
