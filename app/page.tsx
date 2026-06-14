import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import FaqAccordion from "./components/FaqAccordion";

// ── 画像プレースホルダー ────────────────────────────────────────────────────────
function ImagePlaceholder({
  id,
  label,
  aspect = "16/9",
}: {
  id: string;
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className="w-full relative overflow-hidden rounded-[32px]"
      style={{
        aspectRatio: aspect,
        background:
          "linear-gradient(135deg, #FFF1F3 0%, #FFE2E8 55%, #FFF4EC 100%)",
        border: "2px dashed #FFCCD3",
      }}
    >
      {/* グロー装飾 */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,111,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,90,0.2) 0%, transparent 70%)",
        }}
      />
      {/* アイコン装飾 */}
      <div className="absolute top-4 right-5 text-5xl opacity-10 rotate-12 select-none pointer-events-none">
        📍
      </div>
      <div className="absolute bottom-4 left-5 text-4xl opacity-10 -rotate-6 select-none pointer-events-none">
        🎙️
      </div>
      {/* ラベル */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <span className="text-4xl">📍</span>
        <p className="text-sm font-bold" style={{ color: "var(--coral)" }}>
          {label}
        </p>
        <p className="text-xs font-mono opacity-40" style={{ color: "var(--text-gray)" }}>
          {id}
        </p>
      </div>
    </div>
  );
}

// ── 左サイドバー（PCのみ表示） ─────────────────────────────────────────────────
function LeftSidebar() {
  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 w-[280px] h-screen flex-col items-center justify-center overflow-hidden z-40"
      style={{
        background:
          "linear-gradient(160deg, #FF5A6F 0%, #FF7A5E 60%, #FFAD7A 100%)",
      }}
    >
      {/* グロー円 */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.38) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-30px] right-[-60px] w-60 h-60 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-[42%] left-[5px] w-32 h-32 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%)",
        }}
      />
      {/* ドットパターン */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.85) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.12,
        }}
      />
      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 gap-7">
        <div className="w-20 h-20 rounded-[20px] overflow-hidden shadow-lg border border-white/30"
          style={{ backgroundColor: "rgba(255,255,255,0.25)" }}>
          <Image
            src="/images/logo.png"
            alt="KokoPin"
            width={80}
            height={80}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <div>
          <p className="text-3xl font-black tracking-tighter text-white drop-shadow">
            KokoPin
          </p>
          <p className="text-sm font-bold text-white/70 mt-0.5">ここピン</p>
        </div>
        <p className="text-sm font-bold text-white/90 leading-relaxed">
          声でMAPに
          <br />
          ピンしよう
        </p>
        <div className="flex gap-4 text-2xl drop-shadow">
          <span title="Siri">🎙️</span>
          <span title="Pin">📍</span>
          <span title="Map">🗺️</span>
        </div>
        <div
          className="rounded-full px-4 py-2 border border-white/40"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <p className="text-xs font-bold text-white">iOS版 近日公開予定</p>
        </div>
      </div>
    </aside>
  );
}

