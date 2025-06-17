import Button from "@/components/Button";
import Card from "@/components/card/card";
import Hero from "@/components/Hero";
import Page2 from '../components/page2';
import Community from '../components/Commmunity'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto gap-y-50">
      <main className="flex items-center justify-between w-full px-4 py-3">
        <Image 
          src="/Icons/CompiX.svg"
          alt="CompiX Logo"
          width={200}
          height={50}
          className="cursor-pointer"
        />
        <Button href="/items">Get Started</Button>
      </main>
      <div className="flex items-center justify-center gap-x-40 w-full mt-3 px-4">
        <Hero/>
        <Card/>
      </div>
      <Page2/>
      <Community/>
    </div>
  );
}