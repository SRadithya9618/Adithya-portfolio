import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection = ({ className }: SkillsSectionProps) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python (Basics)", "Java (Basics)"],
      color: "text-blue-600"
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-green-600"
    },
    {
      title: "Concepts & Frameworks",
      icon: "🔧",
      skills: ["OOP (Basics)", "Exploring AI"],
      color: "text-purple-600"
    },
    {
      title: "AI Tools",
      icon: "🤖",
      skills: ["Perplexity", "NotebookLM", "BlackBox AI", "ChatGPT"],
      color: "text-orange-600"
    },
    {
      title: "Soft Skills",
      icon: "🎯",
      skills: ["Communication", "Team Collaboration", "Problem-Solving", "Quick Learning"],
      color: "text-pink-600"
    }
  ];

  return (
    <section id="skills" className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical abilities and soft skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105 group">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-secondary/50 rounded-lg px-4 py-2 text-center transition-smooth hover:bg-primary/10"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;