import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SEO from "../components/seo/SEO";

import project1 from "../assets/images/property-1.jpg";
import project2 from "../assets/images/property-2.jpg";
import project3 from "../assets/images/property-3.jpg";
import heroImage from "../assets/images/hero-house.jpg";

const projects = [
  {
    id: 1,
    title: "Nova Commerce",
    category: "E-commerce",
    type: "E-commerce platform",
    liveUrl: "https://yourwebsite.com",
    description:
      "A modern commerce experience designed to make browsing, product discovery and purchasing feel simple and intuitive.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: project1,
    featured: true,
  },

  {
    id: 2,
    title: "TaskFlow",
    category: "Web App",
    type: "Productivity platform",
    liveUrl: "https://yourwebsite.com",
    description:
      "A productivity application designed to help teams organize tasks, track progress and stay focused.",
    tech: ["React", "TypeScript", "Firebase"],
    image: project2,
    featured: true,
  },

  {
    id: 3,
    title: "Finora",
    category: "Dashboard",
    type: "Financial analytics dashboard",
    liveUrl: "https://yourwebsite.com",
    description:
      "A clean analytics interface for visualizing financial information and turning complex data into useful insights.",
    tech: ["Next.js", "API", "Charts"],
    image: project3,
    featured: true,
  },

  {
    id: 4,
    title: "EstateFlow",
    category: "Real Estate",
    type: "Real estate platform",
    liveUrl: "https://yourwebsite.com",
    description:
      "A polished property discovery experience for browsing homes, viewing property details and contacting agents.",
    tech: ["React", "Tailwind CSS", "API"],
    image: heroImage,
  },

  {
    id: 5,
    title: "Studio Noir",
    category: "Business",
    type: "Creative agency website",
    liveUrl: "https://yourwebsite.com",
    description:
      "A premium marketing website created to give a creative studio a stronger digital presence and showcase its work.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: project1,
  },

  {
    id: 6,
    title: "HealthHub",
    category: "Web App",
    type: "Healthcare web application",
    liveUrl: "https://yourwebsite.com",
    description:
      "A responsive platform concept focused on simplifying appointment discovery and user interactions.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: project2,
  },

  {
    id: 7,
    title: "Marketly",
    category: "E-commerce",
    type: "Online marketplace",
    liveUrl: "https://yourwebsite.com",
    description:
      "A marketplace interface designed around product discovery, categories, search and a streamlined shopping experience.",
    tech: ["React", "Node.js", "MongoDB"],
    image: project3,
  },

  {
    id: 8,
    title: "TravelNest",
    category: "Travel",
    type: "Travel booking platform",
    liveUrl: "https://yourwebsite.com",
    description:
      "A visually driven travel platform for discovering destinations, exploring stays and planning trips.",
    tech: ["React", "JavaScript", "REST API"],
    image: heroImage,
  },

  {
    id: 9,
    title: "Pulse Analytics",
    category: "Dashboard",
    type: "Business analytics",
    liveUrl: "https://yourwebsite.com",
    description:
      "An executive dashboard concept presenting business performance metrics through clear visualizations.",
    tech: ["React", "Charts", "API"],
    image: project1,
  },

  {
    id: 10,
    title: "Luma Finance",
    category: "Business",
    type: "Fintech landing page",
    liveUrl: "https://yourwebsite.com",
    description:
      "A conversion-focused landing page concept for a modern financial technology company.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: project2,
  },

  {
    id: 11,
    title: "LearnSpace",
    category: "Web App",
    type: "Education platform",
    liveUrl: "https://yourwebsite.com",
    description:
      "A learning platform interface designed to make courses, progress tracking and educational content easier to navigate.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: project3,
  },

  {
    id: 12,
    title: "Frame Studio",
    category: "Business",
    type: "Photography portfolio",
    liveUrl: "https://yourwebsite.com",
    description:
      "A minimalist portfolio experience built around visual storytelling, strong typography and immersive imagery.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: heroImage,
  },
];

const categories = [
  "All",
  "E-commerce",
  "Web App",
  "Dashboard",
  "Business",
  "Real Estate",
  "Travel",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main>
        <SEO
          title="Projects | Victor Codes"
          description="Explore selected websites, web applications and digital products built by Victor Codes using modern frontend and full-stack technologies."
          path="/projects"
        />
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <Container>

          <div className="relative py-20 md:py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                Selected work
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">
                Projects built to solve{" "}
                <span className="text-violet-300">
                  real problems.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                A growing collection of websites, web applications,
                dashboards and digital experiences built with modern
                technologies.
              </p>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <Section>

        <Container>

          {/* Filters */}

          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-8">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950"
                }`}
              >
                {category}
              </button>

            ))}

          </div>


          {/* Project count */}

          <div className="mt-10 flex items-center justify-between">

            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-950">
                {filteredProjects.length}
              </span>{" "}
              projects
            </p>

            <p className="hidden text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">
              Portfolio / 2026
            </p>

          </div>


          {/* Grid */}

          <motion.div
            layout
            className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredProjects.map((project, index) => (

                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/60"
                >

                <Link
                    to= {`/projects/${project.id}`}
                    className="group block overflow-hidden"
                >
                  {/* Image */}

                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="absolute left-5 top-5">

                      <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                        {project.category}
                      </span>

                    </div>

                    <div className="absolute bottom-5 right-5 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                      <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 shadow-xl">
                        <FiArrowUpRight />
                      </span>

                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-6">

                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                      {String(project.id).padStart(2, "0")} · {project.type}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {project.description}
                    </p>


                    {/* Technologies */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.tech.map((technology) => (

                        <span
                          key={technology}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-600"
                        >
                          {technology}
                        </span>

                      ))}

                    </div>


                    <div
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
                    >
                      View case study

                      <FiArrowUpRight className="transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </div>

                  </div>
                 </Link>
                </motion.article>

              ))}

            </AnimatePresence>

          </motion.div>

        </Container>

      </Section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="rounded-4xl bg-violet-600 px-7 py-14 text-white md:px-12 md:py-16">

              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
                    Have a project?
                  </p>

                  <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight md:text-5xl">
                    Let's build something worth showing off.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-violet-100">
                    Whether you need a marketing website, web application
                    or custom digital product, let's talk about what you're
                    trying to build.
                  </p>

                </div>

                <Link
                  to="/book-consultation"
                  className="link inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1"
                >
                  Start a conversation
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

          </Container>

        </Section>

      </section>

    </main>
  );
}