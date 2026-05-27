import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, GraduationCap, ChevronRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const universitiesData = [
  {
    id: "vit-university",
    name: "VIT University",
    location: "Vellore, Tamil Nadu",
    ranking: "#8 in Engineering (NIRF)",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop",
    popularCourses: ["B.Tech", "M.Tech", "MBA"],
    highlight: "100% Placement Record"
  },
  {
    id: "srm-institute",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    ranking: "#18 in University (NIRF)",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop",
    popularCourses: ["B.Tech", "B.Arch", "Medical"],
    highlight: "Top Global Tie-ups"
  },
  {
    id: "chandigarh-university",
    name: "Chandigarh University",
    location: "Chandigarh, Punjab",
    ranking: "#27 in University (NIRF)",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    popularCourses: ["B.Tech", "MBA", "Pharmacy"],
    highlight: "Highest Number of Placements"
  },
  {
    id: "amity-university",
    name: "Amity University",
    location: "Noida, Uttar Pradesh",
    ranking: "#35 in University (NIRF)",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop",
    popularCourses: ["B.Tech", "BBA", "Law"],
    highlight: "Excellent Infrastructure"
  },
  {
    id: "lpu",
    name: "Lovely Professional University (LPU)",
    location: "Jalandhar, Punjab",
    ranking: "#38 in University (NIRF)",
    image: "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?q=80&w=1974&auto=format&fit=crop",
    popularCourses: ["B.Tech", "MBA", "Agriculture"],
    highlight: "Largest Single-Campus University"
  },
  {
    id: "kl-university",
    name: "KL University",
    location: "Vijayawada, Andhra Pradesh",
    ranking: "#28 in University (NIRF)",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop",
    popularCourses: ["B.Tech", "MBA", "Architecture"],
    highlight: "100% Placement in Core Sector"
  }
];

// Additional Universities for the list (Jain, Vel Tech, Sandip, Marwadi, Kishkinda) will be loaded dynamically or added below
const additionalUniversities = [
  { name: "Jain University", location: "Bengaluru, Karnataka" },
  { name: "Vel Tech R&D Institute", location: "Chennai, Tamil Nadu" },
  { name: "Sandip University", location: "Nashik, Maharashtra" },
  { name: "Marwadi University", location: "Rajkot, Gujarat" },
  { name: "Kishkinda University", location: "Ballari, Karnataka" }
];

const Universities = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-accent-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Partner <span className="text-accent-gold">Universities</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-accent-navy/70 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore India's top-ranked institutions. We provide direct admission guidance, scholarship assistance, and personalized career counseling for these prestigious universities.
          </motion.p>
        </div>

        {/* Dynamic Filters (Placeholder for functionality) */}
        <motion.div 
          className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-white mb-12 flex flex-wrap gap-4 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-4 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar w-full md:w-auto">
            <button className="px-6 py-2 bg-accent-navy text-white rounded-full font-medium whitespace-nowrap">All Universities</button>
            <button className="px-6 py-2 bg-primary-cream text-accent-navy hover:bg-primary-yellow/20 rounded-full font-medium whitespace-nowrap transition-colors">Engineering</button>
            <button className="px-6 py-2 bg-primary-cream text-accent-navy hover:bg-primary-yellow/20 rounded-full font-medium whitespace-nowrap transition-colors">Medical</button>
            <button className="px-6 py-2 bg-primary-cream text-accent-navy hover:bg-primary-yellow/20 rounded-full font-medium whitespace-nowrap transition-colors">MBA</button>
          </div>
          <div className="relative w-full md:w-64">
            <input type="text" placeholder="Search universities..." className="w-full px-5 py-2.5 rounded-full bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none font-inter text-sm" />
          </div>
        </motion.div>

        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universitiesData.map((uni, idx) => (
            <motion.div 
              key={uni.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-float border border-black/5 transition-all duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-accent-navy/20 group-hover:bg-accent-navy/10 transition-colors z-10"></div>
                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-accent-navy z-20 flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-accent-gold" /> {uni.ranking}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-accent-navy leading-tight mb-2 group-hover:text-accent-gold transition-colors">{uni.name}</h3>
                    <p className="flex items-center text-sm text-accent-navy/60 font-medium">
                      <MapPin size={14} className="mr-1" /> {uni.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-2">
                    <GraduationCap size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                    <p className="text-sm text-accent-navy/80 font-inter">
                      <span className="font-semibold">Top Courses:</span> {uni.popularCourses.join(', ')}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                    <p className="text-sm text-accent-navy/80 font-inter">
                      <span className="font-semibold">Highlight:</span> {uni.highlight}
                    </p>
                  </div>
                </div>

                {/* Footer / CTA */}
                <div className="pt-4 border-t border-accent-navy/10 flex items-center justify-between mt-auto">
                  <Link to={`/universities/${uni.id}`} className="text-accent-navy font-semibold hover:text-accent-gold transition-colors text-sm">
                    View Details
                  </Link>
                  <Link to={`/admissions?uni=${uni.id}`} className="w-10 h-10 rounded-full bg-primary-yellow/20 text-accent-gold flex items-center justify-center group-hover:bg-accent-gold group-hover:text-white transition-colors">
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Universities List (Simplified for other requested universities) */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-accent-navy mb-8 text-center">More Partner Institutions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {additionalUniversities.map((uni, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-5 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow text-center flex flex-col justify-center items-center h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <h4 className="font-bold text-accent-navy text-sm mb-1">{uni.name}</h4>
                <p className="text-xs text-accent-navy/60 flex items-center justify-center gap-1">
                  <MapPin size={12} /> {uni.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Universities;
