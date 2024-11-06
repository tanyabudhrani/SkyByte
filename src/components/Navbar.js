import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#016564] shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex shrink-0 items-center">
            <img alt="Your Company" src={logo} className="h-4 w-auto" />
          </div>

          {/* Right-aligned content */}
          <div className="flex flex-1 justify-end">
            <div className="hidden sm:flex sm:space-x-12 items-center">
              {" "}
              {/* Changed space-x-8 to space-x-12 */}
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-white px-1 pt-1 text-[14px] font-normal text-white font-['Inter']"
              >
                Home
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[14px] font-normal text-gray-200 hover:border-gray-300 hover:text-white font-['Inter']"
              >
                Help
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[14px] font-normal text-gray-200 hover:border-gray-300 hover:text-white font-['Inter'] mr-8" /* Added mr-8 for margin before profile icon */
              >
                Your Account
              </a>
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="relative flex rounded-full bg-[#016564] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#016564]">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-[18px] text-gray-700 font-['Inter'] ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Your Profile
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-[18px] text-gray-700 font-['Inter'] ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Settings
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-[18px] text-gray-700 font-['Inter'] ${
                          active ? "bg-gray-100" : ""
                        }`}
                      >
                        Sign out
                      </a>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-[#015555] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-white bg-[#015555] py-2 pl-3 pr-4 text-[18px] font-normal text-white font-['Inter']"
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-[18px] font-normal text-gray-200 hover:border-gray-300 hover:text-white font-['Inter']"
          >
            Help
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-[18px] font-normal text-gray-200 hover:border-gray-300 hover:text-white font-['Inter']"
          >
            Log in
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
