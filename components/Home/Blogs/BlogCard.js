import React from 'react';

const BlogCard = ({ blog }) => {
	console.log(blog);
	return (
    <div
      style={{
        backgroundImage: `url(${blog?.picture})`,
      }}
      className=" object-cover bg-cover bg-center rounded-lg"
    >
      <div className="bg-orange-800/50 w-full h-full rounded-lg flex justify-center items-center flex-col p-4">
        <h4 className="text-xs bg-teal-500 inline-block p-1 px-2 uppercase text-white font-semibold rounded">
          {blog?.tag}
        </h4>
        <p className="text-xs my-2 text-white">{blog?.date}</p>
        <h2 className="text-base my-2 font-semibold text-white font-mono text-center">
          {blog?.title.length > 40 ? blog.title.slice(0, 40) + "...": blog.title }
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;