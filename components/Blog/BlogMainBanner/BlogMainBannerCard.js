import Image from 'next/image';

const BlogMainBannerCard = ({ mainBlog }) => {
  return (
    <div className="col-span-2 rounded-lg overflow-hidden  shadow-lg">
      <img
        className="w-full object-cover rounded-lg"
        src={mainBlog?.picture}
        alt=""
      />

      <div className="px-3">
        <div className="flex  items-center mt-4 mb-2 ">
          <img
            className="w-7 h-7 rounded-full"
            src={mainBlog?.authorProfile}
            alt=""
          />
          <p className="text-sm text-zinc-800 mx-2">Foulcher Nathanil</p>
          <span className="text-xs text-zinc-500">19 September 2025</span>
        </div>
        <div>
          <h2 className="text-orange-500 font-mono font-semibold line-clamp-2 leading-6">
            Lenovo's smarter devices stoke professional passions Lenovo's
            smarter
          </h2>
          <p className="text-xs text-gray-500 mt-2 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            qui officia nihil, consequatur ab aliquid eligendi impedit hic ad
            adipisci! Rem iste obcaecati unde ab!
          </p>
        </div>
        <hr className="mt-4 border-gray-300" />
        <div className="flex justify-between my-2 ">
          <div className="flex gap-6 items-center">
            <div className="flex items-center">
              <div className="group cursor-pointer">
                <Image
                  className="w-6 group-hover:opacity-0 group-hover:hidden "
                  src="/wish.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <Image
                  className="w-6 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                  src="/wishlist-orange.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <span className="ml-1.5 text-zinc-700 text-sm">31</span>
            </div>
            <div className='flex items-center'>
              <div className="group cursor-pointer">
                <Image
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:block hidden"
                  src="/comment-orange.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <Image
                  className="w-5 h-5 group-hover:opacity-0 group-hover:hidden"
                  src="/comment.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <span className="ml-1.5 text-zinc-700 text-sm">110</span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <Image
              className="w-6 opacity-0 group-hover:opacity-100 group-hover:block hidden"
              src="/ribbon-orange.png"
              width={100}
              height={100}
              alt=""
            />
            <Image
              className="w-6 group-hover:opacity-0 group-hover:hidden"
              src="/ribbon.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMainBannerCard;