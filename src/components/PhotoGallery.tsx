"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
  SlidersHorizontal,
} from "lucide-react";

/* ─── Gallery Data ─────────────────────────────────────────── */
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  label: string;
  width: number;
  height: number;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1631549916768-4be72c5bfbf4?w=800&q=80",
    alt: "Pal Medical Store – modern pharmacy storefront view",
    category: "store",
    label: "Store Front",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    alt: "Pal Medical Store – well-organized medicine shelves",
    category: "products",
    label: "Medicine Shelves",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    alt: "Pal Medical Store – healthcare products display",
    category: "products",
    label: "Healthcare Products",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Pal Medical Store – professional customer service desk",
    category: "services",
    label: "Customer Service Desk",
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&q=80",
    alt: "Pal Medical Store – medical equipment section",
    category: "products",
    label: "Medical Equipment",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=800&q=80",
    alt: "Pal Medical Store – home delivery service",
    category: "services",
    label: "Home Delivery Service",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80",
    alt: "Pal Medical Store – pharmacy interior with organized shelves",
    category: "store",
    label: "Pharmacy Interior",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80",
    alt: "Pal Medical Store – vitamins and supplements display",
    category: "products",
    label: "Vitamins & Supplements",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    alt: "Pal Medical Store – pharmacist consultation",
    category: "services",
    label: "Pharmacist Consultation",
    width: 800,
    height: 600,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
    alt: "Pal Medical Store – prescription counter",
    category: "store",
    label: "Prescription Counter",
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
    alt: "Pal Medical Store – first aid and wellness products",
    category: "products",
    label: "Wellness Products",
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
    alt: "Pal Medical Store – medicine packaging and delivery",
    category: "services",
    label: "Medicine Packaging",
    width: 800,
    height: 600,
  },
];

const filterCategories = [
  { key: "all", label: "All" },
  { key: "store", label: "Store" },
  { key: "products", label: "Products" },
  { key: "services", label: "Services" },
];

/* ─── Component ────────────────────────────────────────────── */
export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const lightboxRef = useRef<HTMLDivElement>(null);

  /* derived filtered list */
  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  /* image load tracking */
  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  /* lightbox controls */
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const goNext = () =>
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  const goPrev = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );

  /* keyboard & click-outside handling */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, filteredImages.length]);

  return (
    <>
      <section
        id="gallery"
        className="section-padding"
        style={{ background: "var(--section-alt-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ─── Header ─────────────────────────────────────── */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 mb-4">
              <Camera className="w-3.5 h-3.5" />
              Photo Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our Store{" "}
              <span className="gradient-text">Gallery</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-surface-500 dark:text-surface-400 leading-relaxed">
              Take a look at our pharmacy, products, and customer service
              environment.
            </p>
          </AnimatedSection>

          {/* ─── Filter Buttons ─────────────────────────────── */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="inline-flex items-center gap-2 mr-2 text-sm text-surface-400">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filter:</span>
            </div>
            {filterCategories.map(({ key, label }) => (
              <button
                key={key}
                id={`gallery-filter-${key}`}
                onClick={() => setActiveFilter(key)}
                className={`gallery-filter-btn ${
                  activeFilter === key ? "gallery-filter-active" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </AnimatedSection>

          {/* ─── Image Grid ────────────────────────────────── */}
          <motion.div
            layout
            className="gallery-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div
                    className="gallery-card group"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${image.alt}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                  >
                    {/* Loading skeleton */}
                    {!loadedImages.has(image.id) && (
                      <div className="gallery-skeleton">
                        <div className="gallery-skeleton-shimmer" />
                      </div>
                    )}

                    {/* Image */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      className={`gallery-image ${
                        loadedImages.has(image.id) ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(image.id)}
                    />

                    {/* Hover Overlay */}
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-icon">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                      <div className="gallery-overlay-label">
                        <span className="gallery-category-badge">
                          {image.category}
                        </span>
                        <h3 className="text-white font-bold text-lg mt-2 drop-shadow-lg">
                          {image.label}
                        </h3>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ─── Image Count Badge ──────────────────────────── */}
          <AnimatedSection className="text-center mt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-surface-500 dark:text-surface-400 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-surface-200 dark:border-surface-700">
              <Camera className="w-3.5 h-3.5" />
              Showing {filteredImages.length} of {galleryImages.length} photos
            </span>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && filteredImages[lightboxIndex] && (
          <motion.div
            ref={lightboxRef}
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === lightboxRef.current) closeLightbox();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close button */}
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation – previous */}
            <button
              className="lightbox-nav lightbox-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image container */}
            <motion.div
              key={filteredImages[lightboxIndex].id}
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                width={1200}
                height={900}
                className="lightbox-image"
                priority
              />

              {/* Caption */}
              <div className="lightbox-caption">
                <span className="gallery-category-badge">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h3 className="text-white font-bold text-xl mt-2">
                  {filteredImages[lightboxIndex].label}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>

            {/* Navigation – next */}
            <button
              className="lightbox-nav lightbox-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
