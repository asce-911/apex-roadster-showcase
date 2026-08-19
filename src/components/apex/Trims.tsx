import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const trims = [
  {
    name: "Roadster GT",
    price: "$389,000",
    features: ["860 hp drivetrain", "Adaptive dampers", "Leather cockpit", "20/21\" forged wheels"],
  },
  {
    name: "Roadster S",
    price: "$472,000",
    featured: true,
    features: [
      "1,020 hp hybrid V8",
      "Active aero package",
      "Carbon-ceramic brakes",
      "Track telemetry suite",
    ],
  },
  {
    name: "Roadster 199",
    price: "On request",
    features: [
      "Bespoke commission",
      "Titanium exhaust",
      "Full carbon body",
      "Factory driver programme",
    ],
  },
];

export function Trims() {
  return (
    <section id="trims" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Trims</p>
          <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
            Choose your specification
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trims.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <article
                className={`flex h-full flex-col rounded-lg border p-7 transition-shadow ${
                  t.featured
                    ? "border-primary/60 bg-card shadow-[var(--shadow-ember)]"
                    : "border-border bg-card/60"
                }`}
              >
                {t.featured && (
                  <span className="mb-4 w-fit rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                    Most requested
                  </span>
                )}
                <h3 className="font-display text-3xl tracking-wide">{t.name}</h3>
                <p className="mt-2 text-2xl font-semibold text-primary">{t.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={t.featured ? "ember" : "outlineEmber"}
                  className="mt-8 w-full"
                  asChild
                >
                  <a href="#reserve">Configure</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}