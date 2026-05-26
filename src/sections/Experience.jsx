import React from "react";

const experiences = [
  {
    period: "2026 — Presente",
    role: "Desarrollador Full-Stack & Datos (Módulo Predictivo SEANI)",
    company: "Sistema Core de Analítica",
    description:
      "Evolución del ecosistema SEANI mediante la integración de un módulo de análisis predictivo. Implementación de algoritmos matemáticos y procesamiento de datos para la generación de reportes y proyecciones automatizadas dentro del entorno Django.",
    technologies: ["Python", "Django", "Predictive Analytics", "MySQL"],
    current: true,
  },
  {
    period: "2025",
    role: "Desarrollador de Software Integrado (Panel de Administración SEANI)",
    company: "Sistema de Control Académico",
    description:
      "Diseño y desarrollo de la arquitectura completa del panel administrativo. Configuración de páneles dinámicos, gestión de plantillas avanzadas en Django y estructuración del flujo de permisos y control de usuarios.",
    technologies: ["Python", "Django", "JavaScript", "HTML5 / CSS3, MySQL"],
    current: false,
  },
  {
    period: "2025",
    role: "Desarrollador Full-Stack Mobile, Web e IoT (Termostato Inteligente)",
    company: "Proyecto de Hardware y Software Embebido",
    description:
      "Desarrollo integral de un ecosistema IoT: diseño y programación del firmware del microcontrolador para lectura de sensores, creación de una aplicación móvil nativa/híbrida para el control térmico automatizado en tiempo real, y despliegue de una plataforma web informativa para la difusión del proyecto.",
    technologies: ["IoT", "Sistemas Embebidos", "Mobile Dev", "React", "Firebase"],
    current: false,
  },
  {
    period: "2024",
    role: "Desarrollador de Software Core (Sistema Punto de Venta)",
    company: "Solución de Software de Escritorio / Comercial",
    description:
      "Diseño e implementación de un sistema nativo para la gestión comercial y automatización de transacciones. Programación de la lógica de negocio orientada a objetos, control de inventarios y estructuración de la base de datos relacional.",
    technologies: ["Python", "POO", "MySQL", "Arquitectura de Software"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Efecto de Luz de Fondo */}
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Trayectoria Profesional
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experiencia que{" "}
            <span className="font-serif italic font-normal text-white">
              habla con resultados.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Cronología de desarrollo de software integral: desde la automatización de puntos de venta e integración con hardware (IoT), hasta analítica predictiva en plataformas empresariales.
          </p>
        </div>

        {/* Línea de Tiempo (Timeline) */}
        <div className="relative">
          {/* Línea Central */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          {/* Elementos de la Experiencia */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Punto de la Línea de Tiempo */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Contenido de la Tarjeta */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Contenedor de Tecnologías */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};