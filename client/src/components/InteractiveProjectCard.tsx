import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface InteractiveProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function InteractiveProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
}: InteractiveProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className={`
              w-full h-full object-cover transition-all duration-700
              ${isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'}
            `}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div 
              className={`
                text-6xl font-bold text-muted-foreground/20 transition-all duration-500
                ${isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
              `}
            >
              {title[0]}
            </div>
          </div>
        )}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
            flex items-end justify-center gap-2 pb-6 transition-all duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {liveUrl && (
            <Button
              size="sm"
              className="transform transition-all duration-300"
              style={{
                transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
              }}
              asChild
              data-testid="button-live"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="secondary"
              className="transform transition-all duration-300"
              style={{
                transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                transitionDelay: '50ms',
              }}
              asChild
              data-testid="button-github"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-3">
        <h3 
          className={`
            text-xl font-semibold transition-colors duration-300
            ${isHovered ? 'text-primary' : ''}
          `}
          data-testid="text-title"
        >
          {title}
        </h3>
        <p className="text-muted-foreground" data-testid="text-description">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="transition-all duration-300"
              style={{
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                transitionDelay: `${index * 50}ms`,
              }}
              data-testid={`badge-${tag}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
