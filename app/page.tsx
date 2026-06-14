import Image from "next/image";
import Footer from "./components/Footer";

/* ── 共通スタイル ── */
const card =
  "bg-white rounded-[28px] border p-6 shadow-sm" as const;
const sectionTitle =
  "text-2xl font-black tracking-tight leading-tight" as const;

export default function Home() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "var(--pale-bg)" }}>

      {/* ───── 1. HERO ───── */}
      <section className="bg-white px-6 pt-14 pb-10 flex flex-col items-center text-center" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-5">

          {/* ロゴ */}
          <div className="w-24 h-24 rounded-[22px] overflow-hidden shadow-md">
            <Image src="/images/logo.png" alt="KokoPin" width={96} height={96} className="object-contain w-full h-full" priority />
          </div>

          {/* アプリ名 */}
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tighter" style={{ color: "var(--navy)" }}>
              KokoPin
            </h1>
            <p className="text-sm font-medium" style={{ color: "var(--text-gray)" }}>ここピン</p>
          </div>

          {/* バッジ */}
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white"
            style={{ backgroundColor: "var(--coral)" }}
          >
            iOS版 近日公開予定
          </span>

          {/* メインコピー */}
          <div className="space-y-2">
            <p className="text-xl font-bold leading-snug" style={{ color: "var(--navy)" }}>
              運転中、気になった場所があったら
            </p>
            <p
              className="text-2xl font-black tracking-tight leading-snug px-2 py-1 rounded-xl inline-block"
              style={{ color: "var(--coral)" }}
            >
              「Hey Siri ここピン」と言う
            </p>
          </div>

          {/* サブコピー */}
          <div className="space-y-1">
            <p className="text-base font-bold" style={{ color: "var(--navy)" }}>
              声でMAPにピンしよう！
            </p>
            <p className="text-sm" style={{ color: "var(--text-gray)" }}>
              Google Maps・Apple Maps対応
            </p>
          </div>

          {/* ヒーロー画像 */}
          <div className="w-full rounded-[24px] overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <Image src="/images/hero-drive.png" alt="運転中にHey Siriここピンと話すシーン" width={800} height={450} className="w-full h-auto object-cover" priority />
          </div>

          {/* サブコピー2 */}
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
            気になった場所を、あとで行ける場所に。
          </p>

          {/* App Storeボタン（disabled） */}
          <div
            className="w-full flex flex-col items-center gap-1 py-4 rounded-2xl cursor-not-allowed select-none"
            style={{
              backgroundColor: "#F0F2F5",
              border: "2px dashed var(--border)",
            }}
            aria-disabled="true"
          >
            <span className="text-sm font-semibold" style={{ color: "#B0BAC9" }}>
              App Storeでダウンロード
            </span>
            <span className="text-xs" style={{ color: "#B0BAC9" }}>近日公開予定</span>
          </div>

        </div>
      </section>

      {/* ───── 2. こんな時に使える ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--pale-bg)" }}>
        <div className="max-w-lg mx-auto space-y-6">
          <h2 className={sectionTitle} style={{ color: "var(--navy)" }}>
            こんな時に使える
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
            {[
              { icon: "🚗", label: "車の\n運転中" },
              { icon: "🏍️", label: "バイクで\n移動中" },
              { icon: "🚲", label: "自転車で\n移動中" },
              { icon: "🏃", label: "ランニング\n中" },
              { icon: "🚶", label: "ウォーキング\n中" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex-shrink-0 snap-start flex flex-col items-center justify-center gap-2 rounded-[20px] p-4 text-center"
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border)",
                  width: "100px",
                  minWidth: "100px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span
                  className="text-xs font-bold leading-tight whitespace-pre-line"
                  style={{ color: "var(--navy)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. 一言説明 ───── */}
      <section
        className="px-6 py-14 text-center"
        style={{ backgroundColor: "var(--coral-pale)" }}
      >
        <div className="max-w-lg mx-auto space-y-5">
          <p className="text-lg font-bold leading-relaxed" style={{ color: "var(--navy)" }}>
            スマホが使えない、手が離せない時、<br />
            流れる景色の中で、<br />
            気になる店や景色を見つけたことありますよね？
          </p>
          <p
            className="text-xl font-black tracking-tight"
            style={{ color: "var(--coral)" }}
          >
            その位置を声で一瞬で保存できる
          </p>
        </div>
      </section>

      {/* ───── 4. 使い方 ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--pale-bg)" }}>
        <div className="max-w-lg mx-auto space-y-5">
          <h2 className={sectionTitle} style={{ color: "var(--navy)" }}>
            使い方
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { step: 1, icon: "🎙️", text: '「Hey Siri ここピン」と言う' },
              { step: 2, icon: "💬", text: "一言メモを話す" },
              { step: 3, icon: "📍", text: "自動で位置とメモが保存される" },
              { step: 4, icon: "🗺️", text: "あとで見返す\nGoogle Maps・Apple Maps対応" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-center gap-4 rounded-[20px] p-5"
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black"
                  style={{ backgroundColor: "var(--coral)" }}
                >
                  {item.step}
                </div>
                <div className="flex-1 space-y-0.5">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm font-bold leading-snug whitespace-pre-line" style={{ color: "var(--navy)" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. プライバシー ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-[28px] p-6 space-y-3"
            style={{
              backgroundColor: "var(--pale-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <h2 className="text-lg font-black" style={{ color: "var(--navy)" }}>
                プライバシー
              </h2>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
              保存したデータは、お使いの端末内に保存されます。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
              現在のバージョンでは、外部サーバーへの送信は行っていません。
            </p>
          </div>
        </div>
      </section>

      {/* ───── 6. 特徴 ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--pale-bg)" }}>
        <div className="max-w-lg mx-auto space-y-5">
          <h2 className={sectionTitle} style={{ color: "var(--navy)" }}>
            KokoPinの特徴
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🎙️", label: "Siriで記録" },
              { icon: "📍", label: "気になった場所を保存" },
              { icon: "🗺️", label: "Apple Maps /\nGoogle Maps対応" },
              { icon: "🔍", label: "あとから場所を\n特定できる" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] p-5 space-y-2"
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm font-bold leading-snug whitespace-pre-line" style={{ color: "var(--navy)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. 料金 ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-lg mx-auto">
          <div className={card} style={{ border: "1px solid var(--border)" }}>
            <div className="space-y-4">
              <h2 className="text-lg font-black" style={{ color: "var(--navy)" }}>料金</h2>
              <div>
                <p className="text-2xl font-black" style={{ color: "var(--navy)" }}>買い切り</p>
                <p className="text-sm font-bold mt-1" style={{ color: "var(--coral)" }}>予定価格：300円</p>
              </div>
              <div className="space-y-2">
                {["広告なし", "サブスクリプションなし"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                      style={{ backgroundColor: "var(--coral)" }}
                    >
                      ✓
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--navy)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "var(--text-gray)" }}>
                ※価格はApp Store公開時に変更となる場合があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 8. 安全上の注意 ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--pale-bg)" }}>
        <div className="max-w-lg mx-auto">
          <div
            className="rounded-[28px] p-6 space-y-3"
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <h2 className="text-base font-black" style={{ color: "var(--navy)" }}>安全上の注意</h2>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
              運転中のアプリ操作は行わないでください。音声機能をご利用の場合も、周囲の安全を十分に確認してください。
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
              本アプリはナビゲーションアプリではありません。移動時は実際の交通状況、道路標識、法令等を優先してください。
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
              本アプリの利用により生じた損害について、運営者は故意または重過失がある場合を除き責任を負いません。
            </p>
          </div>
        </div>
      </section>

      {/* ───── 9. FAQ ───── */}
      <section className="px-6 py-12" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-lg mx-auto space-y-5">
          <h2 className={sectionTitle} style={{ color: "var(--navy)" }}>よくある質問</h2>
          <div className="flex flex-col gap-3">
            {[
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
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[20px] p-5 space-y-2"
                style={{
                  backgroundColor: "var(--pale-bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                  Q. {item.q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 10. ページリンク ───── */}
      <section className="px-6 py-10" style={{ backgroundColor: "var(--pale-bg)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-lg mx-auto flex flex-col gap-3">
          {[
            { href: "/terms", label: "利用規約" },
            { href: "/privacy", label: "プライバシーポリシー" },
            { href: "/support", label: "サポート・お問い合わせ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center justify-between w-full py-4 px-5 rounded-2xl text-sm font-bold transition-opacity hover:opacity-70"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                color: "var(--navy)",
              }}
            >
              {link.label}
              <span style={{ color: "var(--text-gray)" }}>›</span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
