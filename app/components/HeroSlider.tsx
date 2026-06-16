"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  "/images/hero-drive.jpg",
  "/images/hero-drive2.jpg",
  "/images/hero-drive3.jpg",
  "/images/hero-drive4.jpg",
];

const DURATIONS = [4000, 2000, 2000, 2000];
const WIPE_MS = 900;

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [fromRight, setFromRight] = useState(true);
  const [entering, setEntering] = useState(false);
  const [zoomKeys, setZoomKeys] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;

    const startTransition = (c: number) => {
      const next = (c + 1) % IMAGES.length;
      const dir  = Math.random() < 0.5;

      setFromRight(dir);
      setIncoming(next);
      setZoomKeys((prev) => {
        const k = [...prev];
        k[next] = k[next] + 1;
        return k;
      });

      // 2フレーム後にwipeアニメ開始（初期位置を一度描画させてから）
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setEntering(true))
      );

      t2 = setTimeout(() => {
        setCurrent(next);
        setIncoming(null);
        setEntering(false);
        t1 = setTimeout(() => startTransition(next), DURATIONS[next]);
      }, WIPE_MS);
    };

    t1 = setTimeout(() => startTransition(0), DURATIONS[0]);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const dotIndex = incoming !== null ? incoming : current;

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ aspectRatio: "16/9", borderBottom: "1px solid var(--border)" }}
    >
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.1); }
        }
      `}</style>

      {/* 現在の画像（下に敷いておく） */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES[current]}
          alt="声でMAPにピンしよう - ここピン!"
          fill
          className="object-cover"
          priority={current === 0}
        />
      </div>

      {/* 入ってくる画像（サイドからワイプ＋ズーム） */}
      {incoming !== null && (
        <div
          className="absolute inset-0"
          style={{
            transform: entering
              ? "translateX(0)"
              : `translateX(${fromRight ? "100%" : "-100%"})`,
            transition: entering
              ? `transform ${WIPE_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`
              : "none",
          }}
        >
          <div
            key={zoomKeys[incoming]}
            className="w-full h-full"
            style={{ animation: `heroZoom 3500ms linear forwards` }}
          >
            <Image
              src={IMAGES[incoming]}
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
          </div>
        </div>
      )}

      {/* ドットインジケーター */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {IMAGES.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === dotIndex ? "20px" : "6px",
              height: "6px",
              backgroundColor:
                i === dotIndex ? "white" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
