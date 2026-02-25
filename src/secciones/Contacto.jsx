import { useState } from "react";
{/* Iconos de redes sociales */}
const GithubIcon = () => ( //iconos hechos con svg, para no depender de librerias externas y tener un control total sobre su apariencia
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2C4.575 2 2 4.575 2 7.75v8.5C2 19.425 4.575 22 7.75 22h8.5C19.425 22 22 19.425 22 16.25v-8.5C22 4.575 19.425 2 16.25 2h-8.5zm8.5 2c2.07 0 3.75 1.68 3.75 3.75v8.5c0 2.07-1.68 3.75-3.75 3.75h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4h8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const socialLinks = [
  { label: "GitHub", href: "https://github.com/JoseAlbertRuiL", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alberto-lopez-68481a358/", icon: <LinkedinIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/albertorl04/", icon: <InstagramIcon /> },
];

const inputClass = //clase base para los campos del formulario, para mantener consistencia y facilitar cambios futuros
  "w-full rounded-xl px-4 py-3 text-sm text-foreground bg-surface border border-border outline-none focus:ring-1 focus:ring-primary transition-all duration-200";

export const Contacto = () => { //componente de contacto, con un formulario funcional (aunque sin funcionalidas real) y enlaces a redes sociales
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => { //simula el envio del formulario, resetea los campos y muestra un mensaje de confirmacion por unos segundos
    e.preventDefault();
    setSent(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return ( //estructura del componente, con un diseño responsivo usando Tailwind
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-mono tracking-widest uppercase text-primary">
            04
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Contacto
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info lateral */}
          <div className="space-y-8">
            <div>
              <p className="text-lg font-medium text-foreground mb-2">
                ¿Tienes un proyecto en mente?
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Estoy disponible para proyectos freelance, colaboraciones o
                simplemente una buena conversación sobre tecnología y diseño.
                No dudes en escribirme.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl px-5 py-4 group hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-primary">{s.icon}</span>
                  <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {s.label}
                  </span>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            {[
              { id: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
              { id: "email", label: "Email", type: "email", placeholder: "tu@email.com" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-muted-foreground mb-2">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  value={form[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={inputClass}
                />
              </div>
            ))}

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-muted-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-sm bg-primary text-white hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              {sent ? "Mensaje enviado" : "Enviar mensaje"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 text-center text-sm text-muted-foreground border-t border-border">
          Diseñado y construido por {" "} 
          <span className="text-primary">AlbErTaKoDev</span>{" "}en{" "}
           {new Date().getFullYear()}
          <span className="text-muted-foreground"> para TSIS </span>
        </div>
      </div>
    </section>
  );
};