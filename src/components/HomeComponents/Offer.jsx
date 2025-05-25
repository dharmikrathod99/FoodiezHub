import { useEffect, useState } from "react";

function Offer() {
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
    return (
        <>
            <section
                className="w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/thumbnails/002/544/725/small/abstract-background-with-colorful-gradient-vector.jpg')",
                }}
            >
                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10">
                    {/* Left: Image with animation */}
                    <div className="w-full md:w-1/2 flex justify-center animate-bounce">
                        <img
                            src="https://gramentheme.com/html/fresheat/assets/img/timer/timerThumb1_1.png"
                            alt="Delicious Burger"
                            className="w-72 h-72 object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right: Countdown Timer */}
                    <div className="w-full md:w-1/2 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            🔥 Special Offer Ends In:
                        </h2>
                        <p className="text-6xl font-mono bg-black/50 inline-block px-6 py-2 rounded-xl mt-2">
                            {formatTime(timeLeft)}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer
