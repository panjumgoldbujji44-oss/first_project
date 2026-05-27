import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Universities from './pages/Universities';
import Admissions from './pages/Admissions';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="font-inter text-accent-navy">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={
              <div className="h-screen flex items-center justify-center bg-primary-cream">
                <h2 className="text-3xl font-bold text-accent-navy">404 — Page Not Found</h2>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
