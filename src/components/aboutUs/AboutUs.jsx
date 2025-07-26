

const AboutUs = () => (
  <section id="about-section" className="py-16 bg-[#19160f] bg-gradient-to-tr from-primary/10 to-transparent  border-primary/20  relative">
     {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] top-1/2 right-0 bg-secondary/10 rounded-full blur-2xl animate-float-medium" />
      </div>
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col  items-center gap-10">
        {/* Text */}
        <div className="w-full ">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight">
            Luxor: Where Art Comes to Life
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-gray-200 font-medium mb-6 leading-relaxed">
            Founded in 2020,{" "}
            <span className="font-semibold text-primary">Luxor</span> is a
            premier destination for art enthusiasts and collectors seeking
            exceptional, handcrafted paintings. Our showroom showcases a
            stunning collection of hundreds of unique pieces, each meticulously
            created by skilled artisans dedicated to the timeless craft of
            painting. Renowned for our Italian-quality standards, every artwork
            is a testament to craftsmanship, attention to detail, and artistic
            excellence.
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            At Luxor, we believe that art is a personal expression. That's why
            we offer bespoke, customized paintings tailored to your
            preferences—any size, any style. Whether you're seeking a statement
            piece for your living space or a personalized gift, our team is
            committed to bringing your vision to life with the highest level of
            artistry and professionalism.
          </p>
          <div className="mt-8">
            <span className="inline-block text-xl md:text-2xl italic text-primary font-semibold">
              Discover the beauty of handmade art at Luxor—where every
              brushstroke tells a story.
            </span>
          </div>
        </div>

        {/* Image */}

        <img
          src="/assets/images/shape/shape-about-1.webp "
          alt="Luxor Art Showroom"
          className="absolute right-0 animate-floatReverse"
        />
        <img
          src="/assets/images/shape/shape-about-2.webp"
          alt="Luxor Art Showroom"
          className="absolute left-0 h-96 animate-floatReverse hidden lg:block"
        />
        {/* Optional: Decorative overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      </div>
    </div>
    
  </section>
);

export default AboutUs;
