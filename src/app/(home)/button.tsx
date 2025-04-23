"use client";
import { motion } from "framer-motion";

interface ButtonProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className, target }: ButtonProps) {
  return (
    <motion.a
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.15 }}
      transition={{ duration: 0.2 }}
      href={href}
      target={target}
      className={`inline-flex justify-center items-center w-35 h-full bg-secondary border-2 rounded-2xl border-background font-semibold text-background tracking-widest ${className}`}>
      {children}
    </motion.a>
  );
}
