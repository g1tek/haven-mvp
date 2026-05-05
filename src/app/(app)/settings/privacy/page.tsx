import { InfoCard } from "@/components/app/info-card";
import { PageIntro } from "@/components/layout/page-intro";

const privacyRows = [
  {
    name: "Public search",
    value: "Off by product rule",
    description: "Haven does not expose public user discovery.",
  },
  {
    name: "Contact scraping",
    value: "Not used",
    description: "Phone contacts stay out of the MVP and out of onboarding.",
  },
  {
    name: "Mutual approval",
    value: "Required",
    description: "Every Haven must be approved by both people before chat opens.",
  },
  {
    name: "Silent ignore",
    value: "Placeholder",
    description: "Reserved for the quiet boundary control defined in the MVP.",
  },
];

export default function PrivacySettingsPage() {
  return (
    <div className="pb-8">
      <PageIntro
        eyebrow="Privacy settings"
        title="Product rules made visible."
        description="This settings surface keeps the Haven privacy model explicit, even before the controls are connected to persistence."
      />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <InfoCard
          title="Core privacy posture"
          detail="Static placeholder rows until real settings and policy-backed controls are added."
        >
          <div className="space-y-4">
            {privacyRows.map((row) => (
              <div
                key={row.name}
                className="rounded-[22px] border border-line bg-white/75 p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{row.name}</h3>
                  <span className="rounded-full border border-line-strong bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {row.value}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{row.description}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Implementation TODOs"
          detail="The real settings model will be conservative by default."
        >
          <ul className="space-y-3 text-sm leading-6 text-muted">
            <li>TODO: add persisted privacy preferences where appropriate.</li>
            <li>TODO: codify block and silent ignore behavior in shared policy logic.</li>
            <li>TODO: back the UI with tests for mutual approval and boundary enforcement.</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
}
