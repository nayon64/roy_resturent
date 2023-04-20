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
          <p className="text-sm text-zinc-800 mr-2">Foulcher Nathanil</p>
          <span className="text-xs text-zinc-500">19 September 2025</span>
        </div>
        <div>
          <h2 className="text-orange-500 font-mono font-semibold line-clamp-2">
            Lenovo's smarter devices stoke professional passions{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogSmallCard;
