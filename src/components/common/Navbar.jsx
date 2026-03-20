import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("VI");

  const navLinks = [
    { name: "VỀ CHÚNG TÔI", path: "/ve-chung-toi" },
    { name: "KHÁCH HÀNG", path: "/khach-hang" },
    { name: "THẾ MẠNH", path: "/the-manh" },
    { name: "DỰ ÁN", path: "/du-an" },
    { name: "ĐỐI TÁC", path: "/doi-tac" },
    { name: "LIÊN HỆ", path: "/lien-he" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-16 py-4 md:py-5 bg-white/90 backdrop-blur-md border-b border-gray-100 z-[60] transition-all">
        <div className="flex items-center">
          <Link to="/" className="flex items-baseline group">
            <span className="text-troy-red font-serif font-bold text-2xl md:text-3xl tracking-tighter transition-all duration-500 group-hover:tracking-widest">TROY</span>
            <span className="text-black text-[8px] md:text-[10px] ml-1.5 font-light tracking-[0.3em] uppercase opacity-70">architecture</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold tracking-[0.15em] hover:text-troy-red transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-troy-red after:transition-all hover:after:w-full ${
                location.pathname === link.path ? "text-troy-red after:w-full" : "text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language Switch & Mobile Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold tracking-widest">
            {["VI", "EN", "CN"].map((l, i) => (
              <div key={l} className="flex items-center gap-3">
                <span 
                  onClick={() => setLang(l)}
                  className={`cursor-pointer transition-all duration-300 hover:text-troy-red ${
                    lang === l ? "text-troy-red scale-110" : "text-gray-400 opacity-60"
                  }`}
                >
                  {l}
                </span>
                {i < 2 && <span className="text-gray-200">|</span>}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-[55] lg:hidden flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-serif tracking-widest border-b border-gray-100 pb-4 ${
                    location.pathname === link.path ? "text-troy-red" : "text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto mb-12 flex items-center gap-4 text-xs font-bold tracking-[0.2em]">
              <span className="text-gray-900">VI</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400">EN</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}