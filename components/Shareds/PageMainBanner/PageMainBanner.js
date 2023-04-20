import Link from "next/link";


const PageMainBanner = ({title}) => {
	return (
    <section
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)`,
      }}
      className=" h-72 w-full object-cover bg-cover bg-center "
    >
      <div className="h-full w-full bg-black/60 pt-6 flex justify-center flex-col items-center text-white">
        <h3 className="text-orange-500 font-mono text-xl">Roy Resturent</h3>
        <h1 className="text-3xl font-bold my-2 uppercase tracking-wide">
          {title}
        </h1>
        <h4>
          <Link href="/" className="hover:text-orange-500 duration-500">HOME </Link>
          <span className="mx-2">&#62;</span>{" "}
          <span className="text-orange-500 uppercase">{title}</span>
        </h4>
      </div>
    </section>
  );
};

export default PageMainBanner;