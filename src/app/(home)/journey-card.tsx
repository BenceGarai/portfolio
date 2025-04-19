"use client";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      className="bg-background rounded-lg p-6 outline-1 outline-gray-300 hover:outline-secondary">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-500 text-sm mb-1">{location}</p>
      <p className="text-secondary text-sm mb-1">{date}</p>
      <p className="text-primary">{description}</p>
    </motion.div>
  );
}
