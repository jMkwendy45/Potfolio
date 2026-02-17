import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-card/30 to-background" id="contact">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-8 animate-slide-in-right">
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@developer.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" }
              ].map(({ icon: Icon, text }, index) => (
                <div 
                  key={text}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-linear-to-br from-primary/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-6 animate-fade-in [animation-delay:200ms] opacity-0 fill-mode-[forwards]">
            <div>
              <Input 
                placeholder="Your Name" 
                className="bg-card/50 border-border focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-card/50 border-border focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Input 
                placeholder="Subject" 
                className="bg-card/50 border-border focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Your Message" 
                rows={6}
                className="bg-card/50 border-border focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full bg-linear-to-r from-primary to-blue-500 hover:shadow-glow transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
