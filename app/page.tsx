import { ClientFeedbackComponent } from "@/components/Clientfeedback";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import DesignedChatbotComponentComponent from "@/components/designed-chatbot-component";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientFeedbackComponent />
      <DesignedChatbotComponentComponent/>
      <Footer />
    </>
  );
}
