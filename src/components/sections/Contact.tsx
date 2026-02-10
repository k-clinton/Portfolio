import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // For demonstration, we'll use EmailJS or a similar service
      // You would typically send this to your backend
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5a08bced-c3c4-48f3-b93c-44f134e195f3', // Replace with your Web3Forms access key
          ...formData
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="dark:text-gray-300">Kisii University, Kenya</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg transition-colors ${
                status === 'sending' 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-blue-700 dark:hover:bg-blue-600'
              }`}
            >
              <Send className="w-5 h-5 mr-2" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center mt-4">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center mt-4">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}