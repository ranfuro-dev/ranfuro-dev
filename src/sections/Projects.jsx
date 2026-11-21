import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
        title: "Personal Portfolio",
        description: "A personal portfolio showcasing my projects, technical skills, and journey as a Computer Engineering graduate.",
        image: "/images/portfolio.jpg",
        tags: ["JavaScript", "React", "Vite", "Talwind CSS"],
        link: "",
        github: "https://github.com/ranfuro-dev/ranfuro-dev",
    },
    {
        title: "Rebyulusyon",
        description: "A web-based study platform for Filipino students to create subject-based flashcard reviewers, study with interactive cards, and track their learning progress. Users can keep reviewers private or share them publicly.",
        image: "/images/rebyulusyon.jpg",
        tags: ["C#", "HTML", "CSS", "JavaScript", "ASP.NET Core Razor Pages", "ASP.NET Core Identity", "PostgreSQL", "Supabase", "EF Core", "Docker", "Render"],
        link: "https://rebyulusyon.onrender.com/",
        github: "https://github.com/ranfuro-dev/Rebyulusyon", 
    },
]

export const Projects = () => 
{
    return <section id="projects" className="py-32 relative overflow-hidden">
            {/* BG glows*/}
             <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
             <div classname="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounder-full blur-3xl"></div>
             <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Discover What 
                    <span className="font-serif italic font-normal text-white">{" "}I've Built.</span> 
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A showcase of my projects, from my personal portfolio and 
                        current projects to ideas I’m excited to build next.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* Image */}
                          <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.link && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Open ${project.title} website`}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                  >
                                    <ArrowUpRight className="w-5 h-5" />
                                  </a>
                                )}
                                <a href={project.github} className="p=3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FaGithub className="w-5 h-5"/>
                                </a>
                            </div>
                          </div> 

                            {/* Content */}
                            <div className="p-6 space-y-4">
                              <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                {project.link && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Open ${project.title} website`}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                  </a>
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm">{project.description}</p>
                              <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} 
                                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                              ))}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA*/}
                <div className ="text-center mt-12 animate-fade-in animation-delay-500">
                  <AnimatedBorderButton
                    href="https://github.com/ranfuro-dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                  </AnimatedBorderButton>
                </div>
             </div>
        </section>
};
