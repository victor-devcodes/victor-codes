import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import project1 from "../assets/images/property-1.jpg";
import project2 from "../assets/images/property-2.jpg";
import project3 from "../assets/images/property-3.jpg";
import heroImage from "../assets/images/hero-house.jpg";

const projects = [
  {
    id: "1",
    number: "01",
    title: "Nova Commerce",
    category: "E-commerce",
    type: "E-commerce platform",

    description:
      "A modern commerce experience designed to make product discovery, browsing and purchasing feel simple and intuitive.",

    image: project1,

    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    overview:
      "Nova Commerce is a modern e-commerce platform concept focused on creating a clean shopping experience while providing a flexible foundation for future growth.",

    challenge:
      "The challenge was to create an online shopping experience that could handle a large amount of product information without making the interface feel complicated or overwhelming.",

    solution:
      "The solution was to build a clear product hierarchy, intuitive navigation and reusable interface components. The design emphasizes strong product imagery, simple interactions and responsive layouts across devices.",

    features: [
      "Responsive product catalogue",
      "Product filtering and search",
      "Shopping cart experience",
      "Reusable product components",
      "Mobile-first interface",
      "Scalable frontend architecture",
    ],
  },

  {
    id: "2",
    number: "02",
    title: "TaskFlow",
    category: "Web App",
    type: "Productivity platform",

    description:
      "A productivity application designed to help teams organize tasks, track progress and stay focused.",

    image: project2,

    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
    ],

    overview:
      "TaskFlow is a productivity application concept designed around task management, organization and visibility.",

    challenge:
      "Productivity applications can quickly become overwhelming when too much information is presented at once. The challenge was to create an interface that remained powerful without feeling complicated.",

    solution:
      "The interface uses clear visual hierarchy, focused layouts and reusable components to make common actions easy to understand and access.",

    features: [
      "Task management",
      "Project organization",
      "Progress tracking",
      "Responsive dashboard",
      "Reusable UI components",
      "Firebase integration",
    ],
  },

  {
    id: "3",
    number: "03",
    title: "Finora",
    category: "Dashboard",
    type: "Financial analytics dashboard",

    description:
      "A clean analytics interface for visualizing financial information and turning complex data into useful insights.",

    image: project3,

    technologies: [
      "Next.js",
      "API",
      "Charts",
      "Tailwind CSS",
    ],

    overview:
      "Finora is a financial analytics dashboard concept designed to transform complex business data into information that can be understood quickly.",

    challenge:
      "Financial dashboards often contain large amounts of information. The main challenge was presenting important metrics without creating visual overload.",

    solution:
      "The interface prioritizes key metrics, clear data visualization and consistent spacing so users can scan the dashboard quickly and understand performance at a glance.",

    features: [
      "Analytics dashboard",
      "Financial metrics",
      "Data visualization",
      "Responsive layouts",
      "API-ready architecture",
      "Reusable dashboard components",
    ],
  },

  {
    id: "4",
    number: "04",
    title: "EstateFlow",
    category: "Real Estate",
    type: "Real estate platform",

    description:
      "A polished property discovery experience for browsing homes, viewing property details and contacting agents.",

    image: heroImage,

    technologies: [
      "React",
      "Tailwind CSS",
      "REST API",
    ],

    overview:
      "EstateFlow is a real estate platform concept focused on making property discovery simple, visual and intuitive.",

    challenge:
      "Property websites need to display a large amount of information while keeping the browsing experience visual and engaging.",

    solution:
      "The design uses large property imagery, structured information and clear calls to action to create a streamlined property discovery experience.",

    features: [
      "Property listings",
      "Property search",
      "Responsive property cards",
      "Agent contact interface",
      "Property details",
      "API-ready architecture",
    ],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main>

        <Section>

          <Container>

            <div className="mx-auto max-w-2xl py-20 text-center">

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                Project not found
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight">
                We couldn't find that project.
              </h1>

              <p className="mt-4 text-slate-500">
                The project you're looking for may have moved or unvailable at the moment.
              </p>

              <Link
                to="/projects"
                className="button mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-brand"
              >
                <FiArrowLeft />
                Back to projects
              </Link>

            </div>

          </Container>

        </Section>

      </main>
    );
  }

  const currentIndex = projects.findIndex(
    (item) => item.id === project.id
  );

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-slate-950 text-white">

        <Container>

          <div className="py-16 md:py-24">

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              <FiArrowLeft />
              Back to projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-14"
            >

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-violet-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]">
                  Project {project.number}
                </span>

                <span className="text-sm text-slate-400">
                  {project.type}
                </span>

              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          PROJECT IMAGE
      ====================================================== */}

      <section className="bg-slate-950 pb-20">

        <Container>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-2 shadow-2xl"
          >

            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full rounded-[1.6rem] object-cover"
            />

          </motion.div>

        </Container>

      </section>


      {/* =====================================================
          PROJECT META
      ====================================================== */}

      <Section>

        <Container>

          <div className="grid gap-12 border-b border-slate-200 pb-16 md:grid-cols-3">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Category
              </p>

              <p className="mt-3 font-semibold text-slate-950">
                {project.category}
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Project type
              </p>

              <p className="mt-3 font-semibold text-slate-950">
                {project.type}
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Technology
              </p>

              <div className="mt-3 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </Container>

      </Section>


      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <Section className="pt-0">

        <Container>

          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                01 · Overview
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                The project
              </h2>

            </div>

            <p className="text-lg leading-9 text-slate-600">
              {project.overview}
            </p>

          </div>

        </Container>

      </Section>


      {/* =====================================================
          CHALLENGE + SOLUTION
      ====================================================== */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                  02 · Challenge
                </p>

                <h2 className="mt-5 text-2xl font-black tracking-tight">
                  The problem
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-500">
                  {project.challenge}
                </p>

              </div>


              <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                  03 · Solution
                </p>

                <h2 className="mt-5 text-2xl font-black tracking-tight">
                  The approach
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-300">
                  {project.solution}
                </p>

              </div>

            </div>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <Section>

        <Container>

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                04 · Features
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                What was built.
              </h2>

            </div>


            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">

              {project.features.map((feature) => (

                <div
                  key={feature}
                  className="flex gap-3 border-b border-slate-200 pb-5"
                >

                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
                    <FiCheck className="text-sm" />
                  </span>

                  <p className="text-sm font-semibold text-slate-700">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </Container>

      </Section>


      {/* =====================================================
          NEXT PROJECT
      ====================================================== */}

      <section className="bg-slate-950">

        <Section>

          <Container>

            <div className="flex items-end justify-between gap-8">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                  Continue exploring
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                  More projects
                </h2>

              </div>

              <Link
                to="/projects"
                className="hidden items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white sm:inline-flex"
              >
                View all
                <FiArrowUpRight />
              </Link>

            </div>


            {nextProject && (

              <Link
                to={`/projects/${nextProject.id}`}
                className="group mt-10 block overflow-hidden rounded-3xl border border-white/10 bg-white/4"
              >

                <div className="grid md:grid-cols-[.8fr_1.2fr]">

                  <div className="aspect-4/3 overflow-hidden md:aspect-auto">

                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                      Next project · {nextProject.number}
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                      {nextProject.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                      {nextProject.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white">
                      View project
                      <FiArrowRight className="transition group-hover:translate-x-1" />
                    </span>

                  </div>

                </div>

              </Link>

            )}

          </Container>

        </Section>

      </section>

    </main>
  );
}