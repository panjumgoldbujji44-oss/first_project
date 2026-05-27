import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    type: "Admission Drive",
    title: "VIT University Direct Admission Drive 2026",
    date: "June 15, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Bright Spot Office, Kadapa",
    description: "Meet VIT representatives directly. On-the-spot admissions and scholarship assessments for B.Tech and MBA programs.",
    seats: "Limited to 50 students",
    badge: "🔥 Upcoming",
    badgeColor: "bg-red-50 text-red-600",
  },
  {
    id: 2,
    type: "Seminar",
    title: "Career Guidance Seminar: Engineering vs Management",
    date: "June 22, 2026",
    time: "11:00 AM - 1:00 PM",
    location: "Online (Zoom)",
    description: "Confused between engineering and management? Attend this free seminar led by industry experts to find your ideal career path.",
    seats: "Open for all",
    badge: "🎓 Free Entry",
    badgeColor: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    type: "Workshop",
    title: "SOP & Application Writing Workshop",
    date: "July 5, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Bright Spot Office, Kadapa",
    description: "Learn how to write a winning Statement of Purpose and craft a standout university application with our expert counselors.",
    seats: "30 seats only",
    badge: "✍️ Hands-on",
    badgeColor: "bg-blue-50 text-blue-600",
  },
  {
    id: 4,
    type: "Webinar",
    title: "Study Abroad: Opportunities in Canada & Australia",
    date: "July 18, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Online (Google Meet)",
    description: "Explore scholarship options, visa processes, and top universities in Canada and Australia. Live Q&A with alumni currently studying abroad.",
    seats: "Open for all",
    badge: "🌍 International",
    badgeColor: "bg-purple-50 text-purple-600",
  },
  {
    id: 5,
    type: "University Event",
    title: "Chandigarh University Campus Tour (Virtual)",
    date: "August 2, 2026",
    time: "2:00 PM - 3:30 PM",
    location: "Online (Zoom)",
    description: "Take a virtual tour of Chandigarh University's world-class campus, labs, hostels, and sports facilities. Interact with current students.",
    seats: "100 spots available",
    badge: "🏛️ Campus Tour",
    badgeColor: "bg-amber-50 text-amber-700",
  },
  {
    id: 6,
    type: "Admission Drive",
    title: "LPU & Amity Joint Admission Counseling",
    date: "August 20, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Bright Spot Office, Kadapa",
    description: "Meet admission officers from LPU and Amity University. Get scholarship info, fee structures, and apply on the spot.",
    seats: "Limited to 40 students",
    badge: "🎯 Direct Admission",
    badgeColor: "bg-orange-50 text-orange-600",
  }
];

const Events = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-primary-skyblue/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-accent-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming <span className="text-accent-gold">Events</span>
          </motion.h1>
          <motion.p
            className="text-lg text-accent-navy/70 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stay updated with our admission drives, seminars, workshops, and webinars. Don't miss out on life-changing opportunities.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', 'Admission Drive', 'Seminar', 'Workshop', 'Webinar', 'University Event'].map(tab => (
            <button
              key={tab}
              className="px-6 py-2.5 rounded-full font-medium text-sm transition-all bg-white text-accent-navy hover:bg-accent-navy hover:text-white shadow-sm border border-black/5 first:bg-accent-navy first:text-white"
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {eventsData.map((event, idx) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-[2rem] p-8 shadow-soft border border-black/5 hover:shadow-float transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Top Row: Badge + Type */}
              <div className="flex items-center justify-between mb-5">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${event.badgeColor}`}>
                  {event.badge}
                </span>
                <span className="text-xs font-semibold text-accent-navy/50 uppercase tracking-wider">{event.type}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-accent-navy mb-4 leading-tight group-hover:text-accent-gold transition-colors">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-accent-navy/60 font-inter text-sm mb-6 leading-relaxed flex-grow">
                {event.description}
              </p>

              {/* Info Row */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-accent-navy/70">
                  <Calendar size={16} className="text-accent-gold flex-shrink-0" />
                  <span className="font-inter">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-accent-navy/70">
                  <Clock size={16} className="text-accent-gold flex-shrink-0" />
                  <span className="font-inter">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-accent-navy/70">
                  <MapPin size={16} className="text-accent-gold flex-shrink-0" />
                  <span className="font-inter">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-accent-navy/70">
                  <Users size={16} className="text-accent-gold flex-shrink-0" />
                  <span className="font-inter">{event.seats}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-5 border-t border-accent-navy/5 mt-auto">
                <button className="w-full py-3.5 bg-primary-cream text-accent-navy font-semibold rounded-xl hover:bg-accent-navy hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  Register Now
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
