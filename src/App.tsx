import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import BookVisitButton from './components/BookVisitButton';
import FloatingActions from './components/FloatingActions';
import QuickEnquiry from './components/QuickEnquiry';
import FullPageLoader from './components/FullPageLoader';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import MachineRoomLiftPage from './pages/products/MachineRoomLiftPage';
import HydraulicPassengerLiftPage from './pages/products/HydraulicPassengerLiftPage';
import CarLiftPage from './pages/products/CarLiftPage';
import HydraulicGoodsLiftPage from './pages/products/HydraulicGoodsLiftPage';
import MRLElevatorPage from './pages/products/MRLElevatorPage';

import AMCPage from './pages/services/AMCPage';
import ModernizationPage from './pages/services/ModernizationPage';

// No animation wrapper (fully static and snappy)
const PageWrapper = ({ children }) => <>{children}</>;

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoaded(true), 1200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loaded) return <FullPageLoader />;

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative overflow-hidden text-bottle-green-solid bg-pearlescent">
        <Header />

        <main className="relative z-10 m-0 p-0">
          <Routes>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="/machine-room-lift" element={<PageWrapper><MachineRoomLiftPage /></PageWrapper>} />
            <Route path="/mrl-elevator" element={<PageWrapper><MRLElevatorPage /></PageWrapper>} />
            <Route path="/hydraulic-passenger-lift" element={<PageWrapper><HydraulicPassengerLiftPage /></PageWrapper>} />
            <Route path="/car-lift" element={<PageWrapper><CarLiftPage /></PageWrapper>} />
            <Route path="/hydraulic-goods-lift" element={<PageWrapper><HydraulicGoodsLiftPage /></PageWrapper>} />
            <Route path="/amc-services" element={<PageWrapper><AMCPage /></PageWrapper>} />
            <Route path="/lift-modernization" element={<PageWrapper><ModernizationPage /></PageWrapper>} />
          </Routes>
        </main>

        <Footer />

        <QuickEnquiry />
        <div className="fixed left-4 bottom-20 z-50">
          <BookVisitButton />
        </div>
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;