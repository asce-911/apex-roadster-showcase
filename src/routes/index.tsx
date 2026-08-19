import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/apex/Nav";
import { Hero } from "@/components/apex/Hero";
import { Design } from "@/components/apex/Design";
import { Performance } from "@/components/apex/Performance";
import { Gallery } from "@/components/apex/Gallery";
import { Trims } from "@/components/apex/Trims";
import { Reserve } from "@/components/apex/Reserve";
import { Footer } from "@/components/apex/Footer";

const title = "Apex Roadster — 1,020 hp Hybrid Hypercar";
const description =
  "Meet the Apex Roadster: a limited-series carbon-monocoque hypercar with 1,020 hp, active aero and 0–100 km/h in 2.4 seconds. Reserve your allocation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <main>
        <Hero />
        <Design />
        <Performance />
        <Gallery />
        <Trims />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}
