import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Módulo de Analítica Predictiva (SEANI)",
    description:
      "Integración de un módulo inteligente en la plataforma SEANI para la predicción de deserción estudiantil. Implementación de algoritmos matemáticos, procesamiento de datos y generación de proyecciones automatizadas dentro de un entorno web.",
    image: "/projects/project4.jpeg",
    tags: ["Python", "Django", "Scikit-Learn", "Pandas", "MySQL"],
    github: "#",
  },
  {
    title: "Panel de Administración SEANI",
    description:
      "Diseño y arquitectura completa del panel de control académico para la gestión institucional. Configuración de vistas dinámicas, plantillas avanzadas y una estructura robusta para el flujo de permisos y control de usuarios.",
    image: "/projects/project3.jpeg",
    tags: ["Python", "Django", "JavaScript", "HTML5 / CSS3", "MySQL"],
    github: "#",
    },
  {
    title: "Ecosistema de Termostato Inteligente",
    description:
      "Desarrollo integral de un sistema IoT enfocado en el control térmico automatizado. Incluye la programación del firmware del microcontrolador (lectura de sensores), una aplicación móvil para el control en tiempo real y una página web informativa.",
    image: "/projects/project2.jpeg",
    tags: ["IoT", "Sistemas Embebidos", "Mobile Dev", "React", "Firebase"],
    github: "#",
  },
  {
    title: "Sistema Punto de Venta (POS)",
    description:
      "Diseño e implementación de un sistema de escritorio nativo para la automatización de transacciones comerciales. Programación estructurada con lógica de negocio orientada a objetos, gestión de inventarios y bases de datos relacionales.",
    image: "/projects/project1.jpeg",
    tags: ["Python", "POO", "MySQL", "Arquitectura de Software"],
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Luces de fondo (Glows) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Proyectos Destacados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyectos que{" "}
            <span className="font-serif italic font-normal text-white">
              generan impacto.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Una selección de mis trabajos recientes: desde aplicaciones web complejas e integración con hardware (IoT), hasta módulos analíticos basados en datos reales.
          </p>
        </div>

        {/* Rejilla de Proyectos (Grid) */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Contenedor de Imagen */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Enlaces en el Overlay al hacer Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};