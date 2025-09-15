import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import profilePhoto from '@/assets/profile-photo.jpg';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={cn("relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800", className)}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Photo Section */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Avatar className="w-80 h-80 md:w-96 md:h-96 border-8 border-white dark:border-slate-700 shadow-2xl relative z-10">
                <AvatarImage 
                  src={profilePhoto} 
                  alt="Sriram Adithya Profile Photo" 
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-r from-primary to-accent text-white">
                  SA
                </AvatarFallback>
              </Avatar>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-in delay-300">
            <div className="space-y-2">
              <div className="text-primary font-semibold text-lg">Hello, I'm</div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sriram Adithya
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground font-medium">
                Computer Science Student
              </div>
              <div className="text-lg text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                <span className="text-2xl">📍</span>
                <span>Hyderabad, India</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Enthusiastic first-year B.Tech Computer Science student passionate about 
              programming, web development, AI, and problem-solving. Ready to innovate 
              and create impactful solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">97.1%</div>
                <div className="text-sm text-muted-foreground">HSC Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8K</div>
                <div className="text-sm text-muted-foreground">EAPCET Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;