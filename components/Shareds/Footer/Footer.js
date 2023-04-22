import Link from "next/link";
import React from "react";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-12">
      <img className=" h-36 w-full" src="sectionCurve.png" alt="" />
      <div className="" style={{ backgroundColor: "#191D28" }}>
        <div className=" max-w-5xl mx-auto py-12 grid grid-cols-4 gap-4">
          <div>
            <h3 className="text-white text-lg font-mono mb-2">CONTACT US</h3>
            <ul className="text-gray-400">
              <li className="flex items-center mb-3">
                <FaHome className="text-lg text-orange-500" />
                <span className="ml-3">2/3 Motijil, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center mb-3">
                <FaPhoneAlt className="text-lg text-orange-500" />
                <span className="ml-3">+88001-20354-20</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-lg text-orange-500" />
                <span className="ml-3">royresturent@example.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-mono ">INFORMATION</h3>
            <ul className="text-gray-400">
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Brands
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-mono ">MY ACCOUNT</h3>
            <ul className="text-gray-400 ">
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Order History
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Wish List
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Specials
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Site Map
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300 " href="">
                  Gift Certificattes
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-500 duration-300" href="">
                  Affiliate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-mono ">NEWSLETTER</h3>
            <p className="text-gray-400 text-xs">
              Send Us a Message The Industrys Stan Dard My.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-white py-3 border-t flex justify-between items-center">
          <p className="font-semibold text-sm">
            © All rights reserved Made by{" "}
            <span className="text-orange-400">RoyTEch</span>
          </p>
          <h3 className="text-xl font-semibold font-mono ">ROY RESTURENT</h3>
          <div className=" flex gap-1.5">
            <div className="px-2 py-2 bg-zinc-700 flex justify-center items-center rounded cursor-pointer w-16">
              <img className=" w-12 h-4" src="visa.png" alt="" />
            </div>
            <div className="px-2 py-2 bg-zinc-700 flex justify-center items-center  rounded cursor-pointer w-16">
              <img className=" w-12 h-4" src="paypal.png" alt="" />
            </div>
            <div className="px-2 py-1 flex justify-center items-center bg-zinc-700 rounded cursor-pointer w-16 ">
              <img className="  " src="mastercard.png" alt="" />
            </div>
            <div className="px-2 py-2 flex justify-center items-center bg-zinc-700  rounded cursor-pointer w-16 ">
              <img className=" w-12 h-4" src="payoneer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
