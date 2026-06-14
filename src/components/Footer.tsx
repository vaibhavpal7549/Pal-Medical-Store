"use client";

import {
  Pill,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  MessageCircle,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  "Prescription Medicines",
  "OTC Medicines",
  "Health Supplements",
  "Baby Care Products",
  "Medical Equipment",
  "Home Delivery",
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: ExternalLink, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--color-surface-900)" }}>
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }} className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white text-lg font-bold leading-tight">
                  Pal Medical
                </div>
                <div className="text-brand-400 text-[10px] font-semibold uppercase tracking-widest">
                  Store
                </div>
              </div>
            </a>
            <p className="text-sm text-surface-400 leading-relaxed mb-6 max-w-xs">
              Your trusted pharmacy partner in Jaunpur since 2009. Genuine
              medicines, expert guidance, and compassionate care — always.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-surface-800 hover:bg-brand-500 flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-surface-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className="group flex items-center gap-2 text-sm text-surface-400 hover:text-brand-400 transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-surface-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@palmedical.com" className="flex items-start gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                  info@palmedical.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Pal+Medical+Store+Jaunpur" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                  Main Market, Jaunpur, Uttar Pradesh 222001, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-500 text-center sm:text-left">
            © {new Date().getFullYear()} Pal Medical Store. All rights reserved.
          </p>
          <p className="text-xs text-surface-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in Jaunpur
          </p>
        </div>
      </div>
    </footer>
  );
}
