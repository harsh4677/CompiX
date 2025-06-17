import Image from "next/image"; // Make sure to import Next.js Image
import CommunityText from "./CommunityText";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-50">
      <div className="flex items-center justify-center gap-x-40 mt-3 px-4">
        <CommunityText/>
          <Image 
            src="/Icons/github.svg" 
            alt="CompiX Logo"
            width={278} 
            height={500} 
            className="cursor-pointer h-250 w-200" 
          />
      </div>
    </div>
  );
}


// import Image from "next/image";
// import CommunityText from "./CommunityText";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center gap-y-12"> {/* Changed gap-y-50 to gap-y-12 for better spacing */}
//       <div className="flex items-center justify-center gap-x-20 mt-12 px-4"> {/* Added px-4 for mobile padding */}
//         <CommunityText/>
//         <div className="relative p-8 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 shadow-lg"> {/* Added container with padding and nice effects */}
//           <Image 
//             src="/Icons/github.svg" 
//             alt="GitHub Logo"
//             width={278} 
//             height={500} 
//             className="cursor-pointer h-[250px] w-auto object-contain transition-all duration-300 hover:scale-105" 
//             style={{
//               filter: "drop-shadow(0 4px 20px rgba(0, 255, 200, 0.2))"
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }