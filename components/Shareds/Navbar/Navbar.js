import Link from "next/link";
import { useState } from "react";
import HumburgerMenu from "./HumburgerMenu";

const Navbar = () => {
  const [humburgerOpen, setHumburgerOpen] = useState(false);

  console.log(humburgerOpen);
  const navMenus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  const menus = navMenus.map((m, i) => (
    <Link onClick={() => setHumburgerOpen(false)} key={i} href={m.path}>
      {m.name}
    </Link>
  ));
  const handleBlur = (event) => {
    console.log("event.relatedTarget", event.relatedTarget);
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (humburgerOpen) {
        setHumburgerOpen(false);
      }
    }
  };

  return (
    <nav className=" fixed z-40 w-full pl-8 ">
      <div className="flex justify-between ">
        <div className=" h-20 w-20 logo bg-orange-300 text-white rounded-ee-xl">
          <Link className="" href="/">
            Roy Resturent
          </Link>
        </div>
        <div className="bg-white h-12 flex items-center">
          {menus}
          <div
            onClick={() => setHumburgerOpen(!humburgerOpen)}
            className="relative"
            onBlur={handleBlur}
          >
            <HumburgerMenu humburgerOpen={humburgerOpen} />
          </div>
          <div className={` p-4 flex flex-col bg-white absolute top-14 right-2 duration-300 ${  humburgerOpen ? "scale-100" : "scale-0" }`} >
            <button>SignIn</button>
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
