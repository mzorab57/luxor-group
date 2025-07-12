import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const slides = [
  {
    bg: "/assets/images/hero/slider-1.webp",
    bg_small: "/assets/images/hero/hero-1.webp",
    subtitle: "WELCOME TO INTERIOR WALLPAPERING",
    title: "The Best Quality\nWallpapers For\nYour Home",
  },
  {
    bg: "/assets/images/hero/slider-2.webp",
    bg_small: "/assets/images/hero/hero-1.webp",
    subtitle: "WELCOME TO INTERIOR WALLPAPERING",
    title: "The Best Quality\nWallpapers For\nYour Home",
  },
  {
    bg: "/assets/images/hero/slider-3.webp",
    bg_small: "/assets/images/hero/hero-1.webp",
    subtitle: "WELCOME TO INTERIOR WALLPAPERING",
    title: "The Best Quality\nWallpapers For\nYour Home",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  useEffect(() => {
    AOS.refresh();
  }, [current]);

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen min-h-[800px]   overflow-hidden"
    >
      {/* Animated Background Slider */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden ">
        <div
          className="absolute top-0 left-0  w-full h-full flex transition-transform duration-1000 "
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.bg}
              alt="Background Slide"
              className="w-full h-full object-cover flex-shrink-0 "
              style={{ minWidth: "100%" }}
            />
          ))}
        </div>
        {/* Overlay for dimming background if needed */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fafafa] via-[#ede6dd]/70 to-transparent pointer-events-none" />
      </div>
      {/* Decorative Shapes with AOS animations */}
      <img
        src="/assets/images/shape/shape-4.webp"
        className="absolute top-1/3 right-0 z-10 w-[340px] h-[340px] md:w-[440px] md:h-[440px]"
        alt=""
        data-aos="fade-left"
        data-aos-delay="800"
        data-aos-duration="1200"
      />
      {/* Yellow circle shape */}
      <div
        className="absolute top-[50%] right-28 z-10 w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-[#DF9E42] bg-[#DF9E42]/50 animate-pulse-custom"
        style={{
          transform: "translateY(-30%) translateX(30%)",
          boxShadow: "0 0 0 2px #DF9E42, 0 0 0 20px #F4EDE4",
        }}
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1000"
      />
      <img
        src="/assets/images/shape/shape-1.webp"
        className="absolute size-56 top-20 left-1/2 z-10 animate-floatReverse"
        alt=""
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1000"
      />
      <img
        src="/assets/images/shape/shape-2.webp"
        className="absolute top-1/4 left-10 z-10 animate-float"
        alt=""
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="1000"
      />
      <img
        src="/assets/images/shape/shape-3.webp"
        className="absolute bottom-10 left-1/2 z-10 opacity-50 animate-floatReverse"
        alt=""
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      />

      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8">
          {/* Text Content */}
          <div className="text-left pt-20 lg:pt-0">
            <p
              className="text-[#DF9E42] text-sm md:text-base tracking-[0.2em] mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              {slides[current].subtitle}
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-[#2E2A20] leading-tight mb-8 whitespace-pre-line"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              {slides[current].title}
            </h1>
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <Link
                to="/service"
                onClick={() => window.scrollTo(0, 0)}
                className="px-8 py-4 bg-[#DF9E42] text-white rounded-full hover:bg-[#c88a35] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="600"
              >
                Our Services
              </Link>
              <Link
                to="#about-section"
                onClick={(e) => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => {
                    const section = document.getElementById("about-section");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 400);
                }}
                className="px-8 py-4 border-2 border-[#DF9E42] text-[#DF9E42] rounded-full hover:bg-[#DF9E42] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="600"
              >
                Discover More
              </Link>
            </div>
          </div>

          {/* Image Slider */}
          <div
            className="relative h-[500px] lg:h-[600px]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  current === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.bg_small && slide.bg_small}
                  alt="Interior Wallpaper"
                  className="w-full h-full object-cover rounded-3xl   duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div
        className="absolute left-1/2 bottom-8  translate-x-1/2 flex items-center gap-2 z-30"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-8 h-8 flex items-center justify-center text-sm border rounded-full transition-all duration-300 hover:scale-110 ${
              current === idx
                ? "bg-[#DF9E42] text-white shadow-lg"
                : "bg-transparent text-[#DF9E42] hover:bg-[#DF9E42]/10"
            }`}
            data-aos="zoom-in"
            data-aos-delay={1400 + idx * 100}
            data-aos-duration="400"
          >
            {`0${idx + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
