import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  sections: Array<{ label: string; href: string }>;
}

export default function Navigation({ sections }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-xl font-bold font-display"
              data-testid="button-logo"
            >
              Portfolio
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.href}
                  onClick={() => scrollToSection(section.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  data-testid={`link-${section.label.toLowerCase()}`}
                >
                  {section.label}
                </button>
              ))}
              <ThemeToggle />
            </nav>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {sections.map((section) => (
              <button
                key={section.href}
                onClick={() => scrollToSection(section.href)}
                className="text-2xl font-medium hover:text-primary transition-colors"
                data-testid={`mobile-link-${section.label.toLowerCase()}`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
