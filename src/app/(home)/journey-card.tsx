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
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 15,
      }}
      className="bg-foreground rounded-lg p-6 outline-1 outline-gray-300 hover:outline-secondary shadow-lg">
      <h2 className="text-primary text-xl font-bold mb-1">{title}</h2>
      <p className="text-primary/60 text-sm mb-1">{location}</p>
      <p className="text-secondary text-sm mb-1">{date}</p>
      <motion.div className="overflow-hidden">
        <motion.p
          className={`text-primary ${
            isClicked ? "line-clamp-none" : "line-clamp-2"
          }`}>
          {description}
        </motion.p>
      </motion.div>
      <div className="mt-2">
        <button
          className="cursor-pointer text-secondary"
          onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? (
            <>
              <span>Show Less ↑</span>
            </>
          ) : (
            <>
              <span>Read More ↓</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
