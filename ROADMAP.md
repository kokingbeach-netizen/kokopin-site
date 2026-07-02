# ROADMAP

KokoPin公式サイトの機能一覧とドキュメント整備状況を管理するファイルです。

---

## サイト機能一覧

| 機能 | 状態 | 備考 |
|------|------|------|
| トップページ (`/`) | 実装済み | ヒーロー・アプリ紹介・特徴・FAQ等 |
| 利用規約 (`/terms`) | 実装済み | `docs/terms.md` から動的読み込み |
| プライバシーポリシー (`/privacy`) | 実装済み | `docs/privacy.md` から動的読み込み |
| サポート・FAQ (`/support`) | 実装済み | `docs/support.md` から動的読み込み |
| Google Analytics 4計測 | 実装済み | `faq_open` イベント計測中（`lib/gtag.ts`） |
| Google Search Console連携 | 実装済み | 環境変数でverification code設定可能 |
| Vercelデプロイ | 運用中 | 既存の本番環境（Cloudflare Pagesと並行運用） |
| Cloudflare Pagesデプロイ | 運用中 | 2026-07-02〜 `kokopin.app` を切替、静的エクスポート（`output: "export"`）構成 |
| Cloudflare Pages自動デプロイ | 確認済み | GitHub push → 自動ビルド → 本番反映を実機確認（2026-07-02） |

---

## ドキュメント整備表

| ファイル | 用途 | 最終更新 | 状態 |
|---|---|---|---|
| README.md | セットアップ・技術構成・デプロイ手順 | 2026-07-02 | 最新 |
| DEVLOG.md | 開発履歴（バージョン別） | 2026-07-02 | 最新 |
| ROADMAP.md | 機能一覧・ドキュメント整備状況 | 2026-07-02（新規作成） | 最新 |
| CLAUDE.md | AIエージェント向けルール（`@AGENTS.md`参照） | 2026-06-12 | 変更なし（新規ルール・仕様変更発生時のみ更新） |
| AGENTS.md | Next.jsバージョン差異に関する注意書き | 2026-06-12 | 変更なし |
| docs/terms.md | 利用規約の本文ソース | 2026-07-01 | 最新 |
| docs/privacy.md | プライバシーポリシーの本文ソース | 2026-07-01 | 最新 |
| docs/support.md | サポート・FAQの本文ソース | 2026-07-01 | 最新 |
| docs/appstore.md | App Store掲載用文言ソース | 2026-07-01 | 最新 |

---

## 更新履歴

### 2026-07-02
- Cloudflare Pagesへの静的デプロイ対応（`next.config.ts` に `output: "export"` / `images.unoptimized: true` を追加）
- `package.json` の `start` スクリプトを `next start` → `npx serve@latest out` に変更（静的エクスポート下では `next start` が動作しないため）
- GitHub push → Cloudflare Pages自動デプロイ → `kokopin.app` 反映を実機確認
- README.md / DEVLOG.md / ROADMAP.md を整備
