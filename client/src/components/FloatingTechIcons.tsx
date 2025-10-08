import { SiReact, SiJavascript, SiHtml5, SiCss3, SiSass, SiNodedotjs, SiTypescript } from "react-icons/si";

const floatingIcons = [
  { icon: SiReact, color: "#61DAFB", top: "10%", left: "5%", delay: 0 },
  { icon: SiJavascript, color: "#F7DF1E", top: "20%", right: "8%", delay: 0.5 },
  { icon: SiHtml5, color: "#E34F26", bottom: "15%", left: "10%", delay: 1 },
  { icon: SiCss3, color: "#1572B6", top: "60%", right: "5%", delay: 1.5 },
  { icon: SiSass, color: "#CC6699", bottom: "25%", right: "15%", delay: 2 },
  { icon: SiTypescript, color: "#3178C6", top: "40%", left: "8%", delay: 2.5 },
  { icon: SiNodedotjs, color: "#339933", bottom: "35%", right: "20%", delay: 3 },
];

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        const style: React.CSSProperties = {
          position: "absolute",
          ...('top' in item && { top: item.top }),
          ...('bottom' in item && { bottom: item.bottom }),
          ...('left' in item && { left: item.left }),
          ...('right' in item && { right: item.right }),
          animation: `float-${index % 3} ${4 + (index % 2)}s ease-in-out infinite`,
          animationDelay: `${item.delay}s`,
          color: item.color,
        };

        return (
          <div key={index} style={style} className="group">
            <Icon className="h-12 w-12 transition-all duration-500 group-hover:scale-150 group-hover:rotate-12 group-hover:opacity-100" />
          </div>
        );
      })}

      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(20px) rotate(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(15px, -15px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}
