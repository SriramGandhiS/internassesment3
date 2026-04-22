import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import AccredianEdge from "./components/AccredianEdge";
import DomainExpertise from "./components/DomainExpertise";
import WhoShouldJoin from "./components/WhoShouldJoin";
import CATFramework from "./components/CATFramework";
import HowItWorks from "./components/HowItWorks";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import PreFooterCTA from "./components/PreFooterCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <WhoShouldJoin />
        <CATFramework />
        <HowItWorks />
        <FAQs />
        <Testimonials />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
