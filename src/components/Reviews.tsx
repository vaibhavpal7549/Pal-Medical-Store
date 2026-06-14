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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-500 dark:text-surface-400 leading-relaxed mb-10">
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
