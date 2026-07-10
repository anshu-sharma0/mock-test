import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MockTestZone - AI-powered mock test platform",
  description:
    "A premium AI-powered mock test platform for students, creators, teachers, and institutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
