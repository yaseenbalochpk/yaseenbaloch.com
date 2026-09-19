"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavigationItem = {
  name: string;
  href: string;
};

const NAVIGATION: readonly NavigationItem[] = [
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
  {
    name: "Blog",
    href: "/blog",
  },
];

const MOBILE_MENU_ID = "primary-mobile-navigation";

function isNavigationItemActive(
  pathname: string,
  href: string,
): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  /*
   * Close the mobile navigation when:
   * 1. The route changes.
   * 2. The user presses Escape.
   */
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="container mx-auto flex min-h-20 items-center justify-between"
      >
        {/* =========================================================
            BRAND
        ========================================================= */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Yaseen Baloch — Home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:bg-blue-500 group-focus-visible:ring-2 group-focus-visible:ring-blue-400 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#070b14]"
          >
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

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAVIGATION.map((item) => {
            const active = isNavigationItemActive(
              pathname,
              item.href,
            );

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070b14] ${
                  active
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-px bg-blue-500 transition-all duration-200 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* Primary business CTA */}
          <Link
            href="/#contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]"
          >
            Let&apos;s Work Together
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        {/* =========================================================
            MOBILE MENU BUTTON
        ========================================================= */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen
              ? "Close primary navigation"
              : "Open primary navigation"
          }
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition duration-200 hover:border-blue-500/40 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
        >
          <span
            aria-hidden="true"
            className="text-xl leading-none"
          >
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}
      <div
        id={MOBILE_MENU_ID}
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-white/10 bg-[#070b14] transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "max-h-[600px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col py-3">
            {NAVIGATION.map((item) => {
              const active = isNavigationItemActive(
                pathname,
                item.href,
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={`border-b border-white/5 py-4 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
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

            {/* Mobile business CTA */}
            <Link
              href="/#contact"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className="my-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
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
