import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface HobbiesSectionProps {
  className?: string;
}

const HobbiesSection = ({ className }: HobbiesSectionProps) => {
  const hobbies = [
    {
      title: "Fitness & Wellness",
      description: "Passionate about maintaining physical and mental well-being through regular exercise and healthy lifestyle choices.",
      icon: "💪",
      activities: ["Gym Workouts", "Cardio Training", "Mental Wellness", "Healthy Living"]
    },
    {
      title: "Event Volunteering",
      description: "Active volunteer in community events and social initiatives, contributing to meaningful causes and community development.",
      icon: "🤝",
      activities: ["Community Service", "Event Organization", "Social Causes", "Team Leadership"]
    }
  ];

  return (
    <section id="hobbies" className={cn("py-20 bg-secondary/50", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond technology, exploring life through fitness, community service, and personal growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105 group">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{hobby.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth mb-4">
                    {hobby.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {hobby.activities.map((activity, activityIndex) => (
                    <div
                      key={activityIndex}
                      className="bg-primary/10 text-primary text-sm font-medium px-3 py-2 rounded-lg text-center transition-smooth hover:bg-primary/20"
                    >
                      {activity}
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

export default HobbiesSection;