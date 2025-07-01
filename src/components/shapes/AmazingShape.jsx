import React from 'react';

const AmazingShape = () => {
  return (
    <div
      className="absolute -bottom-48 -left-48 z-0"
      data-aos="fade-up-right"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="shape-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DF9E42" />
            <stop offset="50%" stopColor="#F4EDE4" />
            <stop offset="100%" stopColor="#DF9E42" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          fill="url(#shape-gradient)"
          filter="url(#glow)"
          d="M393.9,393.9Q393.9,500,250,500,106.1,500,106.1,393.9,106.1,287.7,53.1,250,0,212.3,53.1,175,106.1,137.7,106.1,31.6,106.1-74.4,250-74.4q143.9,0,143.9,106.1,0,106.1,53,143.8,53.1,37.7,0,75.4-53.1,37.7-53.1,143.8Z"
          transform="translate(0 0)"
          opacity="0.8"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="M393.9,393.9Q393.9,500,250,500,106.1,500,106.1,393.9,106.1,287.7,53.1,250,0,212.3,53.1,175,106.1,137.7,106.1,31.6,106.1-74.4,250-74.4q143.9,0,143.9,106.1,0,106.1,53,143.8,53.1,37.7,0,75.4-53.1,37.7-53.1,143.8Z;
                   M353.5,426.5Q320.9,500,250,500,179.1,500,146.5,426.5q-32.5-73.5-32.5-176.5,0-103.1,32.5-176.5,32.5-73.5,103.5-73.5,70.9,0,103.5,73.5,32.5,73.5,32.5,176.5,0,103.1-32.5,176.5Z;
                   M420.5,380.5Q400.9,500,250,500,99.1,500,79.5,380.5q-19.6-119.5-19.6-130.5,0-11.1,19.6-130.5,19.6-119.5,170.5-119.5,150.9,0,170.5,119.5,19.6,119.5,19.6,130.5,0,11.1-19.6,130.5Z;
                   M393.9,393.9Q393.9,500,250,500,106.1,500,106.1,393.9,106.1,287.7,53.1,250,0,212.3,53.1,175,106.1,137.7,106.1,31.6,106.1-74.4,250-74.4q143.9,0,143.9,106.1,0,106.1,53,143.8,53.1,37.7,0,75.4-53.1,37.7-53.1,143.8Z"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="20s"
            repeatCount="indefinite"
            values="0 250 250;360 250 250"
          />
        </path>
      </svg>
    </div>
  );
};

export default AmazingShape;