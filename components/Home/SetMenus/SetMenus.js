import Image from "next/image";

const SetMenus = () => {
  return (
    <section className="mt-48 max-w-6xl mx-auto">
      <div className="max-w-md mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold font-mono">Our Set Menues</h1>
        <p className="mt-3">
          A restaurant is a business that prepares and serves food and drinks to
          customers meals are generally served
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700"
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700"
            src="https://images.unsplash.com/photo-1568716508386-cda5cdec6827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700"
            src="https://images.unsplash.com/photo-1550935770-d58cbf30c003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700"
            src="https://images.unsplash.com/photo-1616986037033-d3b999d2ff99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700"
            src="https://images.unsplash.com/photo-1591271956190-d084c9870334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={350}
            height={10}
            alt=""
          />
        </div>
        <div className="overflow-hidden ">
          <Image
            className="hover:scale-125  duration-700"
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
