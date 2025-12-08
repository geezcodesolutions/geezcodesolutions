import React from "react";
import Posts from "./vacancyPost";

// --- Main Component ---
const VacancyPost = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 ease-in-out relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-amber-200/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24">
        {/* Header Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl -z-10 transform rotate-1 scale-95 md:scale-100"></div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 md:p-16 text-center border border-white/50 dark:border-slate-700 shadow-sm">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-sm font-semibold tracking-wide mb-6">
              WE'RE HIRING
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-6 drop-shadow-sm leading-tight">
              GeezCode Solutions <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-300 dark:to-amber-500">
                Career Opportunities
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-8">
              Join Our Mission to Empower Innovation in Africa
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify-center md:text-center">
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
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
            <h3 className="text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold text-sm">
              Open Positions
            </h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <Posts />
        </div>
      </section>
    </div>
  );
};

export default VacancyPost;
