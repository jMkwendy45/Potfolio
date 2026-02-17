'use client'

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080c]/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="text-xl font-bold text-white">
          Port<span className="text-orange-500">folio</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm text-[#71717b] hover:text-orange-500 transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <Button
          className="hidden md:inline-flex rounded-full px-6 bg-orange-500 hover:bg-orange-500/90"
          onClick={() => scrollTo("contact")}
        >
          Let's Talk
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card border-border">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-lg text-muted-foreground hover:text-orange-500 transition-colors text-left"
                >
                  {link}
                </button>
              ))}
              <Button
                className="rounded-full bg-orange-500 hover:bg-orange-500/90 mt-4"
                onClick={() => scrollTo("contact")}
              >
                Let's Talk
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
