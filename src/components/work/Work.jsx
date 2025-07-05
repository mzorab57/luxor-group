import React, { useState, useEffect } from 'react';
import Stack from '../Stack';

const works = [
  {
    id: 1,
    category: 'INTERIOR',
    title: 'Room Wallpapers',
    image: '/assets/images/hero/slider-1.webp',
    description: 'Modern interior design with elegant wallpapers'
  },
  {
    id: 2,
    category: 'INTERIOR',
    title: 'Ceiling Wallpaper',
    image: '/assets/images/hero/slider-2.webp',
    description: 'Luxurious ceiling designs with premium materials'
  },
  {
    id: 3,
    category: 'INTERIOR',
    title: 'Wall Designs',
    image: '/assets/images/hero/slider-3.webp',
    description: 'Creative wall patterns and textures'
  },
  {
    id: 4,
    category: 'INTERIOR',
    title: 'Custom Wallpapers',
    image: '/assets/images/hero/slider-3.webp',
    description: 'Personalized wallpaper solutions'
  }
];

const Work = () => {
  const [cardDimensions, setCardDimensions] = useState({ width: 850, height: 450 });
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth <= 480) {
        setCardDimensions({ width: 300, height: 250 });
      } else if (window.innerWidth <= 768) {
        setCardDimensions({ width: 500, height: 300 });
      } else if (window.innerWidth <= 1024) {
        setCardDimensions({ width: 650, height: 400 });
      } else {
        setCardDimensions({ width: 850, height: 450 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section  style={{
      backgroundImage: "url('/assets/images/shape/shape-work.webp')",
      backgroundRepeat: "no-repeat",
    }} className="py-10 md:py-20  bg-cover  relative overflow-hidden ">

    <img 
      src="/assets/images/shape/shape-work-3.png" 
      alt="lamp" 
      className='absolute top-0 right-20  animate-lamp-float hidden  lg:block'
    />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/assets/images/patterns/pattern-1.png")',
          backgroundSize: '30px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container flex flex-col mx-auto  w-full px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h4 className="text-primary font-medium tracking-wider text-start uppercase mb-2 md:mb-3 text-sm md:text-base">OUR COMPLETE PROJECT</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 text-start">Our Quality Work</h2>
          <p className='text-start mt-3 max-w-xl text-lg font-medium text-gray-500'>
          At Luxor, art is more than decoration—it's an expression of individuality. Experience the beauty of authentic, handcrafted paintings designed to inspire and captivate.
          </p>
        </div>

        {/* Stack Gallery */}
        <div className="max-w-full w-full">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cardDimensions={cardDimensions}
            cardsData={works.map(work => ({
              id: work.id,
              img: work.image
            }))}
            animationConfig={{ stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Modal for Work Details */}
        {selectedWork && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-4 md:p-8 max-w-2xl w-full mx-4">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{selectedWork.title}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{selectedWork.description}</p>
              <button
                onClick={() => setSelectedWork(null)}
                className="bg-primary text-white px-4 md:px-6 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];

<Stack
  randomRotation={true}
  sensitivity={180}
  sendToBackOnClick={false}
  cardDimensions={{ width: 200, height: 200 }}
  cardsData={images}
/>