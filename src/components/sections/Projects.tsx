import React from 'react';
import { Github, ExternalLink, Sparkles, Zap, Brain } from 'lucide-react';

const projects = [
  {
    title: "ContextIQ - AI Web Analyzer",
    description: "AI-powered app that analyzes, summarizes and enables intelligent chat with any web page using advanced natural language processing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["React", "OpenAI API", "Node.js", "Python", "LangChain"],
    github: "https://github.com/ClintoKe/ContextIQ",
    live: "https://context-iq-blush.vercel.app",
    featured: true,
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/ClintoKe/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Weather Prediction ML",
    description: "Machine learning model for accurate weather prediction using historical data and advanced algorithms",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "Chart.js"],
    github: "https://github.com/ClintoKe/weather-prediction-ml",
    live: "https://weather-ml-demo.herokuapp.com",
    featured: false,
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "Socket.io", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/ClintoKe/task-management",
    live: "https://task-manager-demo.netlify.app",
    featured: false,
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio website showcasing projects, skills, and professional experience with modern design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "TailwindCSS", "Vite", "Vercel"],
    github: "https://github.com/ClintoKe/portfolio",
    featured: false,
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with end-to-end encryption, file sharing, and group messaging capabilities",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    tech: ["React", "Socket.io", "Node.js", "Redis", "WebRTC"],
    github: "https://github.com/ClintoKe/chat-app",
    live: "https://chat-demo.netlify.app",
    featured: false,
    icon: <Zap className="w-6 h-6" />
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work in AI, web development, and full-stack applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-sm font-semibold rounded-full">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md text-white">
                      {project.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-1 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-1 py-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}