import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (

        <>

            <div className="relative">
                {/* 🖼️ Floating Image Left Side */}
                <div className="absolute left-0 bottom-10 md:bottom-20 animate-float z-50 hidden xl:block">
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/shape/footerShape1_1.png"
                        alt="Floating Decoration"
                    />
                </div>

                {/* Footer Section */}
                <footer className="bg-[#0c1015] text-white relative z-10">

                    {/* Top orange banner */}
                    <div className="bg-orange-500 text-white px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 rounded-2xl mx-6">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">📍</span>
                            <div>
                                <p className="text-sm font-semibold">Address</p>
                                <p className="text-lg">4648 Rocky Road Philadelphia</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">📧</span>
                            <div>
                                <p className="text-sm font-semibold">Send Email</p>
                                <p className="text-lg">info@exmple.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">📞</span>
                            <div>
                                <p className="text-sm font-semibold">Call Emergency</p>
                                <p className="text-lg">+88 0123 654 99</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="max-w-7xl mx-auto px-6 pb-12 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-8">
                        {/* Logo and description */}
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <span className="text-orange-500">FRESHEAT</span>
                                <span className="text-sm font-medium">RESPONDENT</span>
                            </h1>
                            <p className="text-gray-400 mt-4">
                                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.
                            </p>
                            <div className="flex gap-4 mt-6">
                                <FaFacebookF className="hover:text-orange-500 transition" />
                                <FaTwitter className="hover:text-orange-500 transition" />
                                <FaLinkedinIn className="hover:text-orange-500 transition" />
                                <FaYoutube className="hover:text-orange-500 transition" />
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 border-b border-orange-500 inline-block pb-1">Quick Links</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li>➤ About Us</li>
                                <li>➤ Our Gallery</li>
                                <li>➤ Our Blogs</li>
                                <li>➤ FAQ’S</li>
                                <li>➤ Contact Us</li>
                            </ul>
                        </div>

                        {/* Our Menu */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 border-b border-orange-500 inline-block pb-1">Our Menu</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li>➤ Burger King</li>
                                <li>➤ Pizza King</li>
                                <li>➤ Fresh Food</li>
                                <li>➤ Vegetable</li>
                                <li>➤ Desserts</li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 border-b border-orange-500 inline-block pb-1">Contact Us</h2>
                            <p className="text-gray-400">
                                Monday – Friday: <span className="text-orange-500 font-medium">8am – 4pm</span>
                            </p>
                            <p className="text-gray-400 mb-4">
                                Saturday: <span className="text-orange-500 font-medium">8am – 12am</span>
                            </p>

                            {/* Email input with button inside */}
                            <div className="relative w-full max-w-md">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full p-2 pr-12 rounded-md bg-white text-black"
                                />
                                <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600">
                                    →
                                </button>
                            </div>

                            <div className="mt-3">
                                <label className="text-sm flex items-center gap-2">
                                    <input type="checkbox" />
                                    I agree to the <a href="#" className="underline">Privacy Policy.</a>
                                </label>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Custom floating animation style */}
                <style>
                    {`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                `}
                </style>
            </div>

        </>
    );
}
