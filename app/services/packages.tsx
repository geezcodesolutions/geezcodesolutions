// import React, { useState } from "react";
// import {
//   Check,
//   Star,
//   ArrowRight,
//   Smartphone,
//   Globe,
//   Server,
//   Database,
//   Layout,
//   Code,
// } from "lucide-react";

// // Data Structure tailored for Ethiopian Tech Market
// const PACKAGES_DATA = {
//   mobile: {
//     title: "Mobile App Development",
//     subtitle: "Native & Cross-platform solutions for Android & iOS",
//     icon: <Smartphone className="w-6 h-6" />,
//     tiers: [
//       {
//         id: "mobile-std",
//         name: "Standard Package",
//         idealFor: "Startups, MVP launches, Small Teams",
//         priceRange: "50,000 – 120,000",
//         currency: "ETB",
//         features: [
//           "Cross-platform (Flutter/React Native)",
//           "Android & iOS Support",
//           "Up to 6 Essential Screens",
//           "Standard Auth (Email/Phone)",
//           "Basic Admin Dashboard",
//           "Push Notifications",
//           "Play Store Publishing Support",
//         ],
//         highlight: false,
//         delivery: "4-6 Weeks",
//       },
//       {
//         id: "mobile-prem",
//         name: "Premium Package",
//         idealFor: "Fintech, Delivery, Marketplaces",
//         priceRange: "150,000 – 350,000+",
//         currency: "ETB",
//         features: [
//           "Fully Customized UI/UX Design",
//           "20+ Screens & Complex Flows",
//           "Telebirr & Payment Integration",
//           "Real-time Tracking / Maps / Chat",
//           "Role-based Admin Dashboard",
//           "Offline Support & Analytics",
//           "iOS App Store + Play Store",
//           "3 Months Maintenance",
//         ],
//         highlight: true,
//         delivery: "8-12 Weeks",
//       },
//     ],
//   },
//   website: {
//     title: "Website Development",
//     subtitle: "Responsive, SEO-ready web presence",
//     icon: <Globe className="w-6 h-6" />,
//     tiers: [
//       {
//         id: "web-std",
//         name: "Standard Package",
//         idealFor: "Restaurants, NGOs, SMEs",
//         priceRange: "20,000 – 60,000",
//         currency: "ETB",
//         features: [
//           "5–7 Pages (Home, About, Services)",
//           "Responsive Mobile/Desktop Design",
//           "Contact Form & Social Links",
//           "Basic Animations",
//           "SEO-Ready Structure",
//           "OTA Setup and Management",
//           "Free Hosting Setup",
//           "Basic CMS (Admin Panel)",
//         ],
//         highlight: false,
//         delivery: "2-3 Weeks",
//       },
//       {
//         id: "web-prem",
//         name: "Premium Package",
//         idealFor: "Enterprises, eCommerce, Hotels",
//         priceRange: "80,000 – 200,000+",
//         currency: "ETB",
//         features: [
//           "Unlimited Pages & Custom UI/UX",
//           "High-end Animations (Three.js/Lottie)",
//           "Multi-language (English + Amharic/Others)",
//           "Full Headless CMS (Strapi)",
//           "E-commerce / Booking Systems",
//           "Newsletter & Blog Automation",
//           "Advanced Security & Speed Opt.",
//           "3 Months Support",
//         ],
//         highlight: true,
//         delivery: "4-8 Weeks",
//       },
//     ],
//   },
//   systems: {
//     title: "System Development",
//     subtitle: "Enterprise backends, ERPs, and Internal Tools",
//     icon: <Server className="w-6 h-6" />,
//     tiers: [
//       {
//         id: "sys-std",
//         name: "Standard System",
//         idealFor: "Inventory, HR, POS, Data Tracking",
//         priceRange: "80,000 – 200,000",
//         currency: "ETB",
//         features: [
//           "Python/Java/Node Architecture",
//           "Core Business Logic Automation",
//           "User Authentication & Roles",
//           "PostgreSQL/MySQL Database",
//           "Basic Reporting Dashboard",
//           "Local Network Deployment",
//           "Training & Documentation",
//         ],
//         highlight: false,
//         delivery: "6-8 Weeks",
//       },
//       {
//         id: "sys-prem",
//         name: "Premium System",
//         idealFor: "Govt, Fintech, Large Organizations",
//         priceRange: "250,000 – 600,000+",
//         currency: "ETB",
//         features: [
//           "Full Enterprise Architecture",
//           "Cloud-Ready & Scalable Backend",
//           "Advanced Analytics & BI",
//           "API Integration & Multi-branch",
//           "Bank-grade Security & Encryption",
//           "Automated Backups & SLA",
//           "Long-term Maintenance",
//           "Full Technical Manuals",
//         ],
//         highlight: true,
//         delivery: "3-6 Months",
//       },
//     ],
//   },
// };

