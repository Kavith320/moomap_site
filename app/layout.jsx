import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MooMap | Smart Cattle Tracking",
  description:
    "Track and manage cattle effortlessly with MooMap — GPS collars, mobile insights, and smart analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
          <Navbar />
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-200 text-center py-6 mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} MooMap. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
