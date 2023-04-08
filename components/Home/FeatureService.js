import { IconName } from "react-icons/io";
import Image from "next/image";

const FeatureService = () => {
  return (
    <section>
      <div className="bg-gray-300 shadow-md max-w-5xl mx-auto my-4 grid grid-cols-3">
        <div className="flex items-center p-5">
          <div className="mr-4">
            <Image src="/chef-hat.png" width={60} height={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Proffesional Chef</h4>
            <p className="text-sm">
              We try to provides fresh food for our customer.
            </p>
          </div>
        </div>
        <div className="flex items-center p-5">
          <div className="mr-4">
            <Image src="/dish.png" width={60} height={10} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Fresh Foods</h4>
            <p className="text-sm">
              We try to provides fresh food for our customer.
            </p>
          </div>
        </div>
        <div className="flex items-center p-5">
          <div className="mr-4">
            <Image src="/van.png" width={80} height={20} />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Home Delivery</h4>
            <p className="text-sm">
              We try to provides fresh food for our customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
