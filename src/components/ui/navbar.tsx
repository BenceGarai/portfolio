"use client";
import LightSwitch from "@/app/(home)/light-switch";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-foreground text-primary drop-shadow-xl">
      <div className="grid grid-cols-2 gap-4 pl-30">
        <p className="text-2xl font-semibold">Bence</p>
        <LightSwitch></LightSwitch>
      </div>
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
      </ul>
    </nav>
  );
}
