import { CodeXml, Gauge, UserRoundGroup, CpuAi, Puzzle } from "lucide-react";

const highlights = [
    {
        icon: CodeXml,
        title: "Clean & Maintanable Code",
        description: "Developing good coding habits by writing organized, readable code and learning best practices through hands-on projects."
    },
    {
        icon: Gauge,
        title: "Performance & Usability",
        description: "Building responsive and efficient applications with a focus on user experience."
    },
    {
        icon: UserRoundGroup,
        title: "Collaboration & Learning",
        description: "Being open to feedback, sharing ideas and learning from others to continuously improve my skills."
    },
    {
        icon: CpuAi,
        title: "Innovation and Adaptability",
        description: "Exploring emerging technologies and adapting to new tools and approaches, including AI-assisted development."
    },
    {
        icon: Puzzle,
        title: "Problem Solving",
        description: "Sharpening logical thinking and learning to approach technical challenges with curiosity and creativity."
    },

]

export const About = () => 
{
    return (
    <section id="about" className ="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
                <div className ="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                    About Me
                </span>
                
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Exploring technology,
                <span className="font-serif italic font-normal text-white"> 
                    {" "} creating solutions and growing as a developer.
                </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                    I'm a Computer Engineering graduate passionate about software development, 
                    web technologies, and artificial intelligence. I enjoy building web applications, 
                    exploring new technologies, and creating practical solutions through code.
                </p>
                <p>
                    Through academic projects and self-learning, I've gained hands-on experience in 
                    programming, web development, and AI-related tools. As a fresh graduate, 
                    I'm eager to apply my skills, gain real-world experience, and continue growing as a developer.
                </p>
                <p>
                    I'm always open to learning, embracing challenges, and collaborating with others 
                    to create innovative, user-friendly solutions.
                </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    My mission is to continuously grow as a developer by expanding my technical knowledge, exploring 
                    emerging technologies, and turning ideas into practical digital solutions. I strive to build functional 
                    and user-friendly applications while embracing modern development tools, including AI-assisted technologies,
                     to improve my workflow.
                </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => ( 
                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
          </div>
          </div>
        </div>
    </section>
    );
};
