export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Grid sutil de fondo */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Disponible para proyectos
          </span>
        </div>

        {/* Nombre */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 leading-none tracking-tight">
          <span className="text-foreground">Alber</span>
          <span className="text-primary">Tako</span>
          <span className="text-foreground">Dev</span>
        </h1>

        {/* Rol */}
        <p className="text-xl md:text-2xl mb-6 font-light text-muted-foreground">
          Desarrollador Front-End &{" "}
          <span className="text-highlight">Diseñador UI/UX</span>
        </p>

        {/* Descripción */}
        <p className="max-w-xl mx-auto text-base md:text-lg mb-10 leading-relaxed text-muted-foreground">
          Construyo experiencias digitales elegantes, rápidas e intuitivas.
          Apasionado por el código limpio y el diseño con propósito.
        </p>
 
      </div>
    </section>
  );
};