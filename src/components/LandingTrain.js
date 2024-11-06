"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.chinadailyhk.com/upload/main/image/2024/09/16/742f4d659f46e9657258b79fe164f7d2.jpg')`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center bg-black/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
            <h1 className="text-balance text-5xl tracking-tight text-white sm:text-7xl">
              High-Speed Rail
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
              Use Asia Miles to generate QR Code for access to the airport
              express or similar trains from the airport to almost anywhere in
              the city.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Bouncing Arrow */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(10px) translateX(-50%);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
