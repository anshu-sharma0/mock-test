import type { Metadata } from "next";
import { ThemeProvider } from "@/app/_components/providers/ThemeProvider";
import { Outfit, Inter, Space_Mono } from "next/font/google";
import { AmbientSpotlight } from "@/app/_components/ui/AmbientSpotlight";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-heading" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-utility" 
});

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
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AmbientSpotlight />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
