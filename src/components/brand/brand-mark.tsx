import Link from "next/link";

type BrandMarkProps = {
  href?: string;
};

export function BrandMark({ href = "/" }: BrandMarkProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/70 text-sm font-semibold text-accent shadow-[0_10px_30px_rgba(30,43,40,0.1)]">
        H
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-2xl font-semibold tracking-[0.03em] text-foreground">
          Haven
        </span>
        <span className="-mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-muted">
          mutual approval
        </span>
      </span>
    </Link>
  );
}
