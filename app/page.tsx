import Navbar from "@/components/layout/Navbar";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import TheSystem from "@/components/sections/TheSystem";
import Solution from "@/components/sections/Solution";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import ResultsGuarantee from "@/components/sections/ResultsGuarantee";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <Problem />
        <TheSystem />
        <Solution />
        <Process />
        <Pricing />
        <ResultsGuarantee />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
