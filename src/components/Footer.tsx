"use client";

import Image from "next/image";
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
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }} className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden p-0.5 border border-surface-700">
                <Image
                  src="/logo.jpg"
                  alt="Pal Medical Store"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
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
              Your trusted pharmacy partner in Jaunpur since 2010. Genuine
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
                <a href="tel:+917393970252" className="flex items-start gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                  +91 73939 70252
                </a>
              </li>
              <li>
                <a href="mailto:palmedicalstore98390gh@gmail.com" className="flex items-start gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                  palmedicalstore98390gh@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Pal+Medical+Store/@26.0374607,82.5171226,17z/data=!3m1!4b1!4m6!3m5!1s0x399067c1e5d490af:0x34bd9d6d7ca43a89!8m2!3d26.0374608!4d82.5219935!16s%2Fg%2F11h4_zzhpk?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                  Pal Medical Store, Shahganj Road, Patti Narendrapur, Jaunpur, Uttar Pradesh, 223102, India
                </a>
              </li>
            </ul>

            {/* Social Media Handles */}
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mt-6 mb-4">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/palmedicalstore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-surface-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 text-surface-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-surface-800 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-all group"
              >
                <svg className="w-4 h-4 text-surface-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/@palmedicalstore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-surface-800 hover:bg-[#FF0000] flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 text-surface-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://x.com/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-surface-800 hover:bg-black flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 text-surface-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-500 text-center sm:text-left">
            © {new Date().getFullYear()} Pal Medical Store. All rights reserved.
          </p>
          <p className="text-xs text-surface-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> by Pal Family
          </p>
        </div>
      </div>
    </footer>
  );
}
