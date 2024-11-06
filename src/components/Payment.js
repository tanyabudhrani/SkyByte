import { useState } from "react";

export default function Example() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [milesRequired] = useState(1000); // Example miles amount

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };

  return (
    <div className="bg-white">
      <main className="relative mx-auto max-w-6xl px-4 py-16">
        <h1 className="sr-only">Checkout</h1>

        <section aria-labelledby="payment-and-shipping-heading">
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <form onSubmit={handleSubmit}>
            <h3
              id="contact-info-heading"
              className="text-lg font-medium text-gray-900"
            >
              Purchase a Ticket
            </h3>

            <div className="mt-10">
              <h3
                id="shipping-heading"
                className="text-lg font-medium text-gray-900"
              >
                Pick up location
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3
                  id="shipping-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Drop off location
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">
                  Have a promo code?
                </h3>

                <div className="mt-6">
                  <label
                    htmlFor="promo-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your promo code
                  </label>
                  <div className="mt-1 flex space-x-4">
                    <input
                      type="text"
                      id="promo-code"
                      name="promo-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter code"
                    />
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#016564] focus:ring-offset-2"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
              <button
                type="submit"
                className="rounded-md border border-transparent bg-[#5F957C] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirm
              </button>
            </div>
          </form>

          {/* New payment section that shows up after form submission */}
          {showPaymentOptions && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Payment Details
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  This journey will cost:{" "}
                  <span className="font-bold">{milesRequired} Asia Miles</span>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-900">
                  Select payment method:
                </h4>

                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between px-4 py-3 border rounded-md hover:bg-gray-50">
                    <span className="font-medium">Pay with Asia Miles</span>
                    <span className="text-gray-500">→</span>
                  </button>

                  <button className="w-full flex items-center justify-between px-4 py-3 border rounded-md hover:bg-gray-50">
                    <span className="font-medium">Pay with Meituan</span>
                    <span className="text-gray-500">→</span>
                  </button>

                  <button className="w-full flex items-center justify-between px-4 py-3 border rounded-md hover:bg-gray-50">
                    <span className="font-medium">Pay with Dianping</span>
                    <span className="text-gray-500">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
