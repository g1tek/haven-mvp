import Link from "next/link";

import { PlanCard } from "@/components/marketing/plan-card";
import { connectionMethods, pricingPlans, productPrinciples, profileTypes } from "@/lib/site";

export default function LandingPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-8 pt-8 lg:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="eyebrow">Paid private messaging</span>
          <h1 className="text-balance mt-6 max-w-4xl font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Haven is private messaging for the people you choose.
          </h1>
          <p className="text-balance mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            No strangers. No contact scraping. No public search. No ads. Just mutual private spaces for the people who matter.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/auth" className="primary-button">
              Start with Haven
            </Link>
            <Link href="/pricing" className="secondary-button">
              View pricing
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {productPrinciples.map((principle) => (
              <div key={principle} className="rounded-[22px] border border-line bg-white/60 p-4">
                <p className="text-sm leading-6 text-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="panel rounded-[34px] p-6 sm:p-8">
          <div className="rounded-[28px] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,236,226,0.92))] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Live principle
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">
                  Mutual approval first
                </h2>
              </div>
              <span className="rounded-full border border-line-strong bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                MVP
              </span>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-[22px] border border-line bg-white/80 p-4">
                <p className="text-sm font-medium text-foreground">Connection request</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  One person initiates with a QR, secret question, or invite card.
                </p>
              </div>
              <div className="rounded-[22px] border border-line bg-accent-soft/80 p-4">
                <p className="text-sm font-medium text-foreground">Consent gate</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  A Haven stays closed until the other person also approves.
                </p>
              </div>
              <div className="rounded-[22px] border border-line bg-white/80 p-4">
                <p className="text-sm font-medium text-foreground">Private space opens</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Then the chat, status, themes, and reactions belong inside that trusted space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {connectionMethods.map((method) => (
          <article key={method.title} className="panel rounded-[28px] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Connection method
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">{method.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{method.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="eyebrow">Profile types</span>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground">
            Build each Haven around the relationship it protects.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            The MVP keeps the structure simple: one private space, two people, and a profile type that sets the tone.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profileTypes.map((type) => (
            <div key={type} className="rounded-[24px] border border-line bg-white/70 px-5 py-6">
              <p className="font-serif text-2xl font-semibold text-foreground">{type}</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Placeholder setup for themes, statuses, and shared context inside the Haven.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Plans</span>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-foreground">
              Paid from the start, with clear Haven limits.
            </h2>
          </div>
          <Link href="/pricing" className="secondary-button w-fit">
            Compare all plans
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}
