import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Clock, Users, ChevronRight, Filter } from 'lucide-react';

const coursesData = [
  {
    category: "Engineering",
    icon: "⚙️",
    color: "bg-blue-50",
    courses: [
      { name: "B.Tech Computer Science", duration: "4 Years", seats: "500+", fee: "₹1.5L - ₹4L/year" },
      { name: "B.Tech Mechanical Engineering", duration: "4 Years", seats: "300+", fee: "₹1.2L - ₹3.5L/year" },
      { name: "B.Tech Electronics & Communication", duration: "4 Years", seats: "350+", fee: "₹1.3L - ₹3.8L/year" },
      { name: "B.Tech Civil Engineering", duration: "4 Years", seats: "200+", fee: "₹1L - ₹3L/year" },
    ]
  },
  {
    category: "MBA / Management",
    icon: "📊",
    color: "bg-amber-50",
    courses: [
      { name: "MBA General Management", duration: "2 Years", seats: "200+", fee: "₹2L - ₹6L/year" },
      { name: "MBA Finance", duration: "2 Years", seats: "150+", fee: "₹2.5L - ₹7L/year" },
      { name: "MBA Marketing", duration: "2 Years", seats: "150+", fee: "₹2L - ₹6L/year" },
      { name: "BBA / BMS", duration: "3 Years", seats: "300+", fee: "₹80K - ₹2L/year" },
    ]
  },
  {
    category: "Medical",
    icon: "🩺",
    color: "bg-green-50",
    courses: [
      { name: "MBBS", duration: "5.5 Years", seats: "100+", fee: "₹5L - ₹15L/year" },
      { name: "BDS (Dentistry)", duration: "5 Years", seats: "80+", fee: "₹3L - ₹10L/year" },
      { name: "B.Pharm (Pharmacy)", duration: "4 Years", seats: "200+", fee: "₹1L - ₹3L/year" },
      { name: "Nursing (B.Sc)", duration: "4 Years", seats: "150+", fee: "₹50K - ₹2L/year" },
    ]
  },
  {
    category: "Arts & Science",
    icon: "🎨",
    color: "bg-purple-50",
    courses: [
      { name: "B.Sc Computer Science", duration: "3 Years", seats: "250+", fee: "₹30K - ₹1.5L/year" },
      { name: "B.A. English Literature", duration: "3 Years", seats: "200+", fee: "₹20K - ₹1L/year" },
      { name: "B.Com (Commerce)", duration: "3 Years", seats: "300+", fee: "₹25K - ₹1.2L/year" },
      { name: "B.Sc Psychology", duration: "3 Years", seats: "100+", fee: "₹40K - ₹1.5L/year" },
    ]
  },
  {
    category: "Diploma Courses",
    icon: "📜",
    color: "bg-orange-50",
    courses: [
      { name: "Diploma in Mechanical Engg.", duration: "3 Years", seats: "200+", fee: "₹30K - ₹80K/year" },
      { name: "Diploma in Computer Engg.", duration: "3 Years", seats: "250+", fee: "₹35K - ₹90K/year" },
      { name: "Diploma in Electrical Engg.", duration: "3 Years", seats: "150+", fee: "₹30K - ₹75K/year" },
    ]
  },
  {
    category: "Study Abroad Programs",
    icon: "🌍",
    color: "bg-sky-50",
    courses: [
      { name: "Foundation Year (UK)", duration: "1 Year", seats: "50+", fee: "£8,000 - £15,000/year" },
      { name: "Pathway Program (Australia)", duration: "1 Year", seats: "40+", fee: "AUD 15,000 - 25,000/year" },
      { name: "Undergraduate (Canada)", duration: "4 Years", seats: "60+", fee: "CAD 18,000 - 35,000/year" },
    ]
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...coursesData.map(c => c.category)];

  const filteredData = coursesData
    .filter(cat => activeCategory === 'All' || cat.category === activeCategory)
    .map(cat => ({
      ...cat,
      courses: cat.courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(cat => cat.courses.length > 0);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary-skyblue/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-accent-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore <span className="text-accent-gold">Courses</span>
          </motion.h1>
          <motion.p
            className="text-lg text-accent-navy/70 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover a wide range of academic programs across engineering, management, medical, arts, and more from India's top universities.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <motion.div
          className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-navy/40" />
              <input
                type="text"
                placeholder="Search courses by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none font-inter text-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat
                    ? 'bg-accent-navy text-white shadow-soft'
                    : 'bg-primary-cream text-accent-navy hover:bg-primary-yellow/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        {filteredData.map((category, catIdx) => (
          <motion.div
            key={category.category}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-2xl font-bold text-accent-navy">{category.category}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-float hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-accent-navy text-base mb-4 leading-snug group-hover:text-accent-gold transition-colors">{course.name}</h3>
                  <div className="space-y-2 mb-6 flex-grow">
                    <p className="flex items-center text-sm text-accent-navy/60 font-inter gap-2">
                      <Clock size={14} className="text-accent-gold" /> {course.duration}
                    </p>
                    <p className="flex items-center text-sm text-accent-navy/60 font-inter gap-2">
                      <Users size={14} className="text-accent-gold" /> {course.seats} seats
                    </p>
                    <p className="flex items-center text-sm text-accent-navy/60 font-inter gap-2">
                      <BookOpen size={14} className="text-accent-gold" /> {course.fee}
                    </p>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-primary-cream text-accent-navy font-medium text-sm hover:bg-accent-gold hover:text-white transition-colors flex items-center justify-center gap-1">
                    Learn More <ChevronRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-accent-navy/40 font-medium">No courses found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Courses;
