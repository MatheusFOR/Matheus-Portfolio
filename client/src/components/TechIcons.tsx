import { useState } from "react";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiSass } from "react-icons/si";

const techStack = [
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  { icon: SiCss3, color: "#1572B6", name: "CSS3" },
  { icon: SiSass, color: "#CC6699", name: "Sass" },
];

export default function TechIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {techStack.map((tech, index) => {
        const Icon = tech.icon;
        const isHovered = hoveredIndex === index;
        
        return (
          <div
            key={tech.name}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`
                transition-all duration-500 ease-out cursor-pointer
                ${isHovered ? 'scale-125 -rotate-12' : 'scale-100 rotate-0'}
              `}
              style={{
                filter: isHovered ? 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' : 'none',
              }}
            >
              <Icon
                className="h-16 w-16 transition-colors duration-300"
                style={{ color: isHovered ? tech.color : 'currentColor' }}
                data-testid={`icon-${tech.name.toLowerCase()}`}
              />
            </div>
            
            <div
              className={`
                absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                text-sm font-medium transition-all duration-300
                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
              style={{ color: tech.color }}
            >
              {tech.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
