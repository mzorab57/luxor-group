import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import AnimatedComponent from "../animation/AnimatedComponent";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-32 bg-[#19160f] overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-cover" />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 text-center">
          <h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-center font-medium tracking-wider uppercase mb-3"
          >
            Find US
          </h4>
          <AnimatedComponent animationType="fade-right">
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl leading-relaxed font-jost font-medium uppercase text-gray-200">
                {t("Location")}
              </h1>
              <div className="lg:text-6xl text-5xl whitespace-nowrap absolute lg:-top-8 -top-10 left-1/2 transform -translate-x-1/2 leading-relaxed font-bold uppercase text-gray-500 opacity-10">
                {t("Location")}
              </div>
            </div>
          </AnimatedComponent>
        </div>

        {/* Map and Info Grid */}
        <div className="grid lg:grid-cols-2  gap-1">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 "
          >
            <div className="relative overflow-hidden p-4 bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 rounded-2xl mb-4  shadow-2xl border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=35.5681763,45.4035339&z=15&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
              />
              {/* Map Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href="https://maps.app.goo.gl/wi4PjH9r69uDBria8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-[#19160f] rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" col-span-2 flex flex-col lg:flex-row "
          >
            <div className="flex flex-col gap-5">
              {/* Address Card */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl transition-all p-6 duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-2xl">
                      <MdOutlineLocationOn color="white" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Our Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Sulaymaniyah Bakhtiari Street - above Youth Center - upper
                      floor of City Star Bakery
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-2xl">
                      <TbClockHour5 color="white" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Working Hours
                    </h3>
                    <div className="space-y-1 text-gray-300">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-2xl">
                      <MdOutlinePhone color="white" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Contact Info
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Phone: 07706141190
                      </p>
                      <p className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Email: info@luxorgroups.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* visit & derection */}
            <div className="lg:mx-3 mt-4 lg:mt-0 flex flex-col gap-4">
              {/* Visit Us */}
              <div
                className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-9 text-center cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => {
                  window.location.href = "/gallery";
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
              >
              
                <h3 className="text-2xl font-bold text-white mb-3">
                  Visit Our Gallery
                </h3>
                <p className="text-gray-300 mb-6">
                  Experience our stunning artwork in person. Our gallery
                  showcases the finest collection of large-scale paintings and
                  custom artwork.
                </p>
                <button className="px-6 py-3 bg-primary text-[#19160f] rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Schedule a Visit
                </button>
              </div>

              {/* Get Directions */}
              <div
                onClick={() => {
                  window.location.href = "/service";
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                className="bg-gradient-to-br  cursor-pointer from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center"
              >
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  Get Service
                </h3>
                <p className="text-gray-300 mb-6">
                  We pride ourselves on offering not only a diverse collection
                  of stunning artworks but also the flexibility to bring your
                  vision to life.
                </p>
                <button className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-[#19160f] transition-colors">
                  Get Service
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mt-4 lg:mt-0"
        ></motion.div>
      </div>
    </section>
  );
};

export default Location;
