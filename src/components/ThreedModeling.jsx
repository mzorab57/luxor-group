import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ThreedModeling = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeModel, setActiveModel] = useState(0);
  const containerRef = useRef(null);
  const iframeRefs = useRef([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // Sample 3D models - replace with your actual Sketchfab model IDs
  const models = [
    {
      id: "b81008d513954189a063ff901f7abfe4",
      title: "Modern Architecture",
      description: "Contemporary building design with clean lines",
      thumbnail: "/api/placeholder/300/200",
      position: "left", // Model position in the section
    },
    {
      id: "dGUrytaktlEoDZsDBTsEyqSLNmH",
      title: "Interior Design",
      description: "Luxurious interior space visualization",
      thumbnail: "/api/placeholder/300/200",
      position: "right", // Model position in the section
    },
    {
      id: "3d-model-example-3",
      title: "Product Design",
      description: "Industrial product visualization",
      thumbnail: "/api/placeholder/300/200",
      position: "center", // Model position in the section
    },
  ];

  // Handle iframe loading
  useEffect(() => {
    const timers = models.map((_, index) => {
      return setTimeout(() => {
        if (index === activeModel) {
          setIsLoading(false);
        }
      }, 2000);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [activeModel]);

  // Handle scroll to set active model
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.model-section');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If section is in viewport
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
          setActiveModel(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            3D Modeling
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning 3D models with interactive visualization.
            Experience the future of design through immersive 3D technology.
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {models.map((model, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  // Scroll to the section
                  document.querySelectorAll('.model-section')[index].scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeModel === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {model.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Model Sections - Each in a full-height section with different layouts */}
        {models.map((model, index) => (
          <section 
            key={index}
            className={`model-section min-h-screen flex items-center relative py-20 ${
              index % 2 === 0 ? 'bg-black/20' : 'bg-black/10'
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
          >
            <div className={`container mx-auto px-4 flex flex-col ${
              model.position === 'left' ? 'md:flex-row' : 
              model.position === 'right' ? 'md:flex-row-reverse' : 
              'md:flex-col items-center'
            } gap-8`}>
              
              {/* Model Info */}
              <motion.div 
                className="md:w-2/5 space-y-6"
                initial={{ opacity: 0, x: model.position === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {model.title}
                </h2>
                <p className="text-xl text-gray-300">
                  {model.description}
                </p>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold"
                  >
                    Explore Details
                  </motion.button>
                </div>
              </motion.div>
              
              {/* 3D Model Viewer */}
              <motion.div 
                className={`md:w-3/5 ${model.position === 'center' ? 'w-full' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10">
                  <div className="relative">
                    {/* Loading Overlay */}
                    <AnimatePresence>
                      {isLoading && activeModel === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20"
                        >
                          <div className="text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
                            />
                            <p className="text-white text-lg font-semibold">
                              Loading 3D Model...
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Sketchfab Viewer */}
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                      <iframe
                        ref={el => iframeRefs.current[index] = el}
                        src={`https://sketchfab.com/models/${model.id}/embed?autostart=1&ui_theme=dark&ui_controls=1&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=1&ui_annotations=0`}
                        className="w-full h-full border-0"
                        allowFullScreen
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        onLoad={() => {
                          if (activeModel === index) {
                            setIsLoading(false);
                          }
                        }}
                      />
                    </div>

                    {/* Controls Hint */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute top-6 right-6 bg-black/70 backdrop-blur-md rounded-xl p-4 text-white"
                    >
                      <div className="text-sm space-y-1">
                        <p>🖱️ Click & Drag to Rotate</p>
                        <p>🔍 Scroll to Zoom</p>
                        <p>⌨️ Hold Shift + Drag to Pan</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="container mx-auto px-4 py-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Interactive Design",
                description:
                  "Explore every angle with smooth 360° rotation and zoom capabilities",
              },
              {
                icon: "⚡",
                title: "Real-time Rendering",
                description:
                  "Experience high-quality 3D models with optimized performance",
              },
              {
                icon: "📱",
                title: "Cross-platform",
                description: "Works seamlessly across all devices and browsers",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ThreedModeling;
