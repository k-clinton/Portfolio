import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export function Button({ children, icon: Icon, href, className = '' }: ButtonProps) {
  const baseClasses = "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors";
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} target="_blank" rel="noopener noreferrer">
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`}>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
}