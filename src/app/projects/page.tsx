// src/app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GridBackground, FloatingOrbs } from "@/components/background-effects";
import { TextReveal } from "@/components/text-reveal";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";


// Project type definition
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
  status?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "NXI Platform",
    description: "A project showcase and funding platform where users can upload, edit, and manage their projects, receive upvotes and comments, and gain visibility. Includes an admin panel for moderating and approving projects before public release.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi"],
    imageUrl: "/NXI pic.png", // Replace with your actual image
    status: "Ongoing",
    projectUrl: "https://portal.nxi.xyz",
    year: "2025",
    featured: true
  },
  {
    id: "2",
    title: "NPTC Transportation Management System",
    description: "Built a role-based transportation management system for NPTC with tiered access (Admin, Vehicle Rental, Operator, Driver), integrating payment-based membership and trip ticketing workflows.",
    tags: ["Laravel", "React", "Inertia.js", "PHP"],
    imageUrl: "/NPTC Pic.png", 
    projectUrl: "http://178.128.209.225/login",
    status: "Ongoing",
    year: "2025"
  },
  {
    id: "3",
    title: "Queen of Angel Monastery Website",
    description: "A dual-website project with a landing page and admin dashboard, both built using the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "/QueenOfAngelsPic.png",
    projectUrl: "https://queenofangelsmonastery.org",
    year: "2025"
  },
  {
    id: "4",
    title: "CIM Platform",
    description: "A Centralized Information and Media Platform Application with Data Analytics for College of St. Catherine Quezon City. Project won Best Web Based System and Best Content Management System at STI Caloocan's 2024 Symposium.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "/CIM Pic.png", 
    projectUrl: "https://thesis-cim-23-xpwq.onrender.com",
    year: "2024"
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <CardContainer className="inter-var h-full">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-0 border">
          {/* Image Section */}
          <div className="relative aspect-video overflow-hidden">
            <CardItem translateZ="100" className="w-full h-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover/card:scale-105"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-sm font-medium">{project.year}</span>
                {project.status && (
                  <span className="ml-2 px-2 py-1 bg-yellow-500/80 text-white text-xs rounded-full">
                    {project.status}
                  </span>
                )}
              </div>
            </CardItem>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <CardItem
                  key={tag}
                  translateZ="20"
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </CardItem>
              ))}
            </div>
            
            <CardItem translateZ="30" className="text-xl font-bold mb-2 text-foreground">
              {project.title}
            </CardItem>
            
            <CardItem translateZ="40" as="p" className="text-muted-foreground mb-4">
              {project.description}
            </CardItem>
            
            <div className="flex gap-3">
              {project.projectUrl && (
                <CardItem translateZ="50">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.projectUrl} target="_blank">
                      Visit Site
                    </Link>
                  </Button>
                </CardItem>
              )}
              {project.githubUrl && (
                <CardItem translateZ="50">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.githubUrl} target="_blank">
                      View Code
                    </Link>
                  </Button>
                </CardItem>
              )}
              {!project.projectUrl && !project.githubUrl && (
                <CardItem translateZ="50">
                  <Button variant="ghost" size="sm" disabled>
                    Coming Soon
                  </Button>
                </CardItem>
              )}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden">
      <GridBackground />
      <FloatingOrbs />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center space-y-12 mb-20">
          <TextReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              My <span className="text-foreground">Projects</span>
            </h1>
          </TextReveal>
          
          <TextReveal delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of my professional work showcasing my skills and expertise across different technologies
            </p>
          </TextReveal>
        </section>

        {/* Featured Project */}
       {featuredProject && (
  <section className="max-w-6xl mx-auto mb-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-primary">Featured</span> Project
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
        Check out my flagship work with enhanced interactivity
      </p>
    </motion.div>

    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 group/card dark:hover:shadow-2xl dark:hover:shadow-primary/10 w-full rounded-xl p-0 border dark:border-white/[0.2] border-black/[0.1]">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section - Enhanced with 3D tilt */}
          <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
            <CardItem
              translateZ="150"
              rotateX={5}
              rotateY={-5}
              className="w-full h-full"
            >
              <Image
                src={featuredProject.imageUrl}
                alt={featuredProject.title}
                fill
                className="object-cover group-hover/card:scale-105 transition-all duration-500"
                placeholder="blur"
                blurDataURL="/placeholder-blur.jpg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center">
                  <span className="text-white text-lg font-medium">
                    {featuredProject.year}
                  </span>
                  {featuredProject.status && (
                    <span className="ml-3 px-3 py-1.5 bg-yellow-500/90 text-white text-sm rounded-full">
                      {featuredProject.status}
                    </span>
                  )}
                </div>
              </div>
            </CardItem>
          </div>

          {/* Content Section - More prominent */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-5">
              {featuredProject.tags.map((tag) => (
                <CardItem
                  key={tag}
                  translateZ="50"
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                >
                  {tag}
                </CardItem>
              ))}
            </div>

            <CardItem
              translateZ="60"
              className="text-3xl md:text-4xl font-bold mb-5 text-foreground"
            >
              {featuredProject.title}
            </CardItem>

            <CardItem
              translateZ="70"
              as="p"
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {featuredProject.description}
            </CardItem>

            <CardItem translateZ="80" className="flex gap-4">
              {featuredProject.projectUrl ? (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={featuredProject.projectUrl} target="_blank">
                    View Live Project
                  </Link>
                </Button>
              ) : (
                <Button size="lg" variant="outline" disabled>
                  Demo Coming Soon
                </Button>
              )}
              {featuredProject.githubUrl && (
                <Button asChild variant="outline" size="lg">
                  <Link href={featuredProject.githubUrl} target="_blank">
                    View Code
                  </Link>
                </Button>
              )}
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  </section>
)}

        {/* All Projects */}
        <section className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              All <span className="text-foreground">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Browse through my complete portfolio of professional work
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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
            Want to <span className="text-foreground">collaborate</span>?
          </h2>
          <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </main>
    </div>
  );
}