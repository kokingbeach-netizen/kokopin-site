import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col items-center px-6 py-16 gap-14">
        <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-14">

          {/* ヒーロー */}
          <section className="text-center space-y-5 w-full">
            <div
              className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center shadow-sm"
              style={{ backgroundColor: "var(--kokopin-pink)" }}
            >
              <span className="text-white text-3xl">📍</span>
            </div>

            <div className="space-y-1">
              <h1
                className="text-4xl font-bold tracking-tight"
                style={{ color: "var(--kokopin-pink)" }}
              >
                KokoPin
              </h1>
              <p className="text-xs text-gray-400 tracking-wide">ここピン</p>
            </div>

            <span className="inline-block text-xs font-medium text-white px-3 py-1 rounded-full" style={{ backgroundColor: "var(--kokopin-pink)" }}>
              iOS版 近日公開予定
            </span>

            <p className="text-xl font-semibold text-gray-800 leading-snug">
              気になった場所を、
              <br />
              あとで行ける場所に。
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              KokoPin（ここピン）は、
              <br />
              移動中や運転中に気になった場所を音声で記録し、
              <br />
              あとから地図で確認できるアプリです。
            </p>
          </section>

          {/* App Storeボタン（グレーアウト） */}
          <section className="w-full">
            <div
              className="w-full flex flex-col items-center gap-1.5 py-4 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 cursor-not-allowed select-none"
              aria-disabled="true"
            >
              <span className="text-sm font-medium text-gray-400">App Storeでダウンロード</span>
              <span className="text-xs text-gray-400">近日公開予定</span>
            </div>
          </section>

          {/* 開発ストーリー */}
          <section className="w-full space-y-4 border-l-4 pl-5" style={{ borderColor: "var(--kokopin-pink)" }}>
            <p className="text-sm text-gray-700 leading-relaxed">
              運転中や移動中に、<br />
              「あ、ここ気になる」
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              と思っても、<br />
              その場でスマホを操作できない。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              あとで調べようと思っても、<br />
              場所や名前を忘れてしまうこともある。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              KokoPin（ここピン）は、<br />
              そんな瞬間を音声だけで記録するために生まれました。
            </p>
            <p className="text-sm font-medium text-gray-800 leading-relaxed">
              「Hey Siri、ここピン ○○」
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              で気になった場所を保存し、<br />
              あとから地図で確認できます。
            </p>
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              手が離せない瞬間を、<br />
              あとで行ける場所に。
            </p>
          </section>

          {/* 【仮】特徴 */}
          <section className="w-full space-y-4">
            <h2 className="text-base font-bold text-gray-800">【仮】KokoPinの特徴</h2>
            <ul className="space-y-3">
              {[
                "Siriで瞬時に保存",
                "気になった場所を記録",
                "Apple Maps / Google Maps対応",
                "後から場所を特定できる",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: "var(--kokopin-pink)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 【仮】こんな方におすすめ */}
          <section className="w-full space-y-4">
            <h2 className="text-base font-bold text-gray-800">【仮】こんな方におすすめ</h2>
            <ul className="space-y-3">
              {[
                "運転中に気になるお店や場所を見つけることが多い方",
                "移動中に後で行きたい場所をメモしたい方",
                "地図アプリを開く前に、まず場所だけ記録したい方",
                "Siriを活用して、手軽に位置メモを残したい方",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 text-base" style={{ color: "var(--kokopin-pink)" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* プライバシー訴求 */}
          <section className="w-full rounded-2xl p-5 space-y-2" style={{ backgroundColor: "#FFF0F5" }}>
            <h2 className="text-sm font-bold text-gray-800">プライバシーを重視</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              現在のバージョンでは、<br />
              保存したデータはお使いの端末内にのみ保存されます。
            </p>
            <p className="text-sm text-gray-600">外部サーバーへの送信は行っていません。</p>
          </section>

          {/* 対応環境・言語 */}
          <section className="w-full grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-gray-800">対応環境</h2>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>iPhone（iOS）</li>
                <li>Apple Maps</li>
                <li>Google Maps</li>
                <li>Siriショートカット</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-bold text-gray-800">対応言語</h2>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>日本語</li>
              </ul>
            </div>
          </section>

          {/* 価格情報 */}
          <section className="w-full rounded-2xl border border-gray-100 p-5 space-y-3">
            <h2 className="text-sm font-bold text-gray-800">料金</h2>
            <div>
              <p className="text-base font-semibold text-gray-800">買い切りアプリ</p>
              <p className="text-sm text-gray-500">予定価格：300円</p>
            </div>
            <ul className="space-y-1 text-xs text-gray-500">
              <li className="flex items-center gap-2">
                <span style={{ color: "var(--kokopin-pink)" }}>✓</span>広告なし
              </li>
              <li className="flex items-center gap-2">
                <span style={{ color: "var(--kokopin-pink)" }}>✓</span>サブスクリプションなし
              </li>
            </ul>
            <p className="text-xs text-gray-400">※価格はApp Store公開時に変更となる場合があります。</p>
          </section>

          {/* 安全上の注意 */}
          <section className="w-full rounded-2xl bg-gray-50 border border-gray-200 p-5 space-y-3">
            <h2 className="text-sm font-bold text-gray-700">安全上の注意</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              運転中のアプリ操作は行わないでください。音声機能をご利用の場合も、周囲の安全を十分に確認してください。
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              本アプリはナビゲーションアプリではありません。移動時は実際の交通状況、道路標識、法令等を優先してください。
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              本アプリの利用により生じた損害について、運営者は故意または重過失がある場合を除き責任を負いません。
            </p>
          </section>

          {/* ページリンク */}
          <section className="w-full flex flex-col gap-3">
            <Link
              href="/terms"
              className="w-full py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="w-full py-3.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/support"
              className="w-full py-3.5 rounded-xl text-sm font-medium text-white transition-colors text-center"
              style={{ backgroundColor: "var(--kokopin-pink)" }}
            >
              サポート
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
