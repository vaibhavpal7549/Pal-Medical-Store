"use client";

import AnimatedSection from "./AnimatedSection";
import { Heart, Award, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Customer-First Approach",
    desc: "We prioritize your health needs with personalised medication guidance.",
  },
  {
    icon: Award,
    title: "Certified & Licensed",
    desc: "Fully licensed pharmacy complying with all government regulations.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Knowledgeable pharmacists who care about your wellbeing.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    desc: "Open 7 days a week with extended hours for your convenience.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--section-alt-bg)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/20 dark:bg-brand-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-300/15 dark:bg-brand-800/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800/40 mb-4 shadow-2xs">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Trusted Healthcare Partner{" "}
            <span className="gradient-text">Since 2010</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
            Pal Medical Store has been serving the Jaunpur community for over 15
            years, providing genuine medicines, health supplements, and
            personalised healthcare advice. We believe in building lasting
            relationships based on trust, authenticity, and compassion.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1} direction="up">
              <div
                className="group relative p-6 rounded-2xl border card-hover h-full transition-all"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-100 dark:border-brand-800/40">
                  <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-surface-900 dark:text-surface-50">{title}</h3>
                <p className="text-sm text-surface-600 dark:text-surface-300 leading-relaxed">
                  {desc}
                </p>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
