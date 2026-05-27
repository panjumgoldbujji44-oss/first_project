import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Globe, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-skyblue/40 to-transparent -z-10 rounded-bl-[100px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-yellow/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-accent-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-delayed"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Side: Text Content */}
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-yellow/20 border border-primary-yellow/50 text-accent-navy font-semibold text-sm mb-6 shadow-sm">
                #1 Educational Consultancy in India
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-accent-navy leading-[1.1] mb-6">
                Shape Your Future With <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-600">
                  Bright Spot
                </span>
              </h1>
              
              <p className="text-lg text-accent-navy/70 mb-8 font-inter leading-relaxed max-w-xl">
                Your Trusted Partner for University Admissions & Career Guidance. We connect ambitious students with world-class education and unlimited opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions" className="px-8 py-4 bg-accent-navy text-white font-medium rounded-full shadow-soft hover:shadow-float hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={18} />
                </Link>
                <Link to="/universities" className="px-8 py-4 bg-white border border-accent-navy/10 text-accent-navy font-medium rounded-full shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                  Explore Universities
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Images & Floating Cards */}
            <motion.div 
              className="relative h-[500px] lg:h-[600px] w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Main Image */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[90%] rounded-[2rem] overflow-hidden shadow-float">
                <div className="absolute inset-0 bg-accent-navy/10 z-10 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Happy college students" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div 
                className="absolute top-10 left-0 glass-card p-4 pr-6 rounded-2xl flex items-center gap-4 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center text-accent-navy">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-accent-navy text-xl">5,000+</h4>
                  <p className="text-xs text-accent-navy/70 font-medium uppercase tracking-wider">Students Admitted</p>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                className="absolute bottom-20 -left-4 glass-card p-4 pr-6 rounded-2xl flex items-center gap-4 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-accent-navy text-xl">98%</h4>
                  <p className="text-xs text-accent-navy/70 font-medium uppercase tracking-wider">Success Rate</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Universities Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-accent-navy mb-4">Top Partner Universities</h2>
          <p className="text-accent-navy/60 mb-12 max-w-2xl mx-auto">We partner with India's most prestigious institutions to bring you world-class educational opportunities.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos placeholder */}
            <div className="h-16 flex items-center justify-center text-xl font-bold font-serif text-accent-navy">VIT</div>
            <div className="h-16 flex items-center justify-center text-xl font-bold font-serif text-accent-navy">SRM</div>
            <div className="h-16 flex items-center justify-center text-xl font-bold font-serif text-accent-navy">Amity</div>
            <div className="h-16 flex items-center justify-center text-xl font-bold font-serif text-accent-navy">LPU</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
