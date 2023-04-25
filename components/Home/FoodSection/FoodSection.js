
import FoodCards from "./FoodCards";
import FoodSectionMain from "./FoodSectionMain";
import ZincButton from "@/components/Shareds/Button/ZincButton";

const FoodSection = () => {
  return (
    <section className="my-14">
      
      
      <div className="grid grid-cols-4  max-w-5xl mx-auto gap-4">
        <FoodSectionMain />
        <FoodCards />
      </div>
    </section>
  );
};

export default FoodSection;
