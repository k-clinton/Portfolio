import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "ContextIQ - AI Web Analyzer",
    description: "AI-powered app that analyzes, summarizes and enables intelligent chat with any web page using advanced natural language processing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
    tech: ["React", "OpenAI API", "Node.js", "Python"],
    live: "https://context-iq-blush.vercel.app"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
    tech: ["Next.js", "TypeScript", "Stripe", "MySQL"],
    live: "https://ecommerce-demo.vercel.app"
  },
  {
    title: "Weather Prediction ML",
    description: "Machine learning model for accurate weather prediction using historical data and advanced algorithms",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    tech: ["React", "Socket.io", "Express.js", "MongoDB"],
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio website showcasing projects, skills, and professional experience with modern design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop",
    tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
    live: "#"
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with end-to-end encryption, file sharing, and group messaging capabilities",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=300&fit=crop",
    tech: ["React", "Socket.io", "Node.js", "Redis"],
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="border-y border-gray-800">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of projects I've worked on, ranging from web applications to mobile apps and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              {/* Image */}
              <div className="relative overflow-hidden h-36">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge text-[10px] px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.live}
                    className="inline-flex items-center px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                  <a
                    href={project.live}
                    className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="w-7 h-7 rounded-full border border-gray-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
