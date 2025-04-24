"use client";
import { SocialButton } from "./social-button";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithubAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import ResumeButton from "./resume-button";
import TextEffect from "./text-effect";

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="flex p-40 min-h-screen items-center justify-center bg-background">
      <div className="flex shadow-lg justify-center items-center rounded-2xl bg-foreground text-primary">
        <div className="flex-row p-8">
          <h1 className="text-6xl font-bold">
            Hi, I&apos;m <span className="">Bence Garai</span>
          </h1>
          <div className="font-semibold text-2xl mt-4 text-secondary">
            <TextEffect>Software Developer</TextEffect>
          </div>
          <p className="mt-4 max-w-2xl ">
            I&apos;m a computer science graduate currently working as an
            <span className="font-semibold"> AI Data Specialist</span>. In my
            role, I train AI to give better answers, like making sure it’s both
            accurate, polite and actually useful. I also spend a lot of time
            learning about new technologies and improving my overall skill
            level.
          </p>
          <div className="flex h-14 mt-4 gap-10">
            <ResumeButton></ResumeButton>
          </div>
          <div className="hidden lg:flex absolute bottom-10 w-fit justify-start gap-4">
            <SocialButton
              href="https://www.linkedin.com/in/bencegarai9"
              icon={<TiSocialLinkedin></TiSocialLinkedin>}></SocialButton>
            <SocialButton
              href="https://github.com/BenceGarai"
              icon={<FaGithubAlt></FaGithubAlt>}></SocialButton>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center ml-10 xl:ml-20 h-fit w-fit p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative">
            <Image
              className="rounded-full object-cover border-4 bg-background"
              src={"/images/transparent-face-image.png"}
              alt="Headshot image"
              height={320}
              width={320}
              priority></Image>
            {/* Add cool animation to image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
