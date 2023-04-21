import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BlogSmallCard from './BlogSmallCard';
import BlogMainBannerCard from './BlogMainBannerCard';

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
      <BlogMainBannerCard mainBlog={mainBlog} />
      <div className="flex flex-col gap-4">
        {rightBlog.map((b) => (
          <BlogSmallCard key={b._id} value={b} />
        ))}
      </div>
    </section>
  );
};

export default BlogMainBanner;