// ── 右サイドバー（PCのみ表示） ─────────────────────────────────────────────────
function RightSidebar() {
  const navLinks = [
    { href: "#hero",       label: "TOP" },
    { href: "#scenes",     label: "使えるシーン" },
    { href: "#how-to",     label: "使い方" },
    { href: "#app-screens",label: "アプリ画面" },
    { href: "#privacy",    label: "プライバシー" },
    { href: "#price",      label: "料金" },
    { href: "#faq",        label: "FAQ" },
  ];

  return (
    <aside
      className="hidden lg:flex fixed right-0 top-0 w-[240px] h-screen flex-col justify-between py-8 px-5 overflow-y-auto z-40"
      style={{
        backgroundColor: "var(--white)",
        borderLeft: "1px solid var(--border)",
      }}
    >
      <nav className="flex flex-col gap-0.5">
        <p
          className="text-xs font-black tracking-widest uppercase mb-4"
          style={{ color: "var(--text-gray)" }}
        >
          MENU
        </p>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-bold py-2.5 px-3 rounded-xl transition-all hover:opacity-60"
            style={{ color: "var(--navy)" }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="space-y-4">
        <div
          className="flex flex-col items-center gap-1 py-4 px-3 rounded-2xl cursor-not-allowed select-none text-center"
          style={{ backgroundColor: "#F0F2F5", border: "2px dashed var(--border)" }}
          aria-disabled="true"
        >
          <span className="text-xs font-bold" style={{ color: "#B0BAC9" }}>
            App Storeでダウンロード
          </span>
          <span className="text-xs" style={{ color: "#B0BAC9" }}>近日公開予定</span>
        </div>
        <div className="flex justify-center gap-4 text-xs" style={{ color: "var(--text-gray)" }}>
          <Link href="/terms" className="hover:opacity-60 transition-opacity">利用規約</Link>
          <Link href="/privacy" className="hover:opacity-60 transition-opacity">プライバシー</Link>
        </div>
      </div>
    </aside>
  );
}

// ── メインページ ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--pale-bg)" }}>
      <LeftSidebar />
      <RightSidebar />

      {/* ── モバイルヘッダー ── */}
      <header
        className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-sm"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="KokoPin"
                width={32}
                height={32}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-base font-black tracking-tight" style={{ color: "var(--coral)" }}>
              KokoPin
            </span>
          </div>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "var(--coral)" }}
          >
            近日公開予定
          </span>
        </div>
      </header>

      {/* ── センターLP（PC：左右に280px/240pxのマージン） ── */}
      <div className="lg:ml-[280px] lg:mr-[240px]">

        {/* ─────────────────────────────────────────────
            SECTION 1 : HERO
        ───────────────────────────────────────────── */}
        <section
          id="hero"
          className="bg-white px-5 sm:px-10 pt-14 pb-14 flex flex-col items-center text-center"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="w-full max-w-2xl mx-auto space-y-6">

            {/* モバイルのみロゴ表示（PCは左サイドバー） */}
            <div className="lg:hidden w-20 h-20 rounded-[22px] overflow-hidden shadow-md mx-auto"
              style={{ backgroundColor: "var(--coral)" }}>
              <Image src="/images/logo.png" alt="KokoPin" width={80} height={80} className="object-contain w-full h-full" priority />
            </div>

            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-none"
                style={{ color: "var(--navy)" }}>
                KokoPin
              </h1>
              <p className="text-sm font-medium" style={{ color: "var(--text-gray)" }}>ここピン</p>
            </div>

            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white"
              style={{ backgroundColor: "var(--coral)" }}
            >
              iOS版 近日公開予定
            </span>

            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-bold leading-snug" style={{ color: "var(--navy)" }}>
                運転中、気になった場所があったら
              </p>
              <p className="text-3xl sm:text-4xl font-black tracking-tight leading-tight"
                style={{ color: "var(--coral)" }}>
                「Hey Siri ここピン」
              </p>
              <p className="text-xl sm:text-2xl font-black" style={{ color: "var(--navy)" }}>
                声でMAPにピンしよう
              </p>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                Google Maps・Apple Maps対応
              </p>
            </div>

            {/* ヒーロー画像 */}
            <div className="w-full rounded-[24px] overflow-hidden"
              style={{ border: "1px solid var(--border)" }}>
              <Image
                src="/images/hero-drive.png"
                alt="運転中にHey Siriここピンと話すシーン"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
              気になった場所を、あとで行ける場所に。
            </p>

            {/* App Storeボタン（モバイルのみ・PCは右サイドバー） */}
            <div
              className="lg:hidden flex flex-col items-center gap-1 py-5 rounded-2xl cursor-not-allowed select-none"
              style={{ backgroundColor: "#F0F2F5", border: "2px dashed var(--border)" }}
              aria-disabled="true"
            >
              <span className="text-sm font-bold" style={{ color: "#B0BAC9" }}>App Storeでダウンロード</span>
              <span className="text-xs" style={{ color: "#B0BAC9" }}>近日公開予定</span>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 2 : こんな時に使える
        ───────────────────────────────────────────── */}
        <section
          id="scenes"
          className="px-5 sm:px-10 py-14"
          style={{ backgroundColor: "var(--pale-bg)" }}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              こんな時に使える
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide">
              {[
                { icon: "🚗",  label: "車の\n運転中" },
                { icon: "🏍️", label: "バイクで\n移動中" },
                { icon: "🚲",  label: "自転車で\n移動中" },
                { icon: "🏃",  label: "ランニング\n中" },
                { icon: "🚶",  label: "ウォーキング\n中" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex-shrink-0 snap-start flex flex-col items-center justify-center gap-3 rounded-[24px] p-5 text-center"
                  style={{
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--border)",
                    width: "112px",
                    minWidth: "112px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-bold leading-tight whitespace-pre-line"
                    style={{ color: "var(--navy)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 3 : ビジュアル＋大コピー（ネイビー背景）
        ───────────────────────────────────────────── */}
        <section
          className="px-5 sm:px-10 py-16"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <div className="max-w-2xl mx-auto space-y-10">
            <ImagePlaceholder
              id="moving-scene-visual"
              label="ここに移動中の景色画像"
              aspect="16/9"
            />
            <div className="space-y-5 text-center">
              <p className="text-lg sm:text-xl font-bold leading-relaxed text-white/80">
                スマホが使えない、手が離せない時、
                <br />
                流れる景色の中で、
                <br />
                気になる店や景色を見つけたことありますよね？
              </p>
              <p className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--coral)" }}>
                その位置を声で一瞬で保存できる
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 4 : 使い方（4ステップ）
        ───────────────────────────────────────────── */}
        <section
          id="how-to"
          className="px-5 sm:px-10 py-14 bg-white"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              使い方
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { step: 1, icon: "🎙️", title: "「Hey Siri ここピン」と言う",
                  desc: "Siriに一言話しかけるだけ。スマホに触れる必要はありません。",
                  visual: "step-1-visual", label: "STEP1の画像" },
                { step: 2, icon: "💬", title: "一言メモを話す",
                  desc: "「あのラーメン屋」「気になるカフェ」など自由に。",
                  visual: "step-2-visual", label: "STEP2の画像" },
                { step: 3, icon: "📍", title: "位置とメモが保存される",
                  desc: "話しかけた瞬間の位置情報が自動で記録されます。",
                  visual: "step-3-visual", label: "STEP3の画像" },
                { step: 4, icon: "🗺️", title: "あとで見返す",
                  desc: "Google Maps・Apple Maps対応。地図上で確認できます。",
                  visual: "step-4-visual", label: "STEP4の画像" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[28px] overflow-hidden"
                  style={{
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <ImagePlaceholder id={item.visual} label={item.label} aspect="16/7" />
                  <div className="p-5 flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                      style={{ backgroundColor: "var(--coral)" }}
                    >
                      {item.step}
                    </div>
                    <div className="space-y-1 pt-0.5">
                      <p className="text-base font-black" style={{ color: "var(--navy)" }}>
                        {item.icon} {item.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 5 : アプリ画面
        ───────────────────────────────────────────── */}
        <section
          id="app-screens"
          className="px-5 sm:px-10 py-14"
          style={{ backgroundColor: "var(--pale-bg)" }}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
                アプリ画面
              </h2>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                一覧・詳細・地図画面（スクリーンショット表示予定）
              </p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-3 sm:overflow-visible">
              {[
                { id: "screen-list-visual",   label: "一覧画面" },
                { id: "screen-detail-visual", label: "詳細画面" },
                { id: "screen-map-visual",    label: "地図画面" },
              ].map((s) => (
                <div key={s.id} className="flex-shrink-0 snap-start w-[180px] sm:w-auto">
                  <ImagePlaceholder id={s.id} label={s.label} aspect="9/16" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 6 : 特徴
        ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              KokoPinの特徴
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: "🎙️", label: "Siriで保存" },
                { icon: "📍", label: "場所を記録" },
                { icon: "🍎", label: "Apple Maps対応" },
                { icon: "🗺️", label: "Google Maps対応" },
                { icon: "🔍", label: "あとで見返せる" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] p-5 space-y-2"
                  style={{
                    backgroundColor: "var(--pale-bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 7 : プライバシー
        ───────────────────────────────────────────── */}
        <section
          id="privacy"
          className="px-5 sm:px-10 py-14"
          style={{ backgroundColor: "var(--pale-bg)" }}
        >
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-[28px] p-8 space-y-4"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔒</span>
                <h2 className="text-xl font-black" style={{ color: "var(--navy)" }}>プライバシー</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                保存したデータは、お使いの端末内に保存されます。
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                現在のバージョンでは、外部サーバーへの送信は行っていません。
              </p>
              <Link
                href="/privacy"
                className="inline-block text-xs font-bold underline"
                style={{ color: "var(--coral)" }}
              >
                プライバシーポリシーを読む →
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 8 : 料金
        ───────────────────────────────────────────── */}
        <section id="price" className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-[28px] p-8 space-y-5"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h2 className="text-xl font-black" style={{ color: "var(--navy)" }}>料金</h2>
              <div>
                <p className="text-4xl sm:text-5xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
                  買い切り
                </p>
                <p className="text-xl font-bold mt-2" style={{ color: "var(--coral)" }}>
                  予定価格：300円
                </p>
              </div>
              <div className="space-y-3">
                {["広告なし", "サブスクリプションなし"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                      style={{ backgroundColor: "var(--coral)" }}
                    >
                      ✓
                    </div>
                    <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "var(--text-gray)" }}>
                ※価格はApp Store公開時に変更となる場合があります。
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 9 : 安全上の注意
        ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-14" style={{ backgroundColor: "var(--pale-bg)" }}>
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-[28px] p-8 space-y-4"
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <h2 className="text-base font-black" style={{ color: "var(--navy)" }}>安全上の注意</h2>
              </div>
              {[
                "運転中のアプリ操作は行わないでください。音声機能をご利用の場合も、周囲の安全を十分に確認してください。",
                "本アプリはナビゲーションアプリではありません。移動時は実際の交通状況、道路標識、法令等を優先してください。",
                "本アプリの利用により生じた損害について、運営者は故意または重過失がある場合を除き責任を負いません。",
              ].map((text, i) => (
                <p key={i} className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 10 : FAQ
        ───────────────────────────────────────────── */}
        <section id="faq" className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              よくある質問
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            ページリンク
        ───────────────────────────────────────────── */}
        <section
          className="px-5 sm:px-10 py-10"
          style={{ backgroundColor: "var(--pale-bg)", borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {[
              { href: "/terms",   label: "利用規約" },
              { href: "/privacy", label: "プライバシーポリシー" },
              { href: "/support", label: "サポート・お問い合わせ" },
            ].map((link) => (
              <Link
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
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
