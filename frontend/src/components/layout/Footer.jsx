import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-accent-navy text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-xl">BS</span>
              </div>
              <span className="font-poppins font-bold text-xl">Bright Spot</span>
            </div>
            <p className="text-white/60 font-inter text-sm leading-relaxed mb-6">
              Your trusted partner for university admissions and career guidance. Connecting ambitious students with world-class education since 2015.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Universities', path: '/universities' },
                { name: 'Courses', path: '/courses' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-accent-gold transition-colors font-inter text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {['Engineering (B.Tech)', 'MBA / Management', 'Medical (MBBS)', 'Arts & Science', 'Diploma Courses', 'Study Abroad'].map(item => (
                <li key={item}>
                  <Link to="/courses" className="text-white/60 hover:text-accent-gold transition-colors font-inter text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 font-inter text-sm">Opposite Snack City, Y-Junction, Kadapa, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-gold flex-shrink-0" />
                <span className="text-white/60 font-inter text-sm">+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-gold flex-shrink-0" />
                <span className="text-white/60 font-inter text-sm">info@brightspot.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-inter">
            © 2026 Bright Spot Educational Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-sm font-inter transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-sm font-inter transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
