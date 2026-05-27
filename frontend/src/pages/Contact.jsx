import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-skyblue/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-accent-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in <span className="text-accent-gold">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-accent-navy/70 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have questions about admissions, universities, or our services? We're here to help you every step of the way with personalized support.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Left Side (takes 2 cols) */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-soft border border-white">
              <h2 className="text-2xl font-bold text-accent-navy mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-primary-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <MapPin className="text-accent-gold" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-navy text-lg mb-1">Our Office</h3>
                    <p className="text-accent-navy/70 font-inter leading-relaxed">
                      Bright Spot Educational Solutions<br/>
                      Opposite Snack City, Y-Junction,<br/>
                      Kadapa, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-primary-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <Phone className="text-accent-gold" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-navy text-lg mb-1">Phone Number</h3>
                    <p className="text-accent-navy/70 font-inter">+91 XXXXXXXXXX<br/>+91 XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-primary-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <Mail className="text-accent-gold" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-navy text-lg mb-1">Email Address</h3>
                    <p className="text-accent-navy/70 font-inter">info@brightspot.edu<br/>admissions@brightspot.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-primary-yellow/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <Clock className="text-accent-gold" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-accent-navy text-lg mb-1">Office Timings</h3>
                    <p className="text-accent-navy/70 font-inter">Monday - Saturday<br/>9:30 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-accent-navy/10 flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-cream flex items-center justify-center text-accent-navy hover:bg-accent-gold hover:text-white transition-all shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side (takes 3 cols) */}
          <motion.div 
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-float border border-white">
              <h2 className="text-2xl font-bold text-accent-navy mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">First Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Phone Number</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Message</label>
                  <textarea rows="5" className="w-full px-5 py-4 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all resize-none font-inter" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-accent-navy hover:bg-accent-navy/90 text-white font-bold rounded-xl shadow-soft transition-all flex items-center justify-center gap-2 group mt-4">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Map Area */}
            <div className="h-64 rounded-[2rem] bg-gray-200 overflow-hidden shadow-soft border border-white relative">
                {/* Embed Google Map for Kadapa, Andhra Pradesh */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.946114421447!2d78.81432462228303!3d14.474070215712165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb372064101e69b%3A0xc47e3a985d18d451!2sKadapa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kadapa Office Location"
                ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
