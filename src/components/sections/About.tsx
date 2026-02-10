import React from 'react';
import { BookOpen, Code, Trophy, Target, Lightbulb, Users } from 'lucide-react';

const highlights = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Education",
    description: "Kisii University, B.S. in Computer Science",
    detail: "Expected 2026 • GPA: 3.8/4.0",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Specialization",
    description: "AI & Full-Stack Development",
    detail: "Machine Learning • Cloud Computing • Web Technologies",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Achievements",
    description: "Hackathon Winner & Open Source Contributor",
    detail: "3+ Hackathons • 500+ GitHub Contributions",
    gradient: "from-orange-500 to-red-500"
  }
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Problem Solving",
    description: "I thrive on breaking down complex challenges into manageable solutions"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Always exploring cutting-edge technologies to build tomorrow's solutions"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "Believing that the best ideas emerge from diverse teams working together"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-blue-100/20 dark:from-gray-800/10 dark:to-blue-800/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>
        
        {/* Enhanced Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey into technology began with a simple curiosity about how websites work. What started as 
                building basic HTML pages has evolved into developing sophisticated AI-powered applications and 
                contributing to meaningful open-source projects.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Kisii University, I'm not just studying Computer Science – I'm actively shaping the future 
                of technology. From machine learning models that predict student performance to full-stack 
                applications that solve real business problems, I believe in learning by building.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm particularly fascinated by the intersection of AI and web technologies, and how they can 
                democratize access to intelligent solutions. Every project I work on is an opportunity to 
                push boundaries and create something impactful.
              </p>
            </div>
          </div>

          {/* Values & Approach */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Drives Me</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold">
            <span>Ready to collaborate?</span>
            <a href="#contact" className="underline hover:no-underline transition-all">Let's connect!</a>
          </div>
        </div>
      </div>
    </section>
  );
}