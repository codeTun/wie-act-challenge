import { ClubDescriptionSectionComponent } from "@/components/about/club-description-section";
import { ModernVideoSectionComponent } from "@/components/about/modern-video-section";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ClubDescriptionSectionComponent />
      <ModernVideoSectionComponent />
      <Footer />
  </>
);
}