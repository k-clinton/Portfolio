import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background text-text-secondary min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
        {/* Minimal Footer */}
        <footer className="border-t border-border py-6 text-center">
          <p className="text-xs text-text-muted">© 2025 Clinton Omondi. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
