import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`font-display text-xl tracking-[0.15em] ${light ? "text-cream" : "text-ink"}`}>
      S<span className="text-primary">Y</span>NDEV
    </span>
  );
}

const nav = [
  { to: "/servicios", label: "Servicios" },
  { to: "/metodo", label: "Método" },
  { to: "/inspiracion", label: "Inspiración" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary" activeProps={{ className: "text-primary text-glow" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contacto" className="hidden rounded-full bg-primary px-5 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground glow transition hover:scale-105 sm:inline-block">
            Consultar
          </Link>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-ink md:hidden"
          >
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="crt scanlines flex flex-col gap-1 p-6 md:hidden">
          {nav.map((n, i) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-lg uppercase tracking-widest" activeProps={{ className: "text-glow" }}>
              {String(i + 1).padStart(2, "0")} ▸ {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink-foreground/60">Espacios que impulsan ideas</p>
        </div>
        <nav className="flex flex-col gap-2 font-mono text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-ink-foreground/70 hover:text-primary">▸ {n.label}</Link>
          ))}
        </nav>
        <p className="text-sm text-ink-foreground/60">
          Cooperativa de trabajo tecnológico. Propiedad de sus socias y socios. Hecho en Chile.
        </p>
      </div>
    </footer>
  );
}

export function PageHero({ tag, title, text }: { tag: string; title: string; text: string }) {
  return (
    <section className="grid-bg relative overflow-hidden pb-20 pt-40">
      <div className="sun pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] opacity-30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// {tag}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export function SectionTitle({ tag, children }: { tag: string; children: ReactNode }) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// {tag}</p>
      <h2 className="mt-3 font-display text-3xl md:text-5xl">{children}</h2>
    </>
  );
}

export function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("es-CL", { hour12: false }));
    f();
    const i = setInterval(f, 1000);
    return () => clearInterval(i);
  }, []);
  return <span>{t || "--:--:--"}</span>;
}

export function Typer({ lines }: { lines: string[] }) {
  const [n, setN] = useState(0);
  const full = lines.join("\n");
  useEffect(() => {
    if (n >= full.length) return;
    const i = setTimeout(() => setN(n + 1), 28);
    return () => clearTimeout(i);
  }, [n, full]);
  return (
    <pre className="whitespace-pre-wrap text-sm leading-relaxed">
      {full.slice(0, n)}
      <span className="animate-blink">█</span>
    </pre>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <h2 className="max-w-2xl font-display text-3xl md:text-4xl">¿Tienes una idea? Conversémosla.</h2>
        <Link to="/contacto" className="rounded-full bg-ink px-8 py-4 font-mono text-sm uppercase tracking-widest text-ink-foreground transition hover:scale-105">
          Iniciar consulta ▸
        </Link>
      </div>
    </section>
  );
}
