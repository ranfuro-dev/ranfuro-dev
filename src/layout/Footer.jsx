import { FaGithub, FaLinkedin } from "react-icons/fa6";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/ranfuro-dev", label: "GitHub", icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/dan-froilan-hubilla",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export const Footer = () => (
  <footer className="border-t border-border/60 bg-background">
    <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">
      <div>
        <a href="#" className="text-xl font-bold tracking-tight text-foreground hover:text-primary">
          DFTH<span className="text-primary">.</span>
        </a>
        <p className="mt-1 text-xs text-muted-foreground">
          © {new Date().getFullYear()} DFTH. All rights reserved.
        </p>
      </div>

      <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {footerLinks.map(({ href, label }) => (
          <a key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="rounded-full border border-border bg-surface p-2.5 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
