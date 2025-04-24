"use client";
import { useState } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const resumeLocation = "/Bence_Garai_Resume.pdf";

  return (
    <>
      {/* Main Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => setIsOpen(true)}
        title="View Resume"
        aria-label="View resume"
        className="cursor-pointer inline-flex justify-center items-center px-6 py-3 w-fit bg-secondary border-2 rounded-2xl border-background font-semibold text-background tracking-wider text-sm sm:text-base md:text-lg">
        Resume
      </motion.button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* PDF Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="flex flex-col relative z-10 w-full max-w-6xl h-[85vh] sm:h-[90vh] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden bg-foreground">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-3 sm:p-4 border-b border-primary/10">
              <h2 className="text-lg sm:text-xl font-semibold">My Resume</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-1 sm:p-2 rounded-full bg-secondary hover:bg-secondary/90 transition-colors"
                title="Close Resume"
                aria-label="Close resume">
                <FiX className="text-background" size={20} />
              </motion.button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto p-1 sm:p-2">
              <iframe
                src={`${resumeLocation}#view=fitH`}
                className="w-full h-full min-h-[60vh]"
                title="Bence Garai's Resume"
                loading="lazy"
              />
            </div>

            {/* Download Button */}
            <div className="flex justify-center p-3 sm:p-4 border-t border-primary/10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resumeLocation}
                download
                title="Download Resume"
                className="flex justify-center items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-secondary hover:bg-secondary/90 border-2 rounded-full border-background font-semibold text-background text-sm sm:text-base transition-colors">
                <FiDownload size={18} />
                <span>Download PDF</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
