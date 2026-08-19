import { Reveal } from "./Reveal";
import roadImage from "@/assets/road.jpg";

const specs = [
  { label: "Engine", value: "4.0L twin-turbo V8 hybrid" },
  { label: "Power", value: "1,020 hp @ 8,200 rpm" },
  { label: "Torque", value: "1,100 Nm" },
  { label: "Gearbox", value: "8-speed dual clutch" },
  { label: "Dry weight", value: "1,384 kg" },
  { label: "Drivetrain", value: "All-wheel drive, torque vectoring" },
];

export function Performance() {
  return (
    <section id="performance" className="relative isolate overflow-hidden border-y border-border">
      <img
        src={roadImage}
        alt="Apex Roadster accelerating along a coastal road at dusk"
        width={1200}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/85" />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Performance</p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none tracking-tight sm:text-6xl">
            Numbers that hold up on the road
          </h2>
        </Reveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i} className="bg-card/90 backdrop-blur-sm">
              <div className="p-6">
                <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-2xl tracking-wide text-foreground">
                  {s.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}