import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      name="Matheus Rodrigues"
      title="Desenvolvedor Full-Stack & Designer"
      description="Crio experiências digitais excepcionais que conectam pessoas e resolvem problemas reais. Especializado em React, Node.js e design de interfaces modernas."
      onContactClick={() => console.log('Contact clicked')}
      onProjectsClick={() => console.log('Projects clicked')}
    />
  );
}
