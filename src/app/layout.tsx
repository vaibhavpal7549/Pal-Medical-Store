import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pal Medical Store — Your Trusted Pharmacy in Jaunpur | Genuine Medicines & Home Delivery",
  description:
    "Pal Medical Store is Jaunpur's trusted pharmacy since 2009. Buy genuine prescription medicines, OTC drugs, health supplements, baby care products & medical equipment. Free home delivery available. Call +91 73939 70252.",
  keywords: [
    "Pal Medical Store",
    "pharmacy Jaunpur",
    "chemist shop Jaunpur",
    "medicine shop near me",
    "online medicine delivery Jaunpur",
    "genuine medicines",
    "health supplements",
    "baby care products",
    "medical equipment",
    "prescription medicines",
    "OTC medicines Jaunpur",
  ],
  authors: [{ name: "Pal Medical Store" }],
  openGraph: {
    title: "Pal Medical Store — Your Trusted Pharmacy in Jaunpur",
    description:
      "Genuine medicines, health supplements, and healthcare products with home delivery in Jaunpur. Trusted since 2009.",
    type: "website",
    locale: "en_IN",
    siteName: "Pal Medical Store",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Schema.org structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              name: "Pal Medical Store",
              description:
                "Trusted pharmacy in Jaunpur providing genuine medicines, health supplements, baby care, and medical equipment since 2009.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Market",
                addressLocality: "Jaunpur",
                addressRegion: "Uttar Pradesh",
                postalCode: "222001",
                addressCountry: "IN",
              },
              telephone: "+917393970252",
              email: "palmedicalstore98390gh@gmail.com",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "08:00",
                closes: "22:00",
              },
              priceRange: "₹",
              image: "/pharmacy-hero.png",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
