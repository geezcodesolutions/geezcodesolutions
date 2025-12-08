"use client";

import { motion } from "framer-motion";
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
      name: "Yohannes Tilaye",
      role: "Sales Person",
      expertise: "Marketing",
    },
  ];

  // const testimonials = [
  //   {
  //     quote:
  //       "GeezCode transformed our logistics platform with incredible efficiency gains.",
  //     author: "Daniel Yohannes, Safi Trucking",
  //   },
  // ];

  return (
    // <div className="relative min-h-screen pointer-events-auto bg-opacity-80 backdrop-blur-sm rounded-xl mt-5 text-primary px-4 md:px-12 py-24 space-y-16 overflow-hidden">
    <div className="pointer-events-auto">
      {/* Interactive Background */}
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 mb-2">
          {t.title}
        </h1>
        <p className="text-lg text-blue-950 dark:text-amber-50 mb-8">
          {t.subtitle}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button
            className="bg-amber-400 text-blue-950 hover:text-white hover:bg-yellow-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
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
        <h2 className="text-2xl font-bold text-center mb-8">{t.services}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {t.servicesList.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-amber-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center text-amber-400 mb-2">
                <Code size={24} />
              </div>
              <p className="text-sm text-blue-950 dark:text-amber-50">
                {service}
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
        className="bg-amber-400/80 dark:bg-gold/20 rounded-xl p-8 max-w-4xl mx-auto mb-20"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          {t.stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-bold text-gold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
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
        <h2 className="text-2xl font-bold text-center mb-8">{t.teamTitle}</h2>
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

      {/* Testimonials */}
      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-amber-400/10 dark:bg-blue-950/90 rounded-2xl p-8 max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <Quote className="text-gold rotate-180" />
          {t.testimonials}
          <Quote className="text-gold" />
        </h2>
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </motion.section> */}

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
    className="bg-amber-100 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
  >
    <div className="flex justify-center text-amber-400 mb-4 text-3xl">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-center text-blue-950 dark:text-amber-50">
      {title}
    </h3>
    <p className="text-center text-blue-950 dark:text-amber-50 ">{text}</p>
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
    className="flex items-center gap-6 bg-amber-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm"
  >
    <div className="w-16 h-16 text-amber-400 rounded-full bg-amber-400/30 flex items-center justify-center text-gold text-xl font-bold">
      {name.charAt(0)}
    </div>
    <div>
      <h3 className="font-bold text-blue-950 dark:text-amber-50">{name}</h3>
      <p className="text-sm text-blue-950 dark:text-amber-50">{role}</p>
      <p className="text-xs text-blue-950 dark:text-amber-50 mt-1">
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
    <p className="italic text-blue-950 dark:text-amber-50 mb-4">{quote}</p>
    <p className="font-medium text-blue-950 dark:text-amber-50 text-right">
      — {author}
    </p>
  </motion.div>
);
