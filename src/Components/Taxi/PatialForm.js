import React, { useState, useEffect } from "react";

export default function PartialForm() {

    const [formData, setFormData] = useState({
        pickup: "",
        drop: "",
        seatCount: 1,
        travelDate: "",
        pricePerSeat: 0,
        totalPrice: 0
    });

    const routes = [
        { pickup: "City A", drop: "City B", price: 500 },
        { pickup: "City B", drop: "City C", price: 400 }
    ];

    useEffect(() => {
        const route = routes.find(
            r =>
                r.pickup === formData.pickup &&
                r.drop === formData.drop
        );

        const price = route ? route.price : 0;

        setFormData(prev => ({
            ...prev,
            pricePerSeat: price,
            totalPrice: price * prev.seatCount
        }));
    }, [formData.pickup, formData.drop, formData.seatCount]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "seatCount" ? Number(value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Partial Booking:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <h1 className="text-3xl font-bold">🧍 Partial Ride Booking</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Pickup Location */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Pickup Location</label>
                    <select
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-lg outline-none"
                        required
                    >
                        <option value="">Select Pickup</option>
                        <option value="City A">City A</option>
                        <option value="City B">City B</option>
                    </select>
                </div>

                {/* Drop Location */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Drop Location</label>
                    <select
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-lg outline-none"
                        required
                    >
                        <option value="">Select Drop</option>
                        <option value="City B">City B</option>
                        <option value="City C">City C</option>
                    </select>
                </div>

                {/* Travel Date */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Travel Date</label>
                    <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-lg outline-none"
                        required
                    />
                </div>

                {/* Number of Seats */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Number of Seats</label>
                    <input
                        type="number"
                        name="seatCount"
                        min="1"
                        value={formData.seatCount}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-lg outline-none"
                        required
                    />
                </div>

                {/* Price Per Seat */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Price Per Seat</label>
                    <input
                        type="text"
                        value={`₹ ${formData.pricePerSeat}`}
                        readOnly
                        className="px-4 py-3 rounded-lg bg-gray-200"
                    />
                </div>

                {/* Total Price */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Total Price</label>
                    <input
                        type="text"
                        value={`₹ ${formData.totalPrice}`}
                        readOnly
                        className="px-4 py-3 rounded-lg bg-gray-200 font-semibold"
                    />
                </div>

            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
                BOOK NOW
            </button>

        </form>
    );
}