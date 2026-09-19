"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Learn",
    href: "/learn",
  },
  {
    name: "Services",
    href: "/services",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="container mx-auto flex h-20 items-center justify-between"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Yaseen Baloch home"
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:bg-blue-500">
            YB
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-wide text-white">
              Yaseen Baloch
            </span>

            <span className="mt-0.5 block text-xs text-slate-400">
              Developer & Technology Creator
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070b14] ${
                  active
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-200 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/#contact"
            className="ml-2 inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
          >
            Let&apos;s Work Together
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition duration-200 hover:border-blue-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
        >
          <span
            aria-hidden="true"
            className="text-xl leading-none"
          >
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#070b14] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col py-3">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-white/5 py-4 text-sm font-medium transition duration-200 ${
                    active
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.name}

                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-blue-500"
                      />
                    )}
                  </span>
                </Link>
              );
            })}

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="my-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Let&apos;s Work Together
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
