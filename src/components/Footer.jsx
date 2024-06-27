import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaMobile,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-cyan-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 font-comic">
              About Us
            </h3>
            <p className="text-gray-600 pr-6 font-comic">
              We are committed to providing educational games that foster
              learning and fun for children of all ages.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 font-comic">
              Quick Links
            </h3>
            <ul className="list-none">
              <li className="pb-2 font-bold font-comic">
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-400 no-underline"
                >
                  <FaHome className="mr-2" />
                  Home
                </a>
              </li>
              <li className="pb-2 font-bold font-comic">
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-400 no-underline"
                >
                  <FaInfoCircle className="mr-2" />
                  About
                </a>
              </li>
              <li className="pb-2 font-bold font-comic">
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-400 no-underline"
                >
                  <FaServicestack className="mr-2" />
                  Games
                </a>
              </li>
              <li className="pb-2 font-bold font-comic">
                <a
                  href="#"
                  className="text-gray-600 hover:text-yellow-400 no-underline"
                >
                  <FaEnvelope className="mr-2" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 font-comic">
              Contact Us
            </h3>
            <p className="text-gray-600 font-comic">
              <FaEnvelope className="mr-2" />
              Email: info@example.com
              <br />
              <FaMobile className="mr-2" />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 font-comic">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-gray-600 font-comic">
            &copy; 2024 our Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
