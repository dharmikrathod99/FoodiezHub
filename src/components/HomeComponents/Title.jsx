import React from 'react'

function Title() {
    const items = ['Burger', 'Pizza', 'Pasta', 'French Fries'];

    return (
        <>
            <div className="title">
                <div className="overflow-hidden whitespace-nowrap w-full  py-4">
                    <div className="animate-marquee inline-block">
                        {items.map((item, index) => (
                            <span
                                key={index}
                                className="text-8xl font-bold text-gray-300 mx-8 inline-block transition-colors duration-300 hover:text-red-500"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title
