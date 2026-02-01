import React, { useState, useEffect } from "react";

const SERVICE_OPTIONS = {
    taxi: [
        { label: "4 Seater" },
        { label: "6 Seater" },
        { label: "12 Seater" },
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
    lift: [
        { label: "Select City" },
    ],
};

export default function HomeOptions({ service }) {
    const options = SERVICE_OPTIONS[service];
    const [selectedOption, setSelectedOption] = useState(null);

    // Clear any previously selected option when the service changes
    useEffect(() => {
        setSelectedOption(null);
    }, [service]);

    // ❌ Remove this to avoid default selection
    // useEffect(() => {
    //     if (options && options.length > 0) {
    //         setSelectedOption(options[0].label); // auto-select first
    //     }
    // }, [service]);

    if (!service || !options) return null;

    return (
        <div className="px-4 mt-4 w-full flex justify-center">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {options.map((option) => {
                    const isActive = selectedOption === option.label;

                    return (
                        <button
                            key={option.label}
                            onClick={() => {
                                setSelectedOption(option.label);

                                window.dispatchEvent(
                                    new CustomEvent("home-option-change", {
                                        detail: {
                                            service,
                                            option: option.label
                                        }
                                    })
                                );
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-semibold
                whitespace-nowrap transition
                ${isActive
                                    ? "bg-yellow-200 border-2 border-yellow-500 text-yellow-900"
                                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                }`}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>

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
