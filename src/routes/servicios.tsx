import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — SYNDEV" },
      { name: "description", content: "Consultorías tecnológicas, desarrollo de software a medida, sistemas de datos y acompañamiento." },
      { property: "og:title", content: "Servicios — SYNDEV" },
      { property: "og:description", content: "Lo que hace la cooperativa SYNDEV: consultorías y software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

const services = [
  { code: "01", title: "Consultorías", text: "Diagnóstico tecnológico, arquitectura y estrategia digital para tu organización.", items: ["Auditoría de sistemas", "Hoja de ruta digital", "Selección de herramientas", "Seguridad básica"] },
  { code: "02", title: "Desarrollo de software", text: "Aplicaciones web y móviles a medida, construidas con código abierto.", items: ["Sitios y plataformas web", "Apps móviles", "Sistemas internos", "Integraciones"] },
  { code: "03", title: "Sistemas de datos", text: "Tableros y flujos de información para decidir en tiempo real.", items: ["Tableros de control", "Automatización", "Reportes", "Migración de datos"] },
  { code: "04", title: "Acompañamiento", text: "Capacitación y soporte continuo: la tecnología es de quien la usa.", items: ["Talleres para equipos", "Soporte mensual", "Documentación", "Mantención"] },
];

const formats = [
  { name: "Consulta rápida", desc: "Una sesión para ordenar tu idea y darte un camino claro.", time: "1 sesión" },
  { name: "Proyecto", desc: "Diseñamos y construimos tu software de principio a fin.", time: "4 – 16 semanas" },
  { name: "Alianza", desc: "Un equipo de la cooperativa trabajando contigo de forma continua.", time: "Mensual" },
];

function Servicios() {
  return (
    <>
      <PageHero tag="Módulos" title="Lo que hacemos" text="Cuatro módulos que se combinan según lo que tu organización necesita. Desde una conversación hasta un sistema completo." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-28 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.code} className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-10 transition duration-300 hover:-translate-y-1 hover:border-primary hover:glow">
            <span className="font-mono text-5xl text-primary/30 transition group-hover:text-primary">{s.code}</span>
            <h2 className="mt-6 font-display text-2xl">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 font-mono text-sm">
              {s.items.map((i) => <li key={i}>▸ {i}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle tag="Formatos">¿Cómo trabajamos juntos?</SectionTitle>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {formats.map((f, i) => (
              <div key={f.name} className={`crt scanlines rounded-3xl p-8 ${i === 1 ? "md:-translate-y-4" : ""}`}>
                <p className="text-xs uppercase tracking-widest">{f.time}</p>
                <h3 className="mt-4 font-display text-xl text-glow">{f.name}</h3>
                <p className="mt-4 text-sm text-ink-foreground/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
