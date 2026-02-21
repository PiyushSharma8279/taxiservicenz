import React, { useState } from "react";

export default function TaxiForm() {

    const [formData, setFormData] = useState({
        pickup: "",
        drop: "",
        seaterType: "",
        cabType: "Economy",
        passengers: 1,
        date: ""
    });

    const seaterOptions = ["4 Seater", "6 Seater", "12 Seater"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Taxi Booking:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <h1 className="text-3xl font-bold">🚕 Book Taxi</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                    type="text"
                    name="pickup"
                    placeholder="Pickup Location"
                    value={formData.pickup}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg outline-none"
                />

                <input
                    type="text"
                    name="drop"
                    placeholder="Drop Location"
                    value={formData.drop}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg outline-none"
                />

                <select
                    name="seaterType"
                    value={formData.seaterType}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                >
                    <option value="">Select Seater</option>
                    {seaterOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <select
                    name="cabType"
                    value={formData.cabType}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg outline-none"
                >
                    <option>Economy</option>
                    <option>Comfort</option>
                    <option>Premium</option>
                </select>

                <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
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