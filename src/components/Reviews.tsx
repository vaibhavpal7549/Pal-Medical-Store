"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Regular Customer",
    rating: 5,
    text: "I have been buying medicines from Pal Medical Store for the last 8 years. They always provide genuine medicines at reasonable prices. The staff is very helpful and knowledgeable. Highly recommended!",
    avatar: "RK",
  },
  {
    name: "Sunita Devi",
    role: "Loyal Customer",
    rating: 5,
    text: "Best pharmacy in Jaunpur! The home delivery service is excellent — I receive my monthly diabetes medicines right at my doorstep. Their prices are very competitive compared to other stores.",
    avatar: "SD",
  },
  {
    name: "Dr. Amit Singh",
    role: "Local Physician",
    rating: 5,
    text: "As a doctor, I recommend Pal Medical Store to all my patients. They maintain proper storage conditions and stock only genuine medicines. A trustworthy pharmacy you can rely on.",
    avatar: "AS",
  },
  {
    name: "Priya Sharma",
    role: "Working Professional",
    rating: 4,
    text: "The WhatsApp ordering feature is so convenient! I just send my prescription and they deliver everything within hours. Great customer service and always available to answer queries.",
    avatar: "PS",
  },
  {
    name: "Manoj Tiwari",
    role: "Senior Citizen",
    rating: 5,
    text: "At my age, I need multiple medicines daily. Pal Medical Store not only provides all my medicines but also reminds me about refills. Such personal care is rare to find these days.",
    avatar: "MT",
  },
  {
    name: "Anita Gupta",
    role: "Mother of Two",
    rating: 5,
    text: "I trust Pal Medical Store for all my family's healthcare needs — from baby products to supplements. They always have what I need in stock and the staff is always courteous.",
    avatar: "AG",
  },
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const displayed = reviews.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  );

  const goTo = (page: number) => {
    if (page >= 0 && page < totalPages) setCurrentPage(page);
  };

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-500 dark:text-surface-400 leading-relaxed">
            Real reviews from real customers — hear from the families and
            individuals who trust Pal Medical Store.
          </p>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayed.map(({ name, role, rating, text, avatar }) => (
              <div
                key={name}
                className="group relative p-7 rounded-2xl border card-hover"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                {/* Quote icon */}
                <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-500/10 dark:text-brand-400/10" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-surface-300 dark:text-surface-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-surface-600 dark:text-surface-300 leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--card-border)" }}>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{name}</div>
                    <div className="text-xs text-surface-500 dark:text-surface-400">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            id="reviews-prev"
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 0}
            className="p-2.5 rounded-xl border transition-all hover:bg-brand-50 dark:hover:bg-brand-900/20 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "var(--card-border)" }}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  p === currentPage
                    ? "bg-brand-500 w-8"
                    : "bg-surface-300 dark:bg-surface-600 hover:bg-brand-300"
                }`}
                aria-label={`Go to page ${p + 1}`}
              />
            ))}
          </div>
          <button
            id="reviews-next"
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="p-2.5 rounded-xl border transition-all hover:bg-brand-50 dark:hover:bg-brand-900/20 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: "var(--card-border)" }}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
