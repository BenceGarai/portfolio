"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-primary">
      <div className="text-2xl font-semibold pl-30">Bence</div>
      <ul className="flex space-x-10 text-xl p-2 pr-30">
        <li>
          <Link
            href="/"
            className="hover:text-secondary transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:text-secondary transition-colors duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#experience"
            className="hover:text-secondary transition-colors duration-300">
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-secondary transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
