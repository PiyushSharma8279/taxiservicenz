import React, { useState, useEffect } from "react";
import HomeOptions from "./HomeOption";
import Content from "./Content";
import TaxiForm from "../Taxi/TaxiForm";
import OutstationForm from "../Taxi/OustationForm";
import PartialForm from "../Taxi/PatialForm";


export default function Home({ selectedService = "taxi" }) {

    const [service, setService] = useState(selectedService);

    const [selectedOptions, setSelectedOptions] = useState({
        vehicleType: "",
        seaterType: "",
        city: ""
    });

    useEffect(() => {
        setService(selectedService);
        setSelectedOptions({
            vehicleType: "",
            seaterType: "",
            city: ""
        });
    }, [selectedService]);

    const handleOptionChange = (data) => {
        setSelectedOptions(prev => ({
            ...prev,
            ...data
        }));
    };

    const renderForm = () => {
        switch (service) {
            case "taxi":
                return (
                    <TaxiForm
                        selectedOptions={selectedOptions}
                    />
                );
            case "outstation":
                return (
                    <OutstationForm
                        selectedOptions={selectedOptions}
                    />
                );
            case "partial":
                return <PartialForm />;
            default:
                return <TaxiForm />;
        }
    };

    return (
        <div className="w-full">

            <div className="flex justify-center w-full">
                <div className="max-w-7xl w-full flex justify-center">
                    <HomeOptions
                        service={service}
                        onOptionChange={handleOptionChange}
                    />
                </div>
            </div>

            <div className="bg-white pt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-yellow-400 rounded-2xl shadow-xl p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {renderForm()}
                        <div className="hidden lg:flex justify-center">
                            <img src="/car.png" alt="Service" className="max-h-[320px]" />
                        </div>
                    </div>
                </div>
            </div>

            <Content />
        </div>
    );
}