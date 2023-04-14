import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className=" fixed bottom-1/2 translate-y-1/2 z-50">
      <div className="flex flex-col gap-3 ml-2">
        <a href="#">
          <Image src="/facebook.png" alt="" width={45} height={100} />
        </a>
        <a href="#">
          <Image src="/instagram.png" alt="" width={45} height={100} />
        </a>
        <a href="#">
          <Image src="/twitter.png" alt="" width={45} height={100} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
