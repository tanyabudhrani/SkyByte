import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="bg-[#ECEEED] relative h-30">
      <div className="relative isolate overflow-hidden h-full">
        {/* Wave SVG Background */}
        {/* Wave SVG Background */}
        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMax slice"
            fill="#016564"
          >
            <path d="M0,500 C480,375 960,625 1440,500 V0 H0 Z" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl h-full lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Left Column - Text Content */}
          <div className="px-6 lg:px-0 flex items-start pt-32">
            <div className="mx-auto">
              <div className="w-full">
                <h1 className="text-[72px] font-semibold tracking-tight text-white whitespace-nowrap">
                  Luxury Re-imagined
                </h1>
                <p className="mt-2 text-[18px] text-white/90">
                  Customize your premium travel experience, one token at a time
                </p>
                {/* Search Bar */}
                <div className="mt-6">
                  <div className="w-full sm:max-w-2xl">
                    {" "}
                    {/* Increased from xs to 2xl */}
                    <label htmlFor="search" className="sr-only">
                      Search for upgrades
                    </label>
                    <div className="relative">
                      <input
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search for upgrades"
                        className="block w-full rounded-[40px] border-0 bg-white py-3 pl-6 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base" /* Modified padding, rounded, and font size */
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        {" "}
                        {/* Moved to right */}
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Spline 3D */}
          <div className="md:mx-auto md:max-w-2xl lg:mx-0 lg:w-screen flex items-start pt-32">
            <div className="h-[300px] w-full">
              <iframe
                src="https://my.spline.design/untitled-7df0f8289f8b3264f78cada1aa5e7b90/"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{
                  transform: "scale(1.2)",
                  transformOrigin: "center center",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
