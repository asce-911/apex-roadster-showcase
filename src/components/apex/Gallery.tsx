import { Reveal } from "./Reveal";
import heroImage from "@/assets/hero-roadster.jpg";
import interiorImage from "@/assets/interior.jpg";
import roadImage from "@/assets/road.jpg";

const shots = [
  { src: heroImage, alt: "Front three-quarter studio view of the Apex Roadster", span: "sm:col-span-2 sm:row-span-2" },
  { src: interiorImage, alt: "Cockpit detail with carbon fibre steering wheel", span: "" },
  { src: roadImage, alt: "Rear view of the roadster on a coastal road", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-primary">Gallery</p>
        <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
          Every angle earns its line
        </h2>
      </Reveal>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[200px]">
        {shots.map((s, i) => (
          <Reveal
            key={s.alt}
            delay={0.07 * i}
            className={`overflow-hidden rounded-lg border border-border ${s.span}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className="size-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}