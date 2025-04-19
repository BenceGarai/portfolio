"use client";
import { Button } from "./button";
import { SocialButton } from "./social-button";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithubAlt } from "react-icons/fa";
import Image from "next/image";

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="flex flex-col lg:flex-row p-40 min-h-screen items-center justify-center">
      <div className="flex-row h-fit w-fit">
        <h1 className="text-6xl font-bold">
          Hi, I&apos;m <span className="">Bence Garai</span>
        </h1>
        <div className="font-semibold text-2xl mt-4 text-secondary">
          <h3>Software Developer</h3>
        </div>
        <p className="mt-4 max-w-2xl ">
          I&apos;m a computer science graduate currently working as an
          <span className="font-semibold"> AI Developer</span>. <br></br> I
          train AI to give better answers, like making sure it’s both accurate,
          polite and actually useful. I also spend a lot of time learning about
          new technologies and improving my overall skill level. Check out my
          resume below or explore my profile thorughout the page.
        </p>
        <div className="flex h-14 mt-4 gap-10">
          <Button href="#">Resume</Button>
          <Button href="#contact">Contact me</Button>
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
      <div className="hidden lg:flex items-center justify-center ml-10 xl:ml-20 h-fit w-fit">
        <div className="relative">
          <Image
            className="rounded-full object-cover border-4 bg-backround-secondary"
            src={"/images/transparent-face-image.png"}
            alt="Headshot image"
            height={320}
            width={320}></Image>
          {/* Add cool animation to image */}
        </div>
      </div>
    </section>
  );
}
