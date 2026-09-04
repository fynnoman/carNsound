import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import GaugeCluster from "@/components/GaugeCluster";
import Marquee from "@/components/Marquee";
import WerkstattShowcase from "@/components/WerkstattShowcase";
import Reviews from "@/components/Reviews";
import Standort from "@/components/Standort";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <ServicesGrid />
      <GaugeCluster />
      <Marquee />
      <WerkstattShowcase />
      <Reviews />
      <Standort />
      <ContactCTA />
      <Footer />
    </main>
  );
}
