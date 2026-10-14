"use client";

import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-brand-700 text-white text-xs z-[60] relative border-b border-brand-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 py-2">
        {/* Left Side */}
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-brand-200" />
            <span className="hidden sm:inline">Mon – Sun :</span>
            <span>06:00 AM – 10:00 PM</span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-brand-200" />
            <span>Pattinarendrapur, Jaunpur</span>
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+917393970252"
            className="flex items-center gap-1.5 hover:text-brand-100 transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-200" />
            <span>+91 73939 70252</span>
          </a>
          <a
            href="mailto:palmedicalstore98390gh@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-brand-100 transition-colors"
          >
            <Mail className="w-3 h-3 text-brand-200" />
            <span>palmedicalstore98390gh@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
