import React from 'react';
import Button from './Button';

export default function Page2() {
  return (
    <div className="max-w-2xl">
      <h1 className="flex flex-col leading-tight">
        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Fully Customizable UI Library
        </span>
        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
          for Stunning Interfaces
        </span>
      </h1>
      
      <h3 className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-normal space-y-2">
        <p className="font-semibold">
         A highly versatile UI library offering components that are fully customizable,
        </p>
        <p className="font-semibold">
          empowering you to create visually engaging and unique user interfaces with ease.
        </p>
      </h3>
      <Button>Explore Compenents</Button>
    </div>
  );
}