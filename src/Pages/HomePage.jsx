import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";

export default function HomePage() {
     const [selectedService, setSelectedService] = useState('taxi');

      useEffect(() => {
             window.scrollTo(0, 0);
         }, []);

  const handleServiceChange = (serviceId) => {
    setSelectedService(serviceId);
  };
  return (
    <div className="min-h-screen bg-white">
      <Header onServiceChange={handleServiceChange} />
      <Home selectedService={selectedService} />
      <Footer />
    </div>
  );
}