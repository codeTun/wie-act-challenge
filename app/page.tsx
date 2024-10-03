import { ClientFeedbackComponent } from "@/components/Clientfeedback";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import Contact from "@/components/Contact";
import Feedback from '@/components/feedback'
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientFeedbackComponent />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}
