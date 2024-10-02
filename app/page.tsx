import { ClientFeedbackComponent } from "@/components/Clientfeedback";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Herosection";
import { Navbar } from "@/components/Navbar";
import ChatbotComponent from "@/components/designed-chatbot-component";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientFeedbackComponent />
      <ChatbotComponent />
      <Footer />
    </>
  );
}
