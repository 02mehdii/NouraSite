import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noura - Quit the Scroll. Connect to the Soul.",
  description: "The first Islamic focus app that forces you to read Duas to unlock social media. Reclaim your heart before Ramadan.",
  keywords: ["Islamic app", "digital detox", "Muslim productivity", "Dua", "Dhikr", "Quran", "prayer times", "focus app", "Ramadan"],
  authors: [{ name: "Noura" }],
  openGraph: {
    title: "Noura - Quit the Scroll. Connect to the Soul.",
    description: "The first Islamic focus app that forces you to read Duas to unlock social media.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
