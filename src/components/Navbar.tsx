"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  Search,
  Pill,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const medicines = [
    "Paracetamol",
    "Amoxicillin",
    "Ibuprofen",
    "Cetirizine",
    "Azithromycin",
    "Omeprazole",
    "Metformin",
    "Amlodipine",
    "Vitamin D3",
    "Calcium Supplements",
    "ORS Powder",
    "Antacid Syrup",
    "Cough Syrup",
    "Multivitamins",
    "B-Complex",
    "Iron Tablets",
    "Protein Powder",
    "Antiseptic Cream",
    "Eye Drops",
    "Nasal Spray",
  ];

  const filteredMeds = searchQuery.length > 0
    ? medicines.filter((m) =>
        m.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-md border-b"
            : "border-b border-surface-200/70 dark:border-transparent shadow-2xs"
        }`}
        style={{
          background: "var(--nav-bg)",
          borderColor: scrolled ? "var(--nav-border)" : undefined,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all overflow-hidden p-0.5 border border-surface-200 dark:border-surface-700">
                <Image
                  src="/logo.jpg"
                  alt="Pal Medical Store"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight tracking-tight">
                  Pal Medical
                </span>
                <span className="text-[10px] font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest leading-none">
                  Store
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors
                    ${
                      activeSection === href.replace("#", "")
                        ? "text-brand-600 dark:text-brand-400"
                        : "text-surface-700 dark:text-surface-300 hover:text-brand-600 dark:hover:text-brand-400"
                    }`}
                >
                  {label}
                  {activeSection === href.replace("#", "") && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 dark:bg-brand-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Toggle */}
              <button
                id="search-toggle"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                aria-label="Toggle medicine search"
              >
                <Search className="w-4.5 h-4.5" />
              </button>

              {/* Theme Toggle */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4.5 h-4.5 text-amber-400" />
                    ) : (
                      <Moon className="w-4.5 h-4.5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* Call CTA */}
              <a
                href="tel:+917393970252"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl gradient-bg hover:opacity-90 transition-opacity shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t"
              style={{ borderColor: "var(--card-border)" }}
            >
              <div className="max-w-2xl mx-auto px-4 py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
                  <input
                    id="medicine-search"
                    type="text"
                    placeholder="Search medicines, health products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                    style={{
                      background: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                    autoFocus
                  />
                </div>
                {filteredMeds.length > 0 && (
                  <div
                    className="mt-2 rounded-xl border divide-y max-h-48 overflow-y-auto"
                    style={{
                      background: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    {filteredMeds.map((med) => (
                      <button
                        key={med}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors flex items-center gap-3"
                        onClick={() => {
                          setSearchQuery(med);
                          setSearchOpen(false);
                          const contactSection = document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        <Pill className="w-4 h-4 text-brand-500 shrink-0" />
                        {med}
                      </button>
                    ))}
                  </div>
                )}
                {searchQuery.length > 0 && filteredMeds.length === 0 && (
                  <p className="mt-3 text-sm text-center text-surface-500">
                    Medicine not found? <a href="#contact" className="text-brand-500 font-medium hover:underline" onClick={() => setSearchOpen(false)}>Contact us</a> for availability.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden shadow-2xl"
              style={{ background: "var(--card-bg)" }}
            >
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "var(--card-border)" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden p-0.5 border border-surface-200 dark:border-surface-700">
                    <Image
                      src="/logo.jpg"
                      alt="Pal Medical Store"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm leading-tight">Pal Medical</span>
                    <span className="text-[10px] font-medium text-brand-500 uppercase tracking-wider leading-none">Store</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-10rem)]">
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === href.replace("#", "")
                        ? "bg-brand-50 dark:bg-brand-900/20 text-brand-500"
                        : "hover:bg-surface-100 dark:hover:bg-surface-800"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                    {label}
                  </motion.a>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t" style={{ borderColor: "var(--card-border)" }}>
                <a
                  href="tel:+917393970252"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white rounded-xl gradient-bg shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
