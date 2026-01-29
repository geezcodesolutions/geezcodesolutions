"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <section className="stars bg-gradient-to-b min-h-screen top-0 from-gray-900 to-black py-20 text-center px-4">
        {/* Added unique keys to clear the React warning */}
        <div className="small" key="star-s"></div>
        <div className="medium" key="star-m"></div>
        <div className="big" key="star-b"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-bold text-blue-100 mb-6"
          suppressHydrationWarning={true}
        >
          Welcome to <span className="text-blue-800">GeezCode Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-lg text-blue-100 max-w-xl mx-auto mb-8"
          suppressHydrationWarning={true}
        >
          Empowering your digital journey with cutting-edge tech and elegant
          solutions.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10"
          suppressHydrationWarning={true}
        >
          <Link
            href="/contact"
            className="inline-block bg-blue-900 text-blue-100 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-950 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
