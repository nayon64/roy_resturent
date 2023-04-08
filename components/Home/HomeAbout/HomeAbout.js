import Image from "next/image";


const HomeAbout = () => {
	return (
    <section className="grid grid-cols-2 max-w-6xl mx-auto mt-16 relative">
      <div className="md:px-16">
        <p className="text-orange-300">-since 2014-</p>
        <h1 className="text-3xl font-semibold my-3 tracking-wide ">
          Italian Pizza in the Hearth of the City
        </h1>
        <p className="text-sm font-semibold">
          Mea at novum platonem, sit ei dicta soluta suscipit. At sea viris
          accusamus, eum inani offendit appareat ad, est tota impetus minimum.
          Pro id vocent recteque intellegat.
        </p>
      </div>
      <div>
        <Image
          className=""
          src="https://images.unsplash.com/photo-1421622548261-c45bfe178854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          width={500}
          height={10}
        />
      </div>
      <div className="absolute w-full flex justify-center -bottom-36">
          <Image
            src="https://images.unsplash.com/photo-1609688621897-a9be66031528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={350}
            height={10}
          />
      </div>
    </section>
  );
};

export default HomeAbout;