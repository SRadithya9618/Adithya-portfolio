import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AchievementsSectionProps {
  className?: string;
}

const AchievementsSection = ({ className }: AchievementsSectionProps) => {
  const achievements = [
    {
      title: "TG-EAPCET Achievement",
      description: "Secured a state-level rank of 8000 in TG EAPCET (Engineering Stream)",
      icon: "🏆",
      category: "Academic"
    },
    {
      title: "Web Development Learning",
      description: "Actively exploring courses in modern web development technologies and frameworks",
      icon: "🌐",
      category: "Learning"
    },
    {
      title: "AI Exploration",
      description: "Diving deep into Artificial Intelligence concepts and practical applications",
      icon: "🤖",
      category: "Technology"
    },
    {
      title: "High Academic Performance",
      description: "Maintained excellent academic record with 97.1% in Higher Secondary Education",
      icon: "📚",
      category: "Academic"
    }
  ];

  return (
    <section id="achievements" className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey in technology and academics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;