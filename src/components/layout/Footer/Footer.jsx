import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white text-center py-16 size-full min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden'>
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-[#DF9E42] rounded-full"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="200"
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-[#F4EDE4] rounded-full"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="400"
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#DF9E42] rounded-full"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold text-[#DF9E42] mb-4">Interior Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Creating beautiful and functional spaces that reflect your unique style and personality.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-[#DF9E42] transition-colors duration-300">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-[#DF9E42] transition-colors duration-300">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#DF9E42] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Interior Design</li>
              <li className="text-gray-300">Wallpaper Installation</li>
              <li className="text-gray-300">Space Planning</li>
              <li className="text-gray-300">Color Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@interiordesign.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Design Street, City</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div
          className="flex justify-center space-x-6 mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
            <a
              key={social}
              href="#"
              className="w-12 h-12 bg-[#DF9E42] rounded-full flex items-center justify-center text-white hover:bg-[#c88a35] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={600 + (index * 100)}
            >
              {social.charAt(0)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          className="border-t border-gray-600 pt-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          <p className="text-gray-400">
            © 2024 Interior Design Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
