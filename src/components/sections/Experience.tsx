import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: "Research Assistant",
    company: "AI Research Lab, Kisii University",
    period: "Jan 2024 - Present",
    location: "Kisii, Kenya",
    type: "Part-time",
    description: [
      "Researching machine learning applications in educational technology",
      "Developing predictive models for student performance analysis",
      "Contributing to research papers on AI in education",
      "Collaborating with faculty on grant proposals and research initiatives"
    ],
    skills: ["Python", "TensorFlow", "Research", "Data Analysis"],
    icon: "🎓",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance Projects",
    period: "Jun 2023 - Present",
    location: "Remote",
    type: "Freelance",
    description: [
      "Built 10+ responsive web applications for various clients",
      "Specialized in React, Node.js, and database integration",
      "Implemented modern UI/UX designs with focus on user experience",
      "Maintained 98% client satisfaction rate with on-time delivery"
    ],
    skills: ["React", "Node.js", "MongoDB", "UI/UX Design"],
    icon: "💻",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Teaching Assistant",
    company: "Computer Science Department",
    period: "Sep 2023 - Dec 2023",
    location: "Kisii University",
    type: "Part-time",
    description: [
      "Assisted in teaching Programming Fundamentals and Data Structures",
      "Mentored 50+ students in programming concepts and problem-solving",
      "Conducted lab sessions and graded programming assignments",
      "Organized coding workshops and study groups"
    ],
    skills: ["Teaching", "Python", "JavaScript", "Mentoring"],
    icon: "📚",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Software Development Intern",
    company: "Tech Solutions Kenya",
    period: "Dec 2022 - Mar 2023",
    location: "Nairobi, Kenya",
    type: "Internship",
    description: [
      "Developed features for client management system using React and PHP",
      "Participated in code reviews and learned industry best practices",
      "Assisted in database design and API development",
      "Gained experience with version control and team collaboration"
    ],
    skills: ["React", "PHP", "MySQL", "Git"],
    icon: "🚀",
    color: "from-orange-500 to-red-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building expertise through hands-on experience and meaningful contributions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-ml-2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-indigo-500 rounded-full shadow-lg z-10"></div>
                
                {/* Experience Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl p-3 bg-gradient-to-r ${exp.color} text-white rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                          <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-sm font-medium rounded-full`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "2+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
            { number: "15+", label: "Projects Completed", icon: <TrendingUp className="w-8 h-8" /> },
            { number: "98%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/50 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full mb-4">
                {typeof stat.icon === 'string' ? <span className="text-2xl">{stat.icon}</span> : stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}