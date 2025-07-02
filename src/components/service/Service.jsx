import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Custom Large-Scale Painting Production",
    points: [
      "Creation of paintings up to 8 meters in size",
      "Customized artwork tailored to client specifications",
      "Artistic collaborations and commissions",
    ],
    image: "/assets/images/hero/slider-2.webp",
  },
  {
    id: "02",
    title: "Frame Selection & Custom Framing",
    points: [
      "Wide variety of frame styles and materials",
      "Custom framing solutions to match artwork and décor",
      "Frame design consultations",
    ],
    image: "/assets/images/hero/slider-1.webp",
  },
  {
    id: "03",
    title: "Bulk Painting Production",
    points: [
      "Rapid manufacturing of hundreds of paintings for large projects",
      "Streamlined production processes for quick turnaround",
      "Volume discounts for large orders",
    ],
    image: "/assets/images/hero/slider-3.webp",
  },
  {
    id: "04",
    title: "Art Installation & Setup",
    points: [
      "On-site installation of large paintings",
      "Professional handling and safety measures",
      "Post-installation support",
    ],
    image: "/assets/images/hero/slider-1.webp",
  },
  {
    id: "05",
    title: "Worldwide Shipping & Logistics",
    points: [
      "Secure packaging for large and fragile artworks",
      "International shipping services",
      "Customs clearance and delivery coordination globally",
    ],
    image: "/assets/images/hero/slider-2.webp",
  },
  {
    id: "06",
    title: "Art Consultation & Design Services",
    points: [
      "Concept development for large-scale murals and artworks",
      "Design visualization and mock-ups",
      "Site-specific artwork planning",
    ],
    image: "/assets/images/hero/slider-3.webp",
  },
  {
    id: "07",
    title: "Art Leasing & Corporate Decor Solutions",
    points: [
      "Rental of large artworks for events, offices, and public spaces",
      "Custom art installations for corporate branding",
    ],
    image: "/assets/images/hero/slider-1.webp",
  },
  {
    id: "08",
    title: "Restoration & Preservation Services",
    points: [
      "Artwork conservation and restoration",
      "Maintenance of large-scale paintings",
    ],
    image: "/assets/images/hero/slider-2.webp",
  },
  {
    id: "09",
    title: "Event & Exhibition Services",
    points: [
      "Providing large artworks for exhibitions and displays",
      "Support in organizing art-related events",
    ],
    image: "/assets/images/hero/slider-2.webp",
  },
];

const Service = () => {
  const cursorRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const enlargeCursor = () => cursor.classList.add("scale-150");
    const shrinkCursor = () => cursor.classList.remove("scale-150");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", enlargeCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", enlargeCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  useEffect(() => {
    if (!selectedService) return;
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setSelectedService(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedService]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#19160f] overflow-hidden"
    >
      {/* Damask/Floral Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 bg-cover"
        style={{
          backgroundImage: "url('/assets/images/service/service-bg-1.webp')",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "2px solid #eab308",
          background: "rgba(234, 179, 8, 0.1)",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.2s cubic-bezier(.4,0,.2,1)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              Our Best Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Services We're Offering
            </h2>
          </div>
          <button className="mt-4 md:mt-0 border border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-[#19160f] transition">
            View All Service
          </button>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
          {services.slice(0, 4).map((service, idx) => (
            <div
              key={service.id}
              className="relative w-full h-64 overflow-hidden bg-black  rounded-t-3xl"
              style={{ borderBottomRightRadius: "60px" }}
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              {/* Dark overlay at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent " />

              {/* Service number badge */}
              <span className="absolute top-4 left-4 bg-primary/60 text-[#292828] font-bold px-4 py-1 rounded-full text-sm shadow">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Service name and Details button row */}
              <div className="absolute left-4 -right-4 bottom-4 flex items-center justify-between z-10">
                <span className="text-gray-300 font-semibold text-xl drop-shadow-2xl">
                  {service.title}
                </span>
                <button
                  className="px-5 pr-9 py-2   text-gray-300 rounded-full font-medium bg-black/40 hover:bg-primary hover:text-[#19160f] transition hover-target"
                  style={{ backdropFilter: "blur(0px)" }}
                  onClick={() => setSelectedService(service)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0  z-50 flex items-center justify-center bg-black/70 animate-fadeIn">
            <div className=" border border-gray-700  bg-black/80 rounded-3xl shadow-2xl max-w-3xl w-full  py-5 px-3 mx-2 relative">
              <button
                className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-gray-700"
                onClick={() => setSelectedService(null)}
                aria-label="Close"
              >
                &times;
              </button>
              {/* Wêne Service-aka */}
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="size-full  rounded-2xl shadow-lg mx-auto mb-4 p-0"
              />
              <h2 className="text-2xl font-bold text-primary mb-4 text-start">
                {selectedService.title}
              </h2>
              <div className="list-disc  space-y-2 text-gray-300">
                {selectedService.points.map((point, idx) => (
                  <span key={idx}>{point}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Service;
