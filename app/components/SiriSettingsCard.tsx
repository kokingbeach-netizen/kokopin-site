"use client";

import { useState } from "react";

const SETTINGS = [
  { label: "「Hey Siri」をオン" },
  { label: "ロック中でもSiriを許可" },
  {
    label: "位置情報を許可",
    sub: ["「使用中のみ許可」", "「正確な位置情報」をオン"],
  },
  { label: "マイクを許可" },
  { label: "音声認識を許可" },
  { label: "Wi-Fiまたはモバイル通信に接続" },
  { label: "周囲が騒がしい場所では、Siriが認識しづらい場合があります。" },
  { label: "周囲の音が十分に聞こえる状態で利用する（イヤホン等は各都道府県の法令に従う）" },
];

export default function SiriSettingsCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-[18px] overflow-hidden"
      style={{ backgroundColor: "#FFF4F0", border: "1px solid #FFCFC0" }}
    >
      {/* 常に表示される部分 */}
      <div className="px-5 pt-4 pb-3 flex gap-3 items-start">
        <span className="text-lg mt-0.5">🎤</span>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-bold" style={{ color: "var(--coral)" }}>
            Siriの推奨設定
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
            KokoPinはAppleのSiriを利用して動作します。<br />
            Siriが反応しない場合は、以下の推奨設定をご確認ください。
          </p>
          <button
            onClick={() => setOpen(!open)}
            className="mt-1 text-xs font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: "var(--coral)" }}
            aria-expanded={open}
          >
            {open ? "▲ 閉じる" : "▼ Siriの推奨設定を見る"}
          </button>
        </div>
      </div>

      {/* 開いた時に表示 */}
      {open && (
        <div
          className="px-5 py-4 space-y-3"
          style={{ borderTop: "1px solid #FFCFC0", backgroundColor: "#fff9f8" }}
        >
          <ul className="space-y-2">
            {SETTINGS.map((item, i) => (
              <li key={i}>
                <div className="flex items-start gap-2">
                  <span className="text-xs mt-0.5" style={{ color: "var(--coral)" }}>✓</span>
                  <span className="text-xs leading-relaxed" style={{ color: "var(--navy)" }}>
                    {item.label}
                  </span>
                </div>
                {item.sub && (
                  <ul className="mt-1 ml-5 space-y-1">
                    {item.sub.map((s, j) => (
                      <li key={j} className="flex items-start gap-1">
                        <span className="text-xs" style={{ color: "var(--text-gray)" }}>・</span>
                        <span className="text-xs" style={{ color: "var(--text-gray)" }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* 安全注意文 */}
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
            ※安全のため、周囲の音が十分に聞こえる状態でご利用ください。イヤホン等をご利用の場合は、各都道府県の法令を守ってご利用ください。
          </p>
        </div>
      )}
    </div>
  );
}
