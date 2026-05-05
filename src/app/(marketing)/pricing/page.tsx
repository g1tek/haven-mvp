import { PageIntro } from "@/components/layout/page-intro";
import { PlanCard } from "@/components/marketing/plan-card";
import { pricingPlans } from "@/lib/site";

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-8 lg:px-10">
      <PageIntro
        eyebrow="Pricing"
        title="Simple paid plans for private spaces that stay intentional."
        description="Each plan sets a clear Haven limit. Billing and subscription controls will connect to Stripe later, but the product structure is in place now."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
      <section className="panel mt-8 rounded-[28px] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Included in every plan
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-[22px] border border-line bg-white/80 p-4">
            <p className="text-sm font-medium text-foreground">Mutual approval required</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Nobody can open a Haven with you unless you also approve it.
            </p>
          </div>
          <div className="rounded-[22px] border border-line bg-white/80 p-4">
            <p className="text-sm font-medium text-foreground">Private by product design</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              No public search, no contact scraping, no ads, and no algorithmic recommendations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
