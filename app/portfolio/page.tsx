import Link from "next/link";
import Image from "next/image";
import portfolios from "./portfolio.json";
// import BgComponent from "@/app/components/BgComponent";

export default function PortfolioListPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 pointer-events-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-100 via-blue-500 to-blue-950 mb-4">
          Our Creative Works
        </h1>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
          Explore our collection of innovative projects and creative solutions
        </p>
      </div>

      {portfolios.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-blue-950 text-7xl font-black">
            No projects found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolios.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <Link href={`/portfolio/${item.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.imageUrl || "https://via.placeholder.com/400x300"}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    width={400}
                    height={300}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>

                <div className="p-6 bg-blue-950/80 backdrop-blur-sm relative z-20">
                  <h2 className="text-2xl font-bold text-blue-100 mb-2 transition-colors duration-300 group-hover:text-blue-400">
                    {item.title}
                  </h2>
                  <p className="text-blue-200 line-clamp-2 group-hover:text-blue-200 transition-colors duration-300">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span>View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
