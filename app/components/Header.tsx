"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const logo = "/images/black.png"; // Update with your logo path

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogs", href: "/posts" },
  // { name: "Downloads", href: "/products" },
  { name: "Contact Us", href: "/contact" },
  // { name: "Careers", href: "/careers" },
  // { name: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* <div className=" font-bold text-amber-400"> */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="w-auto"
            height={10}
            width={50}
          />
        </Link>
        {/* </div> */}

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-md font-medium transition-colors hover:text-blue-300 ${
                pathname === item.href ? "text-blue-300" : "text-blue-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-blue-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-950/30 backdrop-blur-3xl shadow">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-md font-medium transition-colors hover:text-blue-300 ${
                pathname === item.href ? "text-blue-300" : "text-blue-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
