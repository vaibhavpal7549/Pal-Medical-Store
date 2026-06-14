"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85428 43544",
    href: "tel:+918542843544",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 85428 43544",
    href: "https://wa.me/918542843544",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "palmedicalstore98390gh@gmail.com",
    href: "mailto:palmedicalstore98390gh@gmail.com",
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Main Market, Jaunpur, UP 222001",
    href: "https://maps.google.com/?q=Pal+Medical+Store+Jaunpur+Uttar+Pradesh",
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sun: 8:00 AM – 10:00 PM",
    href: undefined,
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `Name: ${formState.name}%0APhone: ${formState.phone}%0AMessage: ${formState.message}`;
    window.open(
      `https://wa.me/918542843544?text=${text}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-surface-500 dark:text-surface-400 leading-relaxed">
            Have a question about medicines or need a prescription filled?
            Reach out to us — we&apos;re always here to help.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info + Map */}
          <AnimatedSection direction="left">
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl border card-hover group"
                      style={{
                        background: "var(--card-bg)",
                        borderColor: "var(--card-border)",
                      }}
                    >
                      <div className={`shrink-0 w-11 h-11 rounded-xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-0.5">
                          {label}
                        </div>
                        <div className="text-sm font-medium">{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-4 p-4 rounded-xl border"
                      style={{
                        background: "var(--card-bg)",
                        borderColor: "var(--card-border)",
                      }}
                    >
                      <div className={`shrink-0 w-11 h-11 rounded-xl ${bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-0.5">
                          {label}
                        </div>
                        <div className="text-sm font-medium">{value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border shadow-lg aspect-video" style={{ borderColor: "var(--card-border)" }}>
              <iframe
                title="Pal Medical Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57618.61644754!2d82.6637!3d25.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b38e00cc15d8f%3A0x11e49a28e9eb8054!2sJaunpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <div
              className="p-8 rounded-2xl border shadow-lg"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
              <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
                Fill in the form below and we&apos;ll get back to you via WhatsApp.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-brand-500" />
                  </div>
                  <h4 className="text-lg font-bold mb-1">Message Sent!</h4>
                  <p className="text-sm text-surface-500">
                    We&apos;ll respond shortly via WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--card-border)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--card-border)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message / Medicine Inquiry
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Describe your requirement or list medicines you need..."
                      className="w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 resize-none"
                      style={{
                        background: "var(--background)",
                        borderColor: "var(--card-border)",
                      }}
                    />
                  </div>
                  <button
                    id="contact-submit"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl gradient-bg hover:opacity-90 transition-opacity shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
