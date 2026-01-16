"use client";

import {
  Users,
  Target,
  ShieldCheck,
  Code,
  Globe,
  Cpu,
  Quote,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
// import BgComponent from "@/app/components/BgComponent";

const About = () => {
  const t = {
    title: "About GeezCode Solutions",
    subtitle: "Where innovation meets execution",
    mission:
      "Empower businesses with tailored digital solutions that drive growth and efficiency.",
    vision: "To be Africa's most trusted tech innovation partner by 2030.",
    values: "Excellence | Collaboration | Impact",
    services: "Our Expertise",
    servicesList: [
      "Custom Software Development",
      "Web & Mobile Apps",
      "AI & Cloud Solutions",
      "UI/UX Design",
    ],
    stats: [
      { value: "25+", label: "Projects" },
      { value: "90%", label: "Client Retention" },
      { value: "24/7", label: "Support" },
    ],
    teamTitle: "Meet Our Experts",
    testimonials: "What Our Clients Say",
    cta: "Let's build something great!",
    startProject: "Start Your Project Today",
  };

  const team = [
    {
      name: "Suraphel Mengistu",
      role: "Marketing Manager",
      expertise: "Marketing",
    },
    {
      name: "Abenezer Dadi",
      role: "Tech Lead",
      expertise: "Development",
    },
  ];

  return (
    // <div className="relative min-h-screen pointer-events-auto bg-opacity-80 backdrop-blur-sm rounded-xl mt-5 text-primary px-4 md:px-12 py-24 space-y-16 overflow-hidden">
    <div className="pointer-events-auto pt-16">
      <motion.div
        className="absolute bottom-20 left-[40%] w-5 h-5 bg-yellow-500 rotate-45"
        style={{
          filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-600 to-amber-900 mb-2">
          {t.title}
        </h1>
        <p className="text-lg text-blue-950 dark:text-amber-100 mb-8">
          {t.subtitle}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button
            className="bg-amber-400 text-blue-950 hover:text-amber-100 hover:bg-yellow-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
            onClick={() => (window.location.href = "/contact")}
          >
            {t.startProject}
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20"
      >
        <ValueCard
          icon={<Target className="text-gold" size={36} />}
          title="Mission"
          text={t.mission}
          delay={0.1}
        />
        <ValueCard
          icon={<Globe className="text-gold" size={36} />}
          title="Vision"
          text={t.vision}
          delay={0.3}
        />
        <ValueCard
          icon={<ShieldCheck className="text-gold" size={36} />}
          title="Values"
          text={t.values}
          delay={0.5}
        />
      </motion.section>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-center text-blue-950 dark:text-amber-100 mb-8">
          {t.services}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {t.servicesList.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-amber-100 dark:bg-blue-950 p-4 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center text-amber-400 mb-2">
                <Code size={24} />
              </div>
              <p className="text-sm text-blue-950 dark:text-amber-100">
                {service}amber-100"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-amber-100 dark:bg-blue-950 rounded-xl p-8 max-w-4xl mx-auto mb-20"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          {t.stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-amber-400">{stat.value}</p>
              <p className="text-sm text-blue-950 dark:text-amber-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-950 dark:text-amber-100">
          {t.teamTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              expertise={member.expertise}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <button
          className="bg-amber-400 text-blue-950 hover:text-white hover:bg-yellow-600 px-6 py-3 rounded-lg font-medium"
          onClick={() => (window.location.href = "/contact")}
        >
          {t.cta}
        </button>
      </motion.div>
    </div>
  );
};

export default About;

// ValueCard Component
type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
};

const ValueCard = ({ icon, title, text, delay = 0 }: ValueCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-amber-100 dark:bg-blue-950 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
  >
    <div className="flex justify-center text-amber-400 mb-4 text-3xl">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-center text-blue-950 dark:text-amber-100">
      {title}
    </h3>
    <p className="text-center text-blue-950 dark:text-amber-100 ">{text}</p>
  </motion.div>
);

// TeamMember Component
type TeamMemberProps = {
  name: string;
  role: string;
  expertise: string;
  delay?: number;
};

const TeamMember = ({ name, role, expertise, delay = 0 }: TeamMemberProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-center gap-6 bg-amber-100 dark:bg-blue-950 p-6 rounded-xl shadow-sm"
  >
    <div className="w-16 h-16 text-blue-950 dark:text-amber-400 rounded-full bg-amber-400/30 flex items-center justify-center text-gold text-xl font-bold">
      {name.charAt(0)}
    </div>
    <div>
      <h3 className="font-bold text-blue-950 dark:text-amber-100">{name}</h3>
      <p className="text-sm text-blue-950 dark:text-amber-100">{role}</p>
      <p className="text-xs text-blue-950 dark:text-amber-100 mt-1">
        {expertise}
      </p>
    </div>
  </motion.div>
);

// TestimonialCard Component
type TestimonialCardProps = {
  quote: string;
  author: string;
};

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-amber-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
  >
    <Quote className="text-amber-400 rotate-180 mb-2" size={24} />
    <p className="italic text-blue-950 dark:text-amber-100 mb-4">{quote}</p>
    <p className="font-medium text-blue-950 dark:text-amber-100 text-right">
      — {author}
    </p>
  </motion.div>
);
