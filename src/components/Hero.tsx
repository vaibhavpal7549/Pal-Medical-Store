"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowDown,
  ShieldCheck,
  Clock,
  Truck,
} from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "100% Genuine" },
  { icon: Clock, label: "Open Daily" },
  { icon: Truck, label: "Home Delivery" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pharmacy-hero.png"
          alt="Pal Medical Store — Modern pharmacy interior"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Your Trusted{" "}
            <span className="relative">
              <span className="relative z-10">Pharmacy</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-white/20 rounded-sm -z-0" />
            </span>{" "}
            Partner
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            Providing Genuine Medicines &amp; Healthcare Products with Care and
            Trust. Your health is our priority at Pal Medical Store, Jaunpur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="tel:+917393970252"
              id="hero-call-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-brand-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/917393970252?text=Hi%20Pal%20Medical%20Store%2C%20I%20need%20some%20medicines."
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-emerald-500 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="https://www.google.com/maps/place/Pal+Medical+Store/@26.0374607,82.5171226,17z/data=!3m1!4b1!4m6!3m5!1s0x399067c1e5d490af:0x34bd9d6d7ca43a89!8m2!3d26.0374608!4d82.5219935!16s%2Fg%2F11h4_zzhpk?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-directions-btn"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 text-white font-bold rounded-2xl backdrop-blur-sm border border-white/25 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10K+", label: "Happy Customers" },
              { value: "5K+", label: "Medicines Available" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll Down
          </span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
