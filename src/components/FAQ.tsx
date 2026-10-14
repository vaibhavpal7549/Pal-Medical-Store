"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a prescription to buy medicines?",
    a: "Yes, for prescription medicines (Schedule H & H1), a valid doctor's prescription is required. OTC (over-the-counter) medicines like pain relievers, antacids, and basic vitamins can be purchased without a prescription.",
  },
  {
    q: "Do you offer home delivery of medicines?",
    a: "Yes! We offer free home delivery across Jaunpur city for orders above ₹500. You can place orders via phone call or WhatsApp. Most orders are delivered the same day within city limits.",
  },
  {
    q: "How can I check medicine availability?",
    a: "You can check medicine availability by calling us, sending a WhatsApp message with the medicine name, or using the search feature on our website. We'll confirm availability and pricing instantly.",
  },
  {
    q: "Are your medicines genuine and certified?",
    a: "Absolutely! All our medicines are sourced directly from authorised distributors and reputed pharmaceutical companies. We verify batch numbers, manufacturing dates, and expiry dates for every product.",
  },
  {
    q: "Do you stock health supplements and vitamins?",
    a: "Yes, we have a wide range of health supplements including multivitamins, protein powders, calcium, iron, omega-3, and herbal supplements from trusted brands like Himalaya, Dabur, and international brands.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, UPI (GPay, PhonePe, Paytm), debit/credit cards, and digital wallets. For home delivery orders, payment can be made online or at the time of delivery.",
  },
  {
    q: "Can I return medicines if they are wrong or expired?",
    a: "Yes, we have a hassle-free return policy. If you receive wrong or expired medicines, we will replace them immediately. Please bring the original bill and medicines within 7 days of purchase.",
  },
  {
    q: "Do you offer any discounts or loyalty benefits?",
    a: "Yes! We offer regular discounts on health products and seasonal offers. We also have a loyalty program where repeat customers earn points redeemable on future purchases. Ask in-store for details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
            Got questions? We&apos;ve got answers. Find quick answers to common
            queries about our products and services.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className="rounded-2xl border overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-xs"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: isOpen
                      ? "var(--color-brand-500)"
                      : "var(--card-border)",
                    boxShadow: isOpen ? "var(--shadow-md)" : undefined,
                  }}
                >
                  <button
                    id={`faq-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-surface-50/50 dark:hover:bg-surface-800/50"
                  >
                    <span className="text-sm sm:text-base font-bold text-surface-900 dark:text-surface-100 pr-4">
                      {q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isOpen ? "text-brand-600 dark:text-brand-400" : "text-surface-400"
                        }`}
                      />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm text-surface-600 dark:text-surface-300 leading-relaxed border-t pt-4" style={{ borderColor: "var(--card-border)" }}>
                          {a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
