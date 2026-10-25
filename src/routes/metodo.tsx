import { createFileRoute } from "@tanstack/react-router";
import { Clock, CtaBand, PageHero, SectionTitle, Typer } from "@/components/site";

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método — SYNDEV" },
      { name: "description", content: "Un método en ciclos de retroalimentación, inspirado en el modelo de sistema viable." },
      { property: "og:title", content: "Método — SYNDEV" },
      { property: "og:description", content: "Cómo trabaja la cooperativa SYNDEV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Metodo,
});

const steps = [
  { t: "Escuchamos", d: "Conversamos contigo y con quienes usarán la solución." },
  { t: "Modelamos", d: "Dibujamos el sistema: flujos, datos y prioridades." },
  { t: "Construimos", d: "Entregas cortas y visibles, cada dos semanas." },
  { t: "Retroalimentamos", d: "Medimos, ajustamos y volvemos a empezar el ciclo." },
];

const values = [
  { t: "Autogestión", d: "Sin jefaturas: cada socia y socio decide." },
  { t: "Transparencia", d: "Costos, avances y código siempre a la vista." },
  { t: "Soberanía", d: "Tu software y tus datos son tuyos." },
  { t: "Comunidad", d: "Priorizamos proyectos con impacto social." },
];

function Metodo() {
  return (
    <>
      <PageHero tag="Sistema viable" title="Un método en ciclo" text="Como el modelo de sistema viable, trabajamos en ciclos de retroalimentación constante contigo. Decisiones horizontales, resultados reales." />
      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2">
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-5 border-b border-ink-foreground/15 pb-6">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary font-mono text-primary">
                  {i + 1}
                  <span className="animate-pulse-ring absolute inset-0 rounded-full border border-primary" style={{ animationDelay: `${i * 0.6}s` }} />
                </span>
                <div>
                  <p className="font-display text-lg tracking-wider">{s.t}</p>
                  <p className="mt-1 text-sm text-ink-foreground/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="crt scanlines rounded-3xl p-8">
            <div className="mb-6 flex justify-between border-b border-primary/40 pb-3 text-xs uppercase tracking-widest">
              <span>SYNDEV/OPS-TERMINAL</span>
              <Clock />
            </div>
            <Typer lines={[
              "> iniciando sala de operaciones...",
              "> conectando nodos: NORTE · CENTRO · SUR · AUSTRAL",
              "> estado de la cooperativa ........ [ OK ]",
              "> ciclo actual .................... retroalimentación",
              "> socias y socios ................. 100% dueños",
              "> esperando tu idea_",
            ]} />
            <div className="mt-8 flex h-20 items-end gap-1">
              {[40, 65, 30, 80, 55, 90, 70, 45, 85, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionTitle tag="Principios">Valores cooperativos</SectionTitle>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-3xl border-2 border-border bg-card p-8 transition hover:border-primary hover:glow">
              <span className="text-3xl text-primary">✦</span>
              <h3 className="mt-4 font-display text-lg">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
