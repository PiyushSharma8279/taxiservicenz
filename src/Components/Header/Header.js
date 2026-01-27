import React, { useState } from "react";

const DESKTOP_ITEM = 96; // px
const GAP = 12;
const DESKTOP_VISIBLE = 6;

export default function Header({ onServiceChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    "Taxi",
    "Outstation",
    "Car Rentals",
    "Tourism",
    "Deals",
    "Lift",
    "Explore",
    "Drivers",
    "Events",
    "Ambulance",
    "Drink Drive",
  ];

  const maxIndex = services.length - DESKTOP_VISIBLE;

  const next = () => {
    if (currentIndex < maxIndex) setCurrentIndex((i) => i + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const translateX = currentIndex * (DESKTOP_ITEM + GAP);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-28 lg:h-28 gap-4">

          <img
            src="/TaxiLogo.png"
            alt="Taxi Logo"
            className="h-10 w-10 lg:h-14 lg:w-20 lg:h-20 mt-2 object-contain flex-shrink-0"
          />

          <div className="flex lg:hidden flex-1 overflow-x-auto scrollbar-hide gap-3 py-2">
            {services.map((label) => (
              <button
                key={label}
                onClick={() => onServiceChange?.(label.toLowerCase())}
                className="flex-shrink-0 h-10 px-4 rounded-full bg-yellow-100 
                           text-xs font-semibold text-yellow-700 hover:bg-yellow-200 transition"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-center gap-4 flex-1">
      
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition
                ${
                  currentIndex === 0
                    ? "bg-gray-100 opacity-40 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              ◀
            </button>

            {/* Viewport */}
            <div
              className="overflow-hidden"
              style={{
                width:
                  DESKTOP_VISIBLE * DESKTOP_ITEM +
                  (DESKTOP_VISIBLE - 1) * GAP,
              }}
            >
              {/* Track */}
              <div
  className="flex gap-3 transition-transform duration-300 ease-out"
  style={{ transform: `translateX(-${translateX}px)` }}
>
  {services.map((label) => (
    <button
      key={label}
      onClick={() => onServiceChange?.(label.toLowerCase())}
      className="h-24 w-24 flex-shrink-0 rounded-full 
                 bg-yellow-100 text-sm font-semibold 
                 text-yellow-800 hover:bg-yellow-200 transition 
                 flex items-center justify-center"
      title={label}
    >
      {label} {/* Optional: use first letter or an icon */}
    </button>
  ))}
</div>

            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition
                ${
                  currentIndex === maxIndex
                    ? "bg-gray-100 opacity-40 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              ▶
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button className="text-sm font-medium text-gray-600 hover:text-yellow-600">
              Login
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md text-sm font-semibold hover:bg-yellow-600">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-md text-sm font-semibold hover:bg-yellow-50">
              Driver
            </button>
          </div>
        </div>
      </nav>

      {/* Scrollbar hide */}
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
