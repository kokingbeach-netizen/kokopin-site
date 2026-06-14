"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "運転中に画面操作は必要ですか？",
    a: "必要ありません。Siriに話しかけるだけで保存できます。画面を見ずに使えるように設計しています。",
  },
  {
    q: "保存データは外部に送信されますか？",
    a: "現在のバージョンでは、保存したデータを外部サーバーへ送信していません。データはお使いの端末内に保存されます。",
  },
  {
    q: "Google Mapsでも開けますか？",
    a: "はい。Apple Maps・Google Mapsの両方に対応しています。",
  },
  {
    q: "料金は月額ですか？",
    a: "いいえ。買い切りアプリです。一度購入すれば追加料金はかかりません。サブスクリプションや広告もありません。",
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
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
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
