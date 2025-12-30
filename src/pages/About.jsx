import React from "react";
import TestimonialSection from "../Components/Testimonals";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full overflow-hidden ">

      {/* ================= PAGE BANNER ================= */}
      <section
        className="relative bg-cover bg-center  py-10 "
        
      >
       

        <div className="relative  md:ml-10 md:mr-52  max-w-7xl mx-auto px-4 grid md:flex md:justify-between gap-12 items-center text-white">

          {/* Breadcrumb + Title */}
          <div className="md:flex md:self-start flex-col md:py-20 ">
            <ul className="flex gap-2  md:gap-5 text-sm mb-8 md:mb-10 opacity-90">
              <li>
                <a href="/" className="hover:text-[#C9A24D] opacity-40 text-black transition md:text-2xl">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-[#C9A24D] md:text-2xl">About Us</li>
            </ul>

            <h1 className="text-4xl lg:text-5xl text-black md:text-6xl font-serif md:mb-10 mb-8 font-bold ">
              About Us
            </h1>
            <span className="text-[#C9A24D] uppercase tracking-widest text-sm md:text-xl">
              Our History
            </span>
          </div>

          {/* Images + Video */}
         {/* Images + Video */}
<div className="relative md:w-1/2 md:ml-auto">

  <div className="relative md:">

    {/* First Image */}
    <img
      src="https://theinteriorstudios.in/wp-content/uploads/2021/07/about1.jpg"
      alt=""
      className="
        w-full
        md:w-5/6
       
        object-cover
        shadow-2xl
        relative
        z-10
      "
    />

    {/* Second Image */}
    <img
      src="https://theinteriorstudios.in/wp-content/uploads/2021/07/about2.jpg"
      alt=""
      className="
        w-full
         md:w-5/6
         md:h-11/12
     
        object-cover
        shadow-2xl
        mt-4

        md:absolute
        md:bottom-[-200px]
        md:right-[-140px]
        md:mt-0
        md:z-20
      "
    />

    {/* Video Overlay */}
    <div
      className="
        mt-4 bg-white/95 text-black p-6 md:p-10 shadow-2xl max-w-xs

        md:absolute
        md:bottom-[-80px]
        md:left-[80px]
        md:z-30
      "
    >
      <h4 className="font-semibold mb-3 text-sm leading-snug">
        Watch a video about how we work for our customers
      </h4>

      <a
        href="https://www.youtube.com/watch?v=Z30Jk8QpAMI"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 text-[#C9A24D] font-semibold hover:opacity-80 transition"
      >
        Play Video
        <span className="border-b-2 border-[#C9A24D] w-16"></span>
      </a>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* ================= OUR HISTORY ================= */}
      <section className="py-20 md:py-52 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h3 className="text-[#C9A24D] md:text-5xl font-semibold text-3xl uppercase tracking-widest mb-6">
            Our History
          </h3>

         <p className="text-gray-700 leading-relaxed text-lg md:text-xl text-justify max-w-4xl mx-auto">
  Founded in 1991, The Interior Studio began with a passion for
  transforming ordinary spaces into extraordinary works of art. What
  started as a small venture has blossomed into a premier design firm,
  known for creating luxurious, personalized interiors. Over the
  years, we've crafted countless residential and commercial spaces,
  always blending creativity with functionality. Today, we stand as a
  trusted name in interior design, driven by innovation, attention to
  detail, and a commitment to delivering timeless elegance tailored to
  our clients' unique lifestyles.
</p>


        </div>
      </section>

      {/* ================= ARCHITECTS / AWARDS ================= */}
      <section className="relative py-24 bg-gray-100">

        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
         
        ></div>
        <div className="absolute inset-0 "></div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">

          <div className="grid  gap-12 items-center">

            {/* Left Title */}
            <div>
              <h3 className="text-3xl lg:text-4xl pl-10 md:ml-[30vw] text-black font-serif font-semibold leading-tight">
                Architects <br />
                <span className="text-[#C9A24D] text-xl">
                  with different approach
                </span>
              </h3>
              <div className="flex flex-col text-center font-serif font-semibold mt-16 gap-12 text-2xl text-black">
                <div className=""><h2 className="pb-3 text-[#C9A24D] font-sans text-5xl">505</h2>
                <h2></h2>Happy Customers</div>

                <div><h2 className="pb-3 text-[#C9A24D] font-sans text-5xl">32</h2>
                <h2></h2>Years Experience</div>

               <div><h2 className="pb-3 text-[#C9A24D] font-sans text-5xl">605</h2>
                <h2></h2>Undergo Training</div>
              </div>
            </div>

            {/* Awards */}
            

          </div>
        </div>
      </section>
      <TestimonialSection/>
      <Footer/>

    </div>
  );
}
