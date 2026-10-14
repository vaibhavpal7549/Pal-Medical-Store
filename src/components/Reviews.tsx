"use client";

import AnimatedSection from "./AnimatedSection";
import Script from "next/script";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section-padding"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-600 dark:text-surface-300 leading-relaxed mb-10">
            Real reviews from real customers — hear from the families and
            individuals who trust Pal Medical Store.
          </p>
        </AnimatedSection>

        {/* ELFSIGHT WIDGET CONTAINER */}
        <div className="w-full flex justify-center">
          <div className="elfsight-app-36275c55-72f3-453f-8c8e-1267aacbe1ea" data-elfsight-app-lazy></div>
        </div>
      </div>

      {/* ELFSIGHT SCRIPT */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </section>
  );
}
