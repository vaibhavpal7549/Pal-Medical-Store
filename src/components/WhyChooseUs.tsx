"use client";

import AnimatedSection from "./AnimatedSection";
import {
  ShieldCheck,
  Users,
  IndianRupee,
  Truck,
  Headphones,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Genuine Medicines",
    desc: "100% authentic medicines sourced directly from authorised distributors and verified manufacturers.",
  },
  {
    icon: Users,
    title: "Experienced Staff",
    desc: "Our licensed pharmacists bring years of expertise to guide you with the right medicines and dosage.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Prices",
    desc: "Competitive pricing with regular discounts and offers on health essentials. Best value guaranteed.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Free home delivery across Jaunpur for orders above ₹500. Same-day delivery on most orders.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated support via phone, WhatsApp, and in-store consultation for all your healthcare queries.",
  },
  {
    icon: Award,
    title: "Trusted Pharmacy",
    desc: "15+ years of serving the Jaunpur community with trust, integrity, and commitment to quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-white dark:bg-surface-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/[0.03] dark:bg-brand-500/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-surface-50">
            Why Families{" "}
            <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-700 dark:text-surface-300 leading-relaxed">
            We don&apos;t just sell medicines — we deliver care, trust, and peace of
            mind to every customer who walks through our doors.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div
                className="group relative flex items-start gap-5 p-6 rounded-2xl border card-hover h-full shadow-xs hover:shadow-lg transition-all"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5 text-surface-900 dark:text-surface-50">{title}</h3>
                  <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
