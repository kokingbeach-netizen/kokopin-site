"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  "/images/hero-drive.jpg",
  "/images/hero-drive2.jpg",
  "/images/hero-drive3.jpg",
  "/images/hero-drive4.jpg",
];

// スライドごとの表示時間（ms）
const DURATIONS = [4000, 2000, 2000, 2000];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  // ズームアニメーションを再起動するためのキー（スライドが表示されるたびにインクリメント）
  const [animKeys, setAnimKeys] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const advance = (c: number) => {
      timer = setTimeout(() => {
        const next = (c + 1) % IMAGES.length;
        setAnimKeys((prev) => {
          const keys = [...prev];
          keys[next] = prev[next] + 1;
          return keys;
        });
        setCurrent(next);
        advance(next);
      }, DURATIONS[c]);
    };
    advance(0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ aspectRatio: "16/9", borderBottom: "1px solid var(--border)" }}
    >
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.25); }
        }
      `}</style>

      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 600ms ease-in-out",
          }}
        >
          {/* 画像2〜4はゆっくりズームイン */}
          <div
            key={i > 0 ? animKeys[i] : "static"}
            className="w-full h-full"
            style={
              i > 0
                ? { animation: `heroZoom 2500ms linear forwards` }
                : {}
            }
          >
            <Image
              src={src}
              alt={i === 0 ? "声でMAPにピンしよう - ここピン!" : ""}
              fill
              className="object-cover"
              priority={i === 0}
              aria-hidden={i !== current}
            />
          </div>
        </div>
      ))}

      {/* ドットインジケーター */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimKeys((prev) => {
                const keys = [...prev];
                keys[i] = prev[i] + 1;
                return keys;
              });
              setCurrent(i);
            }}
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
