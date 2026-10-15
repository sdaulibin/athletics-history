"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/events/", label: "项目" },
  { href: "/about/", label: "关于" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-track-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="8" stroke="#cd5c39" strokeWidth="1.8" />
            <rect x="6.5" y="7.5" width="11" height="9" rx="4.5" stroke="#b84626" strokeWidth="1.4" />
            <line x1="10.5" y1="4" x2="10.5" y2="7.5" stroke="#9a3412" strokeWidth="1.4" />
            <line x1="10.5" y1="16.5" x2="10.5" y2="20" stroke="#9a3412" strokeWidth="1.4" />
            <line x1="2" y1="12" x2="8.5" y2="12" stroke="#9a3412" strokeWidth="1.4" />
          </svg>
          <span className="text-lg font-bold tracking-wide text-track-900">
            田径史
          </span>
          <span className="hidden text-sm text-slate-400 sm:inline">
            田径项目历史与世界纪录
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-track-100 font-medium text-track-800"
                    : "text-slate-500 hover:bg-track-50 hover:text-track-700"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
