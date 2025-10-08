import ExperienceCard from '../ExperienceCard';

export default function ExperienceCardExample() {
  return (
    <div className="space-y-4 p-6">
      <ExperienceCard
        role="Desenvolvedor Full-Stack"
        company="Tech Solutions Inc."
        period="2022 - Presente"
        description="Desenvolvimento de aplicações web modernas usando React e Node.js."
        achievements={[
          'Liderei equipe de 4 desenvolvedores em projeto de e-commerce',
          'Reduzi tempo de carregamento em 60% através de otimizações',
          'Implementei sistema de design usado por toda a empresa',
        ]}
      />
      <ExperienceCard
        role="Frontend Developer"
        company="Creative Agency"
        period="2020 - 2022"
        description="Criação de interfaces responsivas e interativas para clientes diversos."
        achievements={[
          'Desenvolvi 20+ landing pages de alta conversão',
          'Colaborei com designers para criar sistema de componentes',
        ]}
      />
    </div>
  );
}
