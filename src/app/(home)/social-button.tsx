"use client";
import { motion } from "motion/react";

interface SocialButtonProps {
  href: string;
  icon?: React.ReactNode;
}

export function SocialButton({ href, icon, className }: SocialButtonProps) {
  return (
    <motion.a
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.2 }}
      target="_blank"
      href={href}
      className="bg-foreground inline-flex justify-center items-center w-10 h-10 border-2 border-secondary rounded-full text-2xl text-secondary shadow-lg">
      {icon}
    </motion.a>
  );
}
