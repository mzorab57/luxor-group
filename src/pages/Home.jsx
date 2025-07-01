import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: 'https://arkio-next.netlify.app/images/slider/slide-6.jpg' },
    { image: 'https://arkio-next.netlify.app/images/slider/slide-5.jpg' },
    { image: 'https://arkio-next.netlify.app/images/slider/slide-4.jpg' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden ">
      {/* Animated Lines */}
      <div
        className="absolute inset-0 flex justify-around z-10"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="relative"
            data-aos="fade-down"
            data-aos-delay={index * 200}
            data-aos-duration="800"
          >
            {/* Static Gray Line */}
            <div className="absolute w-[3px] h-full bg-gray-500 opacity-20" />
            
            {/* Animated Yellow Line */}
            <div
              className="absolute w-[4px] bg-yellow-400 opacity-70 shadow-lg shadow-yellow-400/50"
              style={{
                animation: `lineMove 8s linear infinite ${index * 0.8}s`,
                transformOrigin: 'top',
                position: 'absolute',
                top: '0',
                height: '15px'
              }}
            />
          </div>
        ))}
      </div>

      {/* Hero Slider */}
      <div className="relative h-full ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="container mx-auto h-full flex items-center justify-center text-center">
              <div className="text-white z-20">
                <h2
                  className="text-6xl font-bold mb-8"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  Best Interior Design
                </h2>
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;