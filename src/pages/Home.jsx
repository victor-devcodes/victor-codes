import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

import SEO from "../components/seo/SEO";
import {
  FiArrowUpRight,
  FiCheck,
  FiGithub,
} from "react-icons/fi";

import { projects, services, process, technologies } from "../data/homeData";
import passportPhoto from "../assets/images/victor-passport.jpg";

function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-5 text-base leading-7 text-slate-500">
          {text}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>

      <SEO
        title="Web Developer & React Specialist"
        description="Victor Codes builds fast, responsive and modern websites and web applications for businesses, entrepreneurs and growing brands."
        path="/"
      />
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-120 w-120 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-120 w-120 rounded-full bg-cyan-500/15 blur-3xl" />

        <Container>
          <div className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">

            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Frontend · Full-Stack · Web
              </div>

              <h1 className="max-w-4xl text-5xl sm:text-6xl font-black leading-[0.96] ">
                I build websites that{" "}
                <span className="text-violet-300">
                  move businesses forward.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I'm Victor, a web developer focused on creating fast,
                responsive and thoughtful digital experiences for businesses,
                startups and ambitious ideas.
              </p>

              <div className="mt-9 grid items-center  lg:flex flex-wrap  gap-10">
              
                <Link
                  to="/projects"
                  className="link group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1"
                >
                  View my work

                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-brand"
                >
                  Let's work together
                </Link>

              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[7px] lg:text-xs text-slate-400">

                <div className="flex items-center gap-2">
                  <FiCheck className="text-violet-400" />
                  Responsive by default
                </div>

                <div className="flex items-center gap-2">
                  <FiCheck className="text-violet-400" />
                  Clean React architecture
                </div>

                <div className="flex items-center gap-2">
                  <FiCheck className="text-violet-400" />
                  Modern Technology
                </div>

              </div>

            </motion.div>


            {/* Developer visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl"
            >
              {/* Profile photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-4 -top-5 z-20 sm:-right-6 sm:-top-6"
              >
                <div className="rounded-full border-4 border-slate-950 bg-slate-950 p-1 shadow-2xl shadow-black/40">
                  <img
                    src={passportPhoto}
                    alt="Victor Codes"
                    className="h-20 w-20 rounded-full object-cover object-center sm:h-24 sm:w-24"
                  />
                </div>

                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-slate-950 bg-emerald-400" />
              </motion.div>

              
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">

                {/* Browser top */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    victor-codes.dev
                  </span>

                </div>


                {/* Code visual */}
                <div className="p-6 sm:p-8">

                  <div className="rounded-2xl border border-white/5 bg-slate-950 p-6 font-mono text-xs leading-7 text-slate-400 sm:text-sm">

                    <p>
                      <span className="text-violet-400">const</span>{" "}
                      <span className="text-white">developer</span>{" "}
                      = {"{"}
                    </p>

                    <p className="pl-5">
                      name:{" "}
                      <span className="text-emerald-400">
                        "Victor Codes"
                      </span>
                      ,
                    </p>

                    <p className="pl-5">
                      role:{" "}
                      <span className="text-emerald-400">
                        "Web Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-5">
                      stack: [
                    </p>

                    <p className="pl-10 text-slate-500">
                      "React",
                    </p>

                    <p className="pl-10 text-slate-500">
                      "Tailwind CSS",
                    </p>

                    <p className="pl-10 text-slate-500">
                      "Node.js",
                    </p>

                    <p className="pl-10 text-slate-500">
                      "PostgreSQL"
                    </p>

                    <p className="pl-5">
                      ],
                    </p>

                    <p className="pl-5">
                      focus:{" "}
                      <span className="text-emerald-400">
                        "Quality"
                      </span>
                    </p>

                    <p>{"};"}</p>

                    <p className="mt-5 text-slate-600">
                      // turning ideas into useful products
                    </p>

                  </div>

                </div>


                {/* Bottom status */}
                <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Available for projects
                  </div>

                  <FiGithub className="text-slate-500" />

                </div>

              </div>


              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur sm:block"
              >

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Current focus
                </p>

                <p className="mt-2 text-sm font-bold text-white">
                  Building better web experiences
                </p>

              </motion.div>
                
            </motion.div>
                
          </div>

       {/* =====================================================
          STATS
      ====================================================== */}

      <section className="border-b border-slate-10 ">

        <Container>

          <div className="flex lg:hidden justify-center gap-12 py-12 ">

            <div>
              <p className="text-3xl font-black tracking-tight text-brand-light">
                50+
              </p>

              <p className="mt-1 text-xs lg:text-sm text-slate-500">
                Projects built
              </p>
            </div>

            <div>
              <p className="text-3xl font-black tracking-tight text-brand-light">
                20+
              </p>

              <p className="mt-1 text-xs lg:text-sm text-slate-500">
                Technologies explored
              </p>
            </div>

            <div>
              <p className="text-3xl font-black tracking-tight text-brand-light">
                100%
              </p>

              <p className="mt-1 text-xs lg:text-sm text-slate-500">
                Focus on quality
              </p>
            </div>

          </div>

        </Container>

      </section>
        </Container>
      </section>


    


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <Section>

        <Container>

          <SectionTitle
            eyebrow="Selected work"
            title="A selection of things I've built."
            text="A few projects that demonstrate how I approach interfaces, functionality and the details that make a digital product feel complete."
          />


          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {projects.map((project, index) => (


              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-950/10"
              >
              <Link
                to= "/projects"
                className="group block overflow-hidden"
              >

              
                <div className="aspect-4/3 overflow-hidden bg-slate-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>


                <div className="p-7">

                  <div className="flex items-center justify-between">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                      {project.number}
                    </p>

                    <FiArrowUpRight className="text-slate-400 transition group-hover:text-slate-950" />

                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {project.type}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  <div
                    className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
                  >
                    View project
                    <FiArrowUpRight />
                  </div>

                </div>
                    </Link>
              </motion.article>
                    
            ))}

          </div>


          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold transition hover:border-slate-950 hover:bg-slate-50"
          >
            View all projects
            <FiArrowUpRight />
          </Link>

        </Container>

      </Section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <SectionTitle
              eyebrow="What I do"
              title="From idea to a finished digital product."
              text="I combine clean development, thoughtful interfaces and responsive design to create experiences that work as well as they look."
            />


            <div className="mt-14 grid gap-5 md:grid-cols-2">

              {services.map(({ title, text, icon: Icon }, index) => (

                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-950/5"
                >

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-xl text-violet-600 transition duration-300 group-hover:bg-violet-600 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                    {text}
                  </p>

                </motion.div>

              ))}

            </div>

            <Link
              to="/services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
            >
              Explore all services
              <FiArrowUpRight />
            </Link>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <Section>

        <Container>

          <SectionTitle
            eyebrow="My process"
            title="A clear process from first conversation to launch."
            text="Good development starts before the code. I keep the process straightforward, collaborative and focused on the result."
          />


          <div className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (

              <div
                key={item.number}
                className="border-b border-slate-200 py-8 md:border-r md:px-7 md:last:border-r-0 lg:border-b-0"
              >

                <p className="text-xs font-bold tracking-[0.2em] text-violet-600">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </Container>

      </Section>


      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="bg-slate-950">

        <Section>

          <Container>

          <div className= "max-w-2xl">
            
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                Technology
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                The tools behind the work.
              </h2>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  A modern development stack focused on maintainability, performance and great user experiences.
                </p>
          
          </div>         

            <div className="mt-12 flex flex-wrap gap-3">

              {technologies.map((technology) => (

                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {technology}
                </span>

              ))}

            </div>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <Section>

        <Container>

          <div className="relative overflow-hidden rounded-4xl bg-violet-600 px-7 py-14 text-white md:px-12 md:py-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
                  Have a project in mind?
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                  Let's build something useful, beautiful and memorable.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-violet-100 md:text-base">
                  Tell me what you're working on, what you're trying to achieve
                  and where you need help. We'll take it from there.
                </p>

              </div>

              <Link
                to="/book-consultation"
                className="link group inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1"
              >
                Start a conversation
                <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

            </div>

          </div>

        </Container>

      </Section>

    </main>
  );
}