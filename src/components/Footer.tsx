import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("bg-foreground text-background py-8", className)}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-xl font-bold text-gradient mb-4">
            Sriram Adithya
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-background/80">
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span>sriramadithya9618@gmail.com</span>
            </div>
            {/* <div className="flex items-center space-x-2">
              <span>📱</span>
              <span>+91 8519995263</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="text-xs text-background/60">
              © 2025 Sriram Adithya. Crafted with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;