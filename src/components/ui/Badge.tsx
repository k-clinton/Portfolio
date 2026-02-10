import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-200 text-gray-600'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
}