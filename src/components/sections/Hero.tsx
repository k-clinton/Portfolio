import React from 'react';
import { Github, Linkedin, Twitter, FileText, ArrowDown, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS, RESUME_LINK } from '../../utils/constants';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 animate-pulse"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Profile Image */}
          <div className="flex justify-center items-center h-full">
            <div className="relative lg:ml-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-2xl opacity-25 animate-pulse scale-110"></div>
              <div className="relative">
                <img
                  src="https://i.postimg.cc/Dw0x3Jgx/IMG-20250605-231551-994.webp"
                  alt="Clinton Omondi"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl ring-8 ring-white/20 backdrop-blur-sm object-cover"
                />
                {/* Online Status */}
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-6 border-white dark:border-gray-900 animate-pulse flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                Clinton Omondi
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text">
                  AI Engineer & Full-Stack Developer
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Computer Science Student at <span className="font-bold text-indigo-600 dark:text-indigo-400">Kisii University</span>
              </p>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Passionate about building intelligent systems that solve real-world problems through cutting-edge AI and modern web technologies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-indigo-600 dark:text-indigo-400">3+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">Years Coding</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-600 dark:text-cyan-400">8+</div>
                <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                className="group p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                className="group p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                className="group p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href={RESUME_LINK}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View My Work
                <ArrowDown className="w-5 h-5 ml-3 group-hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Fixed Position */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center backdrop-blur-sm bg-white/20 dark:bg-gray-900/20">
            <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}