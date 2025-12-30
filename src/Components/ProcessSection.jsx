import useScrollAnimation from "./UseScrollAnimation";

const steps = ["Concept", "Plan", "Design", "Build", "Launch"];

export default function ProcessSection() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our <span className="text-[#C9A24D]">Work Process</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
           <div
  key={i}
  className={`process-box group relative p-8 text-center bg-[#F7F5F2] overflow-hidden
  ${visible ? "animate-border" : ""}`}
>
  {/* BORDER */}
  <span className="border top" />
  <span className="border right" />
  <span className="border bottom" />
  <span className="border left" />

  {/* LARGE CORNER DOTS */}
  <span className="dot tl" />
  <span className="dot tr" />
  <span className="dot br" />
  <span className="dot bl" />

  <span className="text-[#C9A24D] font-bold text-xl block mb-2">
    .0{i + 1}
  </span>
  <h3 className="font-bold font-serif">{step}</h3>
  <p className="text-[#8C8C8C] text-sm mt-2">
    Thoughtful approach for perfect results
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
