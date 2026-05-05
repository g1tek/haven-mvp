import Link from "next/link";
import { ReactNode } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { appLinks } from "@/lib/site";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-frame min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:px-6">
        <aside className="panel rounded-[28px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-[280px]">
          <div className="flex h-full flex-col">
            <BrandMark href="/dashboard" />
            <p className="mt-6 max-w-[18rem] text-sm leading-6 text-muted">
              Calm, paid, mutual private spaces. No public search, no ads, no contact scraping.
            </p>
            <nav className="mt-8 flex flex-col gap-2">
              {appLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted hover:bg-white/80 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto rounded-[24px] border border-line bg-white/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                TODO
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Replace these placeholders with Supabase session state, subscription data, and real Haven counts.
              </p>
            </div>
          </div>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="panel mb-4 flex items-center justify-between rounded-[24px] px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Trusted space
              </p>
              <p className="mt-1 text-sm text-muted">
                Mutual approval remains the gate for every Haven.
              </p>
            </div>
            <Link href="/" className="secondary-button px-5 py-3 text-sm">
              View landing
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
