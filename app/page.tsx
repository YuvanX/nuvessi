
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TopBar } from "@/components/top-bar";

export default function () {
  return (
    <div className="bg-[#101010] overflow-hidden">
      <Cursor />
      <TopBar />
      <HeroSection />
    </div>
  );
}
