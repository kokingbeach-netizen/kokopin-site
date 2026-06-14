import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto py-10 px-6" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--white)" }}>
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-base font-black tracking-tight" style={{ color: "var(--coral)" }}>KokoPin</p>
        <div className="flex justify-center gap-6 text-sm" style={{ color: "var(--text-gray)" }}>
          <Link href="/terms" className="hover:opacity-70 transition-opacity">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:opacity-70 transition-opacity">
            プライバシーポリシー
          </Link>
          <Link href="/support" className="hover:opacity-70 transition-opacity">
            サポート
          </Link>
        </div>
        <p className="text-xs" style={{ color: "var(--text-gray)" }}>© 2026 KokoPin. All rights reserved.</p>
      </div>
    </footer>
  );
}
