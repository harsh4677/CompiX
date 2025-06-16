import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string; // Add href prop for the link destination
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  icon,
  className = '',
  href,
  ...props
}: ButtonProps) {
  // If href is provided, wrap the button in a Link
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <button
          {...props}
          className={`flex items-center justify-center gap-2 text-gray-800 bg-white hover:bg-gray-50 focus:ring-4
                     focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5
                     border border-gray-300 shadow-sm hover:shadow-md
                     transition-all duration-200 hover:scale-[1.02]
                     font-semibold ${className}`}
        >
          {children}
          {icon || (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          )}
        </button>
      </Link>
    );
  }

  // Regular button if no href is provided
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 text-gray-800 bg-white hover:bg-gray-50 focus:ring-4
                 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5
                 border border-gray-300 shadow-sm hover:shadow-md
                 transition-all duration-200 hover:scale-[1.02]
                 font-semibold ${className}`}
    >
      {children}
      {icon || (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </button>
  );
}