"use client";

import { useState } from "react";

export default function SetupAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-[28px] overflow-hidden"
      style={{ backgroundColor: "#FFF1F3", border: "2px solid var(--coral)", boxShadow: "0 4px 20px rgba(255,90,111,0.12)" }}
    >
      <button
        className="w-full flex items-center gap-3 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-2xl">✅</span>
        <div className="flex-1">
          <p className="text-base font-black" style={{ color: "var(--coral)" }}>最初に設定を確認</p>
          <p className="text-sm" style={{ color: "var(--text-gray)" }}>快適に使うための設定を確認しましょう</p>
        </div>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
          style={{ backgroundColor: open ? "var(--navy)" : "var(--coral)" }}
        >
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <>
          <div className="flex items-start gap-4 p-5 bg-white" style={{ borderTop: "1px solid #FFCCD3", borderBottom: "1px solid #FFCCD3" }}>
            <span className="text-xl mt-0.5">📍</span>
            <div className="space-y-1">
              <p className="text-base font-black" style={{ color: "var(--navy)" }}>位置情報</p>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>推奨：このAppの使用中のみ許可</p>
              <p className="text-[10px]" style={{ color: "var(--text-gray)" }}>※ 常時許可は不要</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-white">
            <span className="text-xl mt-0.5">🎙️</span>
            <div className="space-y-1">
              <p className="text-base font-black" style={{ color: "var(--navy)" }}>Siri</p>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>設定アプリ → Siri → 有効にする</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
