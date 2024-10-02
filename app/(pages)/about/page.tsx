import { ClubDescriptionSectionComponent } from "@/components/about/club-description-section";
import ExtensionDetails from "@/components/about/extension-details";
import { ModernVideoSectionComponent } from "@/components/about/modern-video-section";
import { TeamSectionComponent } from "@/components/about/team-section";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ClubDescriptionSectionComponent />
      <TeamSectionComponent />
      <ModernVideoSectionComponent />
      <ExtensionDetails />
      <Footer />
  </>
);
}