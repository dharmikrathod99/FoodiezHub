import React from 'react'
const cardData = [
    {
        id: 1,
        title: "Chicken Fried Rice",
        image: "https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_1.png",
        price: "$100.99"
    },
    {
        id: 2,
        title: "Chinese Pasta",
        image: "https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_2.png",
        price: "$15.99"
    },
    {
        id: 3,
        title: "Chicken Pizza",
        image: "https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_3.png",
        price: "$20.99"
    },
    {
        id: 4,
        title: "Chicken Noodles",
        image: "https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_4.png",
        price: "$25.99"
    },
];

function Dishes() {
    return (
        <>
            <div className="text text-center flex flex-col items-center justify-center ">
                <div className="logo-about flex items-center gap-2 mb-2 w-100">
                    <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" width={25} height={25} alt="" />
                    <h2 className=" text-center text-4xl font-bold text-orange-500">BEST SELLING DISHES</h2>
                    <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" width={25} height={25} alt="" />
                </div>
            </div>
            <div className="w-full px-4 py-12 bg-gradient-to-br">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {cardData.slice(0, 4).map((card) => (
                        <SimpleCard key={card.id} title={card.title} image={card.image} price={card.price} />
                    ))}
                </div>
            </div>
        </>
    )
}

const SimpleCard = ({ title, image, price }) => {
    return (
        <>
            <div className="h-96 w-72 rounded-xl bg-white hover:bg-black transition-colors duration-300 shadow-lg flex flex-col items-center justify-center p-4 text-center group">
                <img
                    src={image}
                    alt={title}
                    className="h-32 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-xl font-bold text-gray-800 group-hover:text-white">
                    {title}
                </p>
                <p className="mt-2 text-gray-500 group-hover:text-gray-300">The Registration</p>
                <p className='mt-2 font-bold text-red-500 group-hover:text-white'>{price}</p>


            </div>

        </>

    );
};

export default Dishes
