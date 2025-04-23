import ContactMe from "./(home)/contact-me-section";
import LandingSection from "./(home)/landing-section";
import ProjectsSection from "./(home)/projects-section";
import ExperienceSection from "./(home)/experience-section";

export default function Home() {
  return (
    <main>
      <LandingSection></LandingSection>
      <ProjectsSection></ProjectsSection>
      <ExperienceSection></ExperienceSection>
      {/*<ContactMe></ContactMe>*/}
    </main>
  );
}
