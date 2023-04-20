
import FoodCards from "./FoodCards";
import FoodSectionMain from "./FoodSectionMain";
import ZincButton from "@/components/Shareds/Button/ZincButton";

const FoodSection = () => {
  return (
    <section>
      <div className="text-center mt-8">
        <h2 className="text-xl font-mono  text-orange-500">Roy Resturent</h2>
        <h1 className={`text-3xl font-bold mb-3`}>Our Food Dish</h1>
        <div className="flex items-center  justify-center">
          <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full mx-2 bg-orange-500"></div>
          <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
        </div>
        <div className="max-w-3xl mx-auto mt-4 hidden">
          <p className={`text-sm `}>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </p>
        </div>
      </div>
      <div className="mb-4 flex justify-center mt-2">
        <ZincButton value={"LUNCH MENU"} />
        <ZincButton value={"APPETIZER"} />
        <ZincButton value={"MAIN COURSE"} />
      </div>
      <div className="grid grid-cols-4 max-w-5xl mx-auto gap-4">
        <FoodSectionMain />
        <FoodCards />
      </div>
    </section>
  );
};

export default FoodSection;
