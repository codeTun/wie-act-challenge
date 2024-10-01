import { ClientFeedbackComponent } from "@/components/Clientfeedback";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientFeedbackComponent />
      <Contact />
      <Footer />
    </>
  );
}
