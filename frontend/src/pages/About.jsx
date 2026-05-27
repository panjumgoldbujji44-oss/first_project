import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-accent-navy mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-accent-gold">Bright Spot</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-accent-navy/70 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We are a premium educational consultancy dedicated to guiding students towards their dream universities and crafting successful careers worldwide through personalized mentoring and expert guidance.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white p-10 rounded-[2rem] shadow-soft border border-black/5 relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-navy transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-primary-skyblue/30 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-accent-navy" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-accent-navy mb-4">Our Mission</h2>
            <p className="text-accent-navy/70 leading-relaxed font-inter">
              To empower students with the right guidance, resources, and opportunities to achieve their educational and career aspirations globally. We strive to simplify the complex admission process and ensure every student finds their perfect academic fit.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-10 rounded-[2rem] shadow-soft border border-black/5 relative overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-primary-yellow/20 rounded-2xl flex items-center justify-center mb-8">
              <Lightbulb className="text-accent-gold" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-accent-navy mb-4">Our Vision</h2>
            <p className="text-accent-navy/70 leading-relaxed font-inter">
              To be the world's most trusted and innovative educational consultancy, creating pathways for academic excellence and global leadership. We envision a future where quality education is accessible to all deserving minds.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-primary-beige py-32 mb-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-accent-navy mb-4">Student Support Services</h2>
            <p className="text-accent-navy/60 max-w-2xl mx-auto font-inter text-lg">Comprehensive services tailored to ensure your success at every step of your educational journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <HeartHandshake size={32}/>, title: "Career Counseling", desc: "Expert advice to help you choose the right course and university based on your aptitude and career goals." },
              { icon: <Award size={32}/>, title: "Admission Assistance", desc: "End-to-end support with applications, statement of purpose, and document preparation." },
              { icon: <ShieldCheck size={32}/>, title: "Visa Processing", desc: "Hassle-free student visa application guidance and intensive mock interview preparation." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-10 rounded-[2rem] shadow-soft hover:shadow-float transition-all duration-300 transform hover:-translate-y-2 border border-black/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-cream flex items-center justify-center text-accent-gold mb-6 border border-accent-gold/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-accent-navy mb-4">{service.title}</h3>
                <p className="text-accent-navy/60 font-inter">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
