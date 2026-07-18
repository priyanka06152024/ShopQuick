import React from "react";
import SliderImport from "react-slick";

const SlickSlider = SliderImport.default ?? SliderImport;

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "The quality exceeded my expectations. The product arrived on time, and the overall shopping experience was smooth and hassle-free. Highly recommended!",
    img: "",
  },
  {
    id: 2,
    name: "Messy",
    text: "I absolutely love the design and comfort of the products. Customer support was responsive, and delivery was faster than expected.",
    img: "",
  },
  {
    id: 3,
    name: "Cherry",
    text: "Amazing collection with premium quality. The website is easy to use, and the checkout process was quick and secure. I'll definitely shop here again.",
    img: "",
  },
  {
    id: 4,
    name: "Henry",
    text: "Fantastic service from start to finish. The products look exactly as shown, and the attention to detail makes this store stand out.",
    img: "",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">
            What Our Customers Are Saying
          </p>

          <h1 className="text-3xl font-bold">
            Testimonials
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Customer satisfaction is our top priority. Here's what people have to
            say about shopping with us.
          </p>
        </div>

        <SlickSlider {...settings}>
          {TestimonialsData.map((data) => (
            <div key={data.id} className="px-3">
              <div className="bg-primary/10 dark:bg-slate-700 rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4"></div>

                <p className="text-gray-500 dark:text-gray-300">
                  {data.text}
                </p>

                <h2 className="mt-4 text-xl font-bold">
                  {data.name}
                </h2>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default Testimonials;