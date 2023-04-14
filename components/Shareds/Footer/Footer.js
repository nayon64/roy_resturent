import Link from "next/link";
import React from "react";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 mt-12">
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-4 gap-4">
        <div>
          <h3 className="text-white text-2xl font-mono mb-2">CONTACT US</h3>
          <ul className="text-gray-400">
            <li className="flex items-center mb-3">
              <FaHome className="text-2xl text-orange-300" />
              <span className="ml-3">2/3 Motijil, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center mb-3">
              <FaPhoneAlt className="text-2xl text-orange-300" />
              <span className="ml-3">+88001-20354-20</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-2xl text-orange-300" />
              <span className="ml-3">royresturent@example.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl font-mono mb-2">INFORMATION</h3>
          <ul className="text-gray-400">
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Delivery Information
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Brands
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Returns
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl font-mono mb-2">MY ACCOUNT</h3>
          <ul className="text-gray-400">
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                My Account
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Order History
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Wish List
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Newsletter
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Specials
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Site Map
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Gift Certificattes
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-300 duration-300" href="">
                Affiliate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-2xl font-mono mb-2">NEWSLETTER</h3>
          <p className="text-gray-400">
            Send Us a Message The Industrys Stan Dard My.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
