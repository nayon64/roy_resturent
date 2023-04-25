import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const ContactInfo = () => {

	
	return (
    <div className="col-span-4">
      <h1 className="text-2xl  font-semibold uppercase">Contact Info</h1>
      <hr className="border border-orange-500 my-2" />
      <div>
        <h3 className="font-mono text-lg">Contact Number:</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="bg-slate-600 p-3 rounded-full text-xl text-white">
            <FiPhone />
          </div>
          <div className="text-gray-600 text-sm">
            <p>+658-4654-5456</p>
            <p>+65-46544-5456</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-mono text-lg">Mail Address:</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="bg-slate-600 p-3 rounded-full text-xl text-white">
            <AiOutlineMail />
          </div>
          <div className="text-gray-600 text-sm">
            <p>info@royresturen.com</p>
            <p>inforoyresturen@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-mono text-lg">Office Address:</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="bg-slate-600 p-3 rounded-full text-xl text-white">
            <GoLocation />
          </div>
          <div className="text-gray-600 text-sm">
            <p>Burnsville, MN 55337 Streat,</p>
            <p>United State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
