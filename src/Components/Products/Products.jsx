import React from "react";
import { FaStar } from "react-icons/fa6";

import Img1 from "../../assets/Images/ProductImg/Img1.png";
import Img2 from "../../assets/Images/ProductImg/Img2.png";
import Img3 from "../../assets/Images/ProductImg/Img3.png";
import Img4 from "../../assets/Images/ProductImg/Img4.png";
import Img5 from "../../assets/Images/ProductImg/Img5.png";

const Products = () => {
  const ProductsData = [
     {
    id: 1,
    img: Img1,
    title: "Classic White T-Shirt",
    rating: 4.8,
    color: "White",
    category: "Men",
    price: "$29.99",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women's Floral Dress",
    rating: 4.9,
    color: "Pink",
    category: "Women",
    price: "$49.99",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Wireless Headphones",
    rating: 4.7,
    color: "Black",
    category: "Electronics",
    price: "$89.99",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Sports Running Shoes",
    rating: 4.9,
    color: "Blue",
    category: "Footwear",
    price: "$69.99",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Smart Watch Pro",
    rating: 4.8,
    color: "Black",
    category: "Electronics",
    price: "$129.99",
    aosDelay: "800",
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
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
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
                className="h-[200px] w-[140x] object-cover rounded-md"
              />

              <div className=" border border-gray-300 p-3 rounded shadow-sm" >
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-black bg-yellow-500 w-[60px] h-[20px] text-center rounded-sm">{data.price}</p>

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
