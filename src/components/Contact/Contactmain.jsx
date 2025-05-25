import React from 'react'

function Contactmain() {
    return (
        <>
            <section className="bg-gray-100 py-10 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    {/* Address */}
                    <div className="flex flex-col items-center space-y-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="text-lg font-semibold">Our Address</h3>
                        <p>123 Foodie Street, Flavor Town</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center space-y-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8-4H8m8 8H8m-3 4h18a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p>info@gmail.com</p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center space-y-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44a1 1 0 00.27 1.34l5.66 5.66a1 1 0 001.34.27l2.44-1.35L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        </svg>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p>888-999-7770</p>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex flex-col items-center space-y-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-lg font-semibold">Opening Hours</h3>
                        <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contactmain
