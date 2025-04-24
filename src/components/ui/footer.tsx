"use client";
import { SocialButton } from "@/app/(home)/social-button";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithubAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around h-20 bg-foreground text-primary shadow-2xl shadow-primary">
      <div className="grid gap-y-1">
        <p className="text-secondary font-medium">Get in touch</p>
        <a
          href="mailto:garaibence@gmai.com"
          className="hover:text-primary/80 transition-colors">
          garaibence@gmail.com
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <SocialButton
          href="https://www.linkedin.com/in/bencegarai9"
          icon={<TiSocialLinkedin></TiSocialLinkedin>}></SocialButton>
        <SocialButton
          href="https://github.com/BenceGarai"
          icon={<FaGithubAlt></FaGithubAlt>}></SocialButton>
      </div>
    </footer>
  );
}
