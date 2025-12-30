import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "./t4.avif",
    name: "Arpita Mandal",
    text: "We had great experience working with abhishek and team, our previous interior designer didnt do good job.. we got abhishek's reference from our neighbour.. Abhishek and team took over pending task and gave our dream home a dreamy look.. we are absolutley happy with the interior studio team and highly recommend them for all your interior need!! Special thanks to kajal and abhijeet and sagar the carpenter .. kudos to you all.. I will definitely choose interior studio again!!!",
    rating: 5,
  },
  {
    img: "./t1.jpg",
    name: "Ashok Agarwal",
    text: "He is the best, innovative, suggest many options, very economically priced. Value for money.",
    rating: 5,
  },
  {
    img: "./t2.jpg",
    name: "Prateek Vishwakarma",
    text: "The best place I found for Interior works is THE INTERIOR STUDIO. The staff here are very cooperative and polite. Rates are very good as per quality of work offered. I honestly advice everyone who is looking for interior work in their dream home should go to THE INTERIOR STUDIO.",
    rating: 5,
  },
  {
    img: "./t3.jpg",
    name: "Krisha Damania",
    text: "Our dream house came into reality because of Interior Studios input... Very cooperative and understanding staff.",
    rating: 5,
  },
  {
    img: "./t5.jpg",
    name: "Nisha Vishwakarma",
    text: "Surreal experience! Their understanding of their customers is awesome. They know what we want so they get us EXACTLY what we want. People are amazing so of course, their work is just superb. Make your dreams come true!",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 mt-20 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with left text and right decorative dots */}
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-black max-w-xl">
            <span className="text-[#C9A24D]">Thanks for your sweet words</span> to us
          </h3>
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-[#C9A24D] rounded-full"></span>
            <span className="w-3 h-3 bg-[#C9A24D] rounded-full"></span>
            <span className="w-3 h-3 bg-[#C9A24D] rounded-full"></span>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-black">{item.name}</h4>
                      <ul className="flex text-[#C9A24D] mt-1">
                        {[...Array(5)].map((_, i) => (
                          <li key={i} className={i < item.rating ? "" : "opacity-30"}>
                            <svg
                              className="w-4 h-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09L5.5 11.545 1 7.91l6.06-.545L10 2l2.94 5.365L19 7.91l-4.5 3.636 1.378 6.545z" />
                            </svg>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}

            {/* Pagination bullets */}
            <style>
              {`
                .swiper-pagination-bullet {
                  background-color: #C9A24D !important;
                  opacity: 0.6;
                }
                .swiper-pagination-bullet-active {
                  opacity: 1 !important;
                }
              `}
            </style>
          </Swiper>

          {/* Buttons under the testimonials, left side */}
          <div className="flex space-x-2 mt-4">
            <button className="custom-swiper-prev bg-[#C9A24D] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition duration-300 shadow-lg">
              &#8592;
            </button>
            <button className="custom-swiper-next bg-[#C9A24D] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition duration-300 shadow-lg">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
