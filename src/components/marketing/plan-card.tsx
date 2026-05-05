import Link from "next/link";

import type { PricingPlan } from "@/lib/site";

type PlanCardProps = {
  plan: PricingPlan;
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={`panel rounded-[28px] p-6 ${
        plan.accent ? "border-highlight bg-[rgba(255,248,241,0.96)]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {plan.name}
          </p>
          <h3 className="mt-4 font-serif text-4xl font-semibold text-foreground">
            {plan.price}
            <span className="ml-1 font-sans text-base font-medium text-muted">
              /month
            </span>
          </h3>
        </div>
        {plan.accent ? (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8f4ee]">
            Most chosen
          </span>
        ) : null}
      </div>
      <p className="mt-5 text-lg font-medium text-foreground">{plan.havens}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{plan.summary}</p>
      <ul className="mt-6 space-y-3 text-sm text-muted">
        <li>Mutual approval required.</li>
        <li>No public search or contact scraping.</li>
        <li>No ads or algorithmic recommendations.</li>
      </ul>
      <Link href="/auth" className="primary-button mt-8 w-full">
        Choose {plan.name}
      </Link>
    </article>
  );
}
