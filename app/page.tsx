
import { Cursor } from "@/components/cursor";
import { HeroSection } from "@/components/hero-section";
import { TopBar } from "@/components/top-bar";

export default function () {
  return (
    <div className="bg-[#101010]">
      <Cursor />
      <TopBar />
      <HeroSection />
    </div>
  );
}
