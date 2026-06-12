# KokoPin 公式サイト

KokoPin（ここピン）のApp Store提出用公式サイトです。

## 技術構成

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Vercel デプロイ

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

Vercelに接続済みの場合、`main` ブランチへのpushで自動デプロイされます。
