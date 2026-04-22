import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Building Modern Web Apps with React and AI",
    excerpt: "Explore how to integrate AI capabilities into modern React applications for enhanced user experiences.",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
  },
  {
    title: "The Future of Machine Learning in Education",
    excerpt: "How predictive models and machine learning algorithms are transforming the educational landscape.",
    date: "Feb 28, 2025",
    readTime: "7 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop"
  },
  {
    title: "Mastering TypeScript for Better Code Quality",
    excerpt: "Tips and best practices for leveraging TypeScript to write more maintainable and robust applications.",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop"
  },
  {
    title: "Designing for Accessibility: A Developer's Guide",
    excerpt: "Practical strategies for building inclusive web applications that work for everyone.",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=300&fit=crop&auto=format"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="border-b border-border">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights about web development, AI, and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <article key={index} className="card group transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
              {/* Image */}
              <div className="relative overflow-hidden h-40">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
