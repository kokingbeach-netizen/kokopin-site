# DEVLOG

KokoPin 公式サイトの開発履歴です。

---

## Ver1.3 — 2026-07-02

**目的：** Vercel Hobby から Cloudflare Pages への移行対応

### 静的エクスポート対応
- `next.config.ts` に `output: "export"` を追加（App Router / Server Actions・API Routes・動的レンダリング未使用のため対応可能と診断）
- `next/image` のデフォルト最適化ローダーは静的エクスポート非対応のため `images.unoptimized: true` を追加
- `package.json` の `start` スクリプトを `next start` → `npx serve@latest out`（静的エクスポート下では `next start` が使えないため）

### Cloudflare Pages 自動デプロイ確認
- GitHub連携（本番ブランチ `main`、Build command `npm run build`、Output directory `out`）
- フッターに一時テスト文言を追加 → push → 自動デプロイ → `kokopin.app` への反映を確認 → テスト文言を削除
- `kokopin.app` / `www.kokopin.app` はActive・SSL enabled、Vercelは並行運用を継続

---

## Ver1.2 — 2026-06-13

**目的：** 運営者表記の統一・問い合わせ先の確定

### 運営者表記統一（全ページ）
- `KokiSato` → `KokoPin` に全置換
- `当社` → `運営者` に全置換（terms / privacy / support）

### フッター整理（全ページ共通）
- 「運営：KokoPin」行を削除（リンク＋著作権表記のみに整理）

### 問い合わせ先確定（/support）
- `kokingbeach@gmail.com` / `support@kokopin.app` を削除
- `kokopin.app@gmail.com` を公式サポート窓口として確定・掲載

---

## Ver1.1 — 2026-06-12

**目的：** App Store提出前の信頼感・説明力・サポート情報の強化

### トップページ
- iOS版 近日公開予定バッジを追加
- App Storeボタン（グレーアウト・クリック不可）を追加
- 開発ストーリーセクションを追加
- 【仮】KokoPinの特徴セクションを追加
- 【仮】こんな方におすすめセクションを追加
- プライバシー訴求セクションを追加
- 対応環境・対応言語セクションを追加
- 価格情報（買い切り・予定価格300円）セクションを追加
- 安全上の注意セクションを追加

### /support
- 運営者情報（運営：KokoPin）を追加
- FAQ 7件追加（データ保存先・外部送信・Siri・タイトル編集・位置修正・削除・オフライン）
- お問い合わせ文言を更新（kokopin.app@gmail.com を公式窓口として掲載）

### /terms・/privacy
- 「制定日：2026年6月12日」を追加

### フッター（全ページ共通）
- 「運営：KokoPin」を追加
- 著作権表記を「© 2026 KokoPin.」に変更

---

## Ver1.0 — 2026-06-12

**目的：** App Store提出用公式サイトの初回リリース

### 構成
- Next.js 15 / TypeScript / Tailwind CSS / App Router でプロジェクト作成
- Vercel デプロイ前提の静的生成（SSG）構成

### ページ
- `/` トップページ（ロゴ・キャッチコピー・説明・ページリンク）
- `/terms` 利用規約（`docs/terms.md` から動的読み込み）
- `/privacy` プライバシーポリシー（`docs/privacy.md` から動的読み込み）
- `/support` サポート・FAQ（`docs/support.md` から動的読み込み）

### 設計方針
- `docs/*.md` を編集するだけで各ページの文言が反映される構成
- KokoPinピンク（#FF4D8D）をアクセントカラーに採用
- スマホファースト・白背景・シンプルデザイン
