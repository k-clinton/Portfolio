import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Harisson Opondo",
    role: "Founder and CEO",
    company: "Paragon Entreprises",
    image: "https://images.unsplash.com/photo-1494790108755-2616c36c35e3?w=100&h=100&fit=crop&crop=face",
    content: "Clinton consistently demonstrates exceptional problem-solving skills and a deep understanding of AI concepts. His projects show remarkable innovation and technical excellence.",
    rating: 5
  },
  {
    name: "Samuel Kariuki",
    role: "Software Engineer",
    company: "Safaricom PLC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Working with Clinton on the student portal project was impressive. His ability to integrate AI features seamlessly while maintaining clean, scalable code is remarkable.",
    rating: 5
  },
  {
    name: "Mary Wanjiku",
    role: "Tech Lead",
    company: "iHub Nairobi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Clinton's dedication to learning and applying new technologies is outstanding. He brings fresh perspectives to complex challenges and delivers quality solutions.",
    rating: 5
  },
  {
    name: "Prof. Michael Otieno",
    role: "Head of AI Research",
    company: "University of Nairobi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Clinton's research contributions in machine learning have been valuable. His analytical thinking and implementation skills make him a promising young researcher.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 to-orange-100/30 dark:from-yellow-900/10 dark:to-orange-900/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Feedback from mentors, colleagues, and collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-indigo-200 dark:text-indigo-800 group-hover:text-indigo-300 dark:group-hover:text-indigo-700 transition-colors" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-indigo-900"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}