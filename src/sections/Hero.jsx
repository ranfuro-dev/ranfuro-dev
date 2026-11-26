import {Button} from "@/components/Button";
import { ArrowRight, Download, ChevronDown} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const firstSkillRow = [
  "JavaScript",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "C++ (basic)",
  "Python (basic)",
  "React",
  "Vite",
  "Tailwind CSS",
  "ASP.NET Core Razor Pages",
  "ASP.NET Core Identity",
  ".NET 10",
  "Entity Framework Core",
  "Frontend Development",
  "UI/UX Design",
  "PostgreSQL",
  "Supabase",
];

const secondSkillRow = [
  "YOLOv8 Object Detection",
  "Dataset Preparation",
  "Model Testing",
  "Model Evaluation",
  "Visual Studio",
  "Visual Studio Code",
  "Git",
  "GitHub",
  "Docker",
  "Render",
  "Roboflow",
  "Google Colab",
  "EmailJS",
  "Claude",
  "OpenAI Codex",
  "Website QA",
  "Basic Troubleshooting",
];

export const Hero = () => 
{
    return (
    <section className="relative min-h-screen items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg"
        alt="Hero image" 
        fetchPriority="high"
        className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"> 
        </div>
      </div>

      {/* Red Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"> 
        {[...Array(30)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
          style={{
            backgroundColor: "#FF0000",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${Math.random() * 20}s 
            ease-in-out infinite`,
            animationDelay: `$(Math.random() * 5)s`,
          }}/>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                I Build <span className="text-primary glow-text">Digital Solutions</span>
                <br />
                through
                <br />
                <span className="font-serif italic font-normal text-white">
                Software, Web Development, and AI.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Dan Froilan Hubilla, a Computer Engineering graduate passionate about software development, 
                web technologies, and artificial intelligence. I enjoy turning ideas into functional digital solutions, 
                exploring emerging technologies, and continuously improving my skills through hands-on projects. I make
                use of modern development tools and AI to enhance my workflow, solve problems, and bring projects to life. 
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me 
                  <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="/Dan-Froilan-Hubilla-Resume.pdf" download>
                <Download className="w-5 h-5"/>
                 Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/ranfuro-dev", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/dan-froilan-hubilla", label: "LinkedIn" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30
                              via-transparent-to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3x; p-2 glow-border">
                <img src="/images/profile-photo.jpg" alt="Dan Froilan Hubilla"
                fetchPriority="high"
                className="w-full aspect-[4/5] object-cover rounded-2xl"/>

                {/*Floating Badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for Work</span> {/*Remove if already working*/}
                  </div>
                </div>
                {/*Stats Badge */}
                <div className="absolute -top-4 -left-4 glass -rounded-xl px-4 py-3 animate-delay-500">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-s text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I Work With
          </p>
            <div className="relative overflow-hidden">
              <div className="flex w-max animate-marquee">
                {[...firstSkillRow, ...firstSkillRow].map((skill, idx) => (
                  <div key={`${skill}-${idx}`} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex w-max animate-marquee-reverse">
                {[...secondSkillRow, ...secondSkillRow].map((skill, idx) => (
                  <div key={`${skill}-${idx}`} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
    );
}
