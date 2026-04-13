import React from 'react';

const experiences = [
  {
    year: "2024",
    title: "Research Assistant",
    company: "AI Research Lab, Kisii University",
    description: "Researching machine learning applications in educational technology and developing predictive models for student performance analysis."
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Freelance",
    description: "Built 10+ responsive web applications for various clients, specializing in React, Node.js, and database integration."
  },
  {
    year: "2022",
    title: "Software Development Intern",
    company: "Tech Solutions Kenya",
    description: "Developed features for client management system using React and PHP, participated in code reviews and learned industry best practices."
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="mt-8 max-w-3xl">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-purple-500/30"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  {/* Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-semibold text-white">
                      {exp.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card p-5 flex-1">
                    <h3 className="text-sm font-semibold text-white">{exp.title}</h3>
                    <p className="text-xs text-purple-400 mb-2">at {exp.company}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
