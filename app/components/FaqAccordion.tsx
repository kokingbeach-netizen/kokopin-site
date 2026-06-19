"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "運転中に画面操作は必要ですか？",
    a: "基本的にはSiriによる音声操作で保存できます。\nただし、安全のため画面操作が必要な場面では、必ず停車してから操作してください。",
  },
  {
    q: "ランニングやサイクリングでも使えますか？",
    a: "はい。KokoPinは車だけでなく、ウォーキング、ランニング、サイクリングなど、移動中に気になった場所を保存する用途でも使えます。\n周囲の状況に注意し、安全を確認したうえでご利用ください。",
  },
  {
    q: "「ここピン」が別の言葉に認識されます",
    a: "Siriの音声認識により、周囲の音や発音によって別の言葉として認識される場合があります。\n少しゆっくり、区切って話すと認識しやすくなります。\n\n例：\n「Hey Siri」\n少し待ってから\n「ここピン」",
  },
  {
    q: "保存データは外部に送信されますか？",
    a: "いいえ。保存した場所やメモは、お使いのiPhone内に保存されます。\n外部サーバーへ送信されることはありません。",
  },
  {
    q: "Google Mapsでも開けますか？",
    a: "はい。保存した場所はApple MapsまたはGoogle Mapsで開くことができます。",
  },
  {
    q: "料金は月額ですか？",
    a: "いいえ。KokoPinは買い切り型のアプリです。\n月額料金はかかりません。",
  },
  {
    q: "うまく保存できない場合は？",
    a: "位置情報の許可、Siriの設定、マイクの状態をご確認ください。\nまた、電波状況やGPSの取得状況によって、現在地の取得に時間がかかる場合があります。",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="rounded-[20px] overflow-hidden"
          style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)" }}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-bold pr-4" style={{ color: "var(--navy)" }}>
              Q. {faq.q}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
              style={{ backgroundColor: open === i ? "var(--navy)" : "var(--coral)" }}
            >
              {open === i ? "▲" : "▼"}
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "12px" }}>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--text-gray)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
