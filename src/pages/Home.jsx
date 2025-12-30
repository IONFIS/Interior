import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import AboutSection from "../Components/AboutSection"
import ProcessSection from "../Components/ProcessSection"
import LatestProjects from "../Components/LatestProjects"
import TestimonialSection from "../Components/Testimonals"
import ConsultationSection from "../Components/Consultation"
import Footer from "../Components/Footer"
function App() {
     
  return (
    <div className="font-sans  text-[#2B2B2B]">

      {/* HERO SECTION */}
   <section className="min-h-[90vh] flex items-center bg-[#F7F5F2] ">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center ">

    {/* LEFT CONTENT */}
   <div>
  {/* HEADING */}
  <h1
    className="text-4xl md:text-5xl font-bold leading-tight opacity-0 animate-slide-up"
    style={{ animationDelay: "0s" }}
  >
    Welcome to the <span className="text-[#C9A24D]">Interior Studio</span>
  </h1>

  {/* PARAGRAPH */}
  <p
    className="mt-4 text-[#8C8C8C] max-w-lg opacity-0 animate-slide-up"
    style={{ animationDelay: "0.5s" }}
  >
    We Turn Your Home into a Masterpiece.  
    At The Interior Studio, we go beyond just design—we create spaces that reflect
    your lifestyle and elevate everyday living. From conceptualization to completion,
    every detail is carefully crafted to transform your home into something extraordinary.
  </p>

  {/* BUTTON */}
  <button
    className="mt-6 bg-[#C9A24D] text-white px-7 py-3 rounded hover:bg-[#B8933C] transition opacity-0 animate-slide-up"
    style={{ animationDelay: "1s" }}
  >
    Book Consultation →
  </button>
</div>



    {/* RIGHT CAROUSEL */}
   <div className="relative mt-10 order-2 md:order-none w-full overflow-x-hidden">
  <div className="border-12 border-white rounded-lg relative md:-translate-y-12 overflow-hidden">

    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      watchOverflow={false}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      className="w-full h-[300px] sm:h-[360px] md:h-[520px] overflow-hidden"
    >
      <SwiperSlide className="w-full flex-shrink-0">
        <img
          src="/courasel 1.jpg"
          alt="Interior"
          className="block w-full h-full object-cover"
        />
      </SwiperSlide>

      <SwiperSlide className="w-full flex-shrink-0">
        <img
          src="/courasel 2.jpg"
          alt="Interior"
          className="block w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>

    {/* NAV BUTTONS */}
    <div className="absolute right-4 bottom-4 flex gap-3 z-20">
      <button className="swiper-button-prev-custom bg-white text-[#C9A24D] p-2 rounded shadow hover:bg-[#C9A24D] hover:text-white transition">
        &#8592;
      </button>
      <button className="swiper-button-next-custom bg-white text-[#C9A24D] p-2 rounded shadow hover:bg-[#C9A24D] hover:text-white transition">
        &#8594;
      </button>
    </div>

  </div>
</div>


  </div>
</section>

      {/* ABOUT SECTION */}
      <AboutSection/>

     <ProcessSection/>

      {/* PORTFOLIO */}
     <LatestProjects/>

      {/* TESTIMONIALS */}
      <TestimonialSection/>
     
<ConsultationSection/>
<Footer/>

    </div>
  )
}

export default App
