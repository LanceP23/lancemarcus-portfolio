"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript,
  SiNodedotjs, SiExpress, SiNestjs, SiStrapi, SiLaravel,
  SiMongodb, SiMysql, SiPostgresql,
  SiTailwindcss, SiGithubactions, SiDocker, SiNginx
} from "react-icons/si";
import {FiDownload} from "react-icons/fi";

const MotionCard = motion(Card);

// Grid background component
const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]">
    </div>
  );
};

// Floating orbs background
const FloatingOrbs = () => {
  const [orbData, setOrbData] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    x: number;
    y: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate consistent random values on client side only
    const orbs = [...Array(6)].map(() => ({
      width: Math.random() * 400 + 200,
      height: Math.random() * 400 + 200,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    }));
    setOrbData(orbs);
  }, []);

  if (orbData.length === 0) return null;

  return (
    <div className="absolute inset-0 -z-5">
      {orbData.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-gray-400/10 to-gray-600/10 blur-xl"
          style={{
            width: orb.width,
            height: orb.height,
            left: orb.left,
            top: orb.top,
          }}
          animate={{
            x: [0, orb.x],
            y: [0, orb.y],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Text reveal component
const TextReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Glowing text component
const GlowText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ textShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
      animate={{ 
        textShadow: [
          "0 0 0px rgba(0, 0, 0, 0)",
          "0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(64, 64, 64, 0.2)",
          "0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(64, 64, 64, 0.2)"
        ]
      }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      {children}
    </motion.span>
  );
};

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "Strapi", icon: SiStrapi, color: "text-blue-500" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-600" }
    ]
  },
  {
    name: "Database & DevOps",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-700 dark:text-gray-300" },
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "Nginx", icon: SiNginx, color: "text-green-500" }
    ]
  }
];

const SkillIcon = ({ skill, index }: { skill: (typeof skillCategories)[0]['skills'][0], index: number }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col items-center group"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`flex flex-col items-center ${skill.color} transition-all duration-300`}>
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 grid place-items-center relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <IconComponent className="w-3/4 h-3/4 drop-shadow-lg" />
            </div>
            <span className="text-xs mt-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden">
      <GridBackground />
      <FloatingOrbs />
      
      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center space-y-8 relative z-10"
        style={{ y, opacity }}
      >
        <div className="space-y-6 max-w-4xl">
          <TextReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <GlowText className="text-foreground">
                Lance
              </GlowText>
            </h1>
          </TextReveal>

          <TextReveal delay={0.4}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              <GlowText>Full Stack Developer</GlowText>
            </h2>
          </TextReveal>

          <TextReveal delay={0.6}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build <span className="font-semibold text-foreground">exceptional digital experiences</span> with modern web technologies, 
              creating scalable solutions that make a difference.
            </p>
          </TextReveal>
        </div>

      <TextReveal delay={0.8}>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg">
              <Link href="/projects">View My Work</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="lg" className="border-2 px-8 py-3 text-lg hover:bg-muted/50">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
          {/* Updated Resume Button with Icon */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="ghost" size="lg" className="px-8 py-3 text-lg gap-2">
              <a href="/resume.pdf" download="LancePantaleon_Resume.pdf">
                <FiDownload className="w-5 h-5" />
                Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </TextReveal>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-foreground font-extrabold">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>
        
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.name} 
            className="space-y-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-foreground font-extrabold">
                {category.name}
              </span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 place-items-center">
              {category.skills.map((skill, index) => (
                <SkillIcon key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 max-w-4xl mx-auto relative z-10">
        <MotionCard 
          className="p-12 bg-muted/50 dark:bg-muted/20 text-center border-2 border-border backdrop-blur-sm"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="text-foreground font-extrabold">work together</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently available for <span className="font-semibold text-foreground">freelance work</span> and 
              <span className="font-semibold text-foreground"> full-time positions</span>.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="mt-6 bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </MotionCard>
      </section>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
}