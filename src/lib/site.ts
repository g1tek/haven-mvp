export type PricingPlan = {
  name: string;
  price: string;
  havens: string;
  summary: string;
  accent?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$7",
    havens: "3 Havens",
    summary: "A simple private space setup for a few close connections.",
  },
  {
    name: "Core",
    price: "$12",
    havens: "7 Havens",
    summary: "The main plan for people who want a steady trusted circle.",
    accent: true,
  },
  {
    name: "Circle",
    price: "$19",
    havens: "15 Havens",
    summary: "A broader paid plan for family, work-trust, and long-term close ties.",
  },
];

export const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/auth", label: "Auth" },
];

export const appLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/settings/privacy", label: "Privacy" },
  { href: "/settings/billing", label: "Billing" },
];

export const productPrinciples = [
  "Mutual approval required before a Haven can open.",
  "No strangers, no public search, and no contact scraping.",
  "No ads, no recommendations, and no invisible third digital entity.",
];

export const connectionMethods = [
  {
    title: "In-person QR add",
    description:
      "Start a Haven face to face, then approve the private space together.",
  },
  {
    title: "Mutual secret question add",
    description:
      "Use a shared answer to confirm you both meant to open the connection.",
  },
  {
    title: "Invite card with consent gate",
    description:
      "Send an invite card that still requires the other person to actively approve.",
  },
];

export const profileTypes = [
  "Besties",
  "Couple",
  "Family",
  "Creative Duo",
  "Work-Trust",
  "Custom",
];
