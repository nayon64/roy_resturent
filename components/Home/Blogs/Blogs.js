import PrimaryButton from "@/components/Shareds/Button/PrimaryButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json").then(res => res.json()).then(data => {
      console.log(data);
      setBlogs(data.slice(0,4))
    }).catch(err=>console.error(err))
  },[])

  const blogsSection = blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)



	return (
    <section className="max-w-5xl mx-auto grid grid-cols-2 gap-4 my-12">
      <div className="grid grid-cols-2 py-4  rounded-md shadow-2xl">
        <div className="mx-4 flex ">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="pr-4 flex flex-col justify-between">
          <div>
            <h4 className="text-xs bg-teal-500 inline-block p-1 px-2 uppercase text-white font-semibold rounded">
              Food Blog
            </h4>
            <p className="text-xs my-2 text-gray-700">19 September 2025</p>
            <h2 className="text-lg my-2 font-semibold text-orange-500 font-mono">
              Why You Shouldn't Ride Elephants In France.
            </h2>
            <p className="text-sm text-gray-500">
              Kava contains 30 demos as for now, and we're palning to release
              more! Except demos, Kava theme has more and more features for.
              users, business, companies, developers, bloggers and other
              categories of users. Even if you are an absolute beginner
            </p>
          </div>
          <div>
            <PrimaryButton value={"Read More ->"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">{blogsSection}</div>
    </section>
  );
};

export default Blogs;