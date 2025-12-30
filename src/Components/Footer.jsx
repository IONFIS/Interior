
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F2] pt-16  mt-20">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 grid md:flex md:justify-between gap-8 ">
        {/* Left Column: Logo & Social */}
        <div>
          {/* Logo */}
          <div className="mb-6">
            <img
              src="./logo.png"
              alt="Logo"
              className="w-32 md:w-40"
            />
          </div>

          {/* Social Links */}
          <ul className="flex gap-4 text-[#C9A24D]">
            <li>
              <a href="https://behance.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8913f] transition">
                <svg className="w-6 h-6" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8913f] transition">
                <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8913f] transition">
                <svg className="w-6 h-6" viewBox="0 0 320 512" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Info */}
    
           <div className="md:grid md:pl-60 flex flex-col md:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 font-serif">Contact us</h3>
            <div className="flex flex-col gap-1">
              <a href="/" className="hover:text-[#C9A24D] transition">Home</a>
              <a href="/about" className="hover:text-[#C9A24D] transition">About Us</a>
              <a href="/contact" className="hover:text-[#C9A24D] transition">Contact Us</a>
            </div>
          </div>
   

          {/* Phone & Email */}
          <div>
            <h3 className="text-lg font-semibold mb-2 font-serif">Contact Info</h3>
            <div className="flex flex-col gap-2 text-gray-700">
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#C9A24D]" /> <a href="tel:+912265027853">+0223893893</a>, <a href="tel:+919598666615">3893893933</a></p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#C9A24D]" /> <a href="tel:+918451005308">89489389387</a>, <a href="tel:+919769537369">8938379389</a></p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#C9A24D]" /> <a href="mailto:info@theinteriorstudios.in">info@PeopleFurninture.in</a></p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#C9A24D]" /> <a href="mailto:support@theinteriorstudios.in">support@PeopleFurninture.in</a></p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#C9A24D]" /> <a href="mailto:hr@theinteriorstudios.in">hr@PeopleFurninture.in</a></p>
            </div>
          </div>

          {/* Address */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 font-serif">Address</h3>
            <p>Shop no 2, Akansha Towers, A wing, Garden Village at Saki Vihar Road, Opp Tesla CRC, Howrah(W), Kolkata-400070</p>
            <p className="pt-4">GSTIN:-3938493893</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-300 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:grid md:grid-cols-2 md:gap-5 justify-between items-center gap-4 ">
          {/* Left */}
          
          
          <div className="text-gray-700 flex flex-col content-center items-center md:items-start md:self-start md:text-start  self-center text-center md:mr-52 ">
            <strong className="flex px-20 md:px-0 font-serif">Design Styles:</strong> Modern | Classic | Contemporary | Industrial | Customized | Minimalist | Eclectic | Japandi | Rustic | Traditional
          </div>

          {/* Right */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <ul className="flex gap-4 text-gray-700 flex-col mr-40 md:flex-row md:pl-12">
              <li><a href="/privacy-policy" className="hover:text-[#C9A24D] transition font-serif">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-[#C9A24D] transition font-serif">Terms and Conditions</a></li>
            </ul>
           

          </div>
             <h3 className="flex flex-row text-start self-start mb-8 font-serif font-semibold">&copy; 2025. PeopleFurninture</h3>

        </div>
      </div>
    </footer>
  );
}
