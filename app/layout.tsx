import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Sacred Space",
  description: "Two Souls • One Journey • Infinite Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
