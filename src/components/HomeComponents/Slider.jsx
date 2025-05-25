import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../css/slider.css'


const images = [
    {
        src: "https://thumbs.dreamstime.com/b/delicious-pizza-vibrant-toppings-bursting-flavor-colorful-ai-generated-food-image-perfect-illustrating-blogs-gourmet-325120127.jpg",
        title: "Delicious Pizza",
    },
    {
        src: "https://static.vecteezy.com/system/resources/thumbnails/035/998/634/small/ai-generated-delicious-and-juicy-burger-on-the-table-ai-generative-photo.jpg",
        title: "Juicy Burger",
    },
    {
        src: "https://img.freepik.com/free-photo/freshness-healthy-eating-homemade-vegetarian-pasta-generated-by-artificial-intelligence_188544-128803.jpg",
        title: "Creamy Pasta",
    },
    {
        src: "https://media.istockphoto.com/id/1053855542/photo/chopstick-with-nigiri-sushi-piece.jpg?s=612x612&w=0&k=20&c=sy31QLUoIhuuacPrd9_Aick4D_yVEZEbVTZv_k4tuZc=",
        title: "Fresh Sushi",
    },
    {
        src: "https://previews.123rf.com/images/jetapura9974/jetapura99742305/jetapura9974230500234/204347235-a-soft-strawberry-ice-cream-cone-with-swirl-splash-vector-ads-promo-poster-with-realistic-icecream.jpg",
        title: "Sweet Desserts",
    },
];
function Slider() {
    return (
        <>
            <div className="slider-container  static ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-item">
                                <img src={image.src} alt={image.title} className="slider-image" />
                                <div className="slider-overlay">
                                    <motion.p
                                        className="awesome-text font-black"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        {image.title}
                                    </motion.p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Slider
