// src/pages/Transport.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutTransport from "../components/AboutTransport";
import TransportOptions from "../components/TransportOptions";

export default function Transport() {
  // Changed from LandingPage to Transport
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#ECEEED]">
        <AboutTransport />
        <TransportOptions />
        {/* Add your transport page content here */}
        <Footer />
      </div>
    </>
  );
}
