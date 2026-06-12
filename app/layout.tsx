import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KokoPin（ここピン）",
  description: "気になった場所を、あとで行ける場所に。移動中や運転中に気になった場所を音声で記録し、あとから地図で確認できるアプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
