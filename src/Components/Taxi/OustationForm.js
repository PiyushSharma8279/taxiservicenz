import React, { useState } from "react";

export default function OutstationForm() {

    const [formData, setFormData] = useState({
        city: "",
        vehicleType: "",
        pickup: "",
        drop: "",
        date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Outstation Booking:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <h1 className="text-3xl font-bold">🛣️ Outstation</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                    type="text"
                    name="city"
                    placeholder="Select City"
                    value={formData.city}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                />

                <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                >
                    <option value="">Select Vehicle</option>
                    <option>Cab</option>
                    <option>Auto</option>
                </select>

                <input
                    type="text"
                    name="pickup"
                    placeholder="Pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                />

                <input
                    type="text"
                    name="drop"
                    placeholder="Drop"
                    value={formData.drop}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                />

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                />
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg">
                BOOK NOW
            </button>
        </form>
    );
}