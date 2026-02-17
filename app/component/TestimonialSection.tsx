import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    quote:
      "Working with oly was a game-changer for our business. The website he created exceeded all our expectations and significantly boosted our online presence.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    quote:
      "Exceptional attention to detail and a truly creative approach. The final product was not only beautiful but also highly functional and user-friendly.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Davis",
    role: "Freelance Designer",
    quote:
      "John's technical expertise combined with his design sensibility makes him stand out. I highly recommend his services to anyone looking for quality work.",
    rating: 5,
    initials: "ED",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            What <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
               I had fun building this           
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-[#111117] border border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-orange-400 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11 bg-secondary">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-orange-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
