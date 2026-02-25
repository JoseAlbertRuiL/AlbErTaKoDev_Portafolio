const projects = [
  {
    title: "Aplicacion de Escritorio para gestion de una Libreria",
    description:
      "Aplicación de escritorio para gestionar inventario, ventas y clientes de una librería con funcionalidades completas.",
    tags: ["Java","SQLite"],
    accent: "primary",
    link: "#",
    repo: "#",
  },
  {
    title: "Plataforma de Solicitud y Renovacion de Pasaportes",
    description:
      "Sistema web para gestionar solicitudes y renovaciones de pasaportes con validación de documentos y seguimiento en tiempo real.",
    tags: ["React", "Laravel","MySQL"],
    accent: "highlight",
    link: "#",
    repo: "#",
  },
  {
    title: "Portafolio AlbErTaKoDev",
    description:
      "Portafolio personal desarrollado con React y Tailwind CSS, mostrando proyectos, experiencia y habilidades de manera elegante y responsiva.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    accent: "primary",
    link: "#",
    repo: "#",
  },
  {
    title: "UNIRAITE (En proceso)",
    description:
      "Aplicacion movil para la conexion entre estudiantes. Se enfoca en el transporte compartido para estudiantes universitarios, facilitando la organización de viajes y reduciendo costos y emisiones.",
    tags: ["React Native", "Nest.js", "PostgreSQL", "Expo", "NativeWind"],
    accent: "highlight",
    link: "#",
    repo: "#",
  },
  {
    title: "Pagina Web para Hotel (En proceso)",
    description:
      "Sitio web para un hotel con funcionalidades de reservas, galería de imágenes y sistema de gestión de habitaciones.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Node.js", "PostgreSQL"],
    accent: "primary",
    link: "#",
    repo: "#",
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="glass rounded-2xl p-6 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
    {/* Línea de acento top */}
    <div
      className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${project.accent === "primary" ? "bg-primary" : "bg-highlight"}`}
    />

    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
      <div className="flex gap-2">
      </div>
    </div>

    <p className="text-sm leading-relaxed text-muted-foreground mb-5">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-muted/60
            ${project.accent === "primary" ? "text-primary" : "text-highlight"}`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono tracking-widest uppercase text-primary">
            02
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Proyectos
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};