import React from "react";
import { Link } from "react-router-dom";

// Example icons as SVGs (replace with your own or use react-icons)
const icons = [
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>,
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 9h16M9 4v16" />
  </svg>,
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
  </svg>,
  <svg
    className="w-8 h-8 text-[#DF9E42]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
  </svg>,
];

const features = [
  { title: "Smart Work", icon: icons[0], link: "/gallery" },
  { title: "Unique Design", icon: icons[1], link: "/gallery" },
  { title: "Skilled Team", icon: icons[2], link: "/gallery" },
  { title: "Best Pricing", icon: icons[3], link: "/gallery" },
];

const Feature = () => (
  <section className="py-12 bg-white container mx-auto px-4  ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-self-center max-w-[1200px] w-full mb-8">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="flex items-center justify-center bg-yellow-800/20 group hover:bg-primary lg:max-w-[260px]  rounded-full  lg:py-6 py-4  shadow-sm relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={100 + idx * 200}
            data-aos-duration="1000"
          >
            <img
              src="/assets/images/shape/shape-5.webp"
              alt="bg"
              className="absolute size-full -z-10 opacity-25 rounded-full"
            />
            <span className="flex items-center justify-center lg:size-14 size-10   rounded-full bg-white shadow mr-1   lg:mr-4 group-hover:bg-black/80 group-hover:scale-110   transition-all duration-500 ease-in">
              {feature.icon}
            </span>
            <h5 className="lg:text-lg  whitespace-nowrap font-semibold text-[#2E2A20] group-hover:text-white   transition-all duration-200 ease-in">
              <Link onClick={() => window.scrollTo(0, 0)} to={feature.link}>{feature.title}</Link>
            </h5>
          </div>
        ))}
      </div>
      <div
        className="border-t border-[#DF9E42]/30 w-full mx-auto"
        style={{ maxWidth: 1200 }}
      />
    
  </section>
);

export default Feature;
