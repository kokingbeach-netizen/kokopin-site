import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 py-8 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <Link href="/terms" className="hover:text-gray-800 transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-gray-800 transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/support" className="hover:text-gray-800 transition-colors">
            サポート
          </Link>
        </div>
        <p className="text-xs text-gray-400">© 2026 KokoPin. All rights reserved.</p>
      </div>
    </footer>
  );
}
