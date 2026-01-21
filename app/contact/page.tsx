"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
// import BgComponent from "@/app/components/BgComponent";

const center = { lat: 8.998725581975584, lng: 38.786995177708754 };

type FormData = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Using an iframe embed instead of the @react-google-maps/api loader

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;

    const subject = `Website contact from ${name || "Website Visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailto = `mailto:geezcodesolutions@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's default mail client with prefilled message
    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-12  text-gray-800 dark:text-white pointer-events-auto">
      <motion.h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 text-4xl py-6 font-bold text-center "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        suppressHydrationWarning={true}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-center mt-2 mb-12 text-blue-950 dark:text-amber-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        suppressHydrationWarning={true}
      >
        We’d love to hear from you. Send us a message.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          suppressHydrationWarning={true}
        >
          <div className="flex items-center gap-4">
            <Mail className="text-amber-400" />
            <span className="text-blue-950 dark:text-amber-100">
              geezcodesolutions@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-amber-400" />
            <span className="text-blue-950 dark:text-amber-100">
              info@geezcodesolutions.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-amber-400" />
            <span className="text-blue-950 dark:text-amber-100">
              +251 954 196 049
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-amber-400" />
            <span className="text-blue-950 dark:text-amber-100">
              +251 946 304 619
            </span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-amber-400" />
            <span className="text-blue-950 dark:text-amber-100">
              Bole, Addis Ababa, Ethiopia
            </span>
          </div>

          <div className="h-64 rounded-md overflow-hidden border border-amber-100 dark:border-blue-950">
            <iframe
              title="GeezCode Solutions location"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${center.lat},${center.lng}&z=15&output=embed`}
            ></iframe>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          suppressHydrationWarning={true}
        >
          <div>
            <label className="block mb-1 font-semibold text-blue-950 dark:text-amber-100">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-amber-100 dark:bg-blue-950 text-blue-950 dark:text-amber-100 border border-amber-100 dark:border-blue-950 focus:outline-none focus:ring-2 focus:ring-amber-text-amber-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-blue-950 dark:text-amber-100">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-amber-100 dark:bg-blue-950 text-blue-950 dark:text-amber-100 border border-amber-100 dark:border-blue-950 focus:outline-none focus:ring-2 focus:ring-amber-text-amber-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-blue-950 dark:text-amber-100">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md bg-amber-100 dark:bg-blue-950 text-blue-950 dark:text-amber-100 border border-amber-100 dark:border-blue-950 focus:outline-none focus:ring-2 focus:ring-amber-text-amber-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 border-2 text-blue-950 dark:text-amber-900 dark:hover:bg-amber-100 hover:text-blue-950 hover:bg-blue-200 px-6 py-2 rounded-full transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
