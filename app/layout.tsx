import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KokoPin（ここピン）— 声でMAPにピンしよう",
  description: "運転中・移動中に気になった場所を「Hey Siri ここピン」の一言で保存。あとからGoogle Maps・Apple Mapsで確認できるiOSアプリ。",
  openGraph: {
    title: "KokoPin（ここピン）",
    description: "声でMAPにピンしよう。運転中・移動中の「気になる場所」を音声で瞬時に記録。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