// const ProductPackages = () => {
//   const [activeCategory, setActiveCategory] = useState("mobile");

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase mb-2">
//           Pricing & Plans
//         </h2>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
//           Choose the perfect package <br className="hidden md:block" />
//           for your growth.
//         </h1>
//         <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
//           Transparent pricing. No hidden fees. Upgrade or cancel anytime.
//         </p>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {Object.entries(PACKAGES_DATA).map(([key, data]) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(key)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base
//                 ${
//                   activeCategory === key
//                     ? "bg-slate-900 text-white shadow-lg scale-105"
//                     : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
//                 }
//               `}
//             >
//               {data.icon}
//               {data.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto">
//         {/* Category Description */}
//         <div className="text-center mb-10 animate-fade-in">
//           <h3 className="text-2xl font-bold text-slate-800">
//             {PACKAGES_DATA[activeCategory].title}
//           </h3>
//           <p className="text-slate-500 mt-2">
//             {PACKAGES_DATA[activeCategory].subtitle}
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {PACKAGES_DATA[activeCategory].tiers.map((tier) => (
//             <div
//               key={tier.id}
//               className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300
//                 ${
//                   tier.highlight
//                     ? "shadow-2xl ring-2 ring-amber-400 md:-mt-4 z-10"
//                     : "shadow-lg border border-slate-100 hover:shadow-xl"
//                 }
//               `}
//             >
//               {/* Top Badge for Premium */}
//               {tier.highlight && (
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider whitespace-nowrap">
//                   <Star size={12} fill="currentColor" /> Recommended for Scale
//                 </div>
//               )}

//               {/* Card Header */}
//               <div className={`p-8 pb-0 ${tier.highlight ? "pt-10" : "pt-8"}`}>
//                 <h3 className="text-2xl font-bold text-slate-900">
//                   {tier.name}
//                 </h3>
//                 <div className="flex items-center gap-2 mt-2">
//                   <div className="h-1 w-10 bg-amber-500 rounded-full"></div>
//                   <p className="text-slate-500 text-sm font-medium">
//                     {tier.idealFor}
//                   </p>
//                 </div>
//               </div>

//               {/* Pricing Section */}
//               <div className="p-8 py-6">
//                 <div className="flex items-baseline flex-wrap gap-2">
//                   <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">
//                     {tier.priceRange}
//                   </span>
//                   <span className="text-slate-500 font-bold">
//                     {tier.currency}
//                   </span>
//                 </div>
//                 <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wide">
//                   Project Based • Est. Time: {tier.delivery}
//                 </p>
//               </div>

//               {/* Divider */}
//               <div className="w-full h-px bg-slate-100"></div>

//               {/* Features List */}
//               <div className="p-8 flex-1">
//                 <ul className="space-y-4">
//                   {tier.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <div
//                         className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
//                         ${tier.highlight ? "bg-amber-100" : "bg-slate-100"}`}
//                       >
//                         <Check
//                           size={14}
//                           className={
//                             tier.highlight ? "text-amber-600" : "text-slate-600"
//                           }
//                           strokeWidth={3}
//                         />
//                       </div>
//                       <span className="ml-3 text-slate-600 text-sm font-medium leading-6">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Button */}
//               <div className="p-8 pt-0">
//                 <button
//                   className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group
//                     ${
//                       tier.highlight
//                         ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl"
//                         : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-100"
//                     }
//                   `}
//                 >
//                   Request Proposal
//                   <ArrowRight
//                     size={18}
//                     className="transform group-hover:translate-x-1 transition-transform"
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Trust/Footer Section */}
//       <div className="mt-20 text-center border-t border-slate-200 pt-10 max-w-4xl mx-auto">
//         <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-6">
//           Supporting Businesses Across Ethiopia
//         </p>
//         <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
//           <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
//             Telebirr Integration
//           </span>
//           <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
//             Multi Language Support
//           </span>
//           <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
//             Local Hosting
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPackages;

import React, { useState } from "react";
import {
  Check,
  Star,
  ArrowRight,
  Smartphone,
  Globe,
  Server,
} from "lucide-react";

// Data Structure tailored for Ethiopian Tech Market
const PACKAGES_DATA = {
  mobile: {
    title: "Mobile App Development",
    subtitle: "Native & Cross-platform solutions for Android & iOS",
    icon: <Smartphone className="w-6 h-6" />,
    tiers: [
      {
        id: "mobile-std",
        name: "Standard Package",
        idealFor: "Startups, MVP launches, Small Teams",
        priceRange: "50,000 – 120,000",
        currency: "ETB",
        features: [
          "Cross-platform (Flutter/React Native)",
          "Android & iOS Support",
          "Up to 6 Essential Screens",
          "Standard Auth (Email/Phone)",
          "Basic Admin Dashboard",
          "Push Notifications",
          "Play Store Publishing Support",
        ],
        highlight: false,
        delivery: "4-6 Weeks",
      },
      {
        id: "mobile-prem",
        name: "Premium Package",
        idealFor: "Fintech, Delivery, Marketplaces",
        priceRange: "150,000 – 350,000+",
        currency: "ETB",
        features: [
          "Fully Customized UI/UX Design",
          "20+ Screens & Complex Flows",
          "Telebirr & Payment Integration",
          "Real-time Tracking / Maps / Chat",
          "Role-based Admin Dashboard",
          "Offline Support & Analytics",
          "iOS App Store + Play Store",
          "3 Months Maintenance",
        ],
        highlight: true,
        delivery: "8-12 Weeks",
      },
    ],
  },
  website: {
    title: "Website Development",
    subtitle: "Responsive, SEO-ready web presence",
    icon: <Globe className="w-6 h-6" />,
    tiers: [
      {
        id: "web-std",
        name: "Standard Package",
        idealFor: "Restaurants, NGOs, SMEs",
        priceRange: "20,000 – 60,000",
        currency: "ETB",
        features: [
          "5–7 Pages (Home, About, Services)",
          "Responsive Mobile/Desktop Design",
          "Contact Form & Social Links",
          "Basic Animations",
          "SEO-Ready Structure",
          "OTA Setup and Management",
          "Free Hosting Setup",
          "Basic CMS (Admin Panel)",
        ],
        highlight: false,
        delivery: "2-3 Weeks",
      },
      {
        id: "web-prem",
        name: "Premium Package",
        idealFor: "Enterprises, eCommerce, Hotels",
        priceRange: "80,000 – 200,000+",
        currency: "ETB",
        features: [
          "Unlimited Pages & Custom UI/UX",
          "High-end Animations (Three.js/Lottie)",
          "Multi-language (English + Amharic/Others)",
          "Full Headless CMS (Strapi)",
          "E-commerce / Booking Systems",
          "Newsletter & Blog Automation",
          "Advanced Security & Speed Opt.",
          "3 Months Support",
        ],
        highlight: true,
        delivery: "4-8 Weeks",
      },
    ],
  },
  systems: {
    title: "System Development",
    subtitle: "Enterprise backends, ERPs, and Internal Tools",
    icon: <Server className="w-6 h-6" />,
    tiers: [
      {
        id: "sys-std",
        name: "Standard System",
        idealFor: "Inventory, HR, POS, Data Tracking",
        priceRange: "80,000 – 200,000",
        currency: "ETB",
        features: [
          "Python/Java/Node Architecture",
          "Core Business Logic Automation",
          "User Authentication & Roles",
          "PostgreSQL/MySQL Database",
          "Basic Reporting Dashboard",
          "Local Network Deployment",
          "Training & Documentation",
        ],
        highlight: false,
        delivery: "6-8 Weeks",
      },
      {
        id: "sys-prem",
        name: "Premium System",
        idealFor: "Govt, Fintech, Large Organizations",
        priceRange: "250,000 – 600,000+",
        currency: "ETB",
        features: [
          "Full Enterprise Architecture",
          "Cloud-Ready & Scalable Backend",
          "Advanced Analytics & BI",
          "API Integration & Multi-branch",
          "Bank-grade Security & Encryption",
          "Automated Backups & SLA",
          "Long-term Maintenance",
          "Full Technical Manuals",
        ],
        highlight: true,
        delivery: "3-6 Months",
      },
    ],
  },
};

// Define the valid keys based on the data object
type PackageCategory = keyof typeof PACKAGES_DATA;

const ProductPackages = () => {
  // Explicitly type the state so TypeScript knows activeCategory is a valid key
  const [activeCategory, setActiveCategory] =
    useState<PackageCategory>("mobile");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase mb-2">
          Pricing & Plans
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Choose the perfect package <br className="hidden md:block" />
          for your growth.
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Transparent pricing. No hidden fees. Upgrade or cancel anytime.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(PACKAGES_DATA).map(([key, data]) => (
            <button
              key={key}
              // Cast 'key' here because Object.entries returns generic strings
              onClick={() => setActiveCategory(key as PackageCategory)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base
                ${
                  activeCategory === key
                    ? "bg-slate-900 text-white shadow-lg scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }
              `}
            >
              {data.icon}
              {data.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto">
        {/* Category Description */}
        <div className="text-center mb-10 animate-fade-in">
          <h3 className="text-2xl font-bold text-slate-800">
            {PACKAGES_DATA[activeCategory].title}
          </h3>
          <p className="text-slate-500 mt-2">
            {PACKAGES_DATA[activeCategory].subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {PACKAGES_DATA[activeCategory].tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col bg-white rounded-2xl transition-all duration-300
                ${
                  tier.highlight
                    ? "shadow-2xl ring-2 ring-amber-400 md:-mt-4 z-10"
                    : "shadow-lg border border-slate-100 hover:shadow-xl"
                }
              `}
            >
              {/* Top Badge for Premium */}
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider whitespace-nowrap">
                  <Star size={12} fill="currentColor" /> Recommended for Scale
                </div>
              )}

              {/* Card Header */}
              <div className={`p-8 pb-0 ${tier.highlight ? "pt-10" : "pt-8"}`}>
                <h3 className="text-2xl font-bold text-slate-900">
                  {tier.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1 w-10 bg-amber-500 rounded-full"></div>
                  <p className="text-slate-500 text-sm font-medium">
                    {tier.idealFor}
                  </p>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="p-8 py-6">
                <div className="flex items-baseline flex-wrap gap-2">
                  <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                    {tier.priceRange}
                  </span>
                  <span className="text-slate-500 font-bold">
                    {tier.currency}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wide">
                  Project Based • Est. Time: {tier.delivery}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-100"></div>

              {/* Features List */}
              <div className="p-8 flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 
                        ${tier.highlight ? "bg-amber-100" : "bg-slate-100"}`}
                      >
                        <Check
                          size={14}
                          className={
                            tier.highlight ? "text-amber-600" : "text-slate-600"
                          }
                          strokeWidth={3}
                        />
                      </div>
                      <span className="ml-3 text-slate-600 text-sm font-medium leading-6">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0">
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group
                    ${
                      tier.highlight
                        ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl"
                        : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-100"
                    }
                  `}
                >
                  Request Proposal
                  <ArrowRight
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust/Footer Section */}
      <div className="mt-20 text-center border-t border-slate-200 pt-10 max-w-4xl mx-auto">
        <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-6">
          Supporting Businesses Across Ethiopia
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
          <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
            Telebirr Integration
          </span>
          <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
            Multi Language Support
          </span>
          <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600">
            Local Hosting
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPackages;
