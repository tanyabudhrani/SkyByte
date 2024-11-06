"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#ECEEED] relative h-30">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-40 hidden h-full w-80 translate-x-1/2 transform fill-[#ECEEED] lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-30 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-4xl lg:mx-0 lg:max-w-3xl ml-20">
                <div className="bg-[#333333]/80 p-8 rounded-lg backdrop-blur-sm w-[700px]">
                  <h1 className="font-inter text-[52px] tracking-tight text-white leading-[60px]">
                    Explore SkyByte's Cross Modal Transportation System
                  </h1>
                  <p className="mt-8 font-inter text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
                    Redeem your Asia Miles points for cross-model transportation
                    including but not limited to ferry terminals, train
                    stations, and buses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[65%]">
          <img
            alt=""
            src="https://images.pexels.com/photos/20901601/pexels-photo-20901601/free-photo-of-street-on-sea-coast-in-hong-kong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          />
        </div>

        {/* Custom Bouncing Arrow */}
        <div className="absolute bottom-20 right-20 animate-bounce">
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
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
