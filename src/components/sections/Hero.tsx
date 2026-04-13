import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-14">
      <div className="section-container text-center">
        {/* Available Badge */}
        <div className="inline-block px-5 py-2 bg-purple-900/40 border border-purple-500/30 rounded-full mb-8">
          <span className="text-sm text-purple-300">Available for new Projects</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Hey! , I am <span className="text-purple-500">Clinton</span>
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-8">
          AI Engineer & Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
          I craft beautiful, functional digital experiences that bring ideas to life.
          Specializing in modern web development and user-centered design.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
