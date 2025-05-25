import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const chefs = [
    {
        name: "Devon Lane",
        role: "President of Sales",
        image: "https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_1.jpg", // Replace with your actual image path
    },
    {
        name: "Ralph Edwards",
        role: "Chefe Manager",
        image: "https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_2.jpg",
    },
    {
        name: "Marvin McKinney",
        role: "Main Chefe",
        image: "https://gramentheme.com/html/fresheat/assets/img/chefe/chefeThumb2_3.jpg",
    },
];
function Chefe() {
    return (
        <>
            <section className="bg-[#f7f4ef] py-16 px-4 md:px-10 lg:px-20 relative">

                <div className="text-center mb-14">
                    <h3 className="text-orange-500 font-semibold text-sm tracking-wider">
                        🍔 OUR CHEFE 🍔
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#081c3a] mt-2">
                        Meet Our Expert Chefe
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {chefs.map((chef, index) => (
                        <div
                            key={index}
                            className="group relative rounded-xl overflow-hidden shadow-xl bg-white transition-transform duration-300 hover:-translate-y-2"
                        >
                            <img
                                src={chef.image}
                                alt={chef.name}
                                className="w-full  object-cover"
                            />


                            {/* Slide-in Social Icons */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-[-60px] group-hover:right-0 transition-all duration-500 bg-red-500 px-4 py-6 rounded-l-xl text-white flex flex-col items-center gap-4 z-10">
                                <FaLinkedinIn className="hover:scale-110 transition" />
                                <FaYoutube className="hover:scale-110 transition" />
                                <FaFacebookF className="hover:scale-110 transition" />
                                <span className="text-sm mt-2 rotate-90 tracking-widest">Share</span>
                            </div>

                            {/* Info card */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 rounded-t-xl shadow-lg z-20 text-center">
                                <h4 className="text-lg font-semibold text-[#081c3a]">
                                    {chef.name}
                                </h4>
                                <p className="text-sm text-gray-500">{chef.role}</p>
                            </div>
                        </div>

                    ))}
                </div>
                {/* Bottom right up-down animated image */}
                <div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-no-repeat bg-contain z-50"
                    style={{
                        backgroundImage: "url('https://gramentheme.com/html/fresheat/assets/img/shape/chefeShape2_2.png')",
                        animation: "upDown 3s ease-in-out infinite",
                    }}
                ></div>
          
            </section>
        </>
    )
}

export default Chefe
