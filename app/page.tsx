"use client";
import Hero from "./components/Hero";
import { motion } from "framer-motion";
import { Code2, Smartphone, Settings } from "lucide-react";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/Testimonials";
import Reveal from "./components/Reveal";
import Portfolio from "./components/portfolio";
// import BgComponent from "@/app/components/BgComponent";

const content = {
  home: {
    title: { en: "We Build Digital Solutions that Work  " },
    subtitle: {
      en: "GeezCode Solutions is your technology partner for web, mobile, and enterprise software.",
    },
    cta: { en: "Contact Us" },
  },
};

export default function Home() {
  const t = content.home;

  const testimonials = [
    {
      quote:
        "This company delivered beyond our expectations. Highly recommended!",
      author: "George Constantine",
      company: "Founder of Constantine Africa Foundation",
    },
    {
      quote: "They transformed our spiritual artifacts to the digital world.",
      author: "Eminance Daniel",
      company: "Greek Orthodox Church Bishop",
    },
  ];

  return (
    <div className="pointer-events-auto">
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}
      <Hero />
      <Reveal delay={0.3}>
        <div className="relative min-h-scree rounded-xl mt-5 text-primary px-4 md:px-12 py-24 space-y-16 overflow-hidden">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-7xl mx-auto"
            suppressHydrationWarning={true}
          >
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 md:text-6xl py-5 font-bold mb-4">
              {t.title.en}
            </h1>
            <p className="text-lg text-blue-950 dark:text-amber-100 md:text-xl mb-8">
              {t.subtitle.en}
            </p>
            <button
              className="bg-amber-400 text-blue-950 hover:text-white hover:bg-yellow-600 px-6 py-3 rounded-xl text-lg transition"
              onClick={() => (window.location.href = "/contact")}
            >
              {t.cta.en}
            </button>
            <Portfolio />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
            suppressHydrationWarning={true}
          >
            <ServiceCard
              icon={<Code2 size={40} className="text-gold" />}
              title="Web Development"
              description="We build fast, scalable, and responsive websites."
            />
            <ServiceCard
              icon={<Smartphone size={40} className="text-gold" />}
              title="Mobile Apps"
              description="Cross-platform apps for Android and iOS."
            />
            <ServiceCard
              icon={<Settings size={40} className="text-gold" />}
              title="System Solutions"
              description="Custom software systems for your organization."
            />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto py-12"
            suppressHydrationWarning={true}
          >
            <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-amber-100 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </motion.section>
        </div>
      </Reveal>
    </div>
  );
}
