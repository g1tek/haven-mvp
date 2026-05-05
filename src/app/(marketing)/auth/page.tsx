import Link from "next/link";

import { PageIntro } from "@/components/layout/page-intro";

export default function AuthPlaceholderPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8 lg:px-10">
      <PageIntro
        eyebrow="Auth"
        title="Account entry placeholder for the Haven MVP."
        description="This screen reserves the flow for sign in and account creation. Supabase auth is intentionally not connected yet."
      />
      <section className="panel rounded-[30px] p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[24px] border border-line bg-white/75 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Sign in
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Welcome back to your trusted space.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              TODO: connect email, password, magic link, and session handling with Supabase.
            </p>
            <button className="secondary-button mt-6 w-full opacity-60" type="button">
              Placeholder sign in
            </button>
          </div>
          <div className="rounded-[24px] border border-line bg-white/75 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Create account
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Start a paid Haven account.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              TODO: add account creation, plan selection, email verification, and consent-safe onboarding.
            </p>
            <Link href="/onboarding" className="primary-button mt-6 w-full">
              Continue to onboarding
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
