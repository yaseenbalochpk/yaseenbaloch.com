import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: readonly FooterLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Learn",
    href: "/learn",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const serviceLinks: readonly FooterLink[] = [
  {
    label: "Web Development",
    href: "/services",
  },
  {
    label: "Python Development",
    href: "/services",
  },
  {
    label: "AI & Automation",
    href: "/services",
  },
  {
    label: "Landing Pages",
    href: "/services",
  },
  {
    label: "Website Maintenance",
    href: "/services",
  },
];

const resourceLinks: readonly FooterLink[] = [
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Learning",
    href: "/learn",
  },
  {
    label: "Projects",
    href: "/work",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const socialLinks: readonly FooterLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/yaseenbal0chpk",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
  },
];

function FooterLinkList({
  links,
}: {
  links: readonly FooterLink[];
}) {
  return (
    <ul className="space-y-3">
      {links.map((link) => {
        const isExternal =
          link.href.startsWith("http");

        return (
          <li key={link.href + link.label}>
            {isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070b14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Yaseen Baloch — Home"
              className="group inline-flex items-center gap-3 focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-200 group-hover:bg-blue-500 group-focus-visible:ring-2 group-focus-visible:ring-blue-400"
              >
                YB
              </span>

              <span>
                <span className="block text-sm font-bold tracking-wide text-white">
                  Yaseen Baloch
                </span>

                <span className="mt-0.5 block text-xs text-slate-500">
                  Developer & Technology Creator
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              I build software, explore technology, and share what I learn
              through practical projects, programming, web development, AI,
              and technology education.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center text-sm font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Let&apos;s work together
              <span
                aria-hidden="true"
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h2>

            <div className="mt-5">
              <FooterLinkList links={quickLinks} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h2>

            <div className="mt-5">
              <FooterLinkList links={serviceLinks} />
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Resources
            </h2>

            <div className="mt-5">
              <FooterLinkList links={resourceLinks} />
            </div>
          </div>
        </div>

        {/* Social + Bottom Bar */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-600">
            © {currentYear} Yaseen Baloch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}