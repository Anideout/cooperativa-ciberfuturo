import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import chair from "@/assets/syndev-chair.png";
import opsroom from "@/assets/opsroom.jpg";

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

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`font-display text-xl tracking-[0.15em] ${light ? "text-cream" : "text-ink"}`}>
      S<span className="text-primary">Y</span>NDEV
    </span>
  );
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("es-CL", { hour12: false }));
    f();
    const i = setInterval(f, 1000);
    return () => clearInterval(i);
  }, []);
  return <span>{t || "--:--:--"}</span>;
}

function Typer({ lines }: { lines: string[] }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const total = lines.join("\n").length;
    if (n >= total) return;
    const i = setTimeout(() => setN(n + 1), 28);
    return () => clearTimeout(i);
  }, [n, lines]);
  return (
    <pre className="whitespace-pre-wrap text-sm leading-relaxed">
      {lines.join("\n").slice(0, n)}
      <span className="animate-blink">█</span>
    </pre>
  );
}

const services = [
  { code: "01", title: "Consultorías", text: "Diagnóstico tecnológico, arquitectura y estrategia digital para tu organización." },
  { code: "02", title: "Desarrollo de software", text: "Aplicaciones web y móviles a medida, construidas con código abierto y buenas prácticas." },
  { code: "03", title: "Sistemas de datos", text: "Tableros, flujos de información y automatización para decidir en tiempo real." },
  { code: "04", title: "Acompañamiento", text: "Capacitación y soporte continuo: la tecnología es de quien la usa." },
];

const steps = ["Escuchamos", "Modelamos", "Construimos", "Retroalimentamos"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest md:flex">
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#metodo" className="hover:text-primary">Método</a>
            <a href="#sala" className="hover:text-primary">Sala</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </nav>
          <a href="#contacto" className="rounded-full bg-primary px-5 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground glow transition hover:scale-105">
            Consultar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="grid-bg relative flex min-h-screen items-center pt-24">
        <div className="sun pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] opacity-40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-primary">
              ▸ Cooperativa tecnológica · Est. 2026
            </p>
            <h1 className="font-display text-6xl leading-none tracking-wider md:text-8xl">
              S<span className="text-primary text-glow">Y</span>NDEV
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.5em] text-muted-foreground">
              Espacios que impulsan ideas
            </p>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Consultorías y software hechos en cooperativa. Tecnología al servicio de las personas,
              inspirada en el sueño de Cybersyn.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contacto" className="rounded-full bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground glow transition hover:scale-105">
                Iniciar consulta
              </a>
              <a href="#servicios" className="rounded-full border-2 border-ink px-8 py-4 font-mono text-sm uppercase tracking-widest transition hover:bg-ink hover:text-ink-foreground">
                Ver servicios
              </a>
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

      {/* MARQUEE */}
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

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// Módulos</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl">Lo que hacemos</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.code} className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:glow">
              <span className="font-mono text-5xl text-primary/30 transition group-hover:text-primary">{s.code}</span>
              <h3 className="mt-6 font-display text-lg">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/10 transition group-hover:scale-[3]" />
            </article>
          ))}
        </div>
      </section>

      {/* METODO + CRT */}
      <section id="metodo" className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// Sistema viable</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Un método en ciclo</h2>
            <p className="mt-6 max-w-md text-ink-foreground/70">
              Como el modelo de sistema viable, trabajamos en ciclos de retroalimentación constante
              contigo. Decisiones horizontales, resultados reales.
            </p>
            <ol className="mt-10 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-5 border-b border-ink-foreground/15 pb-4">
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary font-mono text-primary">
                    {i + 1}
                    <span className="animate-pulse-ring absolute inset-0 rounded-full border border-primary" style={{ animationDelay: `${i * 0.6}s` }} />
                  </span>
                  <span className="font-display text-lg tracking-wider">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="crt scanlines rounded-3xl p-8">
            <div className="mb-6 flex justify-between border-b border-primary/40 pb-3 text-xs uppercase tracking-widest">
              <span>SYNDEV/OPS-TERMINAL</span>
              <Clock />
            </div>
            <Typer
              lines={[
                "> iniciando sala de operaciones...",
                "> conectando nodos: NORTE · CENTRO · SUR · AUSTRAL",
                "> estado de la cooperativa ........ [ OK ]",
                "> proyectos activos ............... 12",
                "> consultorías en curso ........... 07",
                "> socias y socios ................. 100% dueños",
                "> esperando tu idea_",
              ]}
            />
            <div className="mt-8 flex h-20 items-end gap-1">
              {[40, 65, 30, 80, 55, 90, 70, 45, 85, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SALA */}
      <section id="sala" className="relative">
        <img src={opsroom} alt="Sala de operaciones retrofuturista" loading="lazy" width={1600} height={912} className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 text-ink-foreground">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// Inspiración</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-5xl">
            El futuro se diseña en conjunto
          </h2>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="grid-bg py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center font-mono text-xs uppercase tracking-[0.4em] text-primary">// Canal abierto</p>
          <h2 className="mt-3 text-center font-display text-3xl md:text-5xl">Haz tu consulta</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("¡Transmisión recibida! Te contactaremos pronto.");
              (e.target as HTMLFormElement).reset();
            }}
            className="mt-12 space-y-5 rounded-3xl border-2 border-ink bg-card p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input required placeholder="Nombre" className="rounded-xl border-2 border-input bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary" />
              <input required type="email" placeholder="Correo" className="rounded-xl border-2 border-input bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary" />
            </div>
            <select className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary">
              <option>Consultoría</option>
              <option>Desarrollo de software</option>
              <option>Sistemas de datos</option>
              <option>Otro</option>
            </select>
            <textarea required rows={5} placeholder="Cuéntanos tu idea..." className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary" />
            <button className="w-full rounded-full bg-primary py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground glow transition hover:scale-[1.02]">
              Transmitir ▸
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-ink py-10 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Logo light />
          <p className="font-mono text-xs uppercase tracking-widest text-ink-foreground/60">
            Cooperativa SYNDEV · Espacios que impulsan ideas
          </p>
        </div>
      </footer>
    </div>
  );
}
