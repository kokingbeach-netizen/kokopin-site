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
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % IMAGES.length;
        setPrev(c);
        setFading(true);
        setTimeout(() => {
          setPrev(null);
          setFading(false);
        }, 800);
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
      {/* 前の画像（フェードアウト） */}
      {prev !== null && (
        <Image
          key={`prev-${prev}`}
          src={IMAGES[prev]}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-auto object-cover absolute inset-0"
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 800ms ease-in-out",
          }}
          aria-hidden
        />
      )}
      {/* 現在の画像 */}
      <Image
        key={`cur-${current}`}
        src={IMAGES[current]}
        alt="声でMAPにピンしよう - ここピン!"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover relative"
        style={{
          opacity: 1,
          transition: "opacity 800ms ease-in-out",
        }}
        priority={current === 0}
      />
      {/* ドットインジケーター */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
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
