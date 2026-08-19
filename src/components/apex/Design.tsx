import { Reveal } from "./Reveal";
import interiorImage from "@/assets/interior.jpg";

const points = [
  {
    title: "Carbon monocoque",
    body: "A 68 kg tub forms the spine of the car, delivering track-grade torsional rigidity with no roof structure.",
  },
  {
    title: "Active aerodynamics",
    body: "Front flaps and a deployable rear wing generate up to 480 kg of downforce at 250 km/h.",
  },
  {
    title: "Driver-first cockpit",
    body: "Milled aluminium controls, hand-stitched leather and a floating instrument binnacle angled 7° to the driver.",
  },
];

export function Design() {
  return (
    <section id="design" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src={interiorImage}
              alt="Carbon fibre and leather cockpit of the Apex Roadster"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Design</p>
            <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
              Built around the driver
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="border-l-2 border-primary/50 pl-5">
                  <h3 className="font-display text-2xl tracking-wide">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}