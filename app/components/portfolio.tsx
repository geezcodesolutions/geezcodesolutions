import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectsData from "../portfolio/portfolio.json"; // Adjust path as needed

export default function PortfolioPage() {
  const projects = ProjectsData as any[];

  return (
    <div className="min-h-screen p-8">
      <header className="max-w-6xl mx-auto text-center py-16">
        <h1 className="text-5xl text-blue-100 font-black mb-4">
          Digital Craftsmanship
        </h1>
        <p className="text-blue-200">A curation of high-impact platforms.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.id}`}
            className="group bg-blue-950/50 rounded-2xl overflow-hidden border border-blue-900 hover:shadow-2xl transition-all"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold group-hover:text-blue-300 text-blue-100 transition-colors text-start">
                {project.title}
              </h3>
              <p className="text-blue-100  text-sm line-clamp-2 text-justify mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex items-center text-blue-400 font-bold text-sm">
                View Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
