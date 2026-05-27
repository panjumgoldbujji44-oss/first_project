import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('student');

  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-cream relative overflow-hidden flex items-center justify-center">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-yellow/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-skyblue/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 -z-10 animate-float-delayed"></div>

      <div className="max-w-md w-full mx-auto px-4">
        <motion.div
          className="bg-white/90 backdrop-blur-xl p-10 rounded-[2rem] shadow-float border border-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
              <span className="text-white font-poppins font-bold text-2xl">BS</span>
            </div>
            <h1 className="text-2xl font-bold text-accent-navy">Welcome Back</h1>
            <p className="text-accent-navy/60 font-inter text-sm mt-1">Sign in to your account</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8 bg-primary-cream rounded-xl p-1">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition-all ${
                activeTab === 'student'
                ? 'bg-white text-accent-navy shadow-sm'
                : 'text-accent-navy/60 hover:text-accent-navy'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition-all ${
                activeTab === 'admin'
                ? 'bg-white text-accent-navy shadow-sm'
                : 'text-accent-navy/60 hover:text-accent-navy'
              }`}
            >
              Admin
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-navy/40" />
                <input type="email" className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-accent-navy/80 mb-2 font-inter">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-navy/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-primary-cream border-none focus:ring-2 focus:ring-accent-gold outline-none transition-all font-inter"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-navy/40 hover:text-accent-navy"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-accent-gold" />
                <span className="text-accent-navy/70 font-inter">Remember me</span>
              </label>
              <a href="#" className="text-accent-gold font-medium hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full py-4 bg-accent-navy hover:bg-accent-navy/90 text-white font-bold rounded-xl shadow-soft transition-all flex items-center justify-center gap-2 group mt-2">
              Sign In
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-sm text-accent-navy/60 mt-6 font-inter">
            Don't have an account?{' '}
            <Link to="/admissions" className="text-accent-gold font-semibold hover:underline">Apply Now</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
