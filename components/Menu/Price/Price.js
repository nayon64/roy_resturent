import PrimaryButton from "@/components/Shareds/Button/PrimaryButton";
import MenuCard from "./MenuCard";

const Price = () => {
  return (
    <section className=" max-w-5xl mx-auto border-t-2 text-center">
      <div className="grid grid-cols-2 gap-4">
        <MenuCard title={"TASTY SODA (500 ML)"} />
        <MenuCard title={"ATAY BOTTLE (300 ML)"} />
        <MenuCard title={"BIO JUS (500 ML)"} />
        <MenuCard title={"LITTLE DRINK (300 ML)"} />
		  </div>
		  <PrimaryButton />
    </section>
  );
};

export default Price;
