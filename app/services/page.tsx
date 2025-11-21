"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Database,
  MonitorSmartphone,
  Settings,
  LayoutGrid,
  ChevronRight,
  Server,
  Cloud,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
// import BgComponent from "@/app/components/BgComponent";
import Packages from "./packages";

const Wp0 = "/images/package/Custom WordPress Solution Pro.png";
const Wp1 = "/images/package/Custom WordPress Solution Business.png";
const Fs0 = "/images/package/JavaScript End-to-End Web Solution Pro.png";
const Fs1 = "/images/package/JavaScript End-to-End Web Solution Business.png";
const Custom = "/images/package/Custom Software Solution.png";
const Mobile = "/images/package/Mobile Android_IOS Solution.png";

// --- Type Definitions ---
interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tech: string[];
}

interface Technology {
  icon: React.ReactNode;
  name: string;
  examples: string[];
}

interface ProcessStepData {
  title: string;
  desc: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

interface PackagesProps {
  products?: Product[];
}

interface ServiceCardProps extends Service {
  delay?: number;
}

interface ProcessStepProps extends ProcessStepData {
  step: number;
  delay?: number;
}

// --- Data for Packages Component ---
const Products: Product[] = [
  {
    id: "wp0",
    name: "Custom WordPress Solution Pro",
    description: "Great for individuals just starting out.",
    price: "9,999 ETB",
    image: Wp0,
    features: [
      "Up to 5 Pages",
      "Premium Theme Customization",
      "Up to 5 Essential Plugins",
      "Basic SEO Setup",
      "Basic Security Plugins",
      "Standard Speed Optimization",
      "1 Contact Form",
      "Google Analytics + Search Console Integration",
      "E-commerce Support (Optional Add-on)",
      "No Multilingual Support",
      "1 Month Support",
      "Community Access",
      "UNLIMITED NVMe Storage",
      "UNLIMITED Bandwidth",
      "UNLIMITED Email Accounts",
      "Daily Backups for 21 day",
      "Powered by cPanel",
    ],
  },
  {
    id: "wp1",
    name: "Custom WordPress Solution Business",
    description: "Perfect for small teams and freelancers.",
    price: "12,999 ETB",
    image: Wp1,
    features: [
      "Up to 12 Pages + Blog",
      "Fully Customized Theme",
      "Up to 10 Premium Plugins",
      "Advanced SEO + Schema Integration",
      "Advanced Firewall + Malware Protection",
      "Enhanced Speed (CDN, Caching, Minification)",
      "Multiple Contact Forms with Logic",
      "Full GA4 + Tag Manager Setup",
      "E-commerce Included (WooCommerce)",
      "Optional Multilingual Support",
      "3 Months Support + Maintenance Option",
      "Priority Support",
      "UNLIMITED Hosting Package",
      "UNLIMITED Bandwidth + 4X CPU Cores",
      "UNLIMITED Email Accounts + 4X RAM DDR4",
      "6X Daily Backups for 90 day",
      "Powered by cPanel",
    ],
  },
  {
    id: "fs0",
    name: "End-to-End Web App Solution Pro",
    description: "Designed for growing businesses.",
    price: "59,999 ETB",
    image: Fs0,
    features: [
      "Up to 8 Pages",
      "Custom UI with Tailwind",
      "Node.js + Express",
      "MongoDB Atlas",
      "JWT Authentication",
      "Basic CRUD Panel",
      "3rd Party API Integrations",
      "Optional SEO + SSR",
      "Git + CI/CD Basics",
      "2 Months Support",
      "UNLIMITED NVMe Storage",
      "UNLIMITED Bandwidth",
      "UNLIMITED Email Accounts",
      "Daily Backups for 21 day",
      "Powered by cPanel",
    ],
  },
  {
    id: "fs1",
    name: "End-to-End Web App Solution Business",
    description: "Tailored for large organizations.",
    price: "79,999 ETB",
    image: Fs1,
    features: [
      "Unlimited Pages + Admin Dashboard",
      "Premium UI/UX with Animations",
      "Node.js + Express + Advanced API Features",
      "MongoDB + Redis/Queue Support",
      "JWT + RBAC + 2FA Authentication",
      "Full CMS or Strapi Integration",
      "Advanced Integrations (Payments, Maps)",
      "Integrated SEO + SSR with Next.js",
      "Docker + Full CI/CD + Monitoring",
      "6 Months Support + SLA Option",
      "UNLIMITED Hosting Package",
      "UNLIMITED Bandwidth + 4X CPU Cores",
      "UNLIMITED Email Accounts + 4X RAM DDR4",
      "6X Daily Backups for 90 day",
      "Powered by cPanel",
    ],
  },
  {
    id: "custom",
    name: "Custom Software Solution",
    description: "Need something specific? Let’s talk.",
    price: "249,999 ETB",
    image: Custom,
    features: [
      "Enterprise Systems",
      "Full Stack Architecture + DevOps",
      "Custom Design + Responsive UX",
      "Multi-Database Architecture",
      "REST + GraphQL + WebSocket",
      "RBAC + 2FA + Audit Logs",
      "Dynamic Charts + Exportable Reports",
      "ERP, CRM, Payment Gateways",
      "Full Dev & User Manual",
      "12 Months + SLA Contract",
    ],
  },
  {
    id: "mobile",
    name: "Mobile Android/IOS Solution",
    description: "Need something specific? Let’s talk.",
    price: "99,999 ETB",
    image: Mobile,
    features: [
      "Android + iOS",
      "10+ Screens + Admin Panel",
      "Custom Node.js Backend + PostgreSQL",
      "Realtime Chat, Payments, Offline Mode",
      "Premium UI + Brand Customization",
      "Full Native API Access",
      "Automated Testing + CI/CD",
      "Android + Apple Store with Compliance",
      "Mixpanel + Crashlytics Integration",
      "6 Months + Feature Rollouts",
    ],
  },
];

// --- Main Services Component ---
const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Code size={36} className="text-gold" />,
      title: "Website Development",
      desc: "Modern websites with responsive UI and performance optimization.",
      tech: ["React", "Next.js", "Node.js"],
    },
    {
      icon: <Smartphone size={36} className="text-gold" />,
      title: "Mobile App Development",
      desc: "Cross-platform apps for Android and iOS using React Native.",
      tech: ["React Native", "Flutter", "Firebase"],
    },
    {
      icon: <Database size={36} className="text-gold" />,
      title: "System Development",
      desc: "Custom desktop and enterprise systems for business operations.",
      tech: ["Python", ".NET", "Java"],
    },
    {
      icon: <LayoutGrid size={36} className="text-gold" />,
      title: "UI/UX Design",
      desc: "Beautiful, accessible, and conversion-optimized design interfaces.",
      tech: ["Figma", "Adobe XD", "Webflow"],
    },
    {
      icon: <MonitorSmartphone size={36} className="text-gold" />,
      title: "Software Consulting",
      desc: "Architecture, technology selection, and development roadmaps.",
      tech: ["AWS", "Microservices", "Docker"],
    },
    {
      icon: <Settings size={36} className="text-gold" />,
      title: "DevOps & Deployment",
      desc: "CI/CD pipelines, server management, and cloud deployment.",
      tech: ["Kubernetes", "GitHub Actions", "Terraform"],
    },
  ];

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
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}
      <div className="relative min-h-screen rounded-xl mt-5 text-primary px-4 md:px-12 py-24 space-y-16 overflow-hidden">
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-10 h-10 bg-amber-400 rounded-lg"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.svg
          viewBox="0 0 100 100"
          className="absolute top-60 right-12 w-8 h-8 fill-amber-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="50,15 100,100 0,100" />
        </motion.svg>

        <motion.div
          className="absolute bottom-20 left-[40%] w-5 h-5 bg-yellow-500 rotate-45"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 text-4xl font-bold mb-2">
            Our Services
          </h1>
          <p className="text-lg text-blue-950 dark:text-amber-50 mb-8">
            Tailored solutions for your digital transformation
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              className="bg-amber-400 text-blue-950 hover:text-white hover:bg-yellow-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
              onClick={() => (window.location.href = "/contact")}
            >
              Get a free consultation
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              tech={service.tech}
              delay={index * 0.1}
            />
          ))}
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
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
                className="bg-amber-100 dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4 text-amber-400">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-lg mb-3">{tech.name}</h4>
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
                  {tech.examples.map((example, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full"
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
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
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
      <Packages />
    </div>
  );
};

// --- Sub-component: Service Card ---
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  desc,
  tech,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -5 }}
    className="bg-amber-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col"
  >
    <div className="mb-4 text-amber-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-blue-950 dark:text-amber-50">
      {title}
    </h3>
    <p className="text-blue-950 dark:text-amber-50 mb-4 flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {tech.map((t, i) => (
        <span
          key={i}
          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

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
    className="bg-amber-100 dark:bg-gray-900 p-4 rounded-lg text-center"
  >
    <div className="w-10 h-10 bg-gold text-amber-400 rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
      {step}
    </div>
    <h4 className="font-bold mb-1">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
  </motion.div>
);

export default Services;
