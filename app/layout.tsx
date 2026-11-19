import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harkat Physiotherapy — Johar Town, Lahore",
  description:
    "Physiotherapy for back pain, sciatica, frozen shoulder, knee pain, sports injuries and rehab after surgery. Clinic in Johar Town and home visits across Lahore.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Harkat Physiotherapy — Johar Town, Lahore",
    description: "Move without pain again. Clinic in Johar Town and home visits across Lahore.",
    images: ["https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=1200&q=75"],
  },
};

export const viewport: Viewport = {
  themeColor: "#12404a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
