import Link from "next/link";
import { ReactNode } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { marketingLinks } from "@/lib/site";

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="app-frame min-h-screen">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {marketingLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/auth" className="secondary-button px-5 py-3 text-sm">
          Sign in
        </Link>
      </header>
      <main>{children}</main>
      <footer className="mx-auto mt-20 flex w-full max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-muted lg:px-10">
        <div className="hairline" />
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>Private messaging for the people you choose.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="/settings/privacy" className="hover:text-foreground">
              Privacy settings
            </Link>
            <Link href="/settings/billing" className="hover:text-foreground">
              Billing settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
