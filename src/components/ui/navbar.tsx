"use client";
import { useState, useEffect } from "react";
import LightSwitch from "@/app/(home)/light-switch";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 text-primary ${
        scrolled ? "bg-foreground/90 backdrop-blur-sm" : "bg-foreground"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and light switch */}
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold">Bence</p>
            <div className="hidden md:block">
              <LightSwitch />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors duration-300 text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-secondary transition-colors duration-300 text-lg">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-secondary transition-colors duration-300 text-lg">
                  Experience
                </Link>
              </li>
            </ul>
            <div className="md:hidden">
              <LightSwitch />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <LightSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu">
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <div className="px-4 pb-4 space-y-2">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-lg hover:text-secondary transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="#projects"
            className="block px-3 py-2 rounded-md text-lg hover:text-secondary transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link
            href="#experience"
            className="block px-3 py-2 rounded-md text-lg hover:text-secondary transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}
