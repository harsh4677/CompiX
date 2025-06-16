import Button from "@/components/Button";
import Card from "@/components/card/card";
import Hero from "@/components/Hero";
import Page2 from '../components/page2';
import Community from '../components/Commmunity'
import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-50">
      <main className="flex items-center justify-center gap-x-276 mt-3">
          <Image 
          src="/Icons/CompiX.svg" // path to your SVG in public folder
          alt="CompiX Logo"
          width={200} // adjust as needed
          height={50} // adjust as needed
          className="cursor-pointer" // adjust sizing as needed
        />
        <Button href="/items">Get Started</Button>
      </main>
      <div className="flex items-center justify-center gap-x-40 mt-3">
        <Hero/>
        <Card/>
      </div>
      <Page2/>
      <Community/>
    </div>
  );
}

