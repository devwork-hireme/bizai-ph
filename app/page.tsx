import Nav from "@/components/nav/Nav";
import FloatingWA from "@/components/shared/FloatingWA";
import CustomCursor from "@/components/shared/CustomCursor";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Proof from "@/components/sections/Proof";
import FreeLogoBanner from "@/components/sections/FreeLogoBanner";
import SystemsRoadmap from "@/components/sections/SystemsRoadmap";
import Pricing from "@/components/sections/Pricing";
import ChatForm from "@/components/sections/ChatForm";
import FAQ from "@/components/sections/FAQ";
import UrgencyClose from "@/components/sections/UrgencyClose";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <FloatingWA />
      <CustomCursor />
      <main>
        <Hero />
        <Problem />
        <Proof />
        <FreeLogoBanner />
        <SystemsRoadmap />
        <Pricing />
        <ChatForm />
        <FAQ />
        <UrgencyClose />
      </main>
      <Footer />
    </>
  );
}
