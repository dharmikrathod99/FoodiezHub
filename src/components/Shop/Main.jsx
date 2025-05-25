import React, { useState } from 'react';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';

const allProducts = [
    {
        "id": 1,
        "name": "Margherita Pizza",
        "image": "https://gramentheme.com/html/fresheat/assets/img/dishes/dishes2_1.png",
        "description": "Classic Margherita with fresh basil and mozzarella.",
        "price": 8.99,
        "tags": ["Cheese", "Pizza"]
    },
    {
        "id": 2,
        "name": "Cheeseburger",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
        "description": "Juicy beef patty with cheese and crispy lettuce.",
        "price": 7.49,
        "tags": ["Non Veg", "Cheese"]
    },
    {
        "id": 3,
        "name": "Spaghetti Bolognese",
        "image": "https://images.unsplash.com/photo-1608759260644-74c4ff80c7c6",
        "description": "Pasta with rich beef and tomato sauce.",
        "price": 10.25,
        "tags": ["Non Veg", "Uncategorized"]
    },
    {
        "id": 4,
        "name": "Sushi Platter",
        "image": "https://images.unsplash.com/photo-1553621042-f6e147245754",
        "description": "Assorted fresh sushi with soy and wasabi.",
        "price": 14.99,
        "tags": ["Non Veg", "Uncategorized"]
    },
    {
        "id": 5,
        "name": "Chicken Tikka Masala",
        "image": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
        "description": "Creamy Indian chicken curry with spices.",
        "price": 11.50,
        "tags": ["Non Veg", "Spicy"]
    },
    {
        "id": 6,
        "name": "Veggie Wrap",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
        "description": "Healthy wrap with fresh veggies and hummus.",
        "price": 6.25,
        "tags": ["Uncategorized"]
    },
    {
        "id": 7,
        "name": "Pepperoni Pizza",
        "image": "https://images.unsplash.com/photo-1603079841192-51ba5d601731",
        "description": "Pepperoni topped with gooey cheese.",
        "price": 9.99,
        "tags": ["Pizza", "Non Veg", "Cheese"]
    },
    {
        "id": 8,
        "name": "Beef Burrito",
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "description": "Mexican burrito with beef, beans, and cheese.",
        "price": 8.50,
        "tags": ["Non Veg", "Cheese"]
    },
    {
        "id": 9,
        "name": "Caesar Salad",
        "image": "https://images.unsplash.com/photo-1609981348350-3514d6a2243f",
        "description": "Crisp romaine with Caesar dressing and croutons.",
        "price": 7.99,
        "tags": ["Uncategorized"]
    },
    {
        "id": 10,
        "name": "Ramen Bowl",
        "image": "https://images.unsplash.com/photo-1570563671764-8c9edce7a4a7",
        "description": "Hot noodle soup with egg and pork belly.",
        "price": 9.75,
        "tags": ["Non Veg", "Uncategorized"]
    },
    {
        "id": 11,
        "name": "Pancakes with Syrup",
        "image": "https://images.unsplash.com/photo-1550317138-10000687a72b",
        "description": "Fluffy pancakes served with maple syrup.",
        "price": 5.95,
        "tags": ["Uncategorized"]
    },
    {
        "id": 12,
        "name": "Grilled Cheese Sandwich",
        "image": "https://images.unsplash.com/photo-1562440499-64f9cf9bd4b9",
        "description": "Crispy toasted bread filled with melted cheese.",
        "price": 4.99,
        "tags": ["Cheese"]
    },
    {
        "id": 13,
        "name": "Fruit Smoothie",
        "image": "https://images.unsplash.com/photo-1571689936004-5c760edcd4e5",
        "description": "Mixed fruit smoothie with banana and berries.",
        "price": 3.50,
        "tags": ["Drink", "Cocktail"]
    },
    {
        "id": 14,
        "name": "Chocolate Cake",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        "description": "Rich chocolate cake with creamy frosting.",
        "price": 6.75,
        "tags": ["Uncategorized"]
    },
    {
        "id": 15,
        "name": "Tuna Sandwich",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        "description": "Toasted sandwich filled with tuna and mayo.",
        "price": 6.20,
        "tags": ["Non Veg"]
    },
    {
        "id": 16,
        "name": "French Fries",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
        "description": "Crispy golden fries with ketchup.",
        "price": 3.99,
        "tags": ["Uncategorized"]
    },
    {
        "id": 17,
        "name": "Greek Salad",
        "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        "description": "Salad with feta cheese, olives, and veggies.",
        "price": 7.25,
        "tags": ["Cheese"]
    },
    {
        "id": 18,
        "name": "BBQ Chicken Wings",
        "image": "https://images.unsplash.com/photo-1627497301651-8b46a539f136",
        "description": "Sticky, saucy, and spicy grilled wings.",
        "price": 9.49,
        "tags": ["Non Veg"]
    },
    {
        "id": 19,
        "name": "Ice Cream Sundae",
        "image": "https://images.unsplash.com/photo-1589712235274-cf697225df43",
        "description": "Vanilla sundae topped with chocolate syrup.",
        "price": 4.99,
        "tags": ["Uncategorized"]
    },
    {
        "id": 20,
        "name": "Avocado Toast",
        "image": "https://images.unsplash.com/photo-1613145992672-31b613bbf18f",
        "description": "Toasted bread with smashed avocado.",
        "price": 6.90,
        "tags": ["Uncategorized"]
    }
];
    ;

