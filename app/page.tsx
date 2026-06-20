import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import FaqAccordion from "./components/FaqAccordion";
import SetupAccordion from "./components/SetupAccordion";
import SiriSettingsCard from "./components/SiriSettingsCard";
import HeroSlider from "./components/HeroSlider";
import IPhoneCarousel from "./components/IPhoneCarousel";

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
      <div className="absolute top-4 right-5 text-5xl opacity-10 rotate-12 select-none pointer-events-none">
        📍
      </div>
      <div className="absolute bottom-4 left-5 text-4xl opacity-10 -rotate-6 select-none pointer-events-none">
        🎙️
      </div>
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
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.38) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-30px] right-[-60px] w-60 h-60 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-[42%] left-[5px] w-32 h-32 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.85) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.12,
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-8 gap-7">
        <div className="w-20 h-20 rounded-[20px] overflow-hidden shadow-lg">
          <Image src="/images/app-icon.webp" alt="KokoPin" width={80} height={80} className="object-cover w-full h-full" priority />
        </div>
        <Image
          src="/images/title-text.png"
          alt="ここピン!"
          width={2048}
          height={411}
          className="w-40 h-auto drop-shadow"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <p className="text-sm font-bold text-white/90 leading-relaxed">
          声でMAPに<br />ピンしよう
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
    { href: "#hero",        label: "TOP" },
    { href: "#scenes",      label: "使えるシーン" },
    { href: "#how-to",      label: "使い方" },
    { href: "#app-screens", label: "アプリ画面" },
    { href: "#privacy",     label: "プライバシー" },
    { href: "#price",       label: "料金" },
    { href: "#faq",         label: "FAQ" },
  ];

  return (
    <aside
      className="hidden lg:flex fixed right-0 top-0 w-[240px] h-screen flex-col justify-between py-8 px-5 overflow-y-auto z-40"
      style={{ backgroundColor: "var(--white)", borderLeft: "1px solid var(--border)" }}
    >
      <nav className="flex flex-col gap-0.5">
        <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: "var(--text-gray)" }}>
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
          <span className="text-xs font-bold" style={{ color: "#B0BAC9" }}>App Storeでダウンロード</span>
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
          <Image
            src="/images/Kokopinheader.png"
            alt="ここピン"
            width={1323}
            height={375}
            className="h-9 w-auto"
            priority
          />
          <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "var(--coral)" }}>
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
          className="bg-white pb-12"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* メインビジュアル（自動スライダー） */}
          <HeroSlider />

          {/* ── コンテンツ（PC：2カラム / モバイル：縦積み） ── */}
          <div className="px-5 sm:px-10 pt-10">
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">

              {/* ── 左列：テキスト・CTA ── */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-5 flex-1">

                {/* ロゴ＋バッジ（モバイルのみ） */}
                <div className="sm:hidden flex flex-col items-center gap-3 mx-auto">
                  <div className="w-32 h-32 rounded-[36px] overflow-hidden shadow-lg">
                    <Image src="/images/app-icon.webp" alt="KokoPin" width={128} height={128} className="object-cover w-full h-full" priority />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 justify-center">
                    <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white" style={{ backgroundColor: "var(--coral)" }}>iOS版 近日公開予定</span>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FFF4F0", border: "1px solid #FFCCC0", color: "var(--coral)" }}>300円 買い切り</span>
                  </div>
                </div>

                {/* アプリ説明 */}
                <div>
                  <h1 className="sr-only">ここピン! — 声でMAPにピンしよう</h1>
                  <p
                    className="text-3xl sm:text-4xl font-black"
                    style={{
                      background: "linear-gradient(135deg, var(--coral) 0%, var(--navy) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    声でMapにPinするアプリ
                  </p>
                </div>


                {/* メインコピー */}
                <div className="mt-6 sm:mt-8 rounded-[24px] px-5 py-6 space-y-4" style={{ backgroundColor: "var(--pale-bg)", border: "1px solid var(--border)" }}>
                  <p className="text-2xl sm:text-3xl font-black leading-snug" style={{ color: "var(--navy)" }}>
                    運転中、気になる場所を見つけたら
                  </p>
                  <Image
                    src="/images/mappin.webp"
                    alt="Hey Siri ここピン"
                    width={1175}
                    height={471}
                    className="w-full max-w-xs sm:max-w-sm h-auto"
                  />
                  <div className="space-y-2">
                    <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--text-dark)" }}>
                      後でアプリから保存した位置をMapで確認
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {[
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
                  </div>
                </div>


                {/* App Storeボタン */}
                <div
                  className="flex flex-col items-center sm:items-start gap-1 py-4 px-6 rounded-2xl cursor-not-allowed select-none w-full max-w-xs"
                  style={{ backgroundColor: "#F0F2F5", border: "2px dashed var(--border)" }}
                  aria-disabled="true"
                >
                  <span className="text-sm font-bold" style={{ color: "#B0BAC9" }}>App Storeでダウンロード</span>
                  <span className="text-xs" style={{ color: "#B0BAC9" }}>近日公開予定</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── iPhoneカルーセル ── */}
          <IPhoneCarousel />

        </section>

        {/* ─────────────────────────────────────────────
            SECTION 2 : こんな時に使える
        ───────────────────────────────────────────── */}
        <section
          id="scenes"
          className="px-5 sm:px-10 py-14"
          style={{ backgroundColor: "var(--pale-bg)" }}
        >
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              こんな時に使える<span className="font-normal">—</span><br />つまり手が離せない時
            </h2>
            <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-gray)" }}>
              ※安全のため、周囲の音が十分に聞こえる状態でご利用ください。<br />
              イヤホン等をご利用の場合は、各都道府県の法令を守ってご利用ください。
            </p>
            <Image
              src="/images/こんな時に.webp"
              alt="こんな時に使える"
              width={938}
              height={545}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 3 : ビジュアル＋大コピー（ネイビー背景）
        ───────────────────────────────────────────── */}
        <section
          className="pb-10 bg-white"
        >
          <Image
            src="/images/kokoPINイラスト.webp"
            alt="ここピン! イラスト"
            width={1774}
            height={887}
            className="w-full h-auto"
          />
          <div className="max-w-2xl mx-auto px-5 sm:px-10 space-y-5 mt-6">
            <div className="space-y-5 text-center">
              <p className="text-lg sm:text-xl font-bold leading-relaxed" style={{ color: "var(--text-gray)" }}>
                スマホが使えない時<br />
                流れる景色の中で<br />
                気になるお店や景色を<br />
                見つけたことありますよね？
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
        <section id="how-to" className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              使い方
            </h2>
            <div className="flex flex-col gap-5">
              {/* 最初に設定を確認（アコーディオン） */}
              <SetupAccordion />

              {[
                { step: 1, icon: "🎙️", title: "「Hey Siri ここピン」と言う",
                  desc: "気になる場所があったらSiriに言う。" },
                { step: 2, icon: "💬", title: "メモを一言",
                  desc: "「どんな場所？」と聞かれたら、メモを言う。" },
                { step: 3, icon: "📍", title: "位置とメモが自動保存",
                  desc: "話しかけた瞬間の位置情報が自動で記録されます。" },
                { step: 4, icon: "🗺️", title: "あとで見返す",
                  desc: "Google Maps・Apple Maps対応。地図上で確認できます。" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[28px]"
                  style={{
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
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
            SECTION 6 : プライバシー
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
            SECTION 7 : 料金
        ───────────────────────────────────────────── */}
        <section id="price" className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-[28px] p-8 space-y-5"
              style={{ border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
            >
              <h2 className="text-xl font-black" style={{ color: "var(--navy)" }}>料金</h2>
              <div>
                <p className="text-xl font-bold mt-2" style={{ color: "var(--coral)" }}>
                  予定価格：300円
                </p>
              </div>
              <div className="space-y-3">
                {["買い切り", "広告なし", "サブスクリプションなし"].map((item) => (
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
              <p className="text-[10px]" style={{ color: "var(--text-gray)" }}>
                ※価格はApp Store公開時に変更となる場合があります。
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 8 : 安全上の注意
        ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-14" style={{ backgroundColor: "var(--pale-bg)" }}>
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-[28px] p-8 space-y-4"
              style={{ backgroundColor: "#FFF5F5", border: "1px solid #FFCFC0" }}
            >
              {/* タイトル行 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔺</span>
                  <h2 className="text-lg font-black" style={{ color: "var(--navy)" }}>安全利用のお願い</h2>
                </div>
                <a href="/safety" className="text-xs font-bold underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: "var(--coral)" }}>
                  もう一度確認する
                </a>
              </div>

              {/* サブ見出し */}
              <p className="text-xs font-black" style={{ color: "var(--navy)" }}>
                ⚠️ 安全なご利用のためのお願い
              </p>

              {/* 箇条書き */}
              <ul className="space-y-3 list-disc list-outside pl-4">
                {[
                  "安全のため、周囲の音が十分に聞こえる状態でご利用ください。イヤホン等をご利用の場合は、各都道府県の法令を守ってご利用ください。",
                  "本アプリは、必ず交通ルールを守り、安全な場所・安全な環境でご利用ください。",
                  "運転中に画面を見たり、手で操作したりしないでください。",
                  "本アプリの使用に起因する事故・違反・損害等について、開発者は責任を負いません。",
                ].map((text, i) => (
                  <li key={i} className="text-xs leading-relaxed" style={{ color: "var(--text-gray)" }}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            SECTION 9 : FAQ
        ───────────────────────────────────────────── */}
        <section id="faq" className="px-5 sm:px-10 py-14 bg-white">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>
              よくある質問
            </h2>

            {/* 案内カード（アコーディオン） */}
            <SiriSettingsCard />

            <FaqAccordion />

            {/* お問い合わせ */}
            <p className="text-sm text-center" style={{ color: "var(--text-gray)" }}>
              解決しない場合は、
              <Link href="/support" className="font-bold underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: "var(--coral)" }}>
                お気軽にお問い合わせください
              </Link>
              。
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            開発秘話
        ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-10 py-16" style={{ backgroundColor: "var(--pale-bg)" }}>
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-[28px] p-8 sm:p-10 space-y-6"
              style={{ backgroundColor: "var(--white)", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
            >
              <div className="space-y-1">
                <p className="text-xs font-black tracking-widest uppercase" style={{ color: "var(--coral)" }}>Story</p>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: "var(--navy)" }}>開発秘話</h2>
              </div>
              <div className="space-y-5" style={{ color: "var(--text-gray)" }}>
                <p className="text-base sm:text-lg leading-loose">
                  私はよく、ドライブをします。
                </p>
                <p className="text-base sm:text-lg leading-loose">
                  その道すがら、ふと目に飛び込んでくる瞬間があります。<br />
                  <span className="font-bold italic" style={{ color: "var(--navy)" }}>「あ、何このカフェ！？」</span><br />
                  <span className="font-bold italic" style={{ color: "var(--navy)" }}>「げ！この景色、最高ーっ！」</span>
                </p>
                <p className="text-base sm:text-lg leading-loose">
                  でも、車をすぐに停められない。<br />
                  気づけばいつも、その場所を通り過ぎてしまっていた。
                </p>
                <p className="text-base sm:text-lg leading-loose">
                  それでも心のどこかで思っていました。<br />
                  <span className="font-bold" style={{ color: "var(--navy)" }}>いつかは、行くぞ。</span>
                </p>
                <p className="text-base sm:text-lg leading-loose">
                  そのためにその場をPinしておけたら——<br />
                  そんなささやかな願いから、ここピンは生まれました。
                </p>
              </div>
            </div>
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
