type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="mb-8 flex flex-col gap-4">
      <span className="eyebrow w-fit">{eyebrow}</span>
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
