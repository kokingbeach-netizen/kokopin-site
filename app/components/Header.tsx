import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--kokopin-pink)" }}
        >
          KokoPin
        </Link>
      </div>
    </header>
  );
}
