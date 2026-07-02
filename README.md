# KokoPin 公式サイト

KokoPin（ここピン）のApp Store提出用公式サイトです。

## 技術構成

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- 静的エクスポート（`output: "export"`）+ Cloudflare Pages デプロイ（Vercelは並行運用）

## ページ構成

| パス | 内容 |
|------|------|
| `/` | トップページ |
| `/terms` | 利用規約 |
| `/privacy` | プライバシーポリシー |
| `/support` | サポート・FAQ |

## 文言の編集方法

各ページの文言は `docs/` フォルダ内のMarkdownファイルを編集するだけで反映されます。

```
docs/
├── terms.md      # 利用規約
├── privacy.md    # プライバシーポリシー
└── support.md    # サポート・FAQ
```

## 開発

```bash
npm install
npm run dev       # 開発サーバー起動 → http://localhost:3000
npm run build     # 本番ビルド確認
```

## デプロイ

本サイトは静的エクスポート（`next build` → `out/`）構成です。`main` ブランチへのpushで以下に自動デプロイされます。

- **Cloudflare Pages**（本番: `kokopin.app` / `www.kokopin.app`）
  - Build command: `npm run build`
  - Output directory: `out`
- **Vercel**（並行運用中の既存環境）

`next/image` は静的エクスポートのためデフォルト最適化ローダーが使えず、`images.unoptimized: true` を設定しています（オリジナル画像をそのまま配信）。

## 環境変数

`.env.local.example` をコピーして `.env.local` を作成してください。

```bash
cp .env.local.example .env.local
```

| 変数名 | 説明 |
|--------|------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 のMeasurement ID（例：`G-XXXXXXXXXX`） |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console 所有権確認コード（任意） |

### GA4の設定方法

1. [Google Analytics](https://analytics.google.com/) でGA4プロパティを作成
2. Measurement ID（`G-XXXXXXXXXX` 形式）を取得
3. ローカル開発：`.env.local` に `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` を追記
4. 本番：Cloudflare Pagesダッシュボードの **Settings → Environment Variables**、およびVercelダッシュボードの **Settings → Environment Variables** の両方に同じ値を設定（静的エクスポートのためビルド時に値が埋め込まれます）
5. 設定後は各環境で再デプロイが必要です

### Google Search Console の設定方法

1. [Google Search Console](https://search.google.com/search-console/) でサイトを登録
2. HTMLタグ方式の確認コード（`xxxxxxxxxxxxxx` 部分）を取得
3. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` に設定
4. 設定後は再デプロイし、Search Consoleで確認を実行

### 計測イベント

GA4導入済みです。以下のカスタムイベントを計測しています。

| イベント名 | タイミング |
|-----------|-----------|
| `faq_open` | FAQアコーディオンを開いた時（`question` パラメータ付き） |

カスタムイベントの追加は `lib/gtag.ts` の `trackEvent` 関数を使用してください。
