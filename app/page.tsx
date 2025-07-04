
import { HeroSection } from "@/components/hero-section";
import { TopBar } from "@/components/top-bar";

export default function HomePage() {
  return (
    <div className="bg-[#101010] overflow-hidden">
      <TopBar />
      <HeroSection />
    </div>
  );
}
