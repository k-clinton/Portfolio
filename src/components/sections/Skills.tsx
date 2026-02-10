import React from 'react';
import { Code2, Database, Globe, Server, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Go"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-green-500" />,
    skills: ["React", "Node.js", "Next.js", "TailwindCSS", "GraphQL"]
  },
  {
    title: "AI & ML",
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
  },
  {
    title: "Databases",
    icon: <Database className="w-8 h-8 text-yellow-500" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Server className="w-8 h-8 text-red-500" />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"]
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-8 h-8 text-indigo-500" />,
    skills: ["Git", "Jira", "Figma", "VS Code", "Postman"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50 group-hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="group/skill px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 hover:text-indigo-800 dark:hover:text-indigo-200 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Proficiency Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {index === 0 ? "Advanced" : index === 1 ? "Expert" : index === 2 ? "Intermediate" : index === 3 ? "Advanced" : index === 4 ? "Intermediate" : "Advanced"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ${
                        index === 0 ? "w-[85%]" : index === 1 ? "w-[90%]" : index === 2 ? "w-[75%]" : index === 3 ? "w-[80%]" : index === 4 ? "w-[70%]" : "w-[85%]"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Always Learning</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring WebAssembly, Rust, and advanced AI architectures 
              to stay at the forefront of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["WebAssembly", "Rust", "GraphQL", "Kubernetes", "Microservices", "DevOps"].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg text-sm font-medium border border-yellow-200 dark:border-yellow-800"
                >
                  📚 {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}