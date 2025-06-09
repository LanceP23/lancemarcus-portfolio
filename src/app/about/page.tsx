// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GridBackground, FloatingOrbs } from "@/components/background-effects";
import { TextReveal } from "@/components/text-reveal";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden">
      <GridBackground />
      <FloatingOrbs />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center space-y-12 mb-20">
          <TextReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              About <span className="text-foreground">Me</span>
            </h1>
          </TextReveal>
          
          <TextReveal delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The story behind the code and the passion that drives my work
            </p>
          </TextReveal>
        </section>

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="p-8 bg-muted/50 dark:bg-muted/20 border-2 border-border backdrop-blur-sm">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I've been fascinated with technology since childhood, and this curiosity has driven me to explore various aspects of software development.
                  </p>
                  <p>
                    Over the past years, I've honed my skills in full-stack development, focusing on creating efficient, scalable applications that solve real-world problems.
                  </p>
                  <p>
                    I believe in the power of collaboration and constantly seek opportunities to learn from others.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-foreground">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Principles that guide my work and collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Build First",
                description: "I believe in building things right the first time faster, focusing on quality and efficiency from the start.",
                emoji: "🏆"
              },
              {
                title: "Continuous Growth",
                description: "The tech landscape evolves rapidly, and I'm committed to staying at the forefront through constant learning.",
                emoji: "🌱"
              },
              {
                title: "User-Centric",
                description: "Every technical decision should serve the end user's needs and create delightful experiences.",
                emoji: "👥"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full p-6 bg-muted/50 dark:bg-muted/20 border-2 border-border backdrop-blur-sm">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional <span className="text-foreground">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Key milestones in my development career
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: "2025",
                title: "Junior Web Developer at Go8 Technology",
                description: "Worked full-stack to develop a transportation management system for NPTC."
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-muted/50 dark:bg-muted/20 border-2 border-border backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="bg-foreground text-background px-4 py-2 rounded-lg font-bold">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to know <span className="text-foreground">more</span>?
          </h2>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 px-8 py-3 text-lg hover:bg-muted/50">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}