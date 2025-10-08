import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface AnimatedSkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export default function AnimatedSkillCard({ title, icon: Icon, skills }: AnimatedSkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className={`
            p-3 rounded-lg bg-primary/10 transition-all duration-500
            ${isHovered ? 'bg-primary/20 scale-110 rotate-6' : 'scale-100 rotate-0'}
          `}
        >
          <Icon 
            className={`
              h-6 w-6 text-primary transition-all duration-500
              ${isHovered ? 'scale-125' : 'scale-100'}
            `}
          />
        </div>
        <h3 
          className={`
            text-xl font-semibold transition-colors duration-300
            ${isHovered ? 'text-primary' : ''}
          `}
          data-testid="text-category"
        >
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, skillIndex) => (
          <div key={skill.name} data-testid={`skill-${skill.name}`}>
            <div className="flex items-center justify-between mb-1">
              <span 
                className={`
                  text-sm font-medium transition-all duration-300
                  ${isHovered ? 'translate-x-1' : 'translate-x-0'}
                `}
                style={{ transitionDelay: `${skillIndex * 50}ms` }}
              >
                {skill.name}
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-500
                      ${i < skill.level ? 'bg-primary scale-100' : 'bg-muted scale-75'}
                      ${isHovered && i < skill.level ? 'scale-125' : ''}
                    `}
                    style={{ 
                      transitionDelay: isHovered ? `${(skillIndex * 5 + i) * 30}ms` : '0ms' 
                    }}
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
