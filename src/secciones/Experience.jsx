const experiences = [
  {
    role: "Desarrollador Frontend",
    period: "2026 — Presente",
    description:
      "Desarrollo de interfaces de usuario con React y Next.js. Implementación de design systems, optimización de performance y colaboración directa con diseñadores UX.",
    highlights: ["React", "JavaScript", "Tailwind CSS"],
    type: "work",
  },
  {
    role: "Freelance Frontend Developer",
    company: "Proyectos independientes",
    period: "2025 — Presente",
    description:
      "Desarrollo de aplicaciones web completas para clientes de distintos sectores: e-commerce, servicios y educación.",
    highlights: ["Node.js", "React", "PostgreSQL"],
    type: "work",
  },
  {
    role: "Ingeniería en Sistemas Computacionales",
    company: "Instituto Tecnológico de Morelia",
    period: "2022 — Presente",
    description:
      "Ingenieria en sistemas con especialización en desarrollo de software",
    highlights: ["Algoritmos", "BD Relacionales", "Redes", "POO"],
    type: "edu",
  },
];

const ExperienceItem = ({ exp }) => (
  <div className="relative group pl-12">
    {/* Punto en la línea */}
    <div
      className={`absolute left-[-0.65rem] top-1 w-3 h-3 rounded-full border-2 border-background
        group-hover:scale-125 transition-transform duration-300
        ${exp.type === "work" ? "bg-primary shadow-[0_0_8px_theme(colors.primary/60%)]" : "bg-highlight shadow-[0_0_8px_theme(colors.highlight/60%)]"}`}
    />

    <div className="glass rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
          <p className={`text-sm font-medium ${exp.type === "work" ? "text-primary" : "text-highlight"}`}>
            {exp.company}
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full glass text-muted-foreground whitespace-nowrap self-start sm:self-center">
          {exp.period}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground mb-4">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.highlights.map((h) => (
          <span
            key={h}
            className="text-xs px-2.5 py-1 rounded-md font-mono bg-muted/60 text-muted-foreground"
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono tracking-widest uppercase text-primary">
            03
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Experiencia
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical en la parte izquierda */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};