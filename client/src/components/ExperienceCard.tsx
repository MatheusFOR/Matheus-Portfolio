import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  achievements,
}: ExperienceCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1" data-testid="text-role">{role}</h3>
          <p className="text-primary font-medium mb-1" data-testid="text-company">{company}</p>
          <p className="text-sm text-muted-foreground mb-3" data-testid="text-period">{period}</p>
          <p className="text-muted-foreground mb-4" data-testid="text-description">{description}</p>
          {achievements.length > 0 && (
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm"
                  data-testid={`achievement-${index}`}
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}
