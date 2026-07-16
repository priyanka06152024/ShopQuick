import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";

import shirtImg1 from "../../assets/Images/TopProductSection/Shirt1.webp";
import shirtImg2 from "../../assets/Images/TopProductSection/Shirt2.webp";
import shirtImg3 from "../../assets/Images/TopProductSection/Shirt3.webp";
import shirtImg4 from "../../assets/Images/TopProductSection/Shirt4.webp";

const TopProductData = [
  {
    id: 1,
    img: shirtImg1,
    title: "Casual Wear",
    description: "Premium cotton shirt with a modern everyday fit.",
  },
  {
    id: 2,
    img: shirtImg2,
    title: "Plain Shirt",
    description: "Elegant minimal shirt for every occasion.",
  },
  {
    id: 3,
    img: shirtImg3,
    title: "Printed Shirt",
    description: "Bold print with premium comfort.",
  },
  {
    id: 4,
    img: shirtImg4,
    title: "Women Shirt",
    description: "Soft breathable fabric with timeless style.",
  },
];

const TopProducts = ({ handleOrderPopUp }) => {
  return (
    <section className="container py-20">
      {/* Heading */}
      <div className="max-w-xl mx-auto text-center mb-16">
        <p
          data-aos="fade-up"
          className="uppercase tracking-[4px] text-primary text-sm font-semibold"
        >
          Featured Collection
        </p>

        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mt-3 dark:text-white"
        >
          Top Products
        </h2>

        <p
          data-aos="fade-up"
          className="mt-4 text-gray-500 leading-7"
        >
          Carefully selected premium shirts with clean design,
          modern fitting and everyday comfort.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TopProductData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-up"
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="bg-gray-100 dark:bg-gray-800 h-72 flex items-center justify-center overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                className="w-52 object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex gap-1 text-yellow-400 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h3 className="text-xl font-semibold dark:text-white">
                {data.title}
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-6 line-clamp-2">
                {data.description}
              </p>

              <button
                onClick={handleOrderPopUp}
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-full border border-black dark:border-white py-3 font-medium transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Order Now
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;