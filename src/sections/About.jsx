import React from "react";
import { Code2, Database, Rocket, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description:
      "Escritura de código estructurado, mantenible y escalable aplicando buenas prácticas.",
  },
  {
    icon: Database,
    title: "Arquitectura Robusta",
    description:
      "Diseño y gestión eficiente de bases de datos relacionales y no relacionales.",
  },
  {
    icon: Rocket,
    title: "Rendimiento Full-Stack",
    description:
      "Optimización de la lógica del servidor y la interfaz para experiencias rápidas y estables.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Lógica",
    description:
      "Enfoque analítico para prevenir vulnerabilidades y estructurar flujos lógicos eficientes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda - Texto de Presentación */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo el futuro,
              <br />
              <span className="font-serif italic font-normal text-white">
                línea por línea.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy una desarrolladora de software enfocado en la creación de productos 
                digitales eficientes. Mi camino en la tecnología comenzó con la curiosidad 
                por entender cómo funcionan los sistemas  y se ha consolidado en un profundo 
                interés por el desarrollo full-stack, la lógica del backend y la gestión de datos.
              </p>
              <p>
                Me especializo en tecnologías como Java, Python, Django, JavaScript , lo 
                que me permite abordar proyectos de forma integral: desde el diseño y modelado de bases 
                de datos sólidas hasta la implementación de interfaces de usuario modernas y funcionales.
              </p>
              <p>
                Me entusiasma resolver problemas lógicos , optimizar el rendimiento de las 
                aplicaciones y aplicar conceptos avanzados de análisis predictivo y seguridad para garantizar 
                que cada software sea tanto seguro como escalable.
              </p>
            </div>

            {/* Cuadro de Filosofía/Misión */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es desarrollar software que no solo sea funcional y resuelva problemas reales, 
                sino que cuente con una arquitectura limpia que otros desarrolladores amen mantener y 
                escalar."
              </p>
            </div>
          </div>

          {/* Columna Derecha - Tarjetas de Enfoque (Highlights) */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};