const tags = ['Cheese', 'Cocktail', 'Drink', 'Uncategorized', 'Pizza', 'Non Veg'];

function Main() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [maxPrice, setMaxPrice] = useState(100);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sortOption, setSortOption] = useState('default');

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handlePriceChange = (e) => setMaxPrice(Number(e.target.value));
    const handleTagClick = (tag) => setSelectedTag(tag === selectedTag ? '' : tag);

    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag === '' || product.tags.includes(selectedTag);
        const matchesPrice = product.price <= maxPrice;
        return matchesSearch && matchesTag && matchesPrice;
    });

    // ✅ FIX: apply sorting AFTER filtering
    const sortedProducts = filteredProducts.slice().sort((a, b) => {
        switch (sortOption) {
            case 'lowToHigh':
                return a.price - b.price;
            case 'highToLow':
                return b.price - a.price;
            default:
                return 0;
        }
    });

    const openDetails = (product) => setSelectedProduct(product);
    const closeDetails = () => setSelectedProduct(null);

    return (
        <div className="bg-[#f5efe5] min-h-screen p-4 lg:p-10">
            <div className="grid lg:grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Search Box */}
                    <div className="bg-white rounded-lg p-5 shadow">
                        <h2 className="text-lg font-bold mb-2 border-b-2 border-red-500 w-fit">Search</h2>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mt-2">
                            <input
                                type="text"
                                placeholder="Search here"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full px-3 py-2 outline-none"
                            />
                            <button className="bg-white px-3 text-gray-500">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-white rounded-lg p-5 shadow">
                        <h2 className="text-lg font-bold mb-3 border-b-2 border-red-500 w-fit">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleTagClick(tag)}
                                    className={`px-3 py-1 rounded-md text-sm ${selectedTag === tag ? 'bg-red-100 text-red-600' : 'bg-gray-100 hover:bg-red-100'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="bg-white rounded-lg p-5 shadow">
                        <h2 className="text-lg font-bold mb-3 border-b-2 border-red-500 w-fit">Filter By Price</h2>
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={maxPrice}
                            onChange={handlePriceChange}
                            className="w-full accent-red-500"
                        />
                        <p className="text-sm mt-2 text-gray-600">Up to ${maxPrice}</p>
                    </div>
                </div>

                {/* Products Section */}
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                        <p>Showing {sortedProducts.length} of {allProducts.length} Results</p>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2"
                        >
                            <option value="default">Default Sorting</option>
                            <option value="lowToHigh">Price Low to High</option>
                            <option value="highToLow">Price High to Low</option>
                        </select>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sortedProducts.map((product, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg text-center shadow relative">
                                <div className="rounded-full border-dashed border-2 border-red-300 inline-block p-2 mb-3 ">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-28  h-28  rounded-full object-cover mx-auto  "
                                    />
                                </div>
                                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                                <div className="text-yellow-500 mb-1">★★★★☆</div>
                                <p className="text-sm text-gray-500 mb-1">The Registration Fee</p>
                                <p className="text-red-600 font-bold text-lg">${product.price.toFixed(2)}</p>
                                <button
                                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 justify-center hover:bg-red-600 mx-auto"
                                    onClick={() => openDetails(product)}
                                >
                                    ORDER NOW <FaShoppingBasket />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
                        <button
                            className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500"
                            onClick={closeDetails}
                        >
                            ×
                        </button>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-32 h-32 object-contain mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-center mb-2">{selectedProduct.name}</h2>
                        <p className="text-center text-gray-600 mb-4">{selectedProduct.description}</p>
                        <p className="text-center text-red-600 font-bold text-xl mb-4">${selectedProduct.price.toFixed(2)}</p>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-full w-full hover:bg-red-600">
                            Confirm Order
                        </button>
                    </div>
                </div>
            )}

            {/* Animation CSS */}
            <style>{`
                @keyframes rotateBorder {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .rotating-border {
                    animation: rotateBorder 6s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default Main;
