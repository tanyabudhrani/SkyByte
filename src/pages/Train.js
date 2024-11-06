// src/pages/Transport.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingTrain from "../components/LandingTrain";
import ContentSection from "../components/ContentSection";
import Payment from "../components/Payment";
import StationsWhere from "../components/StationsWhere";

export default function Train() {
  // Changed from LandingPage to Transport
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#ECEEED]">
        {/* Add your transport page content here */}
        <LandingTrain />
        <ContentSection />
        <Payment />
        <StationsWhere />
        <Footer />
      </div>
    </>
  );
}
