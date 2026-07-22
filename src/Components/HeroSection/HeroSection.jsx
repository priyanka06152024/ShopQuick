import React from "react";
import Image1 from "../../assets/Images/Hero/Image1.png";
import Image2 from "../../assets/Images/Hero/Image2.png";
import Image3 from "../../assets/Images/Hero/Image3.png";
import Image4 from "../../assets/Images/Hero/Image4.png";

import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 40% off on all Men's Wear",
    description:
      "Discover stylish men's fashion with up to 40% off. Shop premium clothing at the best prices for a limited time.",
  },
  {
    id: 2,
    img: Image2,
    title: "Flat 30% off on all Women's Wear",
    description:
      "Discover elegant women's fashion with flat 30% off. Shop trendy outfits and accessories at amazing prices.",
  },
  {
    id: 3,
    img: Image3,
    title: "Latest Electronics Collection",
    description:
      "Discover the newest smartphones, laptops, headphones, smartwatches, and accessories at amazing prices. Shop the latest technology today.",
  },
  {
    id: 4,
    img: Image4,
    title: "Explore Our New Arrivals",
    description:
      "Discover fresh styles, premium quality products, and exclusive deals. Find everything you need in one place with ShopQuick.",
  },
 
];

const HeroSection = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-slate-950 dark:text-white duration-300 flex justify-center items-center">
      {/* Background Shape */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute top-1/2 right-0 -translate-y-1/2 rounded-3xl rotate-45 -z-10"></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                className="relative min-h-[750px] w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${data.img})`,
                }}
              >
                {/* Black Overlay (Optional) */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Content */}
                <div className="relative z-10 container min-h-[650px] flex flex-col justify-center">
                  <div className="max-w-xl text-white p-4 dark:text-black flex flex-col gap-5 justify-center ">
                    <h1
                      data-aos="zoom-out"
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                    >
                      {data.title}
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="mt-4 text-lg"
                    >
                      {data.description}
                    </p>

                    <button data-aos="fade-up" data-aos-duration="800" className="w-[150px] bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-800  hover:text-white transition-all duration-300 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
