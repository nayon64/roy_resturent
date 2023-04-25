import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";


const ChefCard = ({ chef }) => {
  console.log("hell",chef);
	const chefDetails = {
    picture:
      "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
		name: "Danni Wyatt",
	degignation:"Manager"
  };
	return (
    <div>
      <div className="overflow-hidden relative group">
        <Image
          className="group-hover:scale-125  duration-700 w-full h-60 object-cover "
          src={chef ? chef.picture : chefDetails.picture}
          width={300}
          height={10}
          alt=""
        />
        <div className="absolute max-w-1/2 px-1 pb-1 bottom-0 text-white bg-black/50">
          <h2 className="font-mono uppercase text-sm text-orange-500 -mb-1 line-clamp-1">
            {chef ? chef.name : chefDetails.name}
          </h2>
          <h5 className="text-xs">{chefDetails.degignation}</h5>
        </div>
        <div className="bg-white absolute bottom-0 right-0 flex text-4xl p-1 max-w-1/2 gap-2 translate-x-32 duration-500 text-white group-hover:translate-x-0">
          <div className="chef-contact-icons">
            <a href={chef ? chef.facebookLink : "#"} target="_blank">
              <Image
                className="contact-icon-orange"
                src="/fbOrange.png"
                width={25}
                height={100}
                alt=""
              />
              <Image
                className="contact-icon-black"
                src="/fb-black.png"
                width={25}
                height={100}
                alt=""
              />
            </a>
          </div>
          <div className="chef-contact-icons">
            <a href={chef ? chef.instagramLink : "#"} target="_blank">
              <Image
                className="contact-icon-orange"
                src="/insta-orange.png"
                width={25}
                height={100}
                alt=""
              />
              <Image
                className="contact-icon-black"
                src="/insta-black.png"
                width={25}
                height={100}
                alt=""
              />
            </a>
          </div>
          <div className="chef-contact-icons">
            <a href={chef ? chef.twitterLink : "#"} target="_blank">
              <Image
                className="contact-icon-orange"
                src="/twitter-logo-orange.png"
                width={25}
                height={100}
                alt=""
              />
              <Image
                className="contact-icon-black"
                src="/twitter-logo.png"
                width={25}
                height={100}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;