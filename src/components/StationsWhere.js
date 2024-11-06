import {
  MapIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const perks = [
  {
    name: "Explore the list of stations.",
    description: "Stations in Macau",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Explore the list of stations.",
    description: "Stations in Guangdong",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Explore the list of stations.",
    description: "Stations in Hong Kong",
    icon: MapIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-12">
      {/* Top Divider */}
      <div className="relative mb-12">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">
            Available Stations
          </span>
        </div>
      </div>

      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-6xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <perk.icon
                aria-hidden="true"
                className="h-8 w-8 shrink-0"
                style={{ color: "#5F957C" }}
              />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-gray-900">{perk.name}</h3>
                <p className="text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
