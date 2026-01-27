import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left: Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              {/* Replace with your logo image if needed */}
              <span className="text-3xl font-bold">🚕</span>
              <h3 className="text-2xl font-extrabold">Taxi Service</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              New Zealand offers several reliable cab services known
              for their convenience, safety, and customer satisfaction.
            </p>
          </div>

          {/* Right: Main Features */}
          <div>
            <h4 className="text-lg font-bold mb-4">MAIN FEATURES</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "The Last Ride (Death Taxi)",
                "Ambulance",
                "Car Rentals",
                "Coupon",
                "Vehicle Tag",
              ].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Address Bar */}
        <div className="mt-16 bg-gray-100 rounded-2xl px-6 py-5 flex flex-col md:flex-row justify-around items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>New Zealand</span>
          </div>

          <div className="flex items-center gap-2">
            <span>📞</span>
            <a
              href="tel:+64277777267"
              className="hover:underline"
            >
              +64 27 777 7267
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span>✉️</span>
            <a
              href="mailto:info@taxiservice.co.nz"
              className="hover:underline"
            >
              info@taxiservice.co.nz
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center text-xs text-gray-600">
          © Taxi Services 2023 LTD, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
