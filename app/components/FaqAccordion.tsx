"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

const FAQS = [
  {
    q: "Siriを使わなくても利用できますか？",
    a: "はい。アプリを開き、ホーム画面中央の「ここピン」ボタンをタップするだけでも現在地を保存できます。\nSiriを使わない場合でも、通常の位置保存アプリとしてご利用いただけます。",
  },
  {
    q: "運転中に画面操作は必要ですか？",
    a: "基本的にはSiriによる音声操作で保存できます。\nただし、安全のため画面操作が必要な場面では、必ず停車してから操作してください。",
  },
  {
    q: "ランニングやサイクリングでも使えますか？",
    a: "はい。ここピンは車だけでなく、ウォーキング、ランニング、サイクリングなど、移動中に気になった場所を保存する用途でも使えます。\n周囲の状況に注意し、安全を確認したうえでご利用ください。",
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
    q: "保存件数に上限はありますか？",
    a: "ここピンでは、アプリ側で保存件数の上限は設けていません。\n\n保存データはお使いのiPhone本体に保存されるため、実質的な上限は端末の空き容量によります。\n\n保存するデータは位置情報やメモなどの軽量な情報のみで、画像や音声ファイルは保存しません。通常の利用で容量を気にする必要はほとんどありません。",
  },
  {
    q: "保存件数が増えると容量は大きくなりますか？",
    a: "保存件数が増えても、アプリ本体のサイズが大きく増えることはありません。\n\n保存データはアプリ本体とは別に、iPhone内のデータ領域へ保存されます。1件あたりに保存されるのは位置情報・日時・メモなどの軽量なデータのみです。\n\n目安として、1,000件保存してもごく小さな容量に収まるため、通常の利用で容量を気にする必要はほとんどありません。",
  },
  {
    q: "Google Mapsでも開けますか？",
    a: "はい。保存した場所はApple MapsまたはGoogle Mapsで開くことができます。",
  },
  {
    q: "料金は月額ですか？",
    a: "いいえ。ここピンは買い切り型のアプリです。\n月額料金はかかりません。",
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
            onClick={() => {
              const next = open === i ? null : i;
              if (next !== null) trackEvent("faq_open", { question: faq.q });
              setOpen(next);
            }}
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
