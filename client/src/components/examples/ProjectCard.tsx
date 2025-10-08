import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <ProjectCard
        title="E-commerce Platform"
        description="Uma plataforma de e-commerce completa com carrinho, pagamentos e painel administrativo."
        tags={['React', 'Node.js', 'MongoDB', 'Stripe']}
        liveUrl="https://example.com"
        githubUrl="https://github.com"
      />
      <ProjectCard
        title="Portfolio Website"
        description="Site de portfólio moderno com animações interativas e design responsivo."
        tags={['Next.js', 'Tailwind', 'Framer Motion']}
        liveUrl="https://example.com"
      />
    </div>
  );
}
