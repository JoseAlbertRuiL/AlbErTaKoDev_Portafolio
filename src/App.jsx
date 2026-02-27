import { Navbar } from "./layout/Navbar";
import { Hero } from "./secciones/Hero";
import { About } from "./secciones/About";
import { Projects } from "./secciones/Projects";
import { Experience } from "./secciones/Experience";
import { Contacto } from "./secciones/Contacto";
import { Lluvia } from "./components/Lluvia";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* componente para la lluvia de fondo */}
      <Lluvia/>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contacto />
        </main>
      </div>
    </div>
  );
}

export default App;