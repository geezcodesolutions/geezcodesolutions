import React from "react";
import Post from "./vacancyPost";
import BgComponent from "@/app/components/BgComponent";

const VacancyPost: React.FC = () => {
  return (
    <section className="min-h-screen px-4 md:px-12 py-12 text-navy dark:text-white pointer-events-auto">
      {/* <div className="absolute inset-0 -z-10 w-full h-full">
        <BgComponent />
      </div> */}
      <div className="max-w-7xl mx-auto p-16 text-center bg-amber-100/80 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-justify text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700 mb-6 drop-shadow-sm">
          GeezCode Solutions Career Opportunities
        </h1>
        <h1 className="text-2xl text-start py-3 text-gold/80">
          Join Our Mission to Empower Innovation in Africa
        </h1>
        <p className="text-lg md:text-xl text-justify text-PrimaryGreen leading-relaxed mb-8">
          GeezCode Solutions invites passionate, skilled, and purpose-driven
          individuals to explore exciting career opportunities within our
          growing tech company. As a forward-thinking software firm committed to
          building impactful digital solutions, we seek candidates eager to
          contribute to our vision of technological excellence, sustainable
          innovation, and community advancement across Africa.
        </p>
      </div>
      <Post />
    </section>
  );
};

export default VacancyPost;
