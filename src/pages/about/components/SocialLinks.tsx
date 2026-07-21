import { Github, Linkedin, Instagram, Globe } from "lucide-react";

interface SocialLinksProps {
  github?: string;
  linkedin?: string;
  instagram?: string;
  portfolio?: string;
  name?: string;
}

export default function SocialLinks({ github, linkedin, instagram, portfolio, name }: SocialLinksProps) {
  return (
    <div className="flex gap-4 mt-3 justify-center sm:justify-start">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${name}'s Github`}>
          <Github className="w-5 h-5" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${name}'s LinkedIn`}>
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${name}'s Instagram`}>
          <Instagram className="w-5 h-5" />
        </a>
      )}
      {portfolio && (
        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${name}'s Portfolio`}>
          <Globe className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}