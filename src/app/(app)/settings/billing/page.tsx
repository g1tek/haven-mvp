import { InfoCard } from "@/components/app/info-card";
import { PageIntro } from "@/components/layout/page-intro";

export default function BillingSettingsPage() {
  return (
    <div className="pb-8">
      <PageIntro
        eyebrow="Billing settings"
        title="Subscription structure now, Stripe wiring later."
        description="The MVP needs clear plan limits before payment processing arrives. This page reserves the management surface for subscriptions, invoices, and payment methods."
      />
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <InfoCard title="Current plan" detail="Static billing summary placeholder.">
          <div className="rounded-[24px] border border-line bg-white/75 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Core
                </p>
                <h3 className="mt-3 font-serif text-4xl font-semibold text-foreground">
                  $12<span className="ml-1 font-sans text-base text-muted">/month</span>
                </h3>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8f4ee]">
                7 Havens
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              TODO: replace with Stripe subscription status, billing cycle, and upgrade or downgrade actions.
            </p>
          </div>
        </InfoCard>
        <InfoCard
          title="Billing placeholders"
          detail="These sections reserve the settings layout without pretending payments are live."
        >
          <div className="space-y-4">
            <div className="rounded-[22px] border border-line bg-white/75 p-4">
              <h3 className="text-lg font-semibold text-foreground">Payment method</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                TODO: connect card details, retries, and updates through Stripe.
              </p>
            </div>
            <div className="rounded-[22px] border border-line bg-white/75 p-4">
              <h3 className="text-lg font-semibold text-foreground">Invoices</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                TODO: show billing history, receipts, and plan change records.
              </p>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
