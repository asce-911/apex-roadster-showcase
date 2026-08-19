export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-display text-xl tracking-[0.2em]">
          APEX<span className="text-primary">.</span>
        </span>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#design" className="transition-colors hover:text-primary">
            Design
          </a>
          <a href="#performance" className="transition-colors hover:text-primary">
            Performance
          </a>
          <a href="#gallery" className="transition-colors hover:text-primary">
            Gallery
          </a>
          <a href="#trims" className="transition-colors hover:text-primary">
            Trims
          </a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Apex Motors. Concept showcase.
        </p>
      </div>
    </footer>
  );
}