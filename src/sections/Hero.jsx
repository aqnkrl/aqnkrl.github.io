import React from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Facebook,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Java",
  "Python",
  "JavaScript",
  "Django",
  "React",
  "HTML5 / CSS3",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Capa de Fondo */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Fondo de Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Puntos Decorativos Lila */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#cba7fa",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Contenedor Principal */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda - Presentación y Texto */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Desarrollador de Software
              </span>
            </div>

            {/* Títulos Principales */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Creando experiencias <span className="text-primary glow-text">digitales</span>
                <br />
                con absoluta
                <br />
                <span className="font-serif italic font-normal text-white">
                  precisión.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hola, soy Karla López Aquino, estudiante de Ingenieria en Desarrollo de Software . Me especializo en diseñar 
                e implementar aplicaciones web estructuradas, eficientes y escalables, desde la arquitectura de 
                bases de datos hasta interfaces de usuario fluidas.
              </p>
            </div>

           {/* Botones de Acción (CTAs) */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
  
            {/* Botón Contáctame (Redirige al formulario de contacto) */}
                  <a href="#contact" className="inline-block">
                  <Button size="lg" className="gap-2 rounded-full">
                Contáctame
          <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              {/* Botón Descargar CV (Activa la descarga automática) */}
              <a 
                href="/cv.pdf" 
                download="Karla_López_Aquino_CV.pdf"
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Descargar CV
                </AnimatedBorderButton>
              </a>
              </div>

            {/* Enlaces a Redes Sociales */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Sígueme: </span>
              {[
                { icon: Github, href: "https://github.com/aqnkrl" },
                { icon: Facebook, href: "https://instagram.com/kar__aqn" },
                { icon: Instagram, href: "https://facebook.com/Karla Aquino" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Columna Derecha - Elementos Visuales del Perfil */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Aura de Efecto de Brillo */}
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />
              
              {/* Marco de la Foto */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Perfil de Desarrollador de Software"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Etiqueta Flotante de Estado */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Disponible para proyectos
                    </span>
                  </div>
                </div>

                {/* Etiqueta Flotante de Enfoque */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">Full</div>
                  <div className="text-xs text-muted-foreground">
                    Stack Dev
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sección de Tecnologías con Desplazamiento Infinito */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tecnologías con las que trabajo
          </p>
          <div className="relative overflow-hidden">
            {/* Sombras de Degradado Laterales */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Cuerpo del Marquee */}
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Desplazamiento Hacia Abajo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Desplazar</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};