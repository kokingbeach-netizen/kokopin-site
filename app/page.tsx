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

// ── iPhoneモックアップ ─────────────────────────────────────────────────────────
function IPhoneMockup({
  id,
  label,
  size = "md",
  image,
}: {
  id: string;
  label: string;
  size?: "sm" | "md" | "lg";
  image?: string;
}) {
  const cfg = {
    sm: { outer: "w-28",  border: "border-[7px]",  radius: "rounded-[38px]", innerR: "rounded-[32px]", notchW: "w-12", notchH: "h-[18px]", indW: "w-14" },
    md: { outer: "w-40",  border: "border-[8px]",  radius: "rounded-[44px]", innerR: "rounded-[38px]", notchW: "w-16", notchH: "h-[20px]", indW: "w-20" },
    lg: { outer: "w-52",  border: "border-[10px]", radius: "rounded-[52px]", innerR: "rounded-[44px]", notchW: "w-20", notchH: "h-[24px]", indW: "w-24" },
  }[size];

  return (
    <div className={`${cfg.outer} mx-auto`}>
      <div
        className={`relative ${cfg.radius} ${cfg.border} border-[#1C1C1E] bg-[#1C1C1E]`}
        style={{
          aspectRatio: "9/19.5",
          boxShadow: "0 24px 48px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.15)",
        }}
      >
        {/* ノッチ */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 ${cfg.notchW} ${cfg.notchH} bg-[#1C1C1E] z-10`}
          style={{ borderRadius: "0 0 12px 12px" }}
        />
        {/* スクリーン */}
        <div className={`absolute inset-0 ${cfg.innerR} overflow-hidden`}>
          {image ? (
            <Image
              src={image}
              alt={label}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 208px, 208px"
            />
          ) : (
            <div
              className="w-full h-full relative flex flex-col items-center justify-center gap-2 p-3 text-center"
              style={{
                background: "linear-gradient(160deg, #FFF1F3 0%, #FFE0E8 55%, #FFF4EC 100%)",
              }}
            >
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,90,111,0.35) 0%, transparent 70%)" }}
              />
              <span className="text-3xl relative z-10">📍</span>
              <p className="text-xs font-bold relative z-10 leading-tight" style={{ color: "var(--coral)" }}>
                {label}
              </p>
              <p className="text-[9px] font-mono opacity-30 relative z-10" style={{ color: "var(--text-gray)" }}>
                {id}
              </p>
            </div>
          )}
        </div>
        {/* ホームインジケーター */}
        <div
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 ${cfg.indW} h-1 rounded-full z-10`}
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        />
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
        <div className="w-20 h-20 rounded-[20px] overflow-hidden shadow-lg">
          <Image
            src="/images/app-icon.png"
            alt="KokoPin"
            width={80}
            height={80}
            className="object-cover w-full h-full"
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
                src="/images/app-icon.png"
                alt="KokoPin"
                width={32}
                height={32}
                className="object-cover w-full h-full"
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
          className="bg-white pb-14 flex flex-col items-center text-center"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* ── ヒーロー画像（最上部・全幅） ── */}
          <div className="w-full overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
            <Image
              src="/images/hero-drive.png"
              alt="運転中にHey Siriここピンと話すシーン"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="w-full max-w-2xl mx-auto px-5 sm:px-10 pt-10 space-y-7">

            {/* モバイルのみロゴ表示 */}
            <div className="lg:hidden w-16 h-16 rounded-[18px] overflow-hidden shadow-md mx-auto">
              <Image src="/images/app-icon.png" alt="KokoPin" width={64} height={64} className="object-cover w-full h-full" priority />
            </div>

            {/* アプリ名 + バッジ */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-none"
                style={{ color: "var(--navy)" }}>
                KokoPin
              </h1>
              <p className="text-sm font-medium" style={{ color: "var(--text-gray)" }}>ここピン</p>
              <span
                className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mt-1"
                style={{ backgroundColor: "var(--coral)" }}
              >
                iOS版 近日公開予定
              </span>
            </div>

            {/* iPhoneモックアップ + コピー（PC：横並び / モバイル：縦） */}
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
              {/* iPhoneモックアップ */}
              <div className="flex-shrink-0">
                <IPhoneMockup id="hero-app-screen" label="KokoPinアプリ画面" size="lg" image="/images/screen-home.png" />
              </div>
              {/* コピー */}
              <div className="space-y-4 text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold leading-snug" style={{ color: "var(--navy)" }}>
                  運転中、気になった場所があったら
                </p>
                <p className="text-2xl sm:text-3xl font-black tracking-tight leading-tight"
                  style={{ color: "var(--coral)" }}>
                  「Hey Siri ここピン」
                </p>
                <p className="text-lg sm:text-xl font-black" style={{ color: "var(--navy)" }}>
                  声でMAPにピンしよう
                </p>
                <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                  気になった場所を、あとで行ける場所に。
                </p>
              </div>
            </div>

            {/* アプリバッジ */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { icon: "📱", label: "iPhoneアプリ" },
                { icon: "🎙️", label: "Siri対応" },
                { icon: "🍎", label: "Apple Maps対応" },
                { icon: "🗺️", label: "Google Maps対応" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--pale-bg)",
                    border: "1px solid var(--border)",
                    color: "var(--navy)",
                  }}
                >
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>

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
            SECTION 2 : アプリ画面（ヒーロー直後）
        ───────────────────────────────────────────── */}
        <section
          id="app-screens"
          className="px-5 sm:px-10 py-14"
          style={{ backgroundColor: "var(--pale-bg)" }}
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
                アプリ画面
              </h2>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                スクリーンショット順次公開予定
              </p>
            </div>
            <div className="flex justify-center gap-4 sm:gap-8">
              <IPhoneMockup id="screen-list-visual"   label="一覧画面"  size="md" />
              <IPhoneMockup id="screen-detail-visual" label="詳細画面"  size="md" />
              <IPhoneMockup id="screen-map-visual"    label="地図画面"  size="md" />
            </div>
            <p className="text-center text-xs" style={{ color: "var(--text-gray)" }}>
              一覧画面・詳細画面・地図画面
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 3 : こんな時に使える
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
            SECTION 6 : アプリ画面紹介（4画面）
        ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
                アプリ画面紹介
              </h2>
              <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                スクリーンショットは順次公開予定
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {[
                { id: "feature-list-visual",   label: "保存一覧画面", desc: "気になった場所を一覧で管理" },
                { id: "feature-detail-visual", label: "詳細画面",     desc: "あとから場所を確認" },
                { id: "feature-map-visual",    label: "地図表示",     desc: "Apple Maps・Google Maps対応" },
                { id: "feature-siri-visual",   label: "Siri保存",     desc: "音声だけで記録" },
              ].map((screen) => (
                <div key={screen.id} className="flex flex-col items-center gap-3">
                  <IPhoneMockup id={screen.id} label={screen.label} size="sm" />
                  <div className="text-center space-y-0.5">
                    <p className="text-xs font-black" style={{ color: "var(--navy)" }}>
                      {screen.label}
                    </p>
                    <p className="text-xs leading-snug" style={{ color: "var(--text-gray)" }}>
                      {screen.desc}
                    </p>
                  </div>
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
