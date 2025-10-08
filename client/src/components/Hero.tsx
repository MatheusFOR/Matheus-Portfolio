import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import TechIcons from "./TechIcons";
import FloatingTechIcons from "./FloatingTechIcons";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  onContactClick?: () => void;
  onProjectsClick?: () => void;
}

export default function Hero({
  name,
  title,
  description,
  onContactClick,
  onProjectsClick,
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      <FloatingTechIcons />
      
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div>
              <p className="text-primary font-medium mb-2" data-testid="text-greeting">
                Olá, eu sou
              </p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4" data-testid="text-name">
                {name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground" data-testid="text-title">
                {title}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-description">
              {description}
            </p>

            <div className="flex gap-3 flex-wrap">
              <Button size="lg" onClick={onProjectsClick} data-testid="button-projects">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" onClick={onContactClick} data-testid="button-contact">
                <Mail className="h-4 w-4 mr-2" />
                Entrar em Contato
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
                data-testid="link-github"
              >
                <a href="https://github.com/MatheusFOR" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
                data-testid="link-linkedin"
              >
                <a href="https://linkedin.com/in/matheusfor/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-2">
              <div className="bg-muted flex h-full items-center justify-center rounded-2xl w-full">
                <img
                  src="/matheus-perfil.jpg"
                  alt={`Foto de ${name}`}
                  className="h-full object-cover rounded-t-[10px] w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-8">
          <TechIcons />
        </div>

        <div className="flex justify-center animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" data-testid="icon-scroll" />
        </div>
      </div>
    </section>
  );
}
