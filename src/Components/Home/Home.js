import React, { useState, useEffect } from "react";
import HomeOptions from "./HomeOption";
import Content from "./Content";
import { useAuth } from "../../Context/AuthContext";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
import TaxiForm from "../Taxi/TaxiForm";
import OutstationForm from "../Taxi/OustationForm";
import PartialForm from "../Taxi/PatialForm";

export default function Home({ selectedService = "taxi" }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [service, setService] = useState(selectedService);
  const [showLogin, setShowLogin] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState({
    vehicleType: "",
    seaterType: "",
    city: "",
  });

  useEffect(() => {
    setService(selectedService);
    setSelectedOptions({
      vehicleType: "",
      seaterType: "",
      city: "",
    });
  }, [selectedService]);

  const handleOptionChange = (data) => {
    setSelectedOptions((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // 🔥 This will be passed to forms
  const handleBookRide = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      alert("Ride Booked Successfully 🚖");
    }
  };

  const renderForm = () => {
    switch (service) {
      case "taxi":
        return (
          <TaxiForm
            selectedOptions={selectedOptions}
            onBookRide={handleBookRide}
          />
        );
      case "outstation":
        return (
          <OutstationForm
            selectedOptions={selectedOptions}
            onBookRide={handleBookRide}
          />
        );
      case "partial":
        return <PartialForm onBookRide={handleBookRide} />;
      default:
        return <TaxiForm onBookRide={handleBookRide} />;
    }
  };

  return (
    <div className="w-full">

      {/* 🔐 Login / Logout Button */}
      <div className="max-w-7xl mx-auto mt-4 px-4 flex justify-end">
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-black text-white px-6 py-2 rounded-xl font-semibold"
          >
            Login
          </button>
        )}
      </div>

      {/* Options */}
      <div className="flex justify-center w-full">
        <div className="max-w-7xl w-full flex justify-center">
          <HomeOptions
            service={service}
            onOptionChange={handleOptionChange}
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-400 rounded-2xl shadow-xl p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {renderForm()}
            <div className="hidden lg:flex justify-center">
              <img
                src="/car.png"
                alt="Service"
                className="max-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Become Driver */}
      <div className="max-w-7xl mx-auto mt-4 px-4">
        <button
          className="w-full bg-white border-2 border-black text-black py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition"
          onClick={() => navigate("become-a-driver")}
        >
          Become a Driver
        </button>
      </div>

      <Content />

      {/* 🔥 LOGIN POPUP */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </div>
  );
}