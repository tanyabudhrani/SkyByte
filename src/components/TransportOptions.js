import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Shuttle Bus",
    href: "#",
    price: "Learn More →",
    description:
      "Use Asia Miles to generate QR Code for access to any shuttle bus directly from the airport to almost anywhere in the city.",
    imageSrc:
      "https://b772872.smushcdn.com/772872/wp-content/uploads/2017/10/a11-bus-hong-kong-airport-1.jpg?lossy=1&strip=1&webp=1",
    imageAlt: "Shuttle bus",
  },
  {
    id: 2,
    name: "High-Speed Rail",
    href: "#",
    price: "Learn More →",
    description:
      "Use Asia Miles to generate QR Code for access to the airport express or similar trains from the airport to almost anywhere in the city..",
    imageSrc:
      "https://www.chinadailyhk.com/upload/main/image/2024/09/16/742f4d659f46e9657258b79fe164f7d2.jpg",
    imageAlt: "High speed rail",
  },
  {
    id: 3,
    name: "Ferry",
    href: "#",
    price: "Learn More →",
    description:
      "Use Asia Miles to generate QR Code for access to the star ferry or similar ferries from the nearest harbour.",
    imageSrc:
      "https://www.bmt.org/media/6033/3-ferry.jpg?center=0.53125,0.40972222222222221&mode=crop&width=1200&height=630&rnd=132814423040000000",
    imageAlt: "Ferry",
  },
  {
    id: 4,
    name: "Taxis",
    href: "#",
    price: "Learn More →",
    description:
      "Skip the line by pre-purchasing a taxi to pick you up directly outside departure to anywhere in the city. Mile usage may vary depending on distance.",
    imageSrc: "https://hksm.com.hk/eng/img/taxi-img.jpg",
    imageAlt: "Taxi",
  },
  {
    id: 5,
    name: "Car Rental",
    href: "#",
    price: "Learn More →",
    description:
      "Cathay Pacific partners with Hertz, Thrifty, and Dollar to provide Asia Miles holders an easy way to rent a car right from the airport.",
    imageSrc:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_13/2798361/190325-rental-cars-cs-229p.jpg",
    imageAlt: "Car rental",
  },
];

export default function Example() {
  const navigate = useNavigate(); // Add this hook

  const handleProductClick = (productName) => {
    if (productName === "High-Speed Rail") {
      navigate("/train");
    }
  };
  return (
    <div className="bg-[#ECEEED]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white cursor-pointer"
              onClick={() => handleProductClick(product.name)}
            >
              <div className="aspect-h-3 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-72">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="font-inter text-[20px] font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="font-inter text-[18px] text-gray-500">
                  {product.description}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="font-inter text-[18px] font-medium text-[#016564]">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
