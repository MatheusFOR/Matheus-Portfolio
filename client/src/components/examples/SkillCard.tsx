import SkillCard from '../SkillCard';
import { Code, Palette, Wrench } from 'lucide-react';

export default function SkillCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      <SkillCard
        title="Frontend"
        icon={Code}
        skills={[
          { name: 'React', level: 5 },
          { name: 'TypeScript', level: 4 },
          { name: 'Tailwind CSS', level: 5 },
          { name: 'Next.js', level: 4 },
        ]}
      />
      <SkillCard
        title="Design"
        icon={Palette}
        skills={[
          { name: 'Figma', level: 5 },
          { name: 'UI/UX Design', level: 4 },
          { name: 'Branding', level: 3 },
          { name: 'Illustration', level: 3 },
        ]}
      />
      <SkillCard
        title="Tools"
        icon={Wrench}
        skills={[
          { name: 'Git', level: 5 },
          { name: 'VS Code', level: 5 },
          { name: 'Docker', level: 3 },
          { name: 'AWS', level: 3 },
        ]}
      />
    </div>
  );
}
