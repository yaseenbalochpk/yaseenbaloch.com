import Link from "next/link";

import Container from "@/components/Container";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";

const footerGroups = [
  {
    title: "Explore",
    links: navigationItems.filter(
      (item) =>
        item.href !== "/" &&
        ["About", "Work", "Learn", "Blog", "Resources"].includes(
          item.name,
        ),
    ),
  },
  {
    title: "Services",
    links: [
      {
        name: "Web Development",
        href: "/services",
      },
      {
        name: "Python Development",
        href: "/services",
      },
      {
        name: "AI & Automation",
        href: "/services",
      },
      {
        name: "Landing Pages",
        href: "/services",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "Contact",
        href: "/contact",
      },
      {
        name: "GitHub",
        href: "https://github.com/yaseenbal0chpk",
        external: true,
      },
    ],
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070b14]">
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
            {/* Brand */}
            <div className="max-w-md">
              <Link
                href="/"
                aria-label={`${siteConfig.name} — Home`}
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white shadow-lg shadow-blue-600/20">
                  YB
                </span>

                <span className="text-lg font-semibold tracking-tight text-white">
                  {siteConfig.name}
                </span>
              </Link>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {siteConfig.footer.description}
              </p>

              <p className="mt-5 text-sm font-medium text-slate-500">
                {siteConfig.tagline}
              </p>

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-slate-400 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Link Groups */}
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {group.title}
                </h2>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => {
                    const isExternal =
                      "external" in link && link.external;

                    return (
                      <li key={link.name}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-500">
              © {currentYear} {siteConfig.footer.copyright}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-slate-300"
              >
                Home
              </Link>

              <Link
                href="/contact"
                className="transition-colors duration-200 hover:text-slate-300"
              >
                Contact
              </Link>

              <a
                href={siteConfig.url}
                className="transition-colors duration-200 hover:text-slate-300"
              >
                {siteConfig.url.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
