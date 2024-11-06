import { useNavigate } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Book your Intermodal Cross Transport",
    href: "#",
    price: "200 Asia Miles",
    description:
      "Redeem your Asia Miles points for cross-model transportation for fast travel from the airport to the city, including ferry terminals, train stations, and buses.",
    imageSrc:
      "https://images.pexels.com/photos/2144905/pexels-photo-2144905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Book your intermodal cross transport",
  },
  {
    id: 2,
    name: "Fast-Pass Boarding",
    href: "#",
    price: "100 Asia Miles",
    description:
      "Speed up your boarding by adding fast-pass to your ticket; allowing you priority access and comfort as soon as boarding begins.",
    imageSrc:
      "https://images.pexels.com/photos/1710482/pexels-photo-1710482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Fast-pass boarding",
  },
  {
    id: 3,
    name: "Priority Check-In",
    href: "#",
    price: "100 Asia Miles",
    description:
      "Running late? Line up at our special check-in lane for premium Asia Miles holders.",
    imageSrc:
      "https://images.pexels.com/photos/2574078/pexels-photo-2574078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Priority check in",
  },
  {
    id: 4,
    name: "Premium Class Meals",
    href: "#",
    price: "200 Asia Miles",
    description:
      "Explore premium flight meal options from Business and First class selections.",
    imageSrc:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Premium Class Meals",
  },
  {
    id: 5,
    name: "Lounge Access",
    href: "#",
    price: "100 Asia Miles",
    description:
      "Redeem your miles to enjoy lounge access prior to boarding, to offer you premium comfort without a premium ticket.",
    imageSrc:
      "https://images.pexels.com/photos/2612117/pexels-photo-2612117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Lounge Access",
  },
  {
    id: 6,
    name: "Extra Baggage",
    href: "#",
    price: "100 Asia Miles",
    description:
      "Need more space? Purchase additional baggage of up to 32kg/70lbs. Mile redemption may vary depending on total dimension.",
    imageSrc:
      "https://images.pexels.com/photos/8212224/pexels-photo-8212224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Extra Baggage",
  },
  {
    id: 7,
    name: "Premium In-Flight Amenities",
    href: "#",
    price: "100 Asia Miles",
    description:
      "Receive Business and First class amenities without an entire upgrade (e.g. toiletries) to make your long haul trip as comfortable as possible.",
    imageSrc:
      "https://images.pexels.com/photos/11989285/pexels-photo-11989285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Premium in flight activities",
  },
];

export default function Example() {
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    if (productId === 1) {
      // ID for Intermodal Cross Transport
      navigate("/transport");
    }
  };

  return (
    <div className="bg-[#ECEEED]">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleCardClick(product.id)}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white h-[500px] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 h-[250px]">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 h-[250px] relative">
                <h3 className="text-[20px] font-medium text-[#5F957C] mb-2 h-[30px] overflow-hidden">
                  {product.name}
                </h3>
                <p className="text-[20px] text-gray-500 font-inter mb-auto h-[150px] overflow-hidden">
                  {product.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <p className="text-[20px] font-medium text-gray-900 font-inter">
                    {product.price}
                  </p>
                  <ArrowTopRightOnSquareIcon
                    className="h-6 w-6 text-[#5F957C] group-hover:text-[#4A7461] transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
