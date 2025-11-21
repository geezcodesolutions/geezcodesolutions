"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import BgComponent from "@/app/components/BgComponent";

const containerStyle = { width: "100%", height: "100%" };
const center = { lat: 9.0108, lng: 38.7613 };

type FormData = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch {
      alert("Server error.");
    }
  };

  return (
    <div className="min-h-screen px-6 md:px-16 py-12  text-gray-800 dark:text-white pointer-events-auto">
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}
      <motion.h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 text-4xl py-6 font-bold text-center "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-center mt-2 mb-12 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We’d love to hear from you. Send us a message.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <Mail className="text-amber-400" />
            <span>info@geezcodesolutions.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-amber-400" />
            <span>+251 954 196 049</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-amber-400" />
            <span>Bole, Addis Ababa, Ethiopia</span>
          </div>

          <div className="h-64 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
              >
                <Marker position={center} />
              </GoogleMap>
            )}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-text-amber-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Your Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-text-amber-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-text-amber-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 border-2 dark:text-amber-400 hover:text-white hover:bg-yellow-600 px-6 py-2 rounded-full transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
