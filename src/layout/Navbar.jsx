import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "Acerca de" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = () => {
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
        ${scrolled ? "glass border-b border-border/50" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo siempre visible */}
        <a href="#" className="text-xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity duration-200">
          AlbErTaKo<span className="text-primary">Dev</span>
        </a>

        {/* NavBar para pantallas grandes */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-surface/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:scale-105 transition-all duration-200"
          >
            Contáctame
          </a>
        </div>

        {/* Modelo Hamburguesa — solo en celular  */}
        <button
          className="flex md:hidden p-2 rounded-lg glass text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu desplegable */}
      {menuOpen && (
        <div className="flex flex-col md:hidden mx-4 mt-2 glass rounded-2xl p-4 gap-1">
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
            className="block px-4 py-3 mt-1 rounded-xl text-sm font-semibold text-center bg-primary text-white"
          >
            Contáctame
          </a>
        </div>
      )}
    </header>
  );
};