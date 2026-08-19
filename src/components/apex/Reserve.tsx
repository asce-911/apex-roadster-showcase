import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./Reveal";

export function Reserve() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }
    toast.success("Reservation request received. Our concierge will be in touch.");
    setEmail("");
  };

  return (
    <section id="reserve" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Reserve</p>
          <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
            199 cars. One allocation list.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Register your interest and a specialist will walk you through configuration, delivery
            timelines and the factory handover programme.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="reserve-email" className="sr-only">
              Email address
            </label>
            <Input
              id="reserve-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-card"
            />
            <Button type="submit" variant="ember" size="lg">
              Request allocation
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}