import React from "react";
import Posts from "./vacancyPost";

// --- Main Component ---
const VacancyPost = () => {
  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out relative overflow-hidden">
      {/* Main Content Container */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
        {/* Header Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-xl rounded-3xl shadow-2xl -z-10 transform rotate-3 scale-95 md:scale-100"></div>

          <div className="bg-blue-950/50 backdrop-blur-md rounded-2xl p-8 md:p-16 text-center border border-blue-500/50 shadow-sm">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-300 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 text-sm font-semibold tracking-wide mb-6">
              WE&apos;RE HIRING
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-950 to-blue-300 dark:from-blue-200 dark:to-blue-50 mb-6 drop-shadow-sm leading-tight">
              GeezCode Solutions <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-100 via-blue-500 to-blue-950">
                Career Opportunities
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-blue-100 mb-8">
              Join Our Mission to Empower Innovation in Africa
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-blue-200 leading-relaxed text-justify-center md:text-center">
              GeezCode Solutions invites passionate, skilled, and purpose-driven
              individuals to explore exciting career opportunities within our
              growing tech company. We seek candidates eager to contribute to
              our vision of technological excellence, sustainable innovation,
              and community advancement across Africa.
            </p>
          </div>
        </div>

        {/* Vacancy Post Component */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-blue-500"></div>
            <h3 className="text-blue-300 uppercase tracking-widest font-semibold text-sm">
              Open Positions
            </h3>
            <div className="h-px flex-1 bg-blue-500"></div>
          </div>
          <Posts />
        </div>
      </section>
    </div>
  );
};

export default VacancyPost;
