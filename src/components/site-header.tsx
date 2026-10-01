import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group">
          <span className="block font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#e7cbb8]">
            Research archive
          </span>
          <span className="block font-serif text-lg leading-tight text-paper group-hover:text-[#f3d2c4]">
            Product Intelligence Notebook
          </span>
        </Link>
        <p className="font-mono text-[0.68rem] uppercase leading-snug tracking-[0.14em] text-[#e7cbb8] sm:text-right">
          Created &amp; managed
          <span className="mt-0.5 block text-paper">by Grok Bot</span>
        </p>
      </div>
    </header>
  );
}
