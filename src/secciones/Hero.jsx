import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/SocialIcons";
import FotoHero from "../assets/Foto_Hero.jpeg";

const socialLinks = [
  { href: "https://github.com/JoseAlbertRuiL", icon: <GithubIcon />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/alberto-lopez-68481a358/", icon: <LinkedinIcon />, label: "LinkedIn" },
  { href: "https://www.instagram.com/albertorl04/", icon: <InstagramIcon />, label: "Instagram" },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen  flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-0"
      /* Se agrego para que en celular el marco+foto no tape el navbar */
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Columna izquierda foto + redes */}
          <div className="flex flex-col items-center gap-6">
            {/* Marco con borde*/}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Borde que recorre la foto */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: "conic-gradient(var(--color-primary) 0deg, transparent 120deg, transparent 360deg)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-background " />
              </div>

              {/* Foto encima */}
              <div className="absolute inset-3 rounded-full overflow-hidden">
                <img
                  src={FotoHero}
                  alt="AlbErTaKoDev"
                  className="w-full h-full object-cover md:scale-110 md:-translate-y-4 transition-transform duration-300 hover:scale-125 hover:-translate-y-6"
                  />
              </div>
            </div>

            {/* Iconos redes sociales */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna derecha — Texto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">

            {/* Badge disponibilidad */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Disponible para proyectos
              </span>
            </div>

            {/* Nombre */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-foreground">Alber</span>
              <span className="text-primary">TaKo</span>
              <span className="text-foreground">Dev</span>
            </h1>

            {/* Rol */}
            <p className="text-lg sm:text-xl md:text-2xl mb-6 font-light text-muted-foreground">
              Desarrollador Front-End &{" "}
              <span className="text-highlight">Diseñador UI/UX</span>
            </p>

            {/* Descripción */}
            <p className="text-base md:text-lg mb-10 leading-relaxed text-muted-foreground">
              Hola, soy Alberto López, me gusta construir experiencias digitales elegantes, rápidas e intuitivas.
              Adaptabilidad a cualquier necesidad o requerimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};