import { ClientFeedbackComponent } from "@/components/Clientfeedback";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientFeedbackComponent />
      <Footer />
    </>
  );
}
