import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DESKTOP_ITEM = 96;
const GAP = 12;
const DESKTOP_VISIBLE = 6;

export default function Header({ onServiceChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState("taxi");
  const navigate = useNavigate();

  const services = [
    { label: "Taxi", img: "/taxi.jpg" },
    { label: "Outstation", img: "/outstation.png" },
    { label: "Car Rentals", img: "/car-rentals.png" },
    { label: "Tourism", img: "/tourism.png" },
    { label: "Deals", img: "/deals.png" },
    { label: "Lift", img: "/select-a-city.png" },
    { label: "Explore", img: "/flight.png" },
    { label: "Drivers", img: "/deals.png" },
    { label: "Events", img: "/hotel.png" },
    { label: "Ambulance", img: "/amb.png" },
    { label: "Drink Drive", img: "/taxi.jpg" },
  ];

  const maxIndex = services.length - DESKTOP_VISIBLE;
  const translateX = currentIndex * (DESKTOP_ITEM + GAP);

  const handleServiceClick = (label) => {
    const key = label.toLowerCase().replace(/\s+/g, "");
    setSelectedService(key);
    onServiceChange?.(key);
  };

  const next = () => {
    if (currentIndex < maxIndex) setCurrentIndex((i) => i + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const isActive = (label) =>
    selectedService === label.toLowerCase().replace(/\s+/g, "");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row gap-4 py-3 lg:items-center lg:h-28">

          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/TaxiLogo.png"
              alt="Taxi Logo"
              className="h-10 w-16 lg:h-20 lg:w-20 object-contain cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* MOBILE SERVICES */}
          <div className="flex lg:hidden w-full overflow-x-auto scrollbar-hide gap-3 py-2 justify-start pl-3">
            {services.map((service) => (
              <button
                key={service.label}
                onClick={() => handleServiceClick(service.label)}
                className={`flex-shrink-0 h-16 w-16 rounded-full transition 
                  flex flex-col items-center justify-center
                  ${
                    isActive(service.label)
                      ? "bg-yellow-200 border-2 border-yellow-500"
                      : "bg-yellow-100 hover:bg-yellow-200"
                  }`}
              >
                <img
                  src={service.img}
                  alt={service.label}
                  className="h-6 w-6 object-contain"
                />
                <span className="mt-1 text-[10px] font-semibold text-yellow-800 text-center">
                  {service.label}
                </span>
              </button>
            ))}
          </div>

          {/* DESKTOP SERVICES */}
          <div className="hidden lg:flex items-center justify-center gap-4 flex-1">

            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition
                ${currentIndex === 0
                  ? "bg-gray-100 opacity-40 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              <FaArrowLeft />
            </button>

            <div
              className="overflow-hidden"
              style={{
                width:
                  DESKTOP_VISIBLE * DESKTOP_ITEM +
                  (DESKTOP_VISIBLE - 1) * GAP,
              }}
            >
              <div
                className="flex gap-3 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${translateX}px)` }}
              >
                {services.map((service) => (
                  <div
                    key={service.label}
                    className="flex flex-col items-center flex-shrink-0"
                  >
                    <button
                      onClick={() => handleServiceClick(service.label)}
                      className={`h-24 w-24 rounded-full transition
                        flex items-center justify-center
                        ${
                          isActive(service.label)
                            ? "bg-yellow-200 border-2 border-yellow-500"
                            : "bg-yellow-100 hover:bg-yellow-200"
                        }`}
                    >
                      <img
                        src={service.img}
                        alt={service.label}
                        className="h-16 w-16 object-contain"
                      />
                    </button>

                    <span className="mt-2 text-xs font-semibold text-yellow-800 text-center">
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition
                ${currentIndex === maxIndex
                  ? "bg-gray-100 opacity-40 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}
