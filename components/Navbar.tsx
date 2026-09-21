"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Button from "@/components/Button";
import { navigationItems } from "@/data/navigation";

const BRAND_NAME = "YB";
const BRAND_LABEL = "Yaseen Baloch — Home";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
      <div className="mx-auto flex min-h-20 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label={BRAND_LABEL}
          className="group flex shrink-0 items-center"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-base font-bold tracking-tight text-white shadow-lg shadow-blue-600/20 transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-12 sm:text-lg">
            {BRAND_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 xl:flex"
        >
          {navigationItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-slate-400 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Button href="/contact" size="sm">
            Let&apos;s Work Together
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-200 transition-all duration-200 hover:border-blue-500/40 hover:bg-white/5 xl:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <span
            aria-hidden="true"
            className="relative flex h-5 w-6 flex-col justify-center"
          >
            <span
              className={[
                "absolute left-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-200",
                isMenuOpen ? "rotate-45" : "-translate-y-2",
              ].join(" ")}
            />

            <span
              className={[
                "absolute left-0 h-0.5 w-6 rounded-full bg-current transition-opacity duration-200",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />

            <span
              className={[
                "absolute left-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-200",
                isMenuOpen ? "-rotate-45" : "translate-y-2",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={[
          "overflow-hidden border-t border-white/10 bg-[#070b14] transition-[max-height,opacity] duration-300 xl:hidden",
          isMenuOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "max-h-0 border-t-transparent opacity-0",
        ].join(" ")}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-h-[calc(100vh-5rem)] w-full max-w-[1200px] flex-col overflow-y-auto px-4 py-5 sm:px-6"
        >
          {navigationItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className={[
                  "rounded-xl px-4 py-3.5 transition-all duration-200",
                  active
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                <span className="block text-sm font-medium">
                  {item.name}
                </span>

                {item.description && (
                  <span className="mt-1 block text-xs font-normal leading-5 text-slate-500">
                    {item.description}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="mt-4 border-t border-white/10 pt-4">
            <Button
              href="/contact"
              size="md"
              fullWidth
              onClick={closeMenu}
            >
              Let&apos;s Work Together
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
