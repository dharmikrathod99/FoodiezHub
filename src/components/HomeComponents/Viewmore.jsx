import React from 'react';
import Nav from './Nav';

function Viewmore() {
    const foods = [
        {
            "id": 1,
            "name": "Margherita Pizza",
            "image": "https://images.unsplash.com/photo-1601924928161-320b660bd3c5",
            "description": "Classic Margherita with fresh basil and mozzarella.",
            "price": 8.99
        },
        {
            "id": 2,
            "name": "Cheeseburger",
            "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
            "description": "Juicy beef patty with cheese and crispy lettuce.",
            "price": 7.49
        },
        {
            "id": 3,
            "name": "Spaghetti Bolognese",
            "image": "https://images.unsplash.com/photo-1608759260644-74c4ff80c7c6",
            "description": "Pasta with rich beef and tomato sauce.",
            "price": 10.25
        },
        {
            "id": 4,
            "name": "Sushi Platter",
            "image": "https://images.unsplash.com/photo-1553621042-f6e147245754",
            "description": "Assorted fresh sushi with soy and wasabi.",
            "price": 14.99
        },
        {
            "id": 5,
            "name": "Chicken Tikka Masala",
            "image": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
            "description": "Creamy Indian chicken curry with spices.",
            "price": 11.50
        },
        {
            "id": 6,
            "name": "Veggie Wrap",
            "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
            "description": "Healthy wrap with fresh veggies and hummus.",
            "price": 6.25
        },
        {
            "id": 7,
            "name": "Pepperoni Pizza",
            "image": "https://images.unsplash.com/photo-1603079841192-51ba5d601731",
            "description": "Pepperoni topped with gooey cheese.",
            "price": 9.99
        },
        {
            "id": 8,
            "name": "Beef Burrito",
            "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            "description": "Mexican burrito with beef, beans, and cheese.",
            "price": 8.50
        },
        {
            "id": 9,
            "name": "Caesar Salad",
            "image": "https://images.unsplash.com/photo-1609981348350-3514d6a2243f",
            "description": "Crisp romaine with Caesar dressing and croutons.",
            "price": 7.99
        },
        {
            "id": 10,
            "name": "Ramen Bowl",
            "image": "https://images.unsplash.com/photo-1570563671764-8c9edce7a4a7",
            "description": "Hot noodle soup with egg and pork belly.",
            "price": 9.75
        },
        {
            "id": 11,
            "name": "Pancakes with Syrup",
            "image": "https://images.unsplash.com/photo-1550317138-10000687a72b",
            "description": "Fluffy pancakes served with maple syrup.",
            "price": 5.95
        },
        {
            "id": 12,
            "name": "Grilled Cheese Sandwich",
            "image": "https://images.unsplash.com/photo-1562440499-64f9cf9bd4b9",
            "description": "Crispy toasted bread filled with melted cheese.",
            "price": 4.99
        },
        {
            "id": 13,
            "name": "Fruit Smoothie",
            "image": "https://images.unsplash.com/photo-1571689936004-5c760edcd4e5",
            "description": "Mixed fruit smoothie with banana and berries.",
            "price": 3.50
        },
        {
            "id": 14,
            "name": "Chocolate Cake",
            "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            "description": "Rich chocolate cake with creamy frosting.",
            "price": 6.75
        },
        {
            "id": 15,
            "name": "Tuna Sandwich",
            "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            "description": "Toasted sandwich filled with tuna and mayo.",
            "price": 6.20
        },
        {
            "id": 16,
            "name": "French Fries",
            "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
            "description": "Crispy golden fries with ketchup.",
            "price": 3.99
        },
        {
            "id": 17,
            "name": "Greek Salad",
            "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
            "description": "Salad with feta cheese, olives, and veggies.",
            "price": 7.25
        },
        {
            "id": 18,
            "name": "BBQ Chicken Wings",
            "image": "https://images.unsplash.com/photo-1627497301651-8b46a539f136",
            "description": "Sticky, saucy, and spicy grilled wings.",
            "price": 9.49
        },
        {
            "id": 19,
            "name": "Ice Cream Sundae",
            "image": "https://images.unsplash.com/photo-1589712235274-cf697225df43",
            "description": "Vanilla sundae topped with chocolate syrup.",
            "price": 4.99
        },
        {
            "id": 20,
            "name": "Avocado Toast",
            "image": "https://images.unsplash.com/photo-1613145992672-31b613bbf18f",
            "description": "Toasted bread with smashed avocado.",
            "price": 6.90
        }
    ];

    return (
        <>
            <Nav />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-6">All Food Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {foods.map((food) => (
                        <div key={food.id} className="bg-white rounded-lg shadow p-4 text-center">
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="mt-2 text-lg font-semibold">{food.name}</h3>
                            <p className="text-sm text-gray-500">{food.description}</p>
                            <p className="text-orange-600 font-bold mt-1">${food.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Viewmore;
