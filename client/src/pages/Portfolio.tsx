import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InteractiveProjectCard from "@/components/InteractiveProjectCard";
import AnimatedSkillCard from "@/components/AnimatedSkillCard";
import ExperienceCard from "@/components/ExperienceCard";
import ContactForm from "@/components/ContactForm";
import { Code, Palette, Wrench, Mail, MapPin, Phone, Terminal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [filterTag, setFilterTag] = useState("all");

  const sections = [
    { label: "Projetos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Experiência", href: "#experience" },
    { label: "Contato", href: "#contact" },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Design System",
      description: "Sistema de design completo com componentes reutilizáveis e documentação.",
      tags: ["React", "Storybook", "Tailwind"],
      category: "design",
      liveUrl: "https://example.com",
    },
    {
      title: "Mobile App",
      description: "Aplicativo mobile para gerenciamento de tarefas e produtividade.",
      tags: ["React Native", "Firebase"],
      category: "web",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description: "Site de portfólio moderno com animações interativas e design responsivo.",
      tags: ["Next.js", "Framer Motion"],
      category: "web",
      liveUrl: "https://example.com",
    },
  ];

  const filteredProjects = filterTag === "all" 
    ? projects 
    : projects.filter(p => p.category === filterTag);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation sections={sections} />

      <div id="hero">
        <Hero
          name="Matheus Rodrigues"
          title="Desenvolvedor Full-Stack & Designer"
          description="Crio experiências digitais excepcionais que conectam pessoas e resolvem problemas reais. Especializado em React, Node.js e design de interfaces modernas."
          onContactClick={scrollToContact}
          onProjectsClick={scrollToProjects}
        />
      </div>

      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <Button
              variant={filterTag === "all" ? "default" : "outline"}
              onClick={() => setFilterTag("all")}
              data-testid="filter-all"
            >
              Todos
            </Button>
            <Button
              variant={filterTag === "web" ? "default" : "outline"}
              onClick={() => setFilterTag("web")}
              data-testid="filter-web"
            >
              Web
            </Button>
            <Button
              variant={filterTag === "design" ? "default" : "outline"}
              onClick={() => setFilterTag("design")}
              data-testid="filter-design"
            >
              Design
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <InteractiveProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSkillCard
              title="Frontend"
              icon={Code}
              skills={[
                { name: "React.js / React Native / Hooks ", level: 5 },
                { name: "JavaScript / TypeScript", level: 4 },
                { name: "HTML5 / CSS3 / SASS / Styled-Components", level: 5 },
                { name: "Tailwind CSS / Bootstrap / jQuery", level: 4 },
                { name: "Redux.js", level: 4 },
              ]}
            />
            <AnimatedSkillCard
              title="Backend"
              icon={Terminal}
              skills={[
                { name: "Java", level: 5 },
                { name: "Node.js", level: 5 },
                { name: "Spring Boot", level: 4 },
                { name: "Spring Framework", level: 4 },
                { name: "PHP / Laravel", level: 3 },
              ]}
            />
            <AnimatedSkillCard
              title="Banco de Dados"
              icon={Database}
              skills={[
                { name: "SQL Server", level: 5 },
                { name: "MySQL", level: 4 },
                { name: "PostgreSQL", level: 3 },
                { name: "MariaDB", level: 3 },
                { name: "MongoDB", level: 3 },
              ]}
            />
            <AnimatedSkillCard
              title="Tools"
              icon={Wrench}
              skills={[
                { name: "Git / GitHub / Bitbucket", level: 5 },
                { name: "Linux", level: 4 },
                { name: "NGINX / Apache", level: 4 },
                { name: "Docker", level: 3 },
                { name: "Cloud AWS/Firebase", level: 3 },
                { name: "CI/CD", level: 3 },
                { name: "WordPress", level: 3 },
                { name: "Scrum / Kanban", level: 4 },
                { name: "TDD, DDD, BDD, SOLID", level: 3 },                                
              ]}
            />
            <AnimatedSkillCard
              title="Design"
              icon={Palette}
              skills={[
                { name: "Figma", level: 5 },
                { name: "UI/UX Design", level: 4 },
                { name: "Branding", level: 3 },
                { name: "Illustration", level: 3 },
              ]}
            />
                        
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experiência</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional
            </p>
          </div>

          <div className="space-y-6">
            <ExperienceCard
              role="Tech Lead"
              company="Isofen Mobi"
              period="2023 - 2025"
              description="Liderança técnica e arquitetura de soluções de software escaláveis."
              achievements={[
                "Liderança da equipe de desenvolvimento e definição da arquitetura técnica das soluções.",
                "Gestão do ciclo completo de desenvolvimento com práticas ágeis (Scrum/Kanban) para otimizar o fluxo de trabalho.",
                "Colaboração direta com stakeholders para alinhar as necessidades do negócio com os requisitos técnicos.",
              ]}
            />
            <ExperienceCard
              role="Desenvolvedor Front-End"
              company="Alpes One (Grupo Carbel)"
              period="2021 - 2023"
              description="Desenvolvimento de aplicações web modernas"
              achievements={[
                "Desenvolvimento de aplicações web para o setor automotivo, com foco em HTML Semântico e JavaScript para melhorar a interatividade.",
                "Utilização de bibliotecas para otimização de Key Performance Indicators (KPIs) e melhoria no ranqueamento de SEO.",
                "Manutenção de rotinas Front-end e Back-end das aplicações e gerenciamento de contêineres com Docker.",
              ]}
            />
            <ExperienceCard
              role="Desenvolvedor Full Stack"
              company="EMI Informática"
              period="2015 - 2019"
              description="Criação de interfaces responsivas e interativas para clientes diversos."
              achievements={[
                "Implementação de regras de negócio e funcionalidades de sistemas utilizando a linguagem JAVA.",
                "Criação e manutenção de APIs RESTful para a comunicação entre as diferentes partes dos sistemas.",
                "Gerenciamento de banco de dados SQL, incluindo a criação de esquemas, backups e atualizações.",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos conversar!
            </p>
          </div>

          <div className="grid lg:grid-cols-[55%_45%] gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>matheusfelipe31@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+55 (31) 98441-5059</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Brasília - DF, Brasil</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h - 18h
                  <br />
                  Sábado: 9h - 13h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Matheus Rodrigues. Todos os direitos reservados.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="button-back-to-top"
          >
            Voltar ao topo
          </Button>
        </div>
      </footer>
    </div>
  );
}
