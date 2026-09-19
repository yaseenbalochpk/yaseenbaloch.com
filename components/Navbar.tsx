"use client";

import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Learn", href: "#learn" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
            YB
          </span>

          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-wide text-white">
              Yaseen Baloch
            </span>
            <span className="block text-xs text-slate-400">
              Developer & Technology Creator
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Let&apos;s Work Together
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition hover:border-blue-500/50 hover:text-white lg:hidden"
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#070b14] lg:hidden">
          <div className="container mx-auto flex flex-col py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
}