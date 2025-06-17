
import React from 'react';

export default function CommunityText() {
  return (
    <div className="max-w-2xl">
      <h1 className="flex flex-col leading-tight">
        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Community Innovation
        </span>
      </h1>
      
      <h3 className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-normal space-y-2">
        <p className="font-semibold">
          Our UI library is proprietary, but we share tools and resources on GitHub
        </p>
        <p className="font-semibold">
          to help developers build better, faster, and more accessible apps.
        </p>
      </h3>
    </div>
  );
}