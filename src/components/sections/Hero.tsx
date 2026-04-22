import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-14 relative overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      >
        <source src="https://res.cloudinary.com/dyysl5jbc/video/upload/q_auto/f_auto/v1776081098/TechBG_vtvwc3.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>

      <div className="section-container text-center relative" style={{ zIndex: 2 }}>
        {/* Available Badge */}
        <div className="inline-block px-5 py-2 bg-purple-900/40 border border-purple-500/30 rounded-full mb-8">
          <span className="text-sm text-purple-300">Available for new Projects</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Hey!, I am <span className="text-purple-500">Clinton</span>
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-8">
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
