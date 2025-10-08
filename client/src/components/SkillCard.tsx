import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold" data-testid="text-category">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} data-testid={`skill-${skill.name}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < skill.level ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
