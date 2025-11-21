// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "../../components/ui/button"; // Ensure path is correct
// import { ArrowLeft } from "lucide-react";
// import portfolioData from "../portfolio.json"; // Ensure path is correct based on folder structure

// // Types
// type PageProps = {
//   params: Promise<{ id: string }>; // params is a Promise in Next.js 15
// };

// interface Portfolio {
//   id: string | number; // Allow both just in case
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// export default async function PortfolioDetail({ params }: PageProps) {
//   // 1. Await the params (Required for Next.js 15+)
//   const { id } = await params;

//   // 2. Use .toString() to ensure types match
//   const portfolio = portfolioData.find((p) => p.id.toString() === id);

//   if (!portfolio) return notFound();

//   const { title, description, imageUrl } = portfolio;

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 pointer-events-auto">
//       <div className="max-w-7xl mx-auto">
//         <Button asChild variant="ghost" className="mb-4">
//           <Link
//             href="/portfolio"
//             className="flex items-center text-primary dark:text-gold hover:text-primary dark:hover:text-gold mb-8 transition-colors"
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Portfolio
//           </Link>
//         </Button>

//         <div className="mb-12 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-gold mb-4">
//             {title}
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           <div className="lg:col-span-2 space-y-8">
//             <div className="rounded-xl overflow-hidden shadow-lg">
//               {/* Added placeholder for safety */}
//               <Image
//                 src={imageUrl || "https://via.placeholder.com/800x450"}
//                 alt={title}
//                 className="w-full h-auto object-cover"
//                 width={800}
//                 height={450}
//               />
//             </div>

//             <div className="prose dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-bold text-primary dark:text-gold mb-4">
//                 📄 Project Overview
//               </h2>
//               <p className="text-lg text-primary dark:text-gold mb-6">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
// import BgComponent from "@/app/components/BgComponent";
import portfolioData from "../portfolio.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

// Updated Interface to match your new data structure
interface Portfolio {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt?: string; // Optional fields based on your usage
  client?: string;
  year?: string | number;
  role?: string;
  content?: string; // HTML content
  development?: string;
  ui_ux_strategy?: string;
  technologies?: string;
  url?: string;
  published?: boolean;
}

export default async function PortfolioDetail({ params }: PageProps) {
  // 1. Await params (Next.js 15 ready)
  const { id } = await params;

  // 2. Find data safely
  const portfolio = portfolioData.find((p) => p.id.toString() === id);

  if (!portfolio) return notFound();

  // 3. Destructure all new fields
  const {
    title,
    description,
    imageUrl,
    createdAt,
    client,
    year,
    role,
    content,
    development,
    ui_ux_strategy,
    technologies,
    url,
  } = portfolio;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 pointer-events-auto relative">
      {/* Background Component Wrapper */}
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}

      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Button asChild variant="ghost" className="mb-4">
          <Link
            href="/portfolio"
            className="flex items-center text-primary dark:text-gold hover:text-primary dark:hover:text-gold mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        {/* Meta Header */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {createdAt
                ? new Date(createdAt).toLocaleDateString()
                : "Date N/A"}
            </span>
          </div>
          {/* {portfolio.published ? (
            <Badge variant="secondary">Published</Badge>
          ) : (
            <Badge variant="outline">Draft</Badge>
          )} */}
        </div>

        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-gold mb-4">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-primary dark:text-gray-400 text-sm md:text-base">
            {client && <span>Client: {client}</span>}
            {year && <span>Year: {year}</span>}
            {role && <span>Role: {role}</span>}
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
              <Image
                // Fallback to placeholder if imageUrl is missing
                src={imageUrl || "https://via.placeholder.com/800x450"}
                alt={title}
                className="w-full h-auto object-cover"
                width={800}
                height={450}
                priority
              />
            </div>

            {/* Overview */}
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary dark:text-gold mb-4">
                📄 Project Overview
              </h2>
              <p className="text-lg text-primary dark:text-gold mb-6">
                {description}
              </p>

              {/* HTML Content */}
              {content && (
                <>
                  <h2 className="text-2xl font-bold text-primary dark:text-gold mb-4">
                    Details
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </>
              )}
            </div>

            {/* Deployment Section */}
            {development && (
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-primary dark:text-gold mb-4">
                  🚀 Deployment:
                </h2>
                <p className="text-lg text-primary dark:text-gold mb-6">
                  {development}
                </p>
              </div>
            )}

            {/* UI/UX Section */}
            {ui_ux_strategy && (
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-primary dark:text-gold mb-4">
                  🎨 UI/UX Strategy:
                </h2>
                <p className="text-lg text-primary dark:text-gold mb-6">
                  {ui_ux_strategy}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-32 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary dark:text-gold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
                Project Info
              </h3>

              {/* Technologies */}
              {technologies && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {/* Split string by comma if your JSON stores it as "React, Next.js" */}
                    {technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Link */}
              {url && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Live Preview
                  </h4>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                  >
                    Visit Project
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {client && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Client
                    </h4>
                    <p className="text-primary dark:text-gold">{client}</p>
                  </div>
                )}

                {year && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Year
                    </h4>
                    <p className="text-primary dark:text-gold">{year}</p>
                  </div>
                )}

                {role && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Role
                    </h4>
                    <p className="text-primary dark:text-gold">{role}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
