import React from 'react'
import { motion } from "framer-motion";
import AboutHero from '../About/AboutHero';
import { Link } from 'react-router-dom';

function Aboutus() {
    return (
        <>
            <div className="main flex flex-col md:flex-row justify-between items-center py-10 gap relative">

                {/* Left Image Section - Hidden on small screens */}
                <div className="sec-1 relative flex-shrink-0 hidden md:block">
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_1.png"
                        alt=""
                        className="w-40 md:w-56 lg:w-96"
                    />

                    {/* 🎯 Properly Centered Animated Image */}
                    <motion.img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_3.png"
                        alt=""
                        className="absolute top-1/3 left-2/3 w-44 md:w-44 lg:w-48 -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    />
                </div>

                {/* Center Text */}
                <div className="text text-center flex flex-col items-center justify-center max-w-xl">
                    <div className="logo-about flex items-center gap-2 mb-2">
                        <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" width={20} height={20} alt="" />
                        <h2 className="text-sm font-semibold text-orange-500">ABOUT US</h2>
                        <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" width={20} height={20} alt="" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-snug">
                        Variety of flavours from American cuisine
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <Link to='/foodmenu'><button className='bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded shadow-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 mt-6' >Order Now</button></Link>
                </div>

                {/* Right Image Section - Hidden on small screens */}
                <div className="sec-2 relative flex-shrink-0 hidden md:block">
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_4.png"
                        alt=""
                        className="w-40 md:w-56 lg:w-96"
                    />

                    {/* 🎯 Properly Centered Animated Image */}
                    <motion.img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/aboutShape1_6.png"
                        alt=""
                        className="absolute top-1/3 right-2/3 w-44 md:w-44 lg:w-44 -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    />
                </div>
            </div>
        </>
    )
}

export default Aboutus
