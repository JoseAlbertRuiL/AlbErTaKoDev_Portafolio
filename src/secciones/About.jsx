const skills = [ // Tecnologias agrupadas por categoría
  { category: "Frontend", items: ["React", "React Native", "Tailwind CSS", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Java", "Laravel"] },
  { category: "Herramientas", items: ["Git", "VS Code", "NetBeans", "Expo"] },
];

const stats = [ //cUADROS DE ESTADISTICAS, sobre mi experiencia, proyectos y tecnologias que manejo
  { value: "+2", label: "Años de exp." },
  { value: "+5", label: "Proyectos" },
  { value: "8", label: "Tecnologías" },
];

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">

        {/* Encabezado */} 
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono tracking-widest uppercase text-primary">
            01
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Acerca de mí
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Texto stats */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Soy un desarrollador apasionado por crear soluciones digitales que
              combinan{" "}
              <span className="text-foreground font-medium">
                funcionalidad y diseño elegante
              </span>
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cuando no programo, me gusta explorar nuevas tecnologías, contribuir a proyectos
              y ver contenido relacionado con el desarrollo
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold mb-1 text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm font-medium glass text-foreground hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};