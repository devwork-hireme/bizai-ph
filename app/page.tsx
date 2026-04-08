import Navbar from "@/components/layout/Navbar";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import ResultsBar from "@/components/sections/ResultsBar";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Automations from "@/components/sections/Automations";
import Industries from "@/components/sections/Industries";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <ResultsBar />
        <Problem />
        <Solution />
        <Automations />
        <Industries />
        <Process />
        <Pricing />
        <WhyUs />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
