import React, { useState, useEffect } from 'react';

export default function Home({ selectedService = 'taxi' }) {
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        pickupTime: '',
        passengers: '1',
        cabType: 'economy'
    });

    const serviceConfig = {
        taxi: {
            title: '🚕 Book a Taxi',
            subtitle: 'Choose your preferred taxi and get on your way',
            icon: '🚕'
        },
        outstation: {
            title: '🛣️ Outstation Cab',
            subtitle: 'Long distance travel made easy',
            icon: '🛣️'
        },
        carrentals: {
            title: '🚗 Car Rentals',
            subtitle: 'Rent a car for your journey',
            icon: '🚗'
        },
        tourism: {
            title: '✈️ Tourism Packages',
            subtitle: 'Explore New Zealand with us',
            icon: '✈️'
        },
        deals: {
            title: '🎉 Deals & Offers',
            subtitle: 'Get special discounts on your rides',
            icon: '🎉'
        },
        lift: {
            title: '🚙 Lift Service',
            subtitle: 'Quick and affordable rides',
            icon: '🚙'
        },
        explore: {
            title: '🗺️ Explore',
            subtitle: 'Discover places with our service',
            icon: '🗺️'
        },
        drivers: {
            title: '👨‍💼 Find a Driver',
            subtitle: 'Connect with professional drivers',
            icon: '👨‍💼'
        },
        events: {
            title: '🎊 Events Transport',
            subtitle: 'Group transport for your events',
            icon: '🎊'
        },
        ambulance: {
            title: '🚑 Ambulance Services',
            subtitle: 'Emergency medical transport 24/7',
            icon: '🚑'
        },
        drinkdrive: {
            title: '🚨 Drink Drive Prevention',
            subtitle: 'Safe ride home program',
            icon: '🚨'
        }
    };

    const currentService = serviceConfig[selectedService] || serviceConfig.taxi;


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', { service: selectedService, ...formData });
    };

    return (
        <div id="home" className="w-full">
            {/* Hero Section */}
            {/* <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto">

                </div>
            </div> */}

            {/* Booking Form Section */}
            {/* Booking Form Section */}
            <div className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-yellow-400 rounded-2xl shadow-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* LEFT: FORM */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <h1 className="text-3xl md:text-3xl font-bold mb-4">{currentService.title}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Pick Up */}
                                <div>
                                    <label className="block font-semibold text-black mb-1">
                                        Pick Up Location
                                    </label>
                                    <input
                                        type="text"
                                        name="pickupLocation"
                                        placeholder="Pick Up Location"
                                        value={formData.pickupLocation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg outline-none"
                                    />
                                </div>

                                {/* Drop Off */}
                                <div>
                                    <label className="block font-semibold text-black mb-1">
                                        Drop Off Location
                                    </label>
                                    <input
                                        type="text"
                                        name="dropoffLocation"
                                        placeholder="Drop Off Location"
                                        value={formData.dropoffLocation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg outline-none"
                                    />
                                </div>

                                {/* Cab Type */}
                                <div>
                                    <label className="block font-semibold text-black mb-1">
                                        Cab Type
                                    </label>
                                    <select
                                        name="cabType"
                                        value={formData.cabType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg outline-none"
                                    >
                                        <option>Economy</option>
                                        <option>Comfort</option>
                                        <option>Premium</option>
                                    </select>
                                </div>

                                {/* Pick Up Date */}
                                <div>
                                    <label className="block font-semibold text-black mb-1">
                                        Pick Up Date
                                    </label>
                                    <input
                                        type="date"
                                        name="pickupDate"
                                        value={formData.pickupDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg outline-none"
                                    />
                                </div>

                                {/* Pick Up Time */}
                                <div>
                                    <label className="block font-semibold text-black mb-1">
                                        Pick Up Time
                                    </label>
                                    <input
                                        type="time"
                                        name="pickupTime"
                                        value={formData.pickupTime}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg outline-none"
                                    />
                                </div>

                                {/* Passengers */}
                                <div>
                                    <label className="block font-semibold text-black mb-1">
                                        Passengers
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        name="passengers"
                                        value={formData.passengers}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg outline-none"
                                    />
                                </div>
                            </div>

                            {/* Book Button */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition"
                            >
                                BOOK NOW
                            </button>

                            {/* Mobile image: show only on mobile, below BOOK NOW */}
                            <div className="mt-6 lg:hidden flex justify-center">
                                <img
                                    src="/car.png"
                                    alt="Taxi"
                                    className="max-h-[220px] object-contain"
                                />
                            </div>
                        </form>

                        {/* RIGHT: IMAGE for desktop */}
                        <div className="hidden lg:flex justify-center">
                            <img
                                src="/car.png"
                                alt="Taxi"
                                className="max-h-[320px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* How It Works Section */}
            <div id="features" className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Book Taxi For Your ,Ride ?</h2>
                    <p className="text-center text-gray-600">There are many variations of passages available the majority have suffered alteration in some form generators
                        on the Internet tend to repeat predefined chunks injected humour randomised words look even slightly believable.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center p-8 bg-yellow-50 rounded-lg hover:shadow-lg transition">
                            <div className="text-5xl mb-4">📍</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Choose Location</h3>
                            <p className="text-gray-600">Pick your starting point and destination with ease.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center p-8 bg-yellow-50 rounded-lg hover:shadow-lg transition">
                            <div className="text-5xl mb-4">📅</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Pick-up Date</h3>
                            <p className="text-gray-600">Choose your preferred date for the ride.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center p-8 bg-yellow-50 rounded-lg hover:shadow-lg transition">
                            <div className="text-5xl mb-4">🚗</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Book Your Car</h3>
                            <p className="text-gray-600">Find the perfect ride for your next journey.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="py-16 px-4 bg-yellow-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow border-l-4 border-yellow-500">
                            <span className="text-3xl">✅</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Available Nationwide</h3>
                                <p className="text-gray-600">Operating in 20+ cities across New Zealand including Auckland, Wellington, and Christchurch.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow border-l-4 border-yellow-500">
                            <span className="text-3xl">🤝</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Choose Your Driver</h3>
                                <p className="text-gray-600">Select your preferred driver permanently and add them to your favorite list.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow border-l-4 border-yellow-500">
                            <span className="text-3xl">💳</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Flexible Payment</h3>
                                <p className="text-gray-600">Multiple payment options including crypto and contactless payments for safety.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow border-l-4 border-yellow-500">
                            <span className="text-3xl">🛡️</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Safe & Secure</h3>
                                <p className="text-gray-600">100% contactless payment options and enhanced safety features for peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold mb-3 text-yellow-600">🚕 Taxi Service</h3>
                            <p className="text-gray-600">Standard taxi service for your daily commute and city travel.</p>
                        </div>

                        <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold mb-3 text-yellow-600">🚗 Car Rentals</h3>
                            <p className="text-gray-600">Long-term car rental options for your convenience and flexibility.</p>
                        </div>

                        <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold mb-3 text-yellow-600">🚑 Ambulance</h3>
                            <p className="text-gray-600">Emergency ambulance services available 24/7.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
                    <p className="text-xl mb-8 text-yellow-100">We are ready to take your call 24 hours, 7 days a week!</p>
                    <a href="tel:+64277777267" className="inline-block bg-white text-yellow-600 font-bold px-8 py-3 rounded-lg hover:bg-yellow-50 transition text-lg">
                        📞 +64 27 777 7267
                    </a>
                </div>
            </div>

            {/* Map Section */}
            <div className="py-16 bg-white">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center text-gray-800">Our Coverage Area</h2>
                </div>
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3086935.479138718!2d175.003909!3d-40.924835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sin!4v1769438537152!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
