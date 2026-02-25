import { Navbar } from "./layout/Navbar";
import { Hero } from "./secciones/Hero";
import { About } from "./secciones/About";
import { Projects } from "./secciones/Projects";
import { Experience } from "./secciones/Experience";
import { Contacto } from "./secciones/Contacto";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contacto />
      </main>
    </div>
  );
}

export default App;