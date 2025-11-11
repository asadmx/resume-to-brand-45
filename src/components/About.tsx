import { Card } from "@/components/ui/card";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Proficient in full-stack development with PHP, Next.js, React, TypeScript, and cloud technologies. Expertise in building scalable, production-ready applications.",
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "Software Engineer Intern at SellStatic, architecting backend systems, optimizing database performance, and delivering enterprise-grade solutions.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Computer Science student at Wilfrid Laurier University, specializing in AI, machine learning, data structures, and software design patterns.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="mb-16">
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              I'm a Software Engineer Intern and Computer Science student based in Milton, Ontario, 
              with a proven track record of delivering scalable, high-performance web applications. 
              I specialize in full-stack development, systems architecture, and database optimization, 
              leveraging modern frameworks and agile methodologies to solve complex technical challenges. 
              My approach combines strong problem-solving skills with business acumen, ensuring that 
              every solution drives measurable impact and user satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <highlight.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
