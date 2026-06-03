import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2d7a3a" }}>
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <p className="text-lg font-bold">Evergreen</p>
                <p className="text-sm text-gray-400 -mt-1">Protective Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering professional security solutions, risk management, and operational excellence worldwide. Protecting people, assets, and operations across multiple regions.
            </p>
               <div className="flex gap-4 mt-6">
                {[
                  { name: "linkedin" },
                  { name: "twitter" },
                  { name: "facebook" },
                ].map((social) => (
                 <a
                   key={social.name}
                   href="#"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-evergreen transition-colors duration-300"
                   aria-label={social.name}
                 >
                   <span className="text-xs uppercase font-bold">{social.name[0]}</span>
                 </a>
               ))}
             </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
             <ul className="space-y-3">
               {[
                 { label: "Home", href: "/" },
                 { label: "About Us", href: "/about" },
                 { label: "Services", href: "/services" },
                 { label: "Training", href: "/training" },
                 { label: "Gallery", href: "/gallery" },
                 { label: "Executive Staff", href: "/executive-staff" },
                 { label: "Careers", href: "/careers" },
                 { label: "Employment", href: "/employment" },
                 { label: "Quality Assurance", href: "/quality-assurance" },
                 { label: "Contact Us", href: "/contact" },
               ].map((link) => (
                 <li key={link.href}>
                   <Link
                     href={link.href}
                     className="text-gray-400 hover:text-evergreen transition-colors duration-200 text-sm"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Security Guard Services",
                "Armed Security Services",
                "Executive Protection",
                "Airport Security",
                "CCTV Monitoring",
                "Access Control",
                "Risk Assessment",
                "Counter Terrorism Support",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-evergreen transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-white font-medium mb-1">Corporate Headquarters</p>
                <p>123 Security Drive, Suite 100</p>
                <p>Washington, DC 20001</p>
                <p>United States</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Phone</p>
                <p>+1 (202) 555-0199</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Email</p>
                <p>info@evergreenprotective.com</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Emergency</p>
                <p>+1 (202) 555-0110</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Evergreen Protective Services International. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-evergreen text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-evergreen text-sm transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
