"use client";

import AnimatedSection from "./AnimatedSection";
import Script from "next/script";
import { ArrowRight } from "lucide-react";

/* ─── Configuration ────────────────────────────────────────── */
const FACEBOOK_PAGE_URL = "https://www.facebook.com/palmedicalstore";

/* ─── Facebook SVG Icon ────────────────────────────────────── */
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ─── Component ────────────────────────────────────────────── */
export default function FacebookFeed() {
  return (
    <section id="facebook-updates" className="section-padding bg-white dark:bg-surface-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─────────────────────────────────────── */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            <FacebookIcon className="w-3.5 h-3.5" />
            Social Updates
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Latest Updates from{" "}
            <span className="gradient-text">Facebook</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
            Follow Pal Medical Store for health tips, offers, medicine updates,
            and important announcements.
          </p>
        </AnimatedSection>

        {/* ─── Elfsight Facebook Feed Widget ───────────────── */}
        <AnimatedSection>
          <div className="fb-widget-container">
            {/* Elfsight Social Feed Widget */}
            <div
              className="elfsight-app-a0069b4b-c057-43b3-833c-0c1e9d58d709"
              data-elfsight-app-lazy
            ></div>
          </div>
        </AnimatedSection>

        {/* ─── CTA Button ─────────────────────────────────── */}
        <AnimatedSection className="text-center mt-12">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="facebook-follow-cta"
            className="fb-cta-button group"
          >
            <span className="fb-cta-icon">
              <FacebookIcon className="w-5 h-5" />
            </span>
            Follow Us on Facebook
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-surface-400 dark:text-surface-500 mt-3">
            Stay updated with health tips, offers &amp; announcements
          </p>
        </AnimatedSection>
      </div>

      {/* Elfsight Platform Script (shared with Reviews widget) */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </section>
  );
}
