"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917393970252?text=Hi%20Pal%20Medical%20Store%2C%20I%20need%20some%20medicines."
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
        style={{
          boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>

      {/* Floating Call Button (mobile only) */}
      <motion.a
        href="tel:+917393970252"
        id="floating-call"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full gradient-bg text-white flex items-center justify-center shadow-xl sm:hidden"
        style={{
          boxShadow: "0 4px 14px rgba(22, 163, 74, 0.4)",
        }}
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-20" />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-xl border shadow-lg flex items-center justify-center transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/20"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-brand-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
