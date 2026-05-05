import { InfoCard } from "@/components/app/info-card";
import { PageIntro } from "@/components/layout/page-intro";

const steps = [
  {
    title: "Choose your plan",
    detail: "Starter, Core, or Circle will define the Haven limit.",
  },
  {
    title: "Set your private status",
    detail: "Manual statuses stay simple and visible only inside your trusted spaces.",
  },
  {
    title: "Pick a connection method",
    detail: "QR, secret question, or invite card with a consent gate.",
  },
];

export default function OnboardingPage() {
  return (
    <div className="pb-8">
      <PageIntro
        eyebrow="Onboarding"
        title="Set up the first steps without breaking the trust model."
        description="This placeholder keeps the onboarding sequence explicit: account, plan, private status, then mutually approved connection methods."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <InfoCard
          title="MVP onboarding flow"
          detail="The actual logic will land once auth, billing, and connection state are wired."
        >
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[22px] border border-line bg-white/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Implementation TODOs"
          detail="Reserved for product wiring."
        >
          <ul className="space-y-3 text-sm leading-6 text-muted">
            <li>TODO: persist onboarding progress per account.</li>
            <li>TODO: gate connection creation by mutual approval state.</li>
            <li>TODO: enforce plan-based Haven limits before opening a new space.</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
