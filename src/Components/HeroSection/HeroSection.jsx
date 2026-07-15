import React from "react";
import Image1 from "../../assets/Images/Hero/Image1.webp";
import Image2 from "../../assets/Images/Hero/Image2.webp";
import Image3 from "../../assets/Images/Hero/Image3.webp";
import Image4 from "../../assets/Images/Hero/Image4.webp";
import Image5 from "../../assets/Images/Hero/Image5.webp";
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
  {
    id: 5,
    img: Image5,
    title: "Summer Sale Up to 60% Off",
    description:
      "Don't miss our biggest seasonal sale. Enjoy huge discounts on fashion, accessories, and more for a limited time.",
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
              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* Text Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold pl-4"
                  >
                    {data.title}
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto"
                    />
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