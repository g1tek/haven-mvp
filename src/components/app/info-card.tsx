import { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  detail?: string;
  children: ReactNode;
};

export function InfoCard({ title, detail, children }: InfoCardProps) {
  return (
    <section className="panel rounded-[28px] p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {detail ? <p className="mt-1 text-sm text-muted">{detail}</p> : null}
      </div>
      {children}
    </section>
  );
}
