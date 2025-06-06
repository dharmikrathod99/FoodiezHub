import React from 'react'
import { FaPizzaSlice, FaTruck, FaUtensils } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Threecombo() {
    return (
        <>
            <section className="py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Section 1 */}
                        <div className="bg-black  rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <div className="alltext flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                                <div className="w-full md:w-[50%]   rounded-lg">
                                    <p className=' font-bold  text-red-600' >ON THIS WEEK</p>
                                    <h3 className=' font-bold text-white text-4xl'>SPICY FRIED CHICKEN</h3>
                                    <p className=' font-bold text-orange-500' >Limited Time offer</p>
                                </div>
                                <div className="w-full md:w-[50%]   rounded-lg">
                                    <img src="https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_1.png" alt="" />
                                    <Link to='/foodmenu'><button className='p-5 bg-red-600 text-white px-4 py-2 rounded-lg mt-4'>Order Now</button></Link>

                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-black  rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <div className="alltext flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                                <div className="w-full md:w-[50%]   rounded-lg">
                                    <p className=' font-bold  text-red-600' >WELCOME FRESHEAT</p>
                                    <h3 className=' font-bold text-white text-4xl'>TODAY SPACIAL FOOD</h3>
                                    <p className=' font-bold text-orange-500' >Limited Time offer</p>
                                </div>
                                <div className="w-full md:w-[50%]   rounded-lg">
                                    <img src="https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_2.png" alt="" />
                                    <Link to='/foodmenu'><button className='p-5 bg-red-600 text-white px-4 py-2 rounded-lg mt-4'>Order Now</button></Link>

                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-black  rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
                            <div className="alltext flex flex-col md:flex-row items-center justify-center gap-8 px-4">
                                <div className="w-full md:w-[50%]   rounded-lg">
                                    <p className=' font-bold  text-red-600' >WELCOME FRESHEAT</p>
                                    <h3 className=' font-bold text-white text-4xl'>SPECIAL CHICKEN ROLL</h3>
                                    <p className=' font-bold text-orange-500' >Limited Time offer</p>
                                </div>
                                <div className="w-full md:w-[50%]   rounded-lg">
                                    <img src="https://gramentheme.com/html/fresheat/assets/img/offer/offerThumb1_3.png" alt="" />
                                    <Link to='/foodmenu'><button className='p-5 bg-red-600 text-white px-4 py-2 rounded-lg mt-4'>Order Now</button></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Threecombo
