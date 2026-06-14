"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </ThemeProvider>
  );
}
