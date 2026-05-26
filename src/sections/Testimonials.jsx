import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Su trabajo en el ecosistema SEANI ha sido excepcional. En 2025 desarrolló con éxito todo el panel de administración y este 2026 consolidó el proyecto integrando de manera impecable el módulo de analítica predictiva.",
    author: "Mst. Francisco López Briones",
    role: "Coordinador de Proyecto Académico",
  },
  {
    quote:
      "El punto de venta que desarrolló superó nuestras expectativas. Logró automatizar el control de inventarios de forma intuitiva, con una base de datos robusta que no ha fallado ni una sola vez.",
    author: "Carlos Hernandez",
    role: "Propietario, Comercio Retail",
  },
  {
    quote:
      "Integrar hardware (IoT) con una aplicación móvil estable no es tarea fácil, pero él logró conectar el termostato inteligente sin fisuras. Demostró un dominio absoluto de la lógica full-stack.",
    author: "Ing. Gabriel",
    role: "Maestro en IoT",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Luz de fondo ambiental */}
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Testimonios
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Opiniones que{" "}
            <span className="font-serif italic font-normal text-white">
              respaldan el trabajo.
            </span>
          </h2>
        </div>

        {/* Carrusel de Testimonios */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Tarjeta Principal */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              {/* Información del autor (Sin avatar/imagen) */}
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación del Carrusel */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <ChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};