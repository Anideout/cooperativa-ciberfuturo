import { createFileRoute } from "@tanstack/react-router";
import opsroom from "@/assets/opsroom.jpg";
import { CtaBand, PageHero, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/inspiracion")({
  head: () => ({
    meta: [
      { title: "Inspiración — SYNDEV" },
      { name: "description", content: "Cybersyn y el sueño de una tecnología al servicio de las personas inspiran a SYNDEV." },
      { property: "og:title", content: "Inspiración — SYNDEV" },
      { property: "og:description", content: "La historia que inspira a la cooperativa SYNDEV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Inspiracion,
});

const timeline = [
  { y: "1971", t: "Nace Cybersyn", d: "Chile imagina una red de información para coordinar la economía en tiempo real." },
  { y: "1972", t: "La sala de operaciones", d: "Sillas giratorias, pantallas y decisiones colectivas: un diseño adelantado a su época." },
  { y: "1973", t: "Un sueño interrumpido", d: "El proyecto se detiene, pero su idea sigue viva." },
  { y: "2026", t: "SYNDEV", d: "Retomamos ese espíritu: tecnología cooperativa, abierta y para las personas." },
];

function Inspiracion() {
  return (
    <>
      <PageHero tag="Inspiración" title="El futuro se diseña en conjunto" text="Nuestro nombre y nuestra estética rinden homenaje a Cybersyn, el proyecto chileno que soñó con usar la tecnología para el bien común." />
      <section className="relative scanlines">
        <img src={opsroom} alt="Sala de operaciones retrofuturista" loading="lazy" width={1600} height={912} className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      </section>
      <section className="mx-auto max-w-5xl px-6 py-28">
        <SectionTitle tag="Línea de tiempo">De Cybersyn a SYNDEV</SectionTitle>
        <ol className="relative mt-14 space-y-12 border-l-2 border-primary pl-10">
          {timeline.map((e) => (
            <li key={e.y} className="relative">
              <span className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-primary glow" />
              <p className="font-mono text-sm text-primary">{e.y}</p>
              <h3 className="mt-1 font-display text-xl">{e.t}</h3>
              <p className="mt-2 text-muted-foreground">{e.d}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
