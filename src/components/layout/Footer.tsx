import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href={SOCIAL_LINKS.github}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Clinton Omondi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}