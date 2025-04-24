"use Client";
import { motion } from "framer-motion";

interface TextEffectProps {
  children: string;
}

export default function TextEffect({ children }: TextEffectProps) {
  if (!children) {
    return <></>;
  }

  const letters = children.split("");

  return (
    <motion.h3>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}>
          {letter}
        </motion.span>
      ))}
    </motion.h3>
  );
}
