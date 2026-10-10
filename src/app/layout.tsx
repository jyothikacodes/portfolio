import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jyothika.me"),
  title: "Jyothika A P — I Build For What Matters",
  description:
    "Personal portfolio and technical field notebook of Jyothika A P. Computer Science and Engineering student at IIIT Kottayam exploring AI/ML, healthcare research, cybersecurity, and inclusive technology.",
  keywords: [
    "Jyothika A P",
    "Jyothika Pratheep",
    "IIIT Kottayam",
    "Machine Learning",
    "Healthcare AI",
    "Protein Language Models",
    "Cybersecurity",
    "Quantum Computing",
    "Ullaas",
    "Shadow-Walk",
    "HIV-ESM2",
    "RakshakX",
  ],
  authors: [{ name: "Jyothika A P", url: "https://github.com/jyothikacodes" }],
  openGraph: {
    title: "Jyothika A P — I Build For What Matters",
    description:
      "AI/ML research, healthcare deep learning, cybersecurity, and technology for human impact.",
    url: "https://github.com/jyothikacodes",
    siteName: "Jyothika A P Portfolio",
    type: "website",
    images: [
      {
        url: "/images/sittingstraight.jpeg",
        width: 720,
        height: 1279,
        alt: "Jyothika A P",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7F5F0] text-[#171717] antialiased selection:bg-[#5B3CC4] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
