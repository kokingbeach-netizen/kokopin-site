"use client";

import Image from "next/image";
import { useRef } from "react";

const SCREENS = [
  { id: "screen-home",   label: "メイン画面",        desc: "タップして現在地をピン記録。手動でここピンもできます", image: "/images/screen-home.webp" },
  { id: "screen-list",   label: "保存一覧",           desc: "記録した場所を一覧で確認",                         image: "/images/screen-list.webp" },
  { id: "screen-detail", label: "詳細画面",           desc: "保存した場所の詳細を確認",                         image: "/images/screen-detail.webp" },
  { id: "screen-map",    label: "地図で確認",         desc: "Apple Maps・Google Maps対応",                      image: "/images/screen-map.webp" },
  { id: "screen-siri",   label: "Hey Siri ここピン！", desc: "SiriだけでPin",                                   image: "/images/screen-detail5.webp" },
];

function IPhoneMockup({ id, label, image }: { id: string; label: string; image?: string }) {
  return (
    <div className="w-52 mx-auto">
      <div
        className="relative rounded-[52px] border-[10px] border-[#1C1C1E] bg-[#1C1C1E]"
        style={{ aspectRatio: "9/19.5", boxShadow: "0 24px 48px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.15)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[24px] bg-[#1C1C1E] z-10" style={{ borderRadius: "0 0 12px 12px" }} />
        <div className="absolute inset-0 rounded-[44px] overflow-hidden">
          {image ? (
            <Image src={image} alt={label} fill className="object-cover object-top" sizes="208px" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3 text-center"
              style={{ background: "linear-gradient(160deg, #FFF1F3 0%, #FFE0E8 55%, #FFF4EC 100%)" }}>
              <span className="text-3xl">📍</span>
              <p className="text-xs font-bold" style={{ color: "var(--coral)" }}>{label}</p>
              <p className="text-[9px] font-mono opacity-30" style={{ color: "var(--text-gray)" }}>{id}</p>
            </div>
          )}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full z-10" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
      </div>
    </div>
  );
}

export default function IPhoneCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: index * width, behavior: "smooth" });
  };

  return (
    <div className="mt-10 w-full" style={{ borderTop: "1px solid var(--border)" }}>
      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {SCREENS.map((screen, i, arr) => (
          <div
            key={screen.id}
            className="flex-shrink-0 w-full snap-start relative flex flex-col items-center py-10 gap-5 px-5"
          >
            {/* 左矢印 */}
            {i > 0 && (
              <button
                onClick={() => goTo(i - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 opacity-35 hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="前へ"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <polyline points="8,2 2,9 8,16" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            {/* 右矢印 */}
            {i < arr.length - 1 && (
              <button
                onClick={() => goTo(i + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 opacity-35 hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="次へ"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <polyline points="2,2 8,9 2,16" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            <IPhoneMockup id={screen.id} label={screen.label} image={screen.image} />

            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style={{ backgroundColor: "var(--coral)" }}>
                  {i + 1} / 5
                </span>
                <p className="text-base font-black" style={{ color: "var(--navy)" }}>{screen.label}</p>
              </div>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>{screen.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
