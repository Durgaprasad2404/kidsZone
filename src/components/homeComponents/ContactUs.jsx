import React from "react";
import contactus from "../../assets/contactus.png";

function ContactUs() {
  return (
    <div className="bg-cyan-100 py-10 px-5 lg:px-20" id="contactus">
      <h1 className="text-4xl font-comic text-center font-bold mb-10 decoration-yellow-500 underline underline-offset-8">
        <span className="text-3xl">&#127872;</span>Contact Us
        <span className="text-3xl">&#127872;</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1 mb-10 lg:mb-0 lg:mr-10">
          <img
            src={contactus}
            alt="Contact us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 max-w-lg p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 font-comic"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Enter your name"
                autoComplete="true"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 font-comic"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Enter your email"
                autoComplete="true"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-medium text-gray-700 font-comic"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Enter subject"
                autoComplete="true"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 font-comic"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 font-comic px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
