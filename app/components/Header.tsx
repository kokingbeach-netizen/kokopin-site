import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* ロゴ画像がある場合: <Image src="/images/logo.png" alt="KokoPin" width={28} height={28} /> */}
          <span className="text-lg font-black tracking-tight" style={{ color: "var(--coral)" }}>
            KokoPin
          </span>
          <span className="text-xs font-medium" style={{ color: "var(--text-gray)" }}>ここピン</span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/support" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--text-gray)" }}>
            サポート
          </Link>
        </nav>
      </div>
    </header>
  );
}
