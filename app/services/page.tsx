"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Database,
  LayoutGrid,
  ChevronRight,
  Server,
  Cloud,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
// import BgComponent from "@/app/components/BgComponent";
import Packages from "./packages";

// --- Type Definitions ---

interface Technology {
  icon: React.ReactNode;
  name: string;
  examples: string[];
}

interface ProcessStepData {
  title: string;
  desc: string;
}

interface ProcessStepProps extends ProcessStepData {
  step: number;
  delay?: number;
}

// --- Main Services Component ---
const Services: React.FC = () => {
  const technologies: Technology[] = [
    {
      icon: <Server size={24} />,
      name: "Backend",
      examples: ["Node.js", "Strapi", "Express.js", "Sanity", "Django"],
    },
    {
      icon: <LayoutGrid size={24} />,
      name: "Frontend",
      examples: [
        "React",
        "Next.js",
        "Three.js",
        "GSAP",
        "React Native",
        "Tailwind",
      ],
    },
    {
      icon: <Cloud size={24} />,
      name: "Cloud",
      examples: ["AWS", "Google Cloud", "Vercel", "Firebase"],
    },
    {
      icon: <GitBranch size={24} />,
      name: "DevOps",
      examples: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    },
    {
      icon: <Smartphone size={24} />,
      name: "Mobile",
      examples: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: <Database size={24} />,
      name: "Database",
      examples: ["MongoDB", "PostgreSQL", "MySQL", "Firestore"],
    },
  ];

  const processSteps: ProcessStepData[] = [
    { title: "Discovery", desc: "Requirement analysis & planning" },
    { title: "Design", desc: "UI/UX prototyping" },
    { title: "Development", desc: "Agile implementation" },
    { title: "Deployment", desc: "CI/CD & cloud hosting" },
  ];

  return (
    <div className="pointer-events-auto">
      <div className="relative min-h-screen rounded-xl mt-5 text-primary px-4 md:px-12 py-24 space-y-16 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Packages />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              className="bg-amber-400 text-blue-950 hover:text-amber-100 hover:bg-yellow-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
              onClick={() => (window.location.href = "/contact")}
            >
              Get a free consultation
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-amber-100 mb-12">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-amber-100 dark:bg-blue-950 p-6 rounded-xl text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4 text-amber-400">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-lg mb-3 text-blue-950 dark:text-amber-100">
                  {tech.name}
                </h4>
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
                  {tech.examples.map((example, i) => (
                    <span
                      key={i}
                      className="text-xs bg-amber-200 dark:bg-blue-800 text-gray-700 dark:text-amber-100 px-2.5 py-1 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-amber-100/50  dark:bg-blue-950/50 rounded-2xl p-8 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-950 dark:text-amber-100">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={index + 1}
                title={step.title}
                desc={step.desc}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.section>
      </div>
      {/*<Packages />*/}
    </div>
  );
};

// --- Sub-component: Process Step ---
const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  desc,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-amber-100 dark:bg-blue-950 p-4 rounded-lg text-center"
  >
    <div className="w-10 h-10 bg-gold text-amber-400 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
      {step}
    </div>
    <h4 className="font-bold mb-1 text-blue-950 dark:text-amber-100">
      {title}
    </h4>
    <p className="text-sm text-blue-950 dark:text-amber-100">{desc}</p>
  </motion.div>
);

export default Services;
