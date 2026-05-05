# AGENTS.md

## Product

Haven is a paid private messaging app for mutually approved personal communication.

The app should feel like a calm, premium, familiar texting experience.

Core promise:

Nobody can open a Haven with you unless you also approve it.

## Absolute rules

- No AI inside chats.
- No invisible third digital entity.
- No contact scraping.
- No public user search.
- No ads.
- No algorithmic recommendations.
- No one-sided messaging.
- No manipulative growth mechanics.
- No claims like “unhackable” or “impossible to leak.”
- Use wording like “mutual approval required.”
- Connection must require mutual consent.

## MVP connection methods

1. In-person QR add.
2. Mutual secret question add.
3. Invite card with consent gate.

## MVP features

- User accounts.
- Paid subscription skeleton.
- Limited number of Havens by plan.
- 1:1 chat.
- Text messages.
- Media placeholder.
- GIF/sticker placeholders.
- Message reactions.
- Manual statuses.
- Disappearing messages.
- Custom Haven profile type.
- Chat themes.
- Block.
- Close Haven.
- Silent ignore.

## Haven profile types

- Besties
- Couple
- Family
- Creative Duo
- Work-Trust
- Custom

## Tone

Simple, warm, premium, calm.

Use words like:

- Haven
- private space
- mutual approval
- trusted space
- close
- block
- quiet
- status

## Technical stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui if useful
- Supabase for auth, database, realtime, and storage
- Stripe for billing
- Zod for validation
- Playwright for smoke tests
- Vitest for unit tests

## Testing expectations

Add tests for:

- Mutual approval state machine.
- Plan limit enforcement.
- Silent ignore.
- Block prevention.
- Core page smoke tests.

## Do not build

- AI assistant.
- Public discovery.
- Contact import.
- Video calls.
- Large public groups.
- Social feed.
- Creator/community features.
- Advertising.