import React from 'react'
import { Link } from 'react-router-dom'
function Hero() {
    return (
        <>
            <section
                className="
        relative
        bg-[url('https://img.freepik.com/premium-photo/orange-black-abstract-gradient-dynamic-background_437781-1088.jpg')] 
        bg-cover 
        bg-center 
        bg-no-repeat
        min-h-[500px] 
        flex 
        items-center
        overflow-hidden
        px-8
    "
            >
                {/* Left side text */}
                <div className="w-1/2 text-white z-10">
                    <h1 className="text-2xl text-red-600 font-bold mb-4">WELCOME FRESHEAT</h1>
                    <p className="text-6xl  font-bold max-w-md">
                        TODAY SPACIAL FOOD
                    </p>
                    <p className='text-2xl font-bold mt-2 text-orange-500'>LIMIED TIME OFFER</p>
                    <Link to='/foodmenu'><button className='bg-red-600 text-white px-4 py-2 mt-4 rounded-md'>Order Now</button></Link>
                </div>

                {/* Right middle animated image */}
                <div
                    className="absolute top-1/3 right-2 w-96 h-96 bg-no-repeat bg-contain transform -translate-y-1/2"
                    style={{
                        backgroundImage:
                            "url('https://gramentheme.com/html/fresheat/assets/img/cta/ctaThumb1_1.png')",
                        animation: "rightLeft 4s ease-in-out infinite",
                    }}
                ></div>

                {/* Bottom right up-down animated image */}
                <div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-no-repeat bg-contain"
                    style={{
                        backgroundImage: "url('https://gramentheme.com/html/fresheat/assets/img/shape/ctaShape1_3.png')",
                        animation: "upDown 3s ease-in-out infinite",
                    }}
                ></div>

                <style>{`
        @keyframes upDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        @keyframes rightLeft {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-20px); }
        }
        `}</style>

            </section>


        </>
    )
}

export default Hero
