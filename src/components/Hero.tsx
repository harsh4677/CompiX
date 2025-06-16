// import React from 'react'

// export default function Hero() {
//   return (
//     <div>
//       <h1 className=' flex flex-col justify-items-start justify-center space-x-6 text-5xl font-semibold'>
//         <span className='text-8xl font-semibold'>
//             Build Sleek 
//         </span>
//         <span className='text-8xl font-semibold'>
//             UI Faster
//         </span>
//       </h1>
//       <h3>
//         <span className='font-sans'>
//           Redefined UI building for developers. 
//         </span>
//         <span className='font-sans'>
//           Quickly add components, themes, and responsive layouts to your app at any scale.
//         </span>
//       </h3>
//     </div>
//   )
// }


import React from 'react';

export default function Hero() {
  return (
    <div className="max-w-2xl">
      <h1 className="flex flex-col leading-tight">
        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Build Sleek
        </span>
        <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
          UI Faster
        </span>
      </h1>
      
      <h3 className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 font-normal space-y-2">
        <p className="font-semibold">
          Redefined UI building for developers.
        </p>
        <p className="font-semibold">
          Quickly add components, themes, and responsive layouts to your app at any scale.
        </p>
      </h3>
    </div>
  );
}