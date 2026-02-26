import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "Acerca de" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },

];

export const Navbar = () => { // Componente de barra de navegación con efecto de cristal y el menu basico para movil con modelo hamburguesa
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ( 
    <header
      className={`fixed top-0 left-0 right-0 py-4 transition-all duration-300 z-[9999]
        ${scrolled ? "glass border-b border-border/50" : "bg-transparent border-b border-transparent"}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity duration-200"
        >
          AlbErTaKo<span className="text-primary">Dev</span>
        </a>

        {/* Navegacion por escritorio */}
         <div className="hidden md:flex items-center gap-1"> {/* Solo se muestra en pantallas medianas o mayores */}
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1"> {/* Es el fondo del header en la parte de navegacion (izquierdad), donde se ve usara un cristalino*/}
                    {navLinks.map((link, index) => (   
                        <a href={link.href} 
                        key={index} 
                        className="px-4 py-2 text-sm hover:text-foreground rounded-full transition-colors duration-300 hover:bg-surface/50"
                        >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>

        <a // Botón de contacto para escritorio
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          Contactame
        </a>

        {/* Botón de menú móvil */}
        <button
          className="flex md:hidden p-2 rounded-lg glass text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass mx-4 mt-2 rounded-2xl p-4 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-surface/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 rounded-xl text-sm font-semibold text-center bg-primary text-white mt-2"
          >
            Contáctame
          </a>
        </div>
      )}
    </header>
  );
};