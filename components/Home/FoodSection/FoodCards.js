import FoodCard from "./FoodCard";


const FoodCards = () => {
	return (
    <div className="b col-span-3 grid grid-cols-3 gap-4">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
    </div>
  );
};

export default FoodCards;