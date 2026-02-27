import { useState } from "react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/SocialIcons";

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