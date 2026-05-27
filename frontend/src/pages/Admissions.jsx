import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle2, ChevronRight } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 -z-10 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-primary-skyblue/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float-delayed"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-accent-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Start Your <span className="text-accent-gold">Journey</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-accent-navy/70 font-inter max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fill out the application form below. Our counselors will review your profile and get back to you within 24 hours.
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div 
          className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-soft border border-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-8">
            
            {/* Personal Details Section */}
            <div>
              <h3 className="text-xl font-bold text-accent-navy mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-yellow/20 text-accent-gold flex items-center justify-center text-sm">1</span>
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Full Name *</label>
                  <input type="text" className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Email Address *</label>
                  <input type="email" className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Phone Number *</label>
                  <input type="tel" className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="+91 XXXXXXXXXX" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Date of Birth</label>
                  <input type="date" className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter text-accent-navy" />
                </div>
              </div>
            </div>

            <hr className="border-accent-navy/5" />

            {/* Academic Interests Section */}
            <div>
              <h3 className="text-xl font-bold text-accent-navy mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-yellow/20 text-accent-gold flex items-center justify-center text-sm">2</span>
                Academic Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Preferred University</label>
                  <select className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter appearance-none text-accent-navy cursor-pointer">
                    <option value="">Select a University</option>
                    <option value="vit">VIT University</option>
                    <option value="srm">SRM Institute of Science and Technology</option>
                    <option value="chandigarh">Chandigarh University</option>
                    <option value="amity">Amity University</option>
                    <option value="lpu">Lovely Professional University</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Course Interested In</label>
                  <select className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter appearance-none text-accent-navy cursor-pointer">
                    <option value="">Select a Course</option>
                    <option value="btech">B.Tech / B.E.</option>
                    <option value="mba">MBA / PGDM</option>
                    <option value="medical">Medical (MBBS/BDS)</option>
                    <option value="arts">Arts & Science</option>
                    <option value="diploma">Diploma Courses</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Previous Academic Details</label>
                  <textarea rows="3" className="w-full px-5 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all resize-none font-inter" placeholder="E.g., 12th Grade - 95%, CBSE Board or B.Tech - 8.5 CGPA"></textarea>
                </div>
              </div>
            </div>

            <hr className="border-accent-navy/5" />

            {/* Document Upload Section */}
            <div>
              <h3 className="text-xl font-bold text-accent-navy mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-yellow/20 text-accent-gold flex items-center justify-center text-sm">3</span>
                Upload Documents
              </h3>
              <div className="border-2 border-dashed border-accent-gold/40 rounded-2xl p-8 text-center bg-primary-cream/50 hover:bg-primary-cream transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <UploadCloud className="text-accent-gold" size={28} />
                </div>
                <p className="font-semibold text-accent-navy mb-1 font-inter">Click to upload or drag and drop</p>
                <p className="text-sm text-accent-navy/60 font-inter">PDF, JPG, PNG (Max. 5MB)</p>
                <input type="file" className="hidden" multiple />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button type="submit" className="w-full py-5 bg-accent-navy hover:bg-accent-navy/90 text-white font-bold rounded-xl shadow-float transition-all flex items-center justify-center gap-3 text-lg group">
                Submit Application
                <CheckCircle2 size={22} className="group-hover:scale-110 transition-transform" />
              </button>
              <p className="text-center text-sm text-accent-navy/50 mt-4 font-inter">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;
