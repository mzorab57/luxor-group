import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocationOn, MdOutlinePhone  } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
const Location = () => {
  return (
    <section className="relative py-32 bg-[#19160f] overflow-hidden">
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 bg-cover"
       
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">
              Find Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-primary">Location</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Visit our studio and gallery to experience our stunning artwork in
            person
          </motion.p>
        </div>

        {/* Map and Info Grid */}
        <div className="grid lg:grid-cols-3 gap- mb-1">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden p-6 bg-gradient-to-br from-primary/10 to-transparent  border-primary/20 rounded-2xl mb-4 mr-4 shadow-2xl border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.8876671246387!2d43.47543099999999!3d34.932027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1553dd5b38411375%3A0x30ea9927fbf9535b!2z2LTYsdmD2Kkg2YfZhtiv2LPYqSDYp9mE2K_ZgtipINmE2YTZhdmC2KfZiNmE2KfYqiDYp9mE2LnYp9mF2Kkg2YjYp9mE2KrYrNmH2YrYsiDZiNiq2KPYrNmK2LEg2KfZhNin2YTZitin2Kog2Ygg2KfZhNin2YrYp9iv2Yog2KfZhNi52KfZhdmE2Kkg2KfZhNi52LHYp9mC2YrYqQ!5e0!3m2!1sen!2siq!4v1701101548811!5m2!1sen!2siq"
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
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:space-y-12 space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl transition-all p-6 duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl"><MdOutlineLocationOn color="white" /></span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    صلاح الدين - قضاء بيجي - الحي العسكري -قرب دائرة توزيع
                    كهرباء بيجي
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl"><TbClockHour5 color="white" /></span>
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
                  <span className="text-2xl"><MdOutlinePhone color="white" /></span>
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
                      Website: al-dikkaengineering.com
                    </p>
                  </div>
                </div>
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
        >
          {/* Visit Us */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl"></span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Visit Our Gallery
            </h3>
            <p className="text-gray-300 mb-6">
              Experience our stunning artwork in person. Our gallery showcases
              the finest collection of large-scale paintings and custom artwork.
            </p>
            <button className="px-6 py-3 bg-primary text-[#19160f] rounded-full font-medium hover:bg-primary/90 transition-colors">
              Schedule a Visit
            </button>
          </div>

          {/* Get Directions */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl"></span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Get Directions
            </h3>
            <p className="text-gray-300 mb-6">
              Need help finding us? Get detailed directions to our location and
              plan your visit with ease.
            </p>
            <button className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-[#19160f] transition-colors">
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
