// src/pages/Landing.js

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      {" "}
      {/* Added fragment wrapper */}
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Hero></Hero>
        <Marketplace></Marketplace>
        <Footer></Footer>
      </div>
    </>
  );
}
