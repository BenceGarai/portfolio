"use Client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function LightSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === null) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme(savedTheme === "dark" ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    root.setAttribute("data-theme", newTheme);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.5 }}
      onClick={toggleTheme}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      initial={{ x: 20, opacity: 0, rotate: 30 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative p-2 rounded-full bg-backround-secondary shadow-md w-fit h-fit">
      <motion.div key={theme} className="">
        {theme === "light" ? (
          <FiSun className="w-5 h-5 text-primary" />
        ) : (
          <FiMoon className="w-5 h-5 text-secondary" />
        )}
      </motion.div>
    </motion.button>
  );
}
