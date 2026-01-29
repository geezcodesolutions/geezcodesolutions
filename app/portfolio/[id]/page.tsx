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
// interface Portfolio {
//   id: string | number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   createdAt?: string; // Optional fields based on your usage
//   client?: string;
//   year?: string | number;
//   role?: string;
//   content?: string; // HTML content
//   development?: string;
//   ui_ux_strategy?: string;
//   technologies?: string;
//   url?: string;
//   published?: boolean;
// }

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
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Button asChild variant="ghost" className="mb-4">
          <Link
            href="/portfolio"
            className="flex items-center text-blue-300 hover:text-blue-500 hover:bg-transparent mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        {/* Meta Header */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2 text-blue-300">
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
          <h1 className="text-4xl md:text-5xl font-bold text-blue-200 mb-4">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-blue-300 text-sm md:text-base">
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
            <div className="rounded-xl overflow-hidden shadow-lg bg-blue-100">
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
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-blue-100 mb-4">
                📄 Project Overview
              </h2>
              <p className="text-lg text-blue-200 mb-6">{description}</p>

              {/* HTML Content */}
              {/*{content && (
                <>*/}
              <h2 className="text-2xl font-bold text-blue-100 mb-4">Details</h2>
              {/*<div dangerouslySetInnerHTML={{ __html: content }} />*/}
              <p className="text-lg text-blue-200 mb-6">{content}</p>
              {/*</>
              )}*/}
            </div>

            {/* Deployment Section */}
            {/*{development && (*/}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-blue-100 mb-4">
                🚀 Deployment:
              </h2>
              <p className="text-lg text-blue-200 mb-6">{development}</p>
            </div>
            {/*)}*/}

            {/* UI/UX Section */}
            {/*{ui_ux_strategy && (*/}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-blue-100 mb-4">
                🎨 UI/UX Strategy:
              </h2>
              <p className="text-lg text-blue-200 mb-6">{ui_ux_strategy}</p>
            </div>
            {/*)}*/}
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-blue-950/50 rounded-xl shadow-md p-6 sticky top-32 border border-blue-500">
              <h3 className="text-xl font-bold text-blue-100 mb-6 border-b pb-2 border-blue-300">
                Project Info
              </h3>

              {/* Technologies */}
              {technologies && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {/* Split string by comma if your JSON stores it as "React, Next.js" */}
                    {technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-300 text-blue-950 text-sm px-3 py-1 rounded-full border border-blue-500"
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
                  <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-2">
                    Live Preview
                  </h4>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-blue-300 hover:text-blue-500 transition-colors"
                  >
                    Visit Project
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-4 pt-4 border-t border-blue-300">
                {client && (
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                      Client
                    </h4>
                    <p className="text-blue-300">{client}</p>
                  </div>
                )}

                {year && (
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                      Year
                    </h4>
                    <p className="text-blue-300">{year}</p>
                  </div>
                )}

                {role && (
                  <div>
                    <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                      Role
                    </h4>
                    <p className="text-blue-300">{role}</p>
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
