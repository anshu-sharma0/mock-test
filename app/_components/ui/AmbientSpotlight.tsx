"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function AmbientSpotlight() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Using requestAnimationFrame to smooth out performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  // Obsidian mode: deep purple-to-pink Nebula Glow
  // Ethereal mode: soft peach-to-yellow Dawn Aura
  const gradient =
    resolvedTheme === "dark"
      ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 100%)"
      : "radial-gradient(circle at center, rgba(255, 154, 158, 0.25) 0%, rgba(254, 207, 239, 0.2) 50%, transparent 100%)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-1000"
      style={{ opacity: position.x !== -1000 ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] transition-transform duration-200 ease-out will-change-transform"
        style={{
          background: gradient,
          left: position.x - 300,
          top: position.y - 300,
        }}
      />
    </div>
  );
}
