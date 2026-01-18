import "./globals.css";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "MooMap | Smart Cattle Tracking",
  description:
    "Track and manage cattle effortlessly with MooMap — GPS collars, mobile insights, and smart analytics.",
  icons: {
    icon: "/favicon.png",
  },
};

const YEAR = new Date().getFullYear();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-gray-900"
        suppressHydrationWarning
      >
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
          <Navbar />
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-200 text-center py-6 mt-10 text-sm text-gray-500">
          © {YEAR} MooMap. All rights reserved.
        </footer>

        {/* ✅ Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
