import React, { useState, useEffect } from "react";

const SERVICE_OPTIONS = {
  taxi: [
    { label: "Cab", img: "/cab.png" },
    { label: "Auto", img: "/auto.jpg" },
    { label: "Riksha", img: "/riksha.png" },
  ],
  outstation: [
    { label: "Taxi" },
    { label: "Private" },
  ],
  carrentals: [
    { label: "Company" },
    { label: "Individual" },
  ],
  tourism: [
    { label: "Package" },
    { label: "Make My Own Package" },
  ],
  lift: [{ label: "Select City" }],
};

const CAB_SEATERS = [
  { label: "4 Seater" },
  { label: "6 Seater" },
  { label: "12 Seater" },
];

export default function HomeOptions({ service }) {
  const options = SERVICE_OPTIONS[service];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    setSelectedSubOption(null);
  }, [service]);

  if (!service || !options) return null;

  return (
    <div className="px-4 mt-4 w-full flex flex-col items-center gap-3">

      {/* 🚕 MAIN OPTIONS WITH IMAGE */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {options.map((option) => {
          const isActive = selectedOption === option.label;

          return (
            <button
              key={option.label}
              onClick={() => {
                setSelectedOption(option.label);
                setSelectedSubOption(null);

                window.dispatchEvent(
                  new CustomEvent("home-option-change", {
                    detail: {
                      service,
                      option: option.label,
                      subOption: null,
                    },
                  })
                );
              }}
              className={`flex flex-col items-center justify-center  rounded-full text-xs font-semibold transition min-w-[70px]
                ${
                  isActive
                    ? "bg-yellow-200 border-2 border-yellow-500 text-yellow-900"
                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                }`}
            >
              {option.img && (
                <img
                  src={option.img}
                  alt={option.label}
                  className="h-12 w-12 object-contain mb-1"
                />
              )}
              {option.label}
            </button>
          );
        })}
      </div>

      {/* 🚘 CAB SEATERS */}
      {service === "taxi" && selectedOption === "Cab" && (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {CAB_SEATERS.map((seat) => {
            const isActive = selectedSubOption === seat.label;

            return (
              <button
                key={seat.label}
                onClick={() => {
                  setSelectedSubOption(seat.label);

                  window.dispatchEvent(
                    new CustomEvent("home-option-change", {
                      detail: {
                        service,
                        option: "Cab",
                        subOption: seat.label,
                      },
                    })
                  );
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition
                  ${
                    isActive
                      ? "bg-green-200 border-2 border-green-500 text-green-900"
                      : "bg-green-100 text-green-800 hover:bg-green-200"
                  }`}
              >
                {seat.label}
              </button>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
