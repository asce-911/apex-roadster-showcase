import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roadster.jpg";

const quickSpecs = [
  { value: "2.4s", label: "0–100 km/h" },
  { value: "348", label: "km/h top speed" },
  { value: "1,020", label: "horsepower" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col justify-end">
      <img
        src={heroImage}
        alt="Apex Roadster matte-black hypercar in a dark studio"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-shade)]" />
      <div className="absolute inset-0 -z-10 bg-background/45" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-primary"
        >
          Limited series · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight text-foreground sm:text-8xl lg:text-[8.5rem]"
        >
          Apex Roadster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          A hand-built open-top hypercar engineered around a carbon monocoque, active aero and a
          twin-turbo V8 hybrid drivetrain. Only 199 will ever exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button variant="ember" size="lg" asChild>
            <a href="#reserve">Reserve yours</a>
          </Button>
          <Button variant="outlineEmber" size="lg" asChild>
            <a href="#performance">Explore specs</a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-6"
        >
          {quickSpecs.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-primary sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#design"
        aria-label="Scroll to next section"
        className="mx-auto mb-6 hidden text-muted-foreground transition-colors hover:text-primary sm:block"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}