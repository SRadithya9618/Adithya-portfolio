import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface EducationSectionProps {
  className?: string;
}

const EducationSection = ({ className }: EducationSectionProps) => {
  const education = [
    {
      institution: "Neil Gogte Institute of Technology",
      degree: "B.Tech in Computer Science Engineering",
      period: "2025 – 2029",
      status: "Current",
      icon: "🎓"
    },
    {
      institution: "St. Patricks Altitude Junior College",
      degree: "Higher Secondary",
      period: "2023 – 2025",
      status: "97.1%",
      icon: "📚"
    },
    {
      institution: "Divyanjali High School",
      degree: "Secondary Education",
      period: "2023",
      status: "CGPA: 9.5/10",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className={cn("py-20 bg-secondary/50", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="card-gradient shadow-medium transition-smooth hover:shadow-large hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {edu.institution}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-2">
                      {edu.degree}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-accent">
                      {edu.status}
                    </div>
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

export default EducationSection;