"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Figma,
  Globe,
  Laptop,
  Layout,
  PenTool,
  Smartphone,
  Video,
  Palette,
} from "lucide-react";

const initialSkills = [
  { name: "Figma", icon: Figma },
  { name: "WordPress", icon: Globe },
  { name: "Web Development", icon: Laptop },
  { name: "Web Design", icon: Layout },
  { name: "Sketch", icon: PenTool },
  { name: "Adobe Xd", icon: Palette },
  { name: "Video Editing", icon: Video },
  { name: "Mobile App", icon: Smartphone },
];

export default function SkillsSection() {
  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prev) => {
        const newArr = [...prev];
        const first = newArr.shift(); 
        if (first) newArr.push(first); 
        return newArr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              layout
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-3 p-6 
              rounded-2xl bg-[#111117] border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary 
              flex items-center justify-center">
                <Icon className="w-7 h-7 text-orange-500" />
              </div>
              <span className="text-sm font-medium text-white">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
