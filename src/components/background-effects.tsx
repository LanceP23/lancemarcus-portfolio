// src/components/background-effects.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const GridBackground = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
);

export const FloatingOrbs = () => {
  const [orbData, setOrbData] = useState<Array<{
    width: number; height: number; left: string; top: string;
    x: number; y: number; duration: number;
  }>>([]);

  useEffect(() => {
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
          style={{ width: orb.width, height: orb.height, left: orb.left, top: orb.top }}
          animate={{ x: [0, orb.x], y: [0, orb.y], scale: [1, 1.1, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
    </div>
  );
};