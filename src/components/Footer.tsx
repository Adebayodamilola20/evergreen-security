import Link from "next/link";
import { COMPANY, HQ, MENU_ICONS, SERVICES } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm tracking-tight">PGS</span>
              </span>
              <div className="leading-tight">
                <p className="text-lg font-bold">{COMPANY.name}</p>
                <p className="text-xs text-gray-400">{COMPANY.legalName}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A spectrum of custom solutions to match clients&apos; dynamic and peculiar security needs — armed and
              unarmed officers, security consulting, and an A-rated training academy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Menu</h3>
            <ul className="space-y-3">
              {MENU_ICONS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/who-we-are/leadership"
                  className="text-gray-400 hover:text-brand-light transition-colors duration-200 text-sm"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-brand-light transition-colors duration-200 text-sm"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 10).map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
              <li>
                <Link href="/#services" className="text-brand-light hover:text-white text-sm font-semibold">
                  See all {SERVICES.length} services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-white font-medium mb-1">{HQ.label}</p>
                {HQ.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div>
                <p className="text-white font-medium mb-1">Phone</p>
                <a href={`tel:${HQ.phone.replace(/\s/g, "")}`} className="hover:text-brand-light transition-colors">
                  {HQ.phone}
                </a>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Fax</p>
                <p>{HQ.fax}</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <a href={`mailto:${HQ.email}`} className="hover:text-brand-light transition-colors break-all">
                  {HQ.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.legalName} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
