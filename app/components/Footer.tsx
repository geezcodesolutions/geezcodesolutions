"use client";
import { useState, FormEvent, use } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";

const quickLinks = [
  // { name: "Downloads", path: "/products" },
  { name: "Careers", path: "/careers" },
  { name: "Services", path: "/services" },
  { name: "FAQs", path: "/faqs" },
  { name: "Blog", path: "/posts" },
];

type StatusType = "success" | "error" | null;

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<StatusType>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
  };

  return (
    <footer className="bg-gray-900 text-blue-100 pt-10 pb-16 -mb-52 z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {/* Quick Links */}
          <div className="md:w-1/4">
            <h5 className="mb-4 text-lg font-semibold">Quick Links</h5>
            <ul>
              {quickLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={link.path}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="md:w-1/4">
            <h5 className="mb-4 text-lg font-semibold">Connect With Us</h5>
            <div className="flex gap-4 mb-4">
              <a
                href="https://linkedin.com"
                className="hover:text-blue-900"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-500"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                className="hover:text-blue-700"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-pink-400"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@geezcodesolutions.com"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaEnvelope /> info@geezcodesolutions.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:geezcodesolutions@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaEnvelope /> geezcodesolutions@gmail.com
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.geezcodesolutions.com"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaGlobe /> www.geezcodesolutions.com
                </a>
              </li> */}
              <li>
                <a
                  href="tel:+251799160326"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaPhoneAlt /> +251 799 160 326
                </a>
              </li>
              <li>
                <a
                  href="tel:+2519541966049"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaPhoneAlt /> +251 954 196 049
                </a>
              </li>
              <li>
                <a
                  href="tel:+251946304619"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <FaPhoneAlt /> +251 946 304 619
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:w-2/4">
            <h5 className="mb-4 text-lg font-semibold">Stay Updated</h5>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded bg-gray-800 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded bg-blue-900 hover:bg-blue-950 text-blue-100 font-semibold transition"
              >
                Subscribe
              </button>
            </form>
            {status === "success" && (
              <p className="text-green-600 mt-2">Thank you!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">Error occurred</p>
            )}
            <p className="text-gray-400 text-xs mt-2">
              ⭐ We&apos;ll never share your email with others
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-2 text-sm">
            <a
              href="/privacy-policy"
              className="hover:text-yellow-400 transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-yellow-400 transition"
            >
              Terms of Service
            </a>
            <a
              href="/accessibility"
              className="hover:text-yellow-400 transition"
            >
              Accessibility
            </a>
          </div>
          <p className="mb-0 text-xs text-gray-400">
            © {new Date().getFullYear()} Geez Code Solutions. All rights
            reserved.
            {/* <span className="block text-gray-500">
              Registered in England & Wales No. 12345678
            </span> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
