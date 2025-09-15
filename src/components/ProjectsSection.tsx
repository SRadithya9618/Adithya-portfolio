import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing my skills, projects, and achievements. Built with modern web technologies and clean design principles.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: "🎨",
      // status: "Live",
      link: "#"
    },
    {
      title: "To-Do List Web App",
      description: "An interactive task management application with local storage functionality. Features include adding, editing, deleting, and marking tasks as complete.",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      icon: "📝",
      // status: "Completed",
      link: "#"
    },
    {
      title: "Weather App",
      description: "A dynamic weather application that fetches real-time weather data using API integration. Displays current conditions and forecasts with a clean interface.",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      icon: "🌤️",
      // status: "In Progress",
      link: "#"
    }
  ];

  return (
    <section id="projects" className={cn("py-20 bg-secondary/50", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my development skills and creativity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <span className={cn(
                    "text-xs font-medium px-3 py-1 rounded-full",
                    // project.status === "Live" ? "bg-green-100 text-green-800" :
                    // project.status === "Completed" ? "bg-blue-100 text-blue-800" :
                    "bg-yellow-100 text-yellow-800"
                  )}>
                 {/* {project.status} */}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {/* <Button 
                    size="sm" 
                    className="flex-1 transition-smooth"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button> */}
                  {/* <Button 
                    size="sm" 
                    variant="outline" 
                    className="transition-smooth"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;