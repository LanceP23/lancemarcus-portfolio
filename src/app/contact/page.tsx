"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GridBackground, FloatingOrbs } from "@/components/background-effects";
import { TextReveal } from "@/components/text-reveal";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "lancepantaleon2303@gmail.com",
      href: "mailto:lancepantaleon2303@gmail.com", // Fixed: removed space after mailto:
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "(+63) 949-823-2854",
      href: "tel:+639498232854", // Fixed: using tel: protocol
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Navotas City, Philippines",
      href: "https://maps.google.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "@LanceP23",
      href: "https://github.com/LanceP23",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "in/lance-marcus-pantaleon",
      href: "https://www.linkedin.com/in/lance-marcus-pantaleon/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10 relative overflow-hidden">
      <GridBackground />
      <FloatingOrbs />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center space-y-12 mb-20">
          <TextReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's <span className="text-primary">Connect</span>
            </h1>
          </TextReveal>
          
          <TextReveal delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here's how you can reach me. Feel free to drop a message through any of these channels.
            </p>
          </TextReveal>
        </section>

        {/* Contact Cards Grid */}
        <section className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary">{method.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.value}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <a href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'}>
                        Contact via {method.title}
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Availability Section */}
        <section className="max-w-2xl mx-auto mt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 bg-muted/50 dark:bg-muted/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance work and new opportunities.
                Typically respond within 24 hours.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <a href="mailto:lancepantaleon2303@gmail.com">
                    Send Me an Email
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/projects">
                    View My Work
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}