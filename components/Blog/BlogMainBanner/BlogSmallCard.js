import Image from "next/image";

const BlogSmallCard = ({value}) => {
  return (
    <div className="rounded-lg shadow-md">
      <Image
        className="w-full rounded-t-lg h-36 object-cover"
        src={value?.picture}
        width={100}
        height={100}
        alt=""
      />
      <div className="px-2 pb-2">
        <div className="flex  items-center mt-2 mb-1">
          <img
            className="w-6 h-6 object-cover rounded-full"
            src={value?.authorProfile}
            alt=""
          />
          <p className="text-xs text-zinc-800 mx-2 font-semibold">
            Foulcher Nathanil
          </p>
          <span className="text-xs text-zinc-500" style={{ fontSize: "10px" }}>
            19 September 2025
          </span>
        </div>
        <div>
          <h2 className="text-orange-500 font-mono font-semibold line-clamp-2 leading-5">
            Lenovo's smarter devices stoke professional passions{" "}
          </h2>
        </div>
      </div>
      <div className="flex justify-between mb-2 px-2">
        <div className="flex gap-5 items-center">
          <div className="flex items-center">
            <div className="group cursor-pointer">
              <Image
                className="w-5 group-hover:opacity-0 group-hover:hidden "
                src="/wish.png"
                width={100}
                height={100}
                alt=""
              />
              <Image
                className="w-5 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                src="/wishlist-orange.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="ml-1 text-xs">32</span>
          </div>
          <div className="flex items-center ">
            <div className="group cursor-pointer">
              <Image
                className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                src="/comment-orange.png"
                width={100}
                height={100}
                alt=""
              />
              <Image
                className="w-4 h-4 group-hover:opacity-0 group-hover:hidden"
                src="/comment.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="text-xs text-zinc-600 ml-1">115</span>
          </div>
        </div>
        <div className="group cursor-pointer">
          <Image
            className="w-5 opacity-0 group-hover:opacity-100 group-hover:block hidden"
            src="/ribbon-orange.png"
            width={100}
            height={100}
            alt=""
          />
          <Image
            className="w-5 group-hover:opacity-0 group-hover:hidden"
            src="/ribbon.png"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSmallCard;
