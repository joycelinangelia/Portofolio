import React from "react";
import Head from "next/head";

// --- TYPES & DATA ---

interface Project {
  title: string;
  period: string;
  association: string;
  description: string;
  techStack: string[];
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "SlotGo",
    period: "Feb 2025 - Present",
    association: "Internship Platform Project",
    description:
      "A hybrid internship ecosystem. I architected the SQL database and built a responsive web admin dashboard for HR using Astro & Solid.js, while simultaneously developing a cross-platform mobile app in Flutter for students to apply for internships.",
    techStack: [
      "Astro",
      "Solid.js",
      "TypeScript",
      "Bun",
      "Tailwind",
      "PostgreSQL",
      "Flutter",
      "Dart",
      "Rust",
    ],
  },
  {
    title: "Hospital Management System",
    period: "Nov 2024 - Dec 2024",
    association: "Database System Coursework",
    description:
      "A secure, role-based platform designed to streamline hospital operations. Features include patient registration, treatment record management for doctors, and administrative controls. Focused on secure database integration and system design.",
    techStack: ["React.js", "System Design", "Database Management"],
  },
  {
    title: "OceanSpace",
    period: "Oct 2024 - Dec 2024",
    association: "Campus Utility Solution",
    description:
      "A university classroom booking system tailored to facilitate room reservations and scheduling. Streamlines the administrative process of requesting and approving classroom usage for students and faculty.",
    techStack: ["Web Development", "UI/UX Design"],
  },
  {
    title: "BudgetBloom",
    period: "Feb 2024 - Apr 2024",
    association: "FinTech Application Prototype",
    description:
      "A Java-based financial growth companion. Developed algorithms to automate expense categorization and integrated APIs for real-time currency conversion—a key feature designed specifically for international students.",
    techStack: ["Java", "Financial Analytics", "API Integration"],
  },
  {
    title: "Pomodoro Study Hub",
    period: "Oct 2023 - Dec 2023",
    association: "Web Database Integration",
    description:
      "A productivity tool based on the Pomodoro Technique. It tracks work sessions and breaks to prevent burnout. Built with a full stack approach to manage user data and session history.",
    techStack: ["HTML", "CSS", "JavaScript", "MongoDB"],
  },
];

const experiences: Experience[] = [
  {
    role: "Web Developer Intern",
    company: "德和月國際科技股份有限公司",
    location: "Taipei",
    period: "Feb 2025 - Jul 2025", // Adjusted based on your resume data
    description:
      "Optimized web application performance to improve data loading speeds and conducted in-depth research on Web APIs for internal data pipeline integration.",
  },
  {
    role: "Translator & HR Admin",
    company: "東聯人力資源管理顧問有限公司",
    location: "Taipei",
    period: "Jan 2024 - Feb 2024",
    description:
      "Managed communication data between foreign workers and employers with 100% accuracy. Streamlined administrative records with high attention to detail.",
  },
];

// --- COMPONENT ---

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900">
      <Head>
        <title>Joycelin Angelia | Portfolio</title>
        <meta name="description" content="Data Scientist & Web Developer Portfolio" />
      </Head>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#" className="font-serif font-bold text-stone-900 tracking-tight text-xl">
            JA
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-stone-900 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-stone-900 transition-colors">
              Experience
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-32 md:mb-48 flex flex-col items-center text-center animate-fade-in-up">
          <p className="text-stone-400 font-medium tracking-[0.2em] text-xs uppercase mb-6">
            Based in Keelung, Taiwan
          </p>

          <h1 className="text-5xl md:text-8xl font-serif font-bold text-stone-900 mb-8 tracking-tight">
            Joycelin Angelia
          </h1>

          <p className="text-lg md:text-2xl text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Aspiring Data Scientist. <br className="hidden md:block" />
            Bridging the gap between raw data and decision-making.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:joycelinangelia@gmail.com"
              className="px-8 py-3 bg-stone-900 text-stone-50 rounded-full text-sm font-bold hover:bg-stone-700 hover:scale-105 transition-all shadow-xl shadow-stone-200"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/joycelinangelia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-stone-200 bg-white text-stone-700 rounded-full text-sm font-bold hover:border-stone-400 hover:bg-stone-50 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joycelinangelia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-stone-200 bg-white text-stone-700 rounded-full text-sm font-bold hover:border-stone-400 hover:bg-stone-50 transition-all flex items-center gap-2"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-stone-900 mb-8">About Me</h2>
            <div className="text-stone-600 text-lg leading-8 space-y-6">
              <p>
                Hello! I am a final-year <b>Computer Science student</b> at National Taiwan Ocean University.
                My journey started with Web Development, but I found my true calling in the patterns hidden within data.
              </p>
              <p>
                Currently, I am focusing on <b>Data Science, Python, and Machine Learning</b>.
                I love building tools that are not only functional but also intuitive and visually pleasing.
              </p>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="mb-32 scroll-mt-24 border-t border-stone-200 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-serif text-stone-900 mb-2">Projects</h2>
              <p className="text-stone-500">A collection of tools and analysis I've built.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  index === 0 ? "md:col-span-2 md:p-10 border-stone-200" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-stone-800 font-serif">{project.title}</h3>
                    <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-4 font-bold">
                    {project.association}
                  </p>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs border border-stone-200 text-stone-500 px-2 py-1 rounded bg-stone-50/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="mb-32 scroll-mt-24 border-t border-stone-200 pt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Professional Experience</h2>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="md:w-1/4 pt-1">
                    <span className="text-sm font-bold text-stone-400 uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  <div className="md:w-3/4 border-l-2 border-stone-100 pl-8 group-hover:border-stone-800 transition-colors duration-300 pb-2">
                    <h3 className="text-xl font-bold text-stone-800 font-serif">{exp.role}</h3>
                    <p className="text-stone-500 italic mb-3">{exp.company} • {exp.location}</p>
                    <p className="text-stone-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section id="education" className="mb-24 border-t border-stone-200 pt-16">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">Education & Credentials</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F5F2EB] p-8 rounded-xl border border-[#ebe5da]">
                  <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Degree</span>
                  <h3 className="font-bold text-stone-800 mt-2 text-xl font-serif">National Taiwan Ocean University</h3>
                  <p className="text-stone-600 mt-1">B.S. in Computer Science</p>
                  <p className="text-xs text-stone-500 mt-6 font-medium">Expected Grad: 2026</p>
                </div>

                <div className="bg-[#F5F2EB] p-8 rounded-xl border border-[#ebe5da]">
                  <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Certificate</span>
                  <h3 className="font-bold text-stone-800 mt-2 text-xl font-serif">Google Advanced Data Analytics</h3>
                  <p className="text-stone-600 mt-1">Coursera</p>
                  <p className="text-xs text-stone-500 mt-6 font-medium">Issued Oct 2025</p>
                </div>
             </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="text-center pt-12 border-t border-stone-200 pb-8">
          <div className="flex justify-center gap-8 mb-8">
             <a href="https://www.linkedin.com/in/joycelinangelia" target="_blank" className="text-stone-400 hover:text-stone-800 hover:scale-110 transition-all">
               LinkedIn
             </a>
             <a href="https://github.com/joycelinangelia" target="_blank" className="text-stone-400 hover:text-stone-800 hover:scale-110 transition-all">
               GitHub
             </a>
             <a href="mailto:joycelinangelia@gmail.com" className="text-stone-400 hover:text-stone-800 hover:scale-110 transition-all">
               Email
             </a>
          </div>
          <p className="text-stone-400 text-sm">© {new Date().getFullYear()} Joycelin Angelia. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}