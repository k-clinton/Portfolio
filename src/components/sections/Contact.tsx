import React, { useState } from 'react';
import { Instagram, Mail, Twitter, Linkedin, Youtube, Send, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5a08bced-c3c4-48f3-b93c-44f134e195f3',
          ...formData
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Left - Contact Form */}
          <div className="card p-6">
            <h3 className="text-sm font-semibold text-text-primary mb-5">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-text-muted mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background-secondary border border-border rounded-lg text-text-primary text-sm focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background-secondary border border-border rounded-lg text-text-primary text-sm focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-background-secondary border border-border rounded-lg text-text-primary text-sm focus:border-purple-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-sm font-medium rounded-full transition-colors"
              >
                <Send className="w-4 h-4" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-xs text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Failed to send. Please try again.</p>
              )}
            </form>
          </div>

          {/* Right - Info */}
          <div className="space-y-4">
            {/* Open to opportunities card */}
            <div className="card p-6">
              <p className="text-sm text-text-secondary leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or partnerships.
                Whether you have a specific project in mind or just want to explore possibilities, I'd love to connect.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li>• Web & Mobile Development</li>
                <li>• UI/UX Design</li>
                <li>• Technical Consulting</li>
                <li>• Speaking & Workshops</li>
              </ul>
            </div>

            {/* Socials card */}
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-text-primary mb-3">My Socials</h3>
              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.github} className="text-text-muted hover:text-purple-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.twitter} className="text-text-muted hover:text-purple-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} className="text-text-muted hover:text-purple-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.instagram} className="text-text-muted hover:text-purple-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-text-muted hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
