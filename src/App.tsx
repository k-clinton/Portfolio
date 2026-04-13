import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-gray-300 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      {/* Minimal Footer */}
      <footer className="border-t border-gray-900 py-6 text-center">
        <p className="text-xs text-gray-600">© 2025 Clinton Omondi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
