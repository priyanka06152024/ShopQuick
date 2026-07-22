import React from "react";
import BannerImage from "../../assets/Images/BannerImg/sales.png";
import { IoFastFood } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

                    {/* Banner Image */}
                    <div data-aos="zoom-in">
                        <img
                            src={BannerImage}
                            alt="Summer Sale"
                            className="max-w-[580px] h-[350px] w-full mx-auto object-cover"
                        />
                    </div>

                    {/* Banner Content */}
                    <div className="flex flex-col justify-center gap-6">
                        <h1
                            data-aos="fade-up"
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                        >
                            Summer Sale Up To 60% Off
                        </h1>

                        <p
                            data-aos="fade-up"
                            className="text-sm text-gray-500 dark:text-gray-300 leading-6"
                        >
                            Enjoy our biggest summer sale with premium quality products at
                            amazing prices. Shop your favorite items today and save more than
                            ever before.
                        </p>

                        {/* Features */}
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                            <p>Fast Delivery</p>
                        </div>

                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <MdPayment  className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                            <p>Easy Payment Method</p>
                        </div>

                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <MdLocalOffer className="text-4xl h-12 w-12 p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                            <p>Get Offers</p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;