import React, { useState, useEffect } from "react";
import logo from "/logo-removebg.png";

const LoadingScreen = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlurred((prev) => !prev);
    }, 2000); // Toggle blur every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-t from-[#19160f] via-[#19160f]/90 to-[#19160f]/90 flex items-center justify-center z-50">
      <div className="">
        {/* <div className="size-44 rounded-full border-t-4 border-b-4 border-yellow-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-44 rounded-full border-t-4 border-b-4 border-teal-500 animate-spin-reverse"></div>
        </div> */}
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Tawela Logo"
            className={`w-32 md:w-48  transition-all duration-1000 ${
              isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
