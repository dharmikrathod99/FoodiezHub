import { useState } from 'react';
import Nav from './Nav'


const foodItems = [
    {
        "id": 11,
        "name": "Pancakes with Syrup",
        "image": "https://images.unsplash.com/photo-1550317138-10000687a72b",
        "description": "Fluffy pancakes served with maple syrup.",
        "price": 5.95
    },
    {
        "id": 2,
        "name": "Cheeseburger",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
        "description": "Juicy beef patty with cheese and crispy lettuce.",
        "price": 7.49
    },
    {
        "id": 15,
        "name": "Tuna Sandwich",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        "description": "Toasted sandwich filled with tuna and mayo.",
        "price": 6.20
    },
    {
        "id": 5,
        "name": "Chicken Tikka Masala",
        "image": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
        "description": "Creamy Indian chicken curry with spices.",
        "price": 11.50
    },





]
const otherfood = [
    {
        "id": 4,
        "name": "Sushi Platter",
        "image": "https://images.unsplash.com/photo-1553621042-f6e147245754",
        "description": "Assorted fresh sushi with soy and wasabi.",
        "price": 14.99
    },
    {
        "id": 8,
        "name": "Beef Burrito",
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "description": "Mexican burrito with beef, beans, and cheese.",
        "price": 8.50
    },
    {
        "id": 8,
        "name": "Beef Burrito",
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "description": "Mexican burrito with beef, beans, and cheese.",
        "price": 8.50
    },
    {
        "id": 14,
        "name": "Chocolate Cake",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        "description": "Rich chocolate cake with creamy frosting.",
        "price": 6.75
    },
    {
        "id": 6,
        "name": "Veggie Wrap",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
        "description": "Healthy wrap with fresh veggies and hummus.",
        "price": 6.25
    }]

function Foodmenu() {
    const [selected, setSelected] = useState(null);
    return (
        <>
            <Nav />
            <section
                className="
        relative 
        w-full
        h-[100vh]
        bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-summer-atmosphere-restaurant-supermarket-vegetable-psd-layered-promotion-background-picture-image_1098004.jpg')] 
        bg-contain 
        bg-center 
        bg-no-repeat 
        flex 
        items-center 
        justify-center 
        overflow-hidden"
            >
                <div >
                    <h1 className="text-white text-5xl font-bold tracking-wide">
                        FOOD MENU
                    </h1>
                </div>
            </section>
            <div className="text text-center flex flex-col items-center justify-center ">
                <div className="logo-about flex items-center gap-2 mb-2 w-100">
                    <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" width={25} height={25} alt="" />
                    <h2 className=" text-center text-2xl font-bold text-orange-500">Popular Dishes</h2>
                    <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" width={25} height={25} alt="" />
                </div>
                <p className='text-center text-5xl mb-8 font-bold text-black'>Our Most Popular Dishes</p>
            </div>

            <section className="flex flex-col md:flex-row w-full h-[80vh] p-4 gap-4">
                {/* Left Side: Food Images */}
                <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
                    {foodItems.map((item) => (
                        <img
                            key={item.id}
                            src={item.image}
                            alt={item.name}
                            className="cursor-pointer w-32 h-32 object-cover border-2 rounded-xl hover:scale-105 transition"
                            onClick={() => setSelected(item)}
                        />
                    ))}
                </div>

                {/* Center: Selected Food Detail */}
                <div className="w-full md:w-1/3 flex items-center justify-center">
                    {selected ? (
                        <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-xs">
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">{selected.name}</h2>
                            <p className="text-gray-600 mt-2">{selected.description}</p>
                        </div>
                    ) : (
                        <div className="text-gray-500">Click a food item to view details</div>
                    )}
                </div>

                {/* Right Side: Static Info or placeholder */}
                <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
                    {otherfood.map((item) => (
                        <img
                            key={(item.id)}
                            src={item.image}
                            alt={item.name}
                            className="cursor-pointer w-32 h-32 object-cover border-2 rounded-xl hover:scale-105 transition"
                            onClick={() => setSelected(item)}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Foodmenu
