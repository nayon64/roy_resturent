import Image from "next/image";
import { FaRegStar,FaStar } from "react-icons/fa";


const FoodCard = () => {
	return (
    <div className="group relative ">
      <div className="w-full  h-full  absolute scale-0 group-hover:scale-100 group-hover:bg-orange-700/40 rounded-lg duration-500 flex justify-center items-center gap-1">
        <Image className="w-10 cursor-pointer" src="/wishlist-white.png" width={100} height={100} alt="wishlist"/>
        <Image className="w-10 cursor-pointer" src="/add-to-cart-white.png" width={100} height={100} alt="add to cart"/>
      </div>
      <div className=" p-2 border rounded-lg shadow  duration-700">
        <Image
          className="w-full object-cover rounded-t-md"
          src="https://images.unsplash.com/photo-1600289031464-74d374b64991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
          width={500}
          height={100}
          alt=""
        />
        <div className="mt-1">
          <h2 className="font-semibold font-mono uppercase text-orange-500">
            Pring Veg & Pasta
          </h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm font-semibold text-gray-600">
              Price: <span>$12</span>
            </p>
            <span className="flex items-center gap-1 text-sm text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;