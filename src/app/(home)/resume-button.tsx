"use client";
import { useState } from "react";
import { FiX, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const resumeLocation = "/Bence_Garai_Resume.pdf";

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.1 }}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer inline-flex justify-center items-center w-35 h-full bg-secondary border-2 rounded-2xl border-background font-semibold text-background tracking-widest">
        Resume
      </motion.button>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur the background*/}
          <div
            className="absolute inset-0 bg-backround-secondary/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* PDF Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col relative z-10 w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden bg-backround-secondary p-4">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-semibold">Resume</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors"
                title="Close Resume"
                aria-label="Close resume">
                <FiX className="text-backround-secondary" size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto">
              <iframe
                src={resumeLocation}
                className="w-full h-full"
                title="Bence Garai's Resume"
              />
            </div>
            {/*Download button for PDF */}
            <div className="flex justify-center p-4">
              <a
                href={resumeLocation}
                download={true}
                title="Download Resume"
                className="flex justify-center items-center w-fit h-fit p-3 bg-secondary border-2 rounded-full border-background font-semibold text-background">
                <FiDownload></FiDownload>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
