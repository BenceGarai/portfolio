import AboutMeSection from "./(home)/about-me-section";
import ContactMe from "./(home)/contact-me-section";
import LandingSection from "./(home)/landing-section";
import ProjectsSection from "./(home)/projects-section";

export default function Home() {
  return (
    <main>
      <LandingSection></LandingSection>
      <ProjectsSection></ProjectsSection>
      <AboutMeSection></AboutMeSection>
      <ContactMe></ContactMe>
    </main>
  );
}
