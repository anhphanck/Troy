// src/pages/Landing.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full overflow-hidden bg-black relative flex items-center justify-center">
      {/* Background Image with Enhanced Performance & Slow Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 4, ease: [0.33, 1, 0.68, 1] }} // Smooth easeOutQuart
        className="absolute inset-0 z-0 will-change-transform transform-gpu"
      >
        <img
          src="/images/landing.jpg"
          className="w-full h-full object-cover contrast-110 brightness-75 saturate-[1.05]"
          alt="TROY Architecture Background"
          loading="eager"
        />
        {/* Subtle Vignette Overlay for Depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/70" />
      </motion.div>

      {/* Animated Logo TROY */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col items-center px-4"
        >
          <motion.h1 
            initial={{ letterSpacing: "1.2em" }}
            animate={{ letterSpacing: "0.4em" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-[0.2em] sm:tracking-[0.4em] relative will-change-[letter-spacing]"
          >
            TROY
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
              className="absolute -bottom-2 md:-bottom-4 left-0 h-[1px] md:h-[2px] bg-troy-red"
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="text-white text-[10px] sm:text-xs md:text-lg font-light tracking-[0.4em] sm:tracking-[0.6em] mt-6 md:mt-10 uppercase text-center"
          >
            architecture
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          onClick={() => navigate("/ve-chung-toi")}
          className="mt-12 md:mt-20 group relative px-8 md:px-12 py-3 md:py-4 overflow-hidden border border-white/30 text-white transition-all duration-500 hover:border-troy-red"
        >
          <span className="relative z-10 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase group-hover:text-white">
            Discover Experience
          </span>
          <div className="absolute inset-0 bg-troy-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
      </div>

      {/* Decorative Lines - Simplified for Performance */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.8 }}
          className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 origin-top"
        />
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 1 }}
          className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 origin-bottom"
        />
      </div>
    </div>
  );
}