const VERSIONS = [
  {
    version: "Version 1.1",
    features: [
      { icon: "⌚", title: "Apple Watch対応",       desc: "手元からより自然に音声保存できるよう対応予定です。" },
      { icon: "🗑", title: "一覧画面のスワイプ削除", desc: "iPhone標準の操作で簡単に削除できるよう改善予定です。" },
      { icon: "📍", title: "GPS精度の改善",          desc: "より正確な位置情報を保存できるよう改善予定です。" },
      { icon: "🔍", title: "候補検索の改善",         desc: "目的の場所をさらに見つけやすく改善予定です。" },
      { icon: "🎨", title: "操作性・UI改善",         desc: "より快適に使えるよう細かな改善を行います。" },
    ],
  },
  {
    version: "Version 1.2",
    features: [
      { icon: "🎤", title: "Siri利用性の向上",       desc: "より快適に音声保存できるよう改善を検討しています。" },
      { icon: "🏃", title: "ランニング向け改善",      desc: "ランニング中でも使いやすい操作性を目指します。" },
      { icon: "🚴", title: "サイクリング向け改善",    desc: "サイクリング中でも快適に利用できるよう改善予定です。" },
    ],
  },
];

const FUTURE_ITEMS = [
  { icon: "⭐", label: "お気に入り機能" },
  { icon: "🔍", label: "保存履歴検索" },
  { icon: "📤", label: "保存場所の共有機能" },
  { icon: "☁️", label: "クラウド同期" },
  { icon: "🤖", label: "AIによるタイトル補完" },
  { icon: "⌚", label: "Apple Watch単体対応" },
];

export default function UpdateRoadmap() {
  return (
    <div className="space-y-8">
      {/* intro */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
        KokoPinは、ユーザーの皆さまのご意見をもとに、継続的に改善を行っています。<br />
        現在、以下の機能を検討しています。
      </p>

      {/* version blocks */}
      {VERSIONS.map((v) => (
        <div key={v.version} className="space-y-3">
          {/* version badge */}
          <span
            className="inline-block text-xs font-black px-3 py-1 rounded-full"
            style={{ backgroundColor: "var(--pale-bg)", border: "1px solid var(--border)", color: "var(--coral)" }}
          >
            {v.version}
          </span>

          {/* feature list */}
          <div className="flex flex-col gap-2">
            {v.features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-2xl px-4 py-3"
                style={{ backgroundColor: "var(--pale-bg)", border: "1px solid var(--border)" }}
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>{f.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* future consideration */}
      <div className="space-y-3">
        <span
          className="inline-block text-xs font-black px-3 py-1 rounded-full"
          style={{ backgroundColor: "var(--pale-bg)", border: "1px solid var(--border)", color: "var(--text-gray)" }}
        >
          今後検討中
        </span>
        <div className="flex flex-wrap gap-2">
          {FUTURE_ITEMS.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full"
              style={{ backgroundColor: "var(--pale-bg)", border: "1px solid var(--border)", color: "var(--navy)" }}
            >
              {item.icon} {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* disclaimer */}
      <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-gray)" }}>
        ※アップデート内容は、ユーザーの皆さまからのご要望や開発状況に応じて変更となる場合があります。
      </p>
    </div>
  );
}
