import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          {/* Left - Text */}
          <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
            <p>
              I'm a passionate creative developer and designer with over 3 years of experience 
              building digital products that users love. I believe in the power of good design 
              and clean code to solve real problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or sharing my knowledge through writing and speaking at conferences.
            </p>
            <p>
              I'm always excited to work on projects that challenge me to grow and learn something new.
            </p>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
              <img
                src="https://i.postimg.cc/Dw0x3Jgx/IMG-20250605-231551-994.webp"
                alt="Clinton Omondi"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-2 border-gray-700 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
