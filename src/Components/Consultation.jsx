import React from "react";

export default function ConsultationSection() {
  return (
    <section className="relative py-16 md:py-0 bg-[#F7F5F2] mt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{
          backgroundImage:
            "url('/wp-content/themes/minterio/assets/images/main-banner-bg.jpg')",
        }}
      />

      <div className="max-w-7xl mx-auto  px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Text and Form */}
          <div className="lg:w-7/12 w-full">
            <h3 className="text-2xl md:text-5xl font-bold text-black mb-6 ml-15">
              <span className="text-[#C9A24D]">
                Get a free consultation. Just leave a request below
              </span>
            </h3>

            {/* Newsletter / Callback Form */}
            <form className="flex md:ml-15 flex-col sm:flex-row gap-4 sm:items-center w-full">
              <input
                type="tel"
                name="sf_tel"
                placeholder="Your phone number"
                required
                className="w-full bg-white py-3 md:py-6 px-4 placeholder:text-black placeholder:font-serif md:placeholder:text-2xl md:placeholder:font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:ring-opacity-50"
              />
              <button
                type="submit"
                className="w-full md:py-6 md:font-semibold font-serif md:mr-8 sm:w-auto mt-3 sm:mt-0 bg-[#C9A24D] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b8913f] transition-colors flex items-center justify-center gap-2"
              >
                Callback
                <span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="lg:w-5/12 hidden md:block py-10">
            <img
              src="./c1.jpg"
              alt="Consultation"
              className="rounded-md shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
