import Card from "@/components/card/card";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-50">
      <div className="flex items-center justify-center gap-x-40 mt-3">
        <Hero/>
        <Card/>
      </div>
    </div>
  );
}


