import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BlogSmallCard from './BlogSmallCard';

const BlogMainBanner = () => {
  const [mainBlog, setMainBlog] = useState([]);
  const [leftBlog, setLeftBlog] = useState([]);
  const [rightBlog, setRightBlog] = useState([]);
  useEffect(() => {
    fetch("blogs.json").then(res => res.json()).then(data => {
      console.log(data);
      setMainBlog(data[0])
      setLeftBlog(data.slice(1,3))
      setRightBlog(data.slice(3,5))
    }).catch(err=>console.log(err))
    
  },[])

	return (
    <section className="grid grid-cols-4 gap-4 max-w-5xl mx-auto mt-6">
      <div className="flex flex-col gap-4">
        {leftBlog.map((b) => (
          <BlogSmallCard key={b._id} value={b} />
        ))}
      </div>
      <div className="col-span-2 rounded-lg overflow-hidden  shadow-lg">
        <Image
          className="w-full object-cover"
          src={mainBlog?.picture}
          width={100}
          height={100}
          alt=""
        />
        <div className="px-3">
          <div className="flex  items-center mt-2 ">
            <p className="text-sm text-zinc-800 mr-2">Foulcher Nathanil</p>
            <span className="text-xs text-zinc-500">19 September 2025</span>
          </div>
          <div>
            <h2 className="text-orange-500 font-mono font-semibold">
              Lenovo's smarter devices stoke professional passions{" "}
            </h2>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae qui officia nihil, consequatur ab aliquid eligendi
              impedit hic ad adipisci! Rem iste obcaecati unde ab!
            </p>
          </div>
          <hr className="mt-4 border-gray-300" />
          <div className="flex justify-between my-2 ">
            <div className="flex gap-8 items-center">
              <div className="group ">
                <Image
                  className="w-7 group-hover:opacity-0 group-hover:hidden"
                  src="/wish.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <Image
                  className="w-7 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                  src="/wishlist-orange.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className='group'>
                <Image
                  className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                  src="/comment-orange.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <Image
                  className="w-6 h-6 group-hover:opacity-0 group-hover:hidden"
                  src="/comment.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            <div className='group'>
              <Image
                className="w-7 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                src="/ribbon-orange.png"
                width={100}
                height={100}
                alt=""
              />
              <Image
                className="w-7 group-hover:opacity-0 group-hover:hidden"
                src="/ribbon.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {rightBlog.map((b) => (
          <BlogSmallCard key={b._id} value={b} />
        ))}
      </div>
    </section>
  );
};

export default BlogMainBanner;