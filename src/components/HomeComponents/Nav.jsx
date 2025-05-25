import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const controls = useAnimation();

    // Handle scroll change to shrink navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                controls.start({ height: "60px" });
            } else {
                setScrolled(false);
                controls.start({ height: "80px" });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    // Animation variants
    const linkVariants = {
        hover: {
            scale: 1.1,
            color: "#f97316",
            transition: { type: "spring", stiffness: 300 },
        },
    };


    return (
        <>
            <motion.nav
                animate={controls}
                initial={{ height: "80px" }}
                className={`fixed w-full z-50  shadow-md transition-all  duration-300 ${scrolled ? "shadow-lg" : ""
                    }`} style={{ backgroundColor: '#FF6F3C' }}
            >
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl font-bold text-white"
                    >
                        FoodiezHub
                    </motion.div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {["Home", "About", "Shop", "Gallary", "Contact"].map((item) => (
                            <motion.div
                                key={item}
                                variants={linkVariants}
                                whileHover="hover"
                                className="cursor-pointer"
                            >
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-white cursor-pointe"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-md"
                    >
                        <div className="flex flex-col items-center gap-4 py-3">
                            {["Home", "Menu", "About", "Contact"].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{
                                        scale: 1.05,
                                        color: "#D35400", // Dark Orange
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="text-gray-700 hover:text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </>
    )
}

export default Nav
