import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-[#111117]">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <a href="#" className="text-xl font-bold">
              Port<span className="text-orange-500">folio</span>
            </a>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              A Software Engineer building powerful solutions
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full  flex items-center justify-center hover:bg-orange-400 hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>0811983972</li>
              <li>oluchiduru30@gmail.com</li>
              <li>Lagos Nigeria</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get latest updates.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="rounded-full bg-secondary border-border text-sm"
              />
              <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

     <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 oluchi Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
