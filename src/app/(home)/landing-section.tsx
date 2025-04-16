import { Button } from "./button";
import { SocialButton } from "./social-button";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithubAlt } from "react-icons/fa";

export default function LandingSection() {
  return (
    <section id="landing" className="flex p-40 min-h-screen items-center">
      <div className="">
        <h1 className="text-6xl font-bold">
          Hi, I&apos;m <span className="">Bence Garai</span>
        </h1>
        <div className="font-semibold text-2xl mt-4 text-secondary">
          <h3>Software Developer</h3>
        </div>
        <p className="mt-4 max-w-2xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex h-14 mt-4 gap-10">
          <Button href="#">Hire me</Button>
          <Button href="#">Contact me</Button>
        </div>
        <div className="flex absolute bottom-10 w-28 justify-between">
          <SocialButton
            href="https://www.linkedin.com/in/bencegarai9"
            icon={<TiSocialLinkedin></TiSocialLinkedin>}></SocialButton>
          <SocialButton
            href="https://github.com/BenceGarai"
            icon={<FaGithubAlt></FaGithubAlt>}></SocialButton>
        </div>
      </div>
    </section>
  );
}
