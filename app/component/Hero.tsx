import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Building elegant solutions with modern technologies
          </p>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            {['Java', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Python'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium hover:border-primary transition-all duration-300 hover:shadow-glow"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <Button 
              size="lg"
              className="group bg-linear-to-r from-primary to-blue-500 hover:shadow-glow transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8 animate-fade-in [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-3 bg-card/50 backdrop-blur-sm border border-border rounded-full hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
