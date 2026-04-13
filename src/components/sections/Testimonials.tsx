import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    content: "Clinton delivered exceptional work on our project. His attention to detail and ability to translate complex requirements into elegant solutions made him an invaluable team member.",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Michael Chen",
    role: "CTO, StartupHub",
    content: "Working with Clinton was a great experience. He's not only technically proficient but also brings creative insights that significantly improved our product's user experience.",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead, Creative Agency",
    content: "Clinton's ability to bridge the gap between design and development is remarkable. He took our vision and brought it to life with pixel-perfect precision and smooth interactions.",
    avatar: "https://i.pravatar.cc/100?img=3"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-gray-800">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What people I've worked with say about my work and collaboration style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-5 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
              <Quote className="w-6 h-6 text-purple-500/40 mb-3 transition-colors duration-300 group-hover:text-purple-400" />
              <p className="text-xs text-gray-400 leading-relaxed mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-700 transition-transform duration-300 hover:scale-110"
                />
                <div>
                  <h4 className="text-xs font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
