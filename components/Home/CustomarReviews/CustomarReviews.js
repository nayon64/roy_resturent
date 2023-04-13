import CustomarReviewCard from "./CustomarReviewCard";

const CustomarReviews = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="max-w-xl mx-auto text-center my-12">
        <h1 className="text-4xl font-bold font-mono">Our Customers Reviews</h1>
        <p>
          A restaurant is a business that prepares and serves food and drinks to
          customers meals are generally served
        </p>
      </div>
      <div className=" grid grid-cols-3 ">
        <div className="bg-yellow-500"></div>
        <div className="col-span-2  bg-red-400 ">
          <CustomarReviewCard />
        </div>
      </div>
    </section>
  );
};

export default CustomarReviews;
