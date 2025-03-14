import React from "react";
import { motion } from "framer-motion";

const BannerLogo = () => {
  // Array of logos (you can dynamically pass these if needed)
  const logos = [
    "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243218/logo_pzacse.webp",
    "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243218/logo_pzacse.webp",
    "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243218/logo_pzacse.webp",
    "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243218/logo_pzacse.webp",
    "https://res.cloudinary.com/dhdmbwnak/image/upload/v1741243218/logo_pzacse.webp",
  ];

  return (
    <div className="w-full h-[70px] bg-black flex items-center overflow-hidden">
      <motion.div
        className="flex gap-[25px] whitespace-nowrap"
        animate={{
          x: [0, -logos.length * 200], 
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Render logos twice for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="inline-block flex-shrink-0 mx-[12.5px]"
          >
            <img 
              src={logo} 
              alt={`logo-${index}`} 
               loading="lazy"
              className="h-[50px] w-auto object-contain" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BannerLogo;