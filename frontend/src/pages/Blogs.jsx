import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogsData = [
  {
    id: 1,
    title: "Top 10 Engineering Colleges in India 2026: A Complete Ranking Guide",
    excerpt: "Choosing the right engineering college is a life-changing decision. Here's our curated list of the top 10 engineering colleges in India based on NIRF ranking, placements, and infrastructure.",
    author: "Dr. Priya Sharma",
    date: "May 20, 2026",
    readTime: "8 min read",
    category: "University Comparisons",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "How to Write a Winning Statement of Purpose (SOP) for University Admissions",
    excerpt: "Your SOP can make or break your application. Learn the exact structure, dos and don'ts, and real examples of successful SOPs that got students into top universities.",
    author: "Rahul Verma",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "Admission Tips",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scholarships for Indian Students in 2026: Complete List & How to Apply",
    excerpt: "Don't let finances stop your education. Discover government, university, and private scholarships available for Indian students pursuing higher education in India and abroad.",
    author: "Anita Desai",
    date: "May 10, 2026",
    readTime: "10 min read",
    category: "Scholarships",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Study Abroad in Canada: Everything You Need to Know in 2026",
    excerpt: "Canada remains the #1 destination for Indian students. From PR pathways to top universities, fees, and living costs — here's your complete guide to studying in Canada.",
    author: "Vikram Patel",
    date: "May 5, 2026",
    readTime: "12 min read",
    category: "Study Abroad",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "MBA vs B.Tech: Which is the Better Career Path After 12th?",
    excerpt: "Confused between engineering and management? This detailed comparison covers salary expectations, career growth, required skills, and which path suits your personality.",
    author: "Dr. Priya Sharma",
    date: "April 28, 2026",
    readTime: "7 min read",
    category: "Career Guidance",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "How to Prepare for University Entrance Exams: Expert Tips & Strategies",
    excerpt: "Ace your JEE, NEET, CAT, or CLAT with these proven strategies from toppers and education experts. Includes study plans, resources, and time management techniques.",
    author: "Rahul Verma",
    date: "April 20, 2026",
    readTime: "9 min read",
    category: "Admission Tips",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop",
  }
];

const Blogs = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 -z-10 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-accent-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-accent-gold">Blog</span>
          </motion.h1>
          <motion.p
            className="text-lg text-accent-navy/70 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert insights on admissions, career guidance, scholarships, and study abroad opportunities to help you make informed decisions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['All', 'Career Guidance', 'Scholarships', 'Admission Tips', 'Study Abroad', 'University Comparisons'].map((tab, i) => (
            <button
              key={tab}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm border border-black/5 ${
                i === 0 ? 'bg-accent-navy text-white' : 'bg-white text-accent-navy hover:bg-accent-navy hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Featured Blog (First item) */}
        <motion.div
          className="bg-white rounded-[2rem] overflow-hidden shadow-soft border border-black/5 mb-12 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto overflow-hidden">
              <img src={blogsData[0].image} alt={blogsData[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-yellow/20 text-accent-navy font-semibold text-xs mb-4 w-fit">
                {blogsData[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-accent-navy mb-4 leading-tight group-hover:text-accent-gold transition-colors">
                {blogsData[0].title}
              </h2>
              <p className="text-accent-navy/60 font-inter mb-6 leading-relaxed">{blogsData[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-accent-navy/50">
                <span className="flex items-center gap-1"><User size={14} /> {blogsData[0].author}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {blogsData[0].readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid (Rest) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.slice(1).map((blog, idx) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-soft border border-black/5 hover:shadow-float transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-cream text-accent-navy/80 font-medium text-xs mb-3 w-fit">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-accent-navy mb-3 leading-snug group-hover:text-accent-gold transition-colors">{blog.title}</h3>
                <p className="text-accent-navy/60 font-inter text-sm mb-4 line-clamp-2 flex-grow">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-accent-navy/50 pt-4 border-t border-accent-navy/5 mt-auto">
                  <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
