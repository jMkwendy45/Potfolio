"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, User } from "lucide-react";
import oluchimage from "../component/oluchi.jpg";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
        >
          <span className="text-orange-500">Home</span>
          <span>/</span>
          <span>About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* <motion.div
                animate={{ rotate: 320 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-100 lg:w-80 lg:h-80 rounded-full 
                bg-gradient-to-br from-primary to-orange-400 p-1"
              >
                <div
                  className="w-full h-full rounded-full bg-card 
                flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={oluchimage}
                    alt="Oluchi Duru"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-full 
                    transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div> */}
<motion.div
  animate={{ rotate: 320 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  className="w-64 lg:w-80 aspect-square rounded-full 
  bg-gradient-to-br from-primary to-orange-400 p-1"
>
  <div
    className="w-full h-full rounded-full bg-card 
    flex items-center justify-center overflow-hidden"
  >
    <Image
      src={oluchimage}
      alt="Oluchi Duru"
      className="w-full h-full object-cover rounded-full 
      transition-transform duration-700 hover:scale-110"
    />
  </div>
</motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 
                bg-primary/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-32 h-32 
                bg-orange-400/20 rounded-full blur-3xl"
              />
            </div>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl lg:text-5xl font-bold leading-tight mb-6"
            >
              A Software Engineer building powerful{" "}
              <span className="text-orange-400">full-stack solutions</span> and
              solving Wicked problem!!!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground mb-8 max-w-xl"
            >
              Software Engineer with expertise in modern web architectures.
              Experienced in building scalable backend systems with Node.js and
              Java, developing dynamic frontends, and writing efficient Python
              applications
              <span className="text-orange-400"> Node.js</span>,
              <span className="text-orange-400"> Java</span>, and
              <span className="text-orange-400"> Python</span>. I am also a
              passionate tech educator dedicated to teaching and mentoring
              future developers kids and adults.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, label: "Name", value: "OLUCHI DURU" },
                { icon: Phone, label: "Phone", value: "0811983972" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "oluchiduru30@example.com",
                },
                { icon: Globe, label: "Website", value: "www.example.com" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-full bg-secondary 
                    flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="rounded-full px-8 bg-orange-500 hover:bg-primary/90">
                  Hire Me
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button
                  variant="outline"
                  className="rounded-full px-8 border-orange-500 
                  bg-black text-orange-400"
                >
                  Download My CV
                </Button> */}
                <a href="/Oluchi Duru cv8.pdf" download>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 border-orange-500 
    bg-black text-orange-400 hover:bg-orange-500 hover:text-white transition"
                  >
                    Download My CV
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
