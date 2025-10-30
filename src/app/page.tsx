import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to the Home Page",
};
export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
