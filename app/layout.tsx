import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const siteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: "ここピン — 声でMAPにピンしよう",
  description:
    "運転中・移動中に気になった場所を「Hey Siri ここピン」の一言で保存。あとからGoogle Maps・Apple Mapsで確認できるiOSアプリ。",
  openGraph: {
    title: "ここピン",
    description: "声でMAPにピンしよう。運転中・移動中の「気になる場所」を音声で瞬時に記録。",
    locale: "ja_JP",
    type: "website",
  },
  verification: {
    google: siteVerification || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-screen">
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
