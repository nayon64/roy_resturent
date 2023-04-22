import ZincButton from "@/components/Shareds/Button/ZincButton";

const FoodSectionMain = () => {
	return (
    <div className="border border-zinc-500 shadow-lg rounded-lg p-5">
      <div className="">
        <h2 className="text-xl font-mono  text-orange-500">Roy Resturent</h2>
        <h1 className={`text-2xl font-bold mb-3 uppercase tracking-wide`}>
          Our Food Dish
        </h1>
        <div className="flex items-center  ">
          <div className="w-2 h-2 rounded-full mr-2 bg-orange-500"></div>
          <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
        </div>
      </div>
      <div className="-ml-2">
        <ZincButton value={"LUNCH MENU"} />
        <ZincButton value={"APPETIZER"} />
        <ZincButton value={"MAIN COURSE"} />
      </div>
    </div>
  );
};

export default FoodSectionMain;