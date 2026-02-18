"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Code } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "I design intuitive, user-centered interfaces that combine clean visual aesthetics with seamless user experience. My approach focuses on usability, accessibility, and conversion-driven layouts that enhance engagement and deliver measurable results.",
    icon: Palette,
  },
  {
    title: "Web Design",
    description:
      "I create modern, responsive, and performance-optimized website designs tailored to business goals. From landing pages to full corporate platforms, I ensure cross-device compatibility, fast loading speeds, and visually compelling brand presentation.",
    icon: Monitor,
  },
  {
    title: "Web Development",
    description:
      "I build scalable full-stack web applications using modern technologies like Node.js, Java, and Python. My development process emphasizes clean architecture, secure APIs, efficient databases, and maintainable codebases built for long-term growth.",
    icon: Code,
  },
];


export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            My <span className="text-orange-500">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-2xl 
                bg-[#111117] border border-border p-8 
                transition-all duration-500"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #ff6b6b, #845ef7)",
                      "linear-gradient(45deg, #20c997, #5c7cfa)",
                      "linear-gradient(45deg, #ff6b6b, #845ef7)",
                    ],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{
                    opacity: 0.15,
                    zIndex: 0,
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-16 h-16 rounded-xl bg-white 
                    flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-orange-500" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
