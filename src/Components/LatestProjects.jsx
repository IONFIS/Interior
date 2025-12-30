import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const images = [
    { img: "/portfolio1.jpg", title: "Smart House", category: "Living Room" },
    { img: "/portfolio2.jpg", title: "Modern Design", category: "Kitchen" },
    { img: "/portfolio3.jpg", title: "Minimal Interior", category: "Commercial" },
    { img: "/portfolio4.jpg", title: "Scandi Apartments", category: "Apartment" },
    { img: "/portfolio5.jpg", title: "Weelywally Apartments", category: "Living Room" },
    { img: "/portfolio6.jpg", title: "Modern Reception", category: "Reception" },
  ];

  return (
    <section className="py-10 bg-[#F7F5F2] relative">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
        {/* LEFT CONTENT */}
        <div className="md:pt-10">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-14">
            Explore Our <span className="text-[#C9A24D]">Latest Creations</span>
          </h3>
          <p className="mb-6 md:mb-16   max-w-lg md:text-2xl">
          This is why we are proud to offer a wide selection of our designer ceiling, wall, floor and table lamps. You will also find products ranging from modern styles, modern interpretations of classic design. Our collection is updated every day with beautiful solutions and we are glad that you, our customers
          </p>
          <a
            href="/portfolio"
            className="inline-flex md:text-2xl items-center gap-2 text-[#C9A24D] font-semibold hover:gap-4 transition-all"
          >
            View More →
          </a>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-[#C9A24D] opacity-50",
              bulletActiveClass: "!bg-[#C9A24D] opacity-100",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
  <div className="relative">
    <img
      src={item.img}
      alt={item.title}
      style={{ width: "100%", height: "450px", objectFit: "cover" }}
    />
    {/* Overlay text always visible */}
    <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4">
      <h3 className="text-white font-semibold">{item.title}</h3>
      <span className="text-[#C9A24D]">{item.category}</span>
    </div>
  </div>
</SwiperSlide>

            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute right-4 bottom-4 flex gap-3 z-20">
            <button className="swiper-button-prev-custom bg-white text-[#C9A24D] p-2 rounded shadow hover:bg-[#C9A24D] hover:text-white transition outline-none">
              &#8592;
            </button>
            <button className="swiper-button-next-custom bg-white text-[#C9A24D] p-2 rounded shadow hover:bg-[#C9A24D] hover:text-white transition outline-none">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
