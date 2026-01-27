import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">🚕 TaxiService</h3>
            <p className="text-sm mb-4">The fastest way to book a taxi in New Zealand.</p>
            <div className="flex flex-col md:flex-row w-full gap-6 md:gap-12">
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>New Zealand</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+64277777267" className="hover:text-yellow-400 transition">+64 27 777 7267</a>
              </p>
              <p className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:info@taxiservice.co.nz" className="hover:text-yellow-400 transition">info@taxiservice.co.nz</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Taxi Services LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-yellow-400 transition">
              Privacy Policy
            </button>
            <button className="hover:text-yellow-400 transition">
              Terms of Service
            </button>
            <button
              className="hover:text-yellow-400 transition"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
