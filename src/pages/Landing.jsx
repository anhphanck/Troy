// src/pages/Landing.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Landing() {
  const navigate = useNavigate();

  const [moveLogo, setMoveLogo] = useState(false);
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMoveLogo(true), 1200);
    const t2 = setTimeout(() => setShowLayout(true), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-black relative flex items-center justify-center">
      {/* Background Image with Enhanced Sharpness & Slow Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/landing.jpg"
          className="w-full h-full object-cover contrast-125 brightness-75 saturate-[1.1] filter drop-shadow-2xl"
          alt="TROY Architecture Background"
        />
        {/* Subtle Vignette Overlay for Depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60" />
      </motion.div>

      {/* Animated Logo TROY */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, letterSpacing: "1em" }}
          animate={{ scale: 1, opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center px-4"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-[0.2em] sm:tracking-[0.4em] relative">
            TROY
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-2 md:-bottom-4 left-0 h-[1px] md:h-[2px] bg-troy-red"
            />
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-white text-[10px] sm:text-xs md:text-lg font-light tracking-[0.4em] sm:tracking-[0.6em] mt-6 md:mt-10 uppercase text-center"
          >
            architecture
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          onClick={() => navigate("/ve-chung-toi")}
          className="mt-12 md:mt-20 group relative px-8 md:px-12 py-3 md:py-4 overflow-hidden border border-white/30 text-white transition-all duration-500 hover:border-troy-red"
        >
          <span className="relative z-10 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase group-hover:text-white">
            Discover Experience
          </span>
          <div className="absolute inset-0 bg-troy-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/10 origin-top"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/10 origin-bottom"
        />
      </div>
    </div>
  );
}