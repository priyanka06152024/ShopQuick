import React from "react";
import { FaStar } from "react-icons/fa6";

import Img1 from "../../assets/Images/ProductImg/Img1.png";
import Img2 from "../../assets/Images/ProductImg/Img2.png";
import Img3 from "../../assets/Images/ProductImg/Img3.png";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "White",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Party Wear",
      rating: 5.0,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Women Western",
      rating: 5.0,
      color: "Brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "Yellow",
      aosDelay: "600",
    },
  ];

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products For You
          </p>

          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>

          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our best-selling collection featuring premium quality,
            trendy designs, and unbeatable prices. Find the perfect style for
            every occasion.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[200px] w-[120px] object-cover rounded-md"
              />

              <div>
                <h3 className="font-semibold">{data.title}</h3>

                <p className="text-sm text-gray-600">{data.color}</p>

                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justfy-center ">
            <button className="text-center mt-10 curser-pointer bg-primary text-white py-1 px-5 rounded-md">
                View ALL Button
            </button>

        </div>
      </div>
    </div>
  );
};

export default Products;
