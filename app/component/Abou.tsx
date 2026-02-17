const About = () => {
  return (
    <section className="py-24 px-4" id="about">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="animate-slide-in-right">
            I'm a passionate software developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I create seamless 
            digital experiences that are both beautiful and functional.
          </p>
          
          <p className="animate-slide-in-right [animation-delay:200ms] opacity-0 fill-mode-[forwards]">
            My journey in software development has equipped me with a versatile skill set spanning 
            multiple languages and frameworks. I thrive on solving complex problems and turning 
            innovative ideas into reality through clean, efficient code.
          </p>
          
          <p className="animate-slide-in-right [animation-delay:400ms] opacity-0 fill-mode-[forwards]">
            When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
            and staying up-to-date with the latest industry trends to continuously improve my craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
