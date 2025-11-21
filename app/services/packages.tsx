import React, { useState } from "react";
import { Check, Star, Shield, Zap, ArrowRight } from "lucide-react";

// Mock Data to make the component self-contained and renderable
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Starter Kit",
    description:
      "Essential tools for small businesses and freelancers getting started.",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600",
    features: ["Basic Analytics", "5 Projects", "Email Support", "1GB Storage"],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    description:
      "Advanced features for growing teams that need more power and flexibility.",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    features: [
      "Advanced Analytics",
      "Unlimited Projects",
      "Priority Support",
      "10GB Storage",
      "Team Collaboration",
    ],
    popular: true, // Highlights this card
  },
  {
    id: 3,
    name: "Enterprise",
    description:
      "Full-scale solutions for large organizations requiring maximum security.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    features: [
      "Custom Reporting",
      "Unlimited Everything",
      "24/7 Dedicated Support",
      "SSO & Security",
      "API Access",
    ],
    popular: false,
  },
];

const ProductPackages = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase mb-2">
          Pricing & Plans
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Choose the perfect package <br className="hidden md:block" /> for your
          growth.
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Transparent pricing. No hidden fees. Upgrade or cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center space-x-4">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative rounded-full w-14 h-8 transition-colors duration-300 focus:outline-none bg-slate-200 hover:bg-slate-300"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                isYearly ? "translate-x-6 bg-amber-500" : ""
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Yearly{" "}
            <span className="text-amber-600 text-xs font-bold ml-1">
              (Save 20%)
            </span>
          </span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {MOCK_PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2
              ${
                product.popular
                  ? "shadow-2xl ring-2 ring-amber-400 scale-105 z-10"
                  : "shadow-xl border border-slate-100 hover:shadow-2xl"
              }
            `}
          >
            {/* Popular Badge */}
            {product.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider">
                <Star size={12} fill="currentColor" /> Most Popular
              </div>
            )}

            {/* Image Header */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-6 z-20">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-slate-500 text-sm mb-6 leading-relaxed h-10">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">
                    $
                    {isYearly ? Math.floor(product.price * 0.8) : product.price}
                  </span>
                  <span className="text-slate-500 font-medium ml-2">
                    / {isYearly ? "year" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-xs text-green-600 mt-1 font-medium">
                    Billed ${Math.floor(product.price * 0.8) * 12} yearly
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center mt-0.5">
                        <Check
                          size={14}
                          className="text-amber-600"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="ml-3 text-slate-600 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group
                  ${
                    product.popular
                      ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl"
                      : "bg-amber-100 text-amber-900 hover:bg-amber-200"
                  }
                `}
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Decorative bottom bar for premium feel */}
            <div
              className={`h-1.5 w-full ${
                product.popular ? "bg-amber-500" : "bg-slate-200"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-20 text-center border-t border-slate-200 pt-10 max-w-4xl mx-auto">
        <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-6">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Simple text placeholders for logos to keep it simple */}
          <span className="text-xl font-bold font-serif text-slate-400">
            ACME Corp
          </span>
          <span className="text-xl font-bold text-slate-400">GlobalBank</span>
          <span className="text-xl font-bold italic text-slate-400">
            Starlight
          </span>
          <span className="text-xl font-bold font-mono text-slate-400">
            NextGen
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPackages;
