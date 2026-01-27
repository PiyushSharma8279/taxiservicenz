import { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  const [selectedService, setSelectedService] = useState('taxi');

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

export default App;
