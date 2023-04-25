
import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className=" fixed bottom-1/2 translate-y-1/2 z-50">
      <div className="flex flex-col gap-1  text-white">
        <div className="flex items-center hover:bg-gray-800 group">
          <div className="bg-orange-500 ">
            <a href="#" className=" ">
              <AiFillFacebook className="text-5xl p-2 group-hover:mx-1 duration-300" />
            </a>
          </div>
          <div className="px-2 hidden font-mono uppercase group-hover:block text-xs">
            <h3 className="tracking-wide">FaceBook</h3>
          </div>
        </div>
        <div className="flex items-center hover:bg-gray-800 group">
          <div className="bg-orange-500 ">
            <a href="#" className=" ">
              <AiFillYoutube className="text-5xl p-2 group-hover:mx-1 duration-300" />
            </a>
          </div>
          <div className="px-2 hidden font-mono uppercase group-hover:block text-xs">
            <h3 className="tracking-wide">Youtube</h3>
          </div>
        </div>
        <div className="flex items-center hover:bg-gray-800 group">
          <div className="bg-orange-500 ">
            <a href="#" className=" ">
              <AiFillInstagram className="text-5xl p-2 group-hover:mx-1 duration-300" />
            </a>
          </div>
          <div className="px-2 hidden font-mono uppercase group-hover:block text-xs ">
            <h3 className="tracking-wide">instagram</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
