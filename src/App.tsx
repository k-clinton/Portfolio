import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;