import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-300 selection:text-teal-900">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT COLUMN (Fixed Header on Desktop) */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                Joycelin Angelia
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-300 sm:text-xl">
                Aspiring Data Scientist & Web Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                CS Student at NTOU. Transforming raw data into meaningful insights and building efficient systems.
              </p>
              
              {/* Simple Navigation */}
              <nav className="nav hidden lg:block mt-16">
                <ul className="mt-8 w-max">
                  <li>
                    <a href="#about" className="group flex items-center py-3">
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 transition-colors">About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="group flex items-center py-3">
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 transition-colors">Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social / Contact Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a href="mailto:joycelinangelia@gmail.com" className="block hover:text-teal-300 transition-colors">
                  Email Me
                </a>
              </li>
              <li className="mr-5 text-xs">
                <span className="block text-slate-500">
                   📍 Keelung, Taiwan
                </span>
              </li>
            </ul>
          </header>

          {/* RIGHT COLUMN (Scrollable Content) */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <p className="mb-4 text-slate-400 leading-relaxed">
                Hello! I am a senior <b>Computer Science</b> student at National Taiwan Ocean University. 
                While I have a strong foundation in <b>Web Development</b> from my previous internship, 
                my true passion lies in <b>Data Science</b> and <b>Machine Learning</b>.
              </p>
              <p className="mb-4 text-slate-400 leading-relaxed">
                I enjoy solving complex problems using Python and SQL, optimizing database structures, 
                and deriving actionable insights to support decision-making processes.
              </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
              </div>
              
              <div className="group/list">
                
                {/* Project 1: SlotGo */}
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">Feb - Dec 2025</div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300">
                        SlotGo (Internship Platform)
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      Designed efficient database schemas for internship data management and built an admin dashboard to visualize applicant metrics. Empowered administrators to make data-driven hiring decisions.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SQL</div></li>
                      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Database Design</div></li>
                      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Web Admin</div></li>
                    </ul>
                  </div>
                </div>

                {/* Project 2: BudgetBloom */}
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mt-12">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">Feb - Apr 2024</div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300">
                        BudgetBloom
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      A Java-based financial analytics tool. Developed logic to automate expense categorization and real-time currency conversion, helping users visualize their spending habits accurately.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Java</div></li>
                      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Analytics</div></li>
                      <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Data Handling</div></li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>
          </main>
        </div>
      </div>
    </main>
  );
}