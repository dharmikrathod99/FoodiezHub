import React from 'react'
import Nav from '../components/HomeComponents/Nav'
import Slider from '../components/HomeComponents/Slider'
import SwipeCards from '../components/HomeComponents/SwipeCards'
import { motion } from "framer-motion";
import Threecombo from '../components/HomeComponents/Threecombo';
import Aboutus from '../components/HomeComponents/Aboutus';
import Dishes from '../components/HomeComponents/Dishes';
import { Link } from 'react-router-dom';
import Hero from '../components/HomeComponents/Hero';
import Offer from '../components/HomeComponents/Offer';
import Footer from '../components/HomeComponents/Footer';
import Title from '../components/HomeComponents/Title';

function Home() {
    return (
        <>
            <Nav />
            <div className="flex flex-col gap-10 md:gap-16 lg:gap-24">
                {/* Slider Section */}
                <section className="w-full h-screen">
                    <Slider />
                </section>

                {/* SwipeCards Section */}
                <section className="w-full">
                    <section className="mt-[-4rem] relative z-10">
                        <h1 className="text-3xl font-bold text-center mt-12 mb-5">Best Selling Dishes</h1>
                        {/* Floating image and cards wrapper */}
                        <div className="relative flex justify-center items-start gap-8 px-4">
                            {/* 🟡 Floating Animated Image */}
                            <motion.img
                                src="https://gramentheme.com/html/fresheat/assets/img/shape/popularDishesShape1_2.png"
                                alt="floating dish"
                                className="w-32 h-32 object-contain absolute right-6 -top-[10px] z-20 hidden md:block"
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <SwipeCards />
                        </div>
                    </section>
                </section>
            </div>
            <div className="threecombo">
                <Threecombo />
            </div>
            <div className="aboutus">
                <Aboutus />
            </div>
            <div className="dishes">
                <Dishes />
                <div className="viewmore flex justify-center items-center ">
                    <Link to='/viewmore'> <button className="px-6 py-2 mb-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md shadow-md transition duration-300">
                        View More
                    </button></Link>
                </div>
            </div>
            <div className="hero-section">
                <Hero />
            </div>
         <div className="title">
            <Title/>
         </div>
            <div className="specal-offer">
                <Offer/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}

export default Home
