import { InfoCard } from "@/components/app/info-card";
import { PageIntro } from "@/components/layout/page-intro";

const summaryCards = [
  { label: "Plan", value: "Core", note: "7 Havens available" },
  { label: "Open Havens", value: "4", note: "3 remaining on this plan" },
  { label: "Pending approvals", value: "2", note: "Waiting for mutual consent" },
];

const havenRows = [
  { name: "Maya", type: "Besties", status: "Quiet evening", theme: "Warm linen" },
  { name: "Jonah", type: "Work-Trust", status: "Heads down", theme: "Forest calm" },
  { name: "Rin", type: "Creative Duo", status: "Sketching", theme: "Soft copper" },
];

export default function DashboardPage() {
  return (
    <div className="pb-8">
      <PageIntro
        eyebrow="Dashboard"
        title="A calm operating view for your private spaces."
        description="This placeholder dashboard shows where Haven counts, mutual approvals, statuses, and settings will surface once the backend is connected."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((card) => (
          <div key={card.label} className="panel rounded-[24px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {card.label}
            </p>
            <p className="mt-3 font-serif text-4xl font-semibold text-foreground">
              {card.value}
            </p>
            <p className="mt-2 text-sm text-muted">{card.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <InfoCard
          title="Your Havens"
          detail="Placeholder rows for active private spaces."
        >
          <div className="space-y-4">
            {havenRows.map((haven) => (
              <div
                key={haven.name}
                className="flex flex-col gap-3 rounded-[22px] border border-line bg-white/75 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{haven.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {haven.type} • {haven.status}
                  </p>
                </div>
                <span className="rounded-full border border-line-strong bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {haven.theme}
                </span>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Next integrations"
          detail="Reserved hooks for backend-driven states."
        >
          <ul className="space-y-3 text-sm leading-6 text-muted">
            <li>TODO: live Haven list from Supabase.</li>
            <li>TODO: unread counts, reactions, and disappearing message controls.</li>
            <li>TODO: silent ignore, block, and close Haven safeguards.</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
