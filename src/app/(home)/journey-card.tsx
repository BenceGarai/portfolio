"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Journey {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface JourneyCardProps {
  journey: Journey;
}

export default function JourneyCard({ journey }: JourneyCardProps) {
  const { title, location, date, description } = journey;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "tween" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-foreground rounded-lg p-6 outline-1 outline-gray-300 hover:outline-secondary shadow-lg">
      <h2 className="text-primary text-xl font-bold mb-1">{title}</h2>
      <p className="text-primary/60 text-sm mb-1">{location}</p>
      <p className="text-secondary text-sm mb-1">{date}</p>
      <motion.div className="overflow-hidden">
        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.9 }}
          className={`text-primary ${
            isHovered ? "line-clamp-none" : "line-clamp-3"
          }`}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
