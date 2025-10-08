import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover-elevate transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-4xl font-bold text-muted-foreground/20">{title[0]}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 pb-4">
          {liveUrl && (
            <Button
              size="sm"
              variant="secondary"
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
        <h3 className="text-xl font-semibold" data-testid="text-title">{title}</h3>
        <p className="text-muted-foreground" data-testid="text-description">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" data-testid={`badge-${tag}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
