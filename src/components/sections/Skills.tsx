import React from 'react';

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "HTML/CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    title: "AI & Tools",
    skills: ["TensorFlow", "PyTorch", "Docker", "AWS", "Git"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="card p-5">
              <h3 className="text-sm font-semibold text-white mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span key={i} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
