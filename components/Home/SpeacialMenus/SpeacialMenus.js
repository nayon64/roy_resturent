import React, { useEffect, useState } from "react";
import SpecialMenuCard from "./SpecialMenuCard";
import Image from "next/image";
import Link from "next/link";

const SpeacialMenus = () => {

	const [specialMenus, setSpecialMenus] = useState([])
	useEffect(() => {
    fetch("specialMenus.json").then(res => res.json()).then(data => {
      const newData=data.slice(0,3)
			setSpecialMenus(newData)
		}).catch(err=>console.error(err))
	},[])



  return (
    <section className="grid grid-cols-2 max-w-5xl mx-auto mt-12">
      <div className="my-auto">
        <p className="text-xl text-orange-500 font-mono">From The Menu</p>
        <h2 className="text-3xl font-bold tracking-wide">SPECIAL OFFERS</h2>
        <div className="flex items-center my-4">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-8 h-1 rounded-full ml-2 bg-orange-500"></div>
        </div>
        <div>
          {specialMenus.map((m) => (
            <SpecialMenuCard key={m._id} menu={m} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 ml-6 py-2 relative ">
        <Image
          className="p-2 "
          src="https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          width={600}
          height={100}
          alt=""
        />
        <Image
          className="p-2 "
          src="https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          width={600}
          height={100}
          alt=""
        />
        <Image
          className="p-2 "
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          width={600}
          height={100}
          alt=""
        />
        <Image
          className="p-2 "
          src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          width={600}
          height={100}
          alt=""
        />
        <div className="h-32 w-32  bg-white border-2 border-orange-500 rounded-full absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 hover:bg-orange-500 hover:text-white group duration-500 ">
          <Link
            href="/menu"
            className="h-32 w-32 rounded-full flex justify-center items-center"
          >
            <h2 className="text-center">
              <span className="text-orange-500 font-mono group-hover:text-white duration-500">
                Explore
              </span>{" "}
              <br />
              <span className="font-semibold">
                THE <br /> MENU
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeacialMenus;
