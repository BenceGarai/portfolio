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
      className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-8 sm:py-16 lg:p-20 xl:p-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl shadow-lg rounded-2xl bg-foreground text-primary overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-secondary">Bence Garai</span>
            </h1>

            <div className="font-semibold text-xl sm:text-2xl mt-3 sm:mt-4 text-secondary">
              <TextEffect>Software Developer</TextEffect>
            </div>

            <p className="mt-4 text-base sm:text-lg text-primary/90">
              I&apos;m a computer science graduate currently working as an{" "}
              <span className="font-semibold text-secondary">
                AI Data Specialist
              </span>
              . In my role, I train AI to give better answers, ensuring
              they&apos;re accurate, polite, and actually useful. I&apos;m
              constantly learning about new technologies and improving my
              skills.
            </p>

            {/* Buttons - stacked on mobile, inline on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
              <ResumeButton />

              {/* Mobile-only social buttons */}
              <div className="flex gap-4 lg:hidden mt-4 sm:mt-0">
                <SocialButton
                  href="https://www.linkedin.com/in/bencegarai9"
                  icon={<TiSocialLinkedin size={24} />}
                />
                <SocialButton
                  href="https://github.com/BenceGarai"
                  icon={<FaGithubAlt size={24} />}
                />
              </div>
            </div>

            {/* Desktop-only social buttons (bottom left) */}
            <div className="hidden lg:flex mt-8 xl:mt-12 gap-4">
              <SocialButton
                href="https://www.linkedin.com/in/bencegarai9"
                icon={<TiSocialLinkedin size={24} />}
              />
              <SocialButton
                href="https://github.com/BenceGarai"
                icon={<FaGithubAlt size={24} />}
              />
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex items-center justify-center p-4 xl:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="relative">
              <Image
                className="rounded-full object-cover border-4 border-background"
                src="/images/transparent-face-image.png"
                alt="Headshot of Bence Garai"
                height={280}
                width={280}
                sizes="(max-width: 1024px) 0px, 280px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
