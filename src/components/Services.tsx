"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Pill,
  ShoppingBag,
  HeartPulse,
  Baby,
  Stethoscope,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Prescription Medicines",
    desc: "Wide range of prescription drugs from trusted manufacturers, dispensed by licensed pharmacists with proper verification.",
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: ShoppingBag,
    title: "OTC Medicines",
    desc: "Over-the-counter medicines for common ailments including cold, fever, pain relief, and digestive health products.",
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600",
  },
  {
    icon: HeartPulse,
    title: "Health Supplements",
    desc: "Premium vitamins, minerals, protein supplements, and herbal products to support your overall wellness.",
    color: "bg-rose-50 dark:bg-rose-900/20",
    iconColor: "text-rose-600",
  },
  {
    icon: Baby,
    title: "Baby Care",
    desc: "Complete baby care range including infant formula, diapers, baby food, skincare, and essential healthcare products.",
    color: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600",
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    desc: "BP monitors, glucometers, thermometers, nebulizers, and other diagnostic equipment for home use.",
    color: "bg-violet-50 dark:bg-violet-900/20",
    iconColor: "text-violet-600",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Fast and reliable medicine delivery to your doorstep across Jaunpur. Order via phone or WhatsApp.",
    color: "bg-teal-50 dark:bg-teal-900/20",
    iconColor: "text-teal-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-surface-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive{" "}
            <span className="gradient-text">Healthcare Services</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
            From prescription medicines to home delivery, we offer complete
            pharmacy solutions to meet all your healthcare needs under one roof.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ icon: Icon, title, desc, color, iconColor }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div
                className="group relative p-7 rounded-2xl border card-hover h-full overflow-hidden transition-all shadow-xs hover:shadow-lg"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/[0.03] group-hover:to-brand-500/[0.06] transition-all duration-500" />
                
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-black/5 dark:border-white/5`}
                  >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-surface-900 dark:text-surface-50">{title}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-300 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-brand-500/5 dark:bg-brand-500/10 rounded-tl-3xl group-hover:w-20 group-hover:h-20 transition-all duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
