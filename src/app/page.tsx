import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Services as Features } from "@/components/services/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { WhyChooseUs } from "@/components/whyChooseUs/WhyChooseUs";
import { Pricing } from "@/components/pricing/Pricing";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
