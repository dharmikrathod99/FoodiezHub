import React from 'react'

function Contacthero() {
    return (
        <>
            <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">

                {/* Left Image Part */}
                <div className="md:w-1/2 flex items-center justify-center">
                    <img
                        src="https://gramentheme.com/html/fresheat/assets/img/contact/contactThumb2_1.png"
                        alt="User details"
                        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Form Part */}
                <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 flex items-center justify-center">
                    <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">User Details</h2>

                        <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <label className="block mb-2 font-semibold text-gray-700" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white font-semibold py-3 rounded hover:bg-indigo-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Contacthero
