import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Workflows } from "@/components/sections/Workflows";
import { SeniorMandate } from "@/components/sections/SeniorMandate";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Workflows />
      <SeniorMandate />
      <Footer />
    </main>
  );
}
