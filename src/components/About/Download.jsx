import React from 'react'

function Download() {
    return (
        <>
            <section
                className="bg-[#f5f1ea] w-full py-12 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://gramentheme.com/html/fresheat/assets/img/bg/ctaBG3_1.jpg')`,
                }}
            >
                <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 overflow-hidden">
                    {/* Leaf Left Animation */}
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/ctaShape3_1.png"
                        alt="leaf"
                        className="absolute top-4 left-0 w-20 animate-moveLeftToRight"
                    />

                    {/* Chili Bottom Animation */}
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/ctaShape3_2.png"
                        alt="chili"
                        className="absolute bottom-0 left-6 w-20 animate-moveRightToLeft"
                    />

                    {/* Left Content */}
                    <div className="text-white max-w-xl z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-white">📱 DOWNLOAD APP</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Download Food App <br /> Order Today!
                        </h2>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-6">
                            <a
                                href="https://www.apple.com/store"
                                className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
                            >
                                <span className="text-xl"></span> Get it on App Store
                            </a>
                            <a
                                href="https://play.google.com/store/games?device=windows"
                                className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                            >
                                <span className="text-xl">▶</span> Get it on Google Play
                            </a>
                        </div>
                    </div>

                    {/* Right Visuals Container */}
                    <div className="relative z-10 mt-12 md:mt-0 w-full md:w-auto flex justify-center md:justify-end items-end md:items-center">
                        {/* Phone Animation */}
                        <img
                            src="https://gramentheme.com/html/fresheat/assets/img/cta/ctaThumb3_1.png"
                            alt="phone"
                            className="w-60 md:w-96 animate-slideRightToLeft relative z-20 right-44  "
                        />

                        {/* Dish Animation */}
                        <img
                            src="https://gramentheme.com/html/fresheat/assets/img/shape/ctaShape3_3.png"
                            alt="dish"
                            className="absolute -right-8 bottom-0 w-32 sm:w-40 md:w-48 lg:w-56 animate-bounceUpDown z-10"
                        />
                    </div>

                    {/* 40% OFF Rotating Badge */}
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/ctaShape3_6.png"
                        alt="badge"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 animate-spinSlow z-0"
                    />
                </div>
            </section>

        </>
    )
}

export default Download
