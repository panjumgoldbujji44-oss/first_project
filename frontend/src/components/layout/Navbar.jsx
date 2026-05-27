import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Universities', path: '/universities' },
    { name: 'Courses', path: '/courses' },
    { name: 'Events', path: '/events' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <span className="text-white font-poppins font-bold text-xl">BS</span>
            </div>
            <span className="font-poppins font-bold text-xl md:text-2xl text-accent-navy tracking-tight">
              Bright Spot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-3 py-2 group"
                >
                  <span className={`font-inter font-medium text-sm transition-colors duration-300 ${
                    isActive ? 'text-accent-gold' : 'text-accent-navy/80 group-hover:text-accent-navy'
                  }`}>
                    {link.name}
                  </span>
                  {/* Hover indicator */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold transform origin-left transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              );
            })}
            
            <div className="flex items-center gap-4 pl-4 ml-2 border-l border-accent-navy/10">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-accent-navy/70 hover:text-accent-gold transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Link to="/login" className="font-inter font-medium text-sm text-accent-navy hover:text-accent-gold transition-colors">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-accent-navy/70 hover:text-accent-gold transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-accent-navy rounded-md focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass border-t border-white/20 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      isActive 
                      ? 'bg-primary-yellow/20 text-accent-navy' 
                      : 'text-accent-navy/80 hover:bg-white/50 hover:text-accent-navy'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-accent-navy/10 grid grid-cols-2 gap-4 px-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-center rounded-xl font-medium border border-accent-navy text-accent-navy hover:bg-accent-navy/5 transition-colors"
                >
                  Student Login
                </Link>
                <Link
                  to="/admin/login"
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-center rounded-xl font-medium bg-accent-navy text-white hover:bg-accent-navy/90 transition-colors shadow-soft"
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
