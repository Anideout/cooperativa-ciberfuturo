import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — SYNDEV" },
      { name: "description", content: "Haz tu consulta a la cooperativa SYNDEV sobre consultorías o desarrollo de software." },
      { property: "og:title", content: "Contacto — SYNDEV" },
      { property: "og:description", content: "Abre un canal con la cooperativa SYNDEV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

const faqs = [
  { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Tras una primera consulta te enviamos una propuesta clara y sin letra chica." },
  { q: "¿Trabajan con organizaciones pequeñas?", a: "Sí. Juntas vecinales, pymes, ONG y otras cooperativas son parte central de nuestro trabajo." },
  { q: "¿El software queda a mi nombre?", a: "Siempre. El código y los datos son de tu organización." },
];

const field = "rounded-xl border-2 border-input bg-background px-4 py-3 font-mono text-sm outline-none focus:border-primary w-full";

function Contacto() {
  return (
    <>
      <PageHero tag="Canal abierto" title="Haz tu consulta" text="Cuéntanos tu idea y te responderemos en un plazo de 24 horas hábiles." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-28 md:grid-cols-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Transmisión recibida! Te contactaremos pronto.");
            (e.target as HTMLFormElement).reset();
          }}
          className="space-y-5 rounded-3xl border-2 border-ink bg-card p-8 md:col-span-3 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input required placeholder="Nombre" className={field} />
            <input required type="email" placeholder="Correo" className={field} />
          </div>
          <input placeholder="Organización (opcional)" className={field} />
          <select className={field}>
            <option>Consultoría</option>
            <option>Desarrollo de software</option>
            <option>Sistemas de datos</option>
            <option>Acompañamiento</option>
            <option>Otro</option>
          </select>
          <textarea required rows={6} placeholder="Cuéntanos tu idea..." className={field} />
          <button className="w-full rounded-full bg-primary py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground glow transition hover:scale-[1.02]">
            Transmitir ▸
          </button>
        </form>
        <div className="space-y-4 md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">// Preguntas frecuentes</p>
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border-2 border-border bg-card p-6 open:border-primary">
              <summary className="cursor-pointer list-none font-display text-sm">
                <span className="mr-2 text-primary transition group-open:rotate-90 inline-block">▸</span>{f.q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
