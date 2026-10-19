"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Pill,
  Sparkles,
  User,
  Baby,
  Activity,
  Cpu,
} from "lucide-react";

const categories = [
  {
    icon: Pill,
    title: "Medicines",
    desc: "Prescription & OTC drugs",
    count: "2000+",
    gradient: "from-emerald-500 to-green-600",
    hoverBg: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
  {
    icon: Sparkles,
    title: "Vitamins & Supplements",
    desc: "Nutrition & wellness",
    count: "500+",
    gradient: "from-amber-500 to-orange-600",
    hoverBg: "hover:border-amber-300 dark:hover:border-amber-700",
  },
  {
    icon: User,
    title: "Personal Care",
    desc: "Skincare, haircare & hygiene",
    count: "800+",
    gradient: "from-pink-500 to-rose-600",
    hoverBg: "hover:border-pink-300 dark:hover:border-pink-700",
  },
  {
    icon: Baby,
    title: "Baby Care",
    desc: "Infant essentials & nutrition",
    count: "300+",
    gradient: "from-sky-500 to-blue-600",
    hoverBg: "hover:border-sky-300 dark:hover:border-sky-700",
  },
  {
    icon: Activity,
    title: "Diabetes Care",
    desc: "Glucose strips, insulin & more",
    count: "200+",
    gradient: "from-violet-500 to-purple-600",
    hoverBg: "hover:border-violet-300 dark:hover:border-violet-700",
  },
  {
    icon: Cpu,
    title: "Healthcare Devices",
    desc: "Monitors, thermometers & more",
    count: "150+",
    gradient: "from-teal-500 to-cyan-600",
    hoverBg: "hover:border-teal-300 dark:hover:border-teal-700",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="section-padding"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-surface-900 dark:text-surface-50">
            Browse Our{" "}
            <span className="gradient-text">Product Range</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-700 dark:text-surface-300 leading-relaxed">
            Explore thousands of healthcare products across categories. 
            All products sourced from authorised distributors.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(
            ({ icon: Icon, title, desc, count, gradient, hoverBg }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <div
                  className={`group relative p-6 rounded-2xl border card-hover cursor-pointer overflow-hidden h-full shadow-xs hover:shadow-lg transition-all ${hoverBg}`}
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1 text-surface-900 dark:text-surface-50">{title}</h3>
                      <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--card-border)" }}>
                    <span className="text-xs font-semibold text-surface-600 dark:text-surface-400 uppercase tracking-wider">
                      Products Available
                    </span>
                    <span className="text-lg font-extrabold gradient-text">
                      {count}
                    </span>
                  </div>

                  {/* Decorative shimmer */}
                  <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </AnimatedSection>
            )
          )}
        </div>
      </div>
    </section>
  );
}
