"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  "/images/hero-drive.png",
  "/images/hero-drive2.png",
  "/images/hero-drive3.png",
  "/images/hero-drive4.png",
];

const INTERVAL = 4000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full relative"
      style={{ aspectRatio: "16/9", borderBottom: "1px solid var(--border)" }}
    >
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? "声でMAPにピンしよう - ここピン!" : ""}
          fill
          className="object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1200ms ease-in-out",
          }}
          priority={i === 0}
          aria-hidden={i !== current}
        />
      ))}

      {/* ドットインジケーター */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              backgroundColor: i === current ? "white" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
