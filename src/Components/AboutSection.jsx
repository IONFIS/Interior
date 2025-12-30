import { FaPlay, FaArrowRight } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation.js";

export default function AboutSection() {
  const [sectionRef, visible] = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 md:pt-20 md:pb-0 bg-[#0E0E0E] text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center md:grid-cols-2">

        {/* LEFT IMAGES */}
        <div className="relative flex gap-6 md:gap-9 ">
          <img
            src="/abt1.jpg"
            className={`w-1/2 rounded-lg shadow-xl  animate-hidden
              ${visible ? "animate-slide-up" : ""}`}
          />

          <img
            src="/abt2.jpg"
            className={`w-1/2 rounded-lg shadow-xl md:mb-36 animate-hidden
              ${visible ? "animate-slide-right" : ""}`}
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        <div
            className={`mt-10 md:absolute md:bottom-[-510px] md:h-[20vh] md:w-[33vw] md:left-64 bg-[#F7F5F2] p-6 rounded-lg flex items-center gap-4 
              shadow-lg animate-hidden
              ${visible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://www.youtube.com/watch?v=Z30Jk8QpAMI"
              className="w-14 h-14 flex items-center justify-center rounded-full
                         bg-[#C9A24D] text-white"
            >
              <FaPlay />
            </a>

            <div>
              <h4 className="text-[#2B2B2B] font-semibold">
                Experience Our Designing Work   Our work process makes your dream true
              </h4>
           
            </div>
          </div>


        {/* RIGHT CONTENT */}
        <div className="">
          <h2
            className={`text-3xl md:text-4xl  font-bold animate-hidden
              ${visible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            Our Story:  <span className="w-24 h-[2px] mb-2 ml-8 bg-white inline-block"></span> <br />
            <span className="text-[#C9A24D]">
              A Legacy of Design Excellence
            </span>
          </h2>

          <p
            className={`mt-6 text-gray-300 animate-hidden md:text-2xl
              ${visible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.6s" }}
          >
            What started as a small venture in 1991 has blossomed into a leading interior design studio, renowned for our collection of exclusive, high-end designs. Every day, we update our portfolio with innovative lighting solutions, stylish furnishings, and bespoke designs—all crafted with passion and precision. We’re proud to have your support along this journey.								
								
          
          </p>

          <a
            href="/about"
            className={`inline-flex items-center gap-3 mt-8 text-[#C9A24D] 
              font-semibold animate-hidden
              ${visible ? "animate-slide-up" : ""}`}
            style={{ animationDelay: "0.8s" }}
          >
            Discover Our Journey <FaArrowRight />
          </a>

          {/* VIDEO BLOCK */}
          
        </div>
      </div>
    </section>
  );
}
