import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techfest — The Future Is Built Here | IIT Bombay",
  description:
    "Official landing page concept for Techfest, IIT Bombay — Asia's Largest Science and Technology Festival. Featuring high-stakes robotics, masterclasses, and global innovations.",
  keywords: [
    "Techfest",
    "IIT Bombay",
    "Techfest 2026",
    "Robowars",
    "Science Festival",
    "Asia Largest Tech Fest",
    "Competitions",
    "Workshops",
    "Exhibitions",
  ],
  authors: [{ name: "Techfest IIT Bombay Concept" }],
  openGraph: {
    title: "Techfest — The Future Is Built Here | IIT Bombay",
    description:
      "Asia's Largest Science & Technology Festival at IIT Bombay. Explore interactive telemetry, Robowars, workshops, and global exhibitions.",
    url: "https://techfest.org",
    siteName: "Techfest IIT Bombay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techfest — The Future Is Built Here | IIT Bombay",
    description: "Asia's Largest Science & Technology Festival at IIT Bombay.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} h-full dark antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#030508] text-white selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
