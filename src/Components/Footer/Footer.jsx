import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10"
        >
          {/* Company Info */}
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-bold mb-4">
              <FiShoppingBag size={30} />
              ShopQuick
            </h1>

            <p className="text-gray-300 leading-7">
              ShopQuick is your one-stop destination for trendy fashion,
              premium quality products, and a seamless shopping experience.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Important Links</h2>

            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="text-gray-300 hover:text-primary hover:translate-x-2 duration-300"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>

            <div className="flex gap-4 mb-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-pink-500 duration-300" />
              </a>

              <a href="#">
                <FaLinkedin className="text-3xl hover:text-blue-500 duration-300" />
              </a>

              <a href="#">
                <FaFacebook className="text-3xl hover:text-blue-600 duration-300" />
              </a>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-lg" />
                <p>New Delhi, Delhi</p>
              </div>

              <div className="flex items-center gap-3">
                <IoCall className="text-lg" />
                <p>+91 84740 5489</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ShopQuick. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;