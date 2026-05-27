import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Constructora Cumbres | Pavimentación y Obras Civiles en Chile",
    template: "%s | Constructora Cumbres"
  },
  description: "Especialistas en pavimentación asfáltica, hormigón, soluciones viales y movimiento de tierras para el sector industrial y urbano en Chile con más de 20 años de experiencia.",
  keywords: ["pavimentación asfáltica", "obras civiles", "pavimentación urbana", "movimiento de tierras", "constructora chile", "pavimentos industriales"],
  authors: [{ name: "Constructora Cumbres" }],
  creator: "Constructora Cumbres",
  publisher: "Constructora Cumbres",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cumbreschile.cl'), // Placeholder domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Constructora Cumbres | Pavimentación y Obras Civiles',
    description: 'Soluciones viales y proyectos de pavimentación de alta calidad con más de 20 años de trayectoria.',
    url: 'https://cumbreschile.cl',
    siteName: 'Constructora Cumbres',
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
