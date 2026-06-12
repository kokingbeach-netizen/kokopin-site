import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm mx-auto text-center space-y-10">

          {/* ロゴ＋タイトル */}
          <div className="space-y-4">
            <div
              className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center shadow-sm"
              style={{ backgroundColor: "var(--kokopin-pink)" }}
            >
              <span className="text-white text-3xl">📍</span>
            </div>
            <h1
              className="text-4xl font-bold tracking-tight"
              style={{ color: "var(--kokopin-pink)" }}
            >
              KokoPin
            </h1>
          </div>

          {/* キャッチコピー */}
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-800 leading-snug">
              気になった場所を、
              <br />
              あとで行ける場所に。
            </p>
          </div>

          {/* 説明文 */}
          <p className="text-sm text-gray-500 leading-relaxed">
            KokoPin（ここピン）は、
            <br />
            移動中や運転中に気になった場所を音声で記録し、
            <br />
            あとから地図で確認できるアプリです。
          </p>

          {/* ボタン */}
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/terms"
              className="w-full py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="w-full py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/support"
              className="w-full py-3.5 rounded-xl text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--kokopin-pink)" }}
            >
              サポート
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
