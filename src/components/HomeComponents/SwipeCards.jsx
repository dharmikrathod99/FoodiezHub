import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring
} from "framer-motion";

// ✅ Add this!
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const cardData = [
    {
        id: 1,
        title: "Delicious Pizza",
        image: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png",
    },
    {
        id: 2,
        title: "Egg and Cucumber",
        image: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png",
    },
    {
        id: 3,
        title: "The registration fee",
        image: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
    {
        id: 4,
        title: "The registration fee",
        image: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png",
    },
    {
        id: 5,
        title: "The registration fee",
        image: "https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png",
    },
    {
        id: 6,
        title: "chinese Pasta",
        image: "https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_2.png",
    },
];

function SwipeCards() {
    return (
        <div className="w-full px-4 py-12  scrollbar-hide overflow-x-auto scrollbar-hide scroll-smooth bg-gradient-to-br from-indigo-100 to-violet-100">
            <div className="flex gap-6 w-max">
                {cardData.map((card) => (
                    <TiltCard key={card.id} title={card.title} image={card.image} />
                ))}
            </div>
        </div>
    );
}

const TiltCard = ({ title, image }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 200, damping: 10 });
    const ySpring = useSpring(y, { stiffness: 200, damping: 10 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (

        
        <>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 transition-transform"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg p-4"
                >
                    <img
                        src={image}
                        alt={title}
                        style={{
                            transform: "translateZ(75px)",
                        }}
                        className="mx-auto h-32 object-contain"
                    />
                    <p
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="mt-4 text-center text-xl font-bold"
                    >
                        {title}
                    </p>
                    <p className="mt-2 text-center text-gray-500">The Registration</p>
                </div>
            </motion.div>
        </>
    );
};

export default SwipeCards;
