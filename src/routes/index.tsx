import { createFileRoute, Link } from "@tanstack/react-router";
import chair from "@/assets/syndev-chair.png";
import { CtaBand, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYNDEV — Cooperativa de consultoría y software" },
      { name: "description", content: "SYNDEV: cooperativa retrofuturista de consultorías tecnológicas y desarrollo de software. Espacios que impulsan ideas." },
      { property: "og:title", content: "SYNDEV — Espacios que impulsan ideas" },
      { property: "og:description", content: "Consultorías y software hechos en cooperativa, con alma retrofuturista." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "100%", l: "Propiedad de quienes trabajan" },
  { n: "1 socia = 1 voto", l: "Decisiones horizontales" },
  { n: "Código abierto", l: "Por defecto, siempre que se pueda" },
  { n: "24 h", l: "Respuesta a tu consulta" },
];

const teasers = [
  { to: "/servicios", code: "A", title: "Servicios", text: "Consultorías, software a medida, datos y acompañamiento." },
  { to: "/metodo", code: "B", title: "Método", text: "Trabajamos en ciclos de retroalimentación, como un sistema viable." },
  { to: "/inspiracion", code: "C", title: "Inspiración", text: "Cybersyn y el sueño de una tecnología al servicio de las personas." },
] as const;

function Index() {
  return (
    <>
      <section className="grid-bg relative flex min-h-screen items-center pt-24">
        <div className="sun pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] opacity-40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-primary">▸ Cooperativa tecnológica · Est. 2026</p>
            <h1 className="font-display text-6xl leading-none tracking-wider md:text-8xl">
              S<span className="text-primary text-glow">Y</span>NDEV
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.5em] text-muted-foreground">Espacios que impulsan ideas</p>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Consultorías y software hechos en cooperativa. Tecnología al servicio de las personas, inspirada en el sueño de Cybersyn.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contacto" className="rounded-full bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground glow transition hover:scale-105">Iniciar consulta</Link>
              <Link to="/servicios" className="rounded-full border-2 border-ink px-8 py-4 font-mono text-sm uppercase tracking-widest transition hover:bg-ink hover:text-ink-foreground">Ver servicios</Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="animate-orbit absolute inset-0">
              <div className="absolute inset-[8%] rounded-full border-[6px] border-primary/80 [transform:rotateX(70deg)_rotateZ(-20deg)]" />
            </div>
            <div className="animate-orbit-rev absolute inset-[18%] rounded-full border border-dashed border-primary/50" />
            <div className="absolute left-[10%] top-[45%] h-8 w-8 rounded-full bg-primary glow" />
            <span className="absolute right-[12%] top-[14%] animate-float text-5xl text-primary">✦</span>
            <img src={chair} alt="Silla retrofuturista SYNDEV" className="animate-float absolute inset-[15%] h-[70%] w-[70%] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-2 border-ink bg-ink py-3 text-primary">
        <div className="animate-marquee flex w-max gap-12 font-mono text-sm uppercase tracking-[0.3em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-12">
              {["Consultorías", "Software a medida", "Datos en tiempo real", "Código abierto", "Trabajo cooperativo", "Hecho en Chile"].map((w) => (
                <span key={w}>✦ {w}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="border-l-4 border-primary pl-5">
            <p className="font-display text-2xl">{s.n}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <SectionTitle tag="Explora la red">Tres nodos, un sistema</SectionTitle>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {teasers.map((t) => (
            <Link key={t.to} to={t.to} className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-10 transition duration-300 hover:-translate-y-2 hover:border-primary hover:glow">
              <span className="font-display text-6xl text-primary/30 transition group-hover:text-primary">{t.code}</span>
              <h3 className="mt-6 font-display text-xl">{t.title}</h3>
              <p className="mt-3 text-muted-foreground">{t.text}</p>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-primary">Entrar ▸</p>
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/10 transition group-hover:scale-[3]" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
