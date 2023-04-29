import SecondaryButton from "@/components/Shareds/Button/SecondaryButton";
import Image from "next/image";
import Link from "next/link";

const SetMenus = () => {
  return (
    <section className=" max-w-5xl mx-auto">
      <div className="mb-4 flex justify-between items-end">
        <div className=" ">
          <h2 className="text-xl font-mono  text-orange-500">Roy Resturent</h2>
          <h1 className="text-3xl font-bold font-mono uppercase tracking-wide">
            Our Set Menues
          </h1>
          <div className="flex items-center  mt-2">
            <div className="w-2 h-2 rounded-full mr-2 bg-orange-500"></div>
            <div className="w-8 h-1 rounded-full  bg-orange-500"></div>
          </div>
        </div>
        <div>
          <Link href="/menu">
            <SecondaryButton value={"More Menus"} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="card">
          <div className="card-inner relative">
            <div className="card-front">
              <Image
                className=" w-full"
                src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                width={350}
                height={10}
                alt=""
              />
            </div>
            <div className="card-back h-full w-full bg-red-400 absolute top-0 right-0 rotate-180">
              <h1>This is nice card</h1>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            className="hover:scale-125  duration-700 w-full"
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1568716508386-cda5cdec6827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1550935770-d58cbf30c003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1616986037033-d3b999d2ff99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1591271956190-d084c9870334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1616895428703-598b1d6fe4f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SetMenus;
