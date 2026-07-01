import Link from "next/link";
import Image from "next/image";

export default function Header({ pageTitle }: { pageTitle?: string }) {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/Kokopinheader.png" alt="ここピン! KokoPin" width={1323} height={375} className="h-8 w-auto" />
        </Link>
        {pageTitle && (
          <span className="text-sm font-medium" style={{ color: "var(--text-gray)" }}>
            {pageTitle}
          </span>
        )}
      </div>
    </header>
  );
}
