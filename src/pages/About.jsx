import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const strengths = [
  {
    icon: FiCode,
    title: "Clean development",
    text: "I focus on readable, maintainable React code and reusable components that make projects easier to grow.",
  },
  {
    icon: FiLayers,
    title: "Thoughtful interfaces",
    text: "Every section, interaction and layout has a purpose. The goal is to make the experience feel simple and intuitive.",
  },
  {
    icon: FiZap,
    title: "Performance focused",
    text: "Fast loading, responsive layouts and efficient implementation are considered from the beginning of every project.",
  },
];

const principles = [
  "Clear communication",
  "Responsive-first development",
  "Reusable React components",
  "Accessible interfaces",
  "Performance-conscious implementation",
  "Continuous learning",
];

const technologies = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Git",
];

export default function About() {
  return (
    <main>
            <SEO
              title="About | Victor Codes"
              description="Learn more about Victor Codes, a web developer focused on building modern, responsive and user-friendly digital experiences."
              path="/about"
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
                      About Me
                    </p>
      
                    <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">
                      I care about the details that make the web feel{" "}
                      <span className="text-violet-300">
                        effortless.
                      </span>
                    </h1>
      
                    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                     I'm Victor, a web developer focused on building modern,
                     responsive digital experiences with React and a growing
                     full-stack skill set.
                    </p>
      
                  </motion.div>
      
                </div>
      
              </Container>
      
            </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <Section>

        <Container>

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              <div className="aspect-4/5 overflow-hidden rounded-4xl bg-slate-100">

                <div className="flex h-full items-center justify-center bg-linear-to-br from-slate-100 via-slate-50 to-violet-100">

                  <div className="text-center">

                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-slate-950 text-3xl font-black text-white shadow-2xl">
                      VC
                    </div>

                    <p className="mt-6 text-sm font-bold text-slate-950">
                      Victor Codes
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Web Developer
                    </p>

                  </div>

                </div>

              </div>

              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                  Currently
                </p>

                <p className="mt-1 text-sm font-bold text-slate-950">
                  Building & learning
                </p>

              </div>

            </motion.div>


            {/* Copy */}
            <div className="flex flex-col justify-center">

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                The story
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Building useful things with code.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">

                <p>
                  I'm a web developer who enjoys turning ideas into
                  functional, polished and responsive digital experiences.
                </p>

                <p>
                  My main focus is frontend development with React,
                  JavaScript and Tailwind CSS, while continuing to expand
                  into backend development, APIs, databases and complete
                  full-stack applications.
                </p>

                <p>
                  I approach every project with the same goal: understand
                  the problem first, build with intention and create
                  something that is genuinely useful to the people who
                  will use it.
                </p>

              </div>

              <div className="mt-9">

                <Link
                  to="/projects"
                  className="button group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-brand"
                >
                  Explore my work

                  <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

              </div>

            </div>

          </div>

        </Container>

      </Section>


      {/* =====================================================
          STRENGTHS
      ====================================================== */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                What I bring
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                More than just writing code.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Good development is about understanding the bigger picture,
                not simply making something work.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {strengths.map(({ icon: Icon, title, text }, index) => (

                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-xl text-violet-600">
                    <Icon />
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {text}
                  </p>

                </motion.div>

              ))}

            </div>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          PRINCIPLES
      ====================================================== */}

      <Section>

        <Container>

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                My principles
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                How I approach my work.
              </h2>

            </div>


            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">

              {principles.map((principle) => (

                <div
                  key={principle}
                  className="flex items-center gap-3 border-b border-slate-200 pb-5"
                >

                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
                    <FiCheck className="text-sm" />
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {principle}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </Container>

      </Section>


      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="bg-slate-950">

        <Section>

          <Container>

            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                  My toolkit
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                  Technology I use to bring ideas to life.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  The stack evolves as I learn, but the goal remains the
                  same: choose the right tools for the problem instead of
                  adding complexity for its own sake.
                </p>

              </div>


              <div className="flex flex-wrap gap-3">

                {technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <Section>

        <Container>

          <div className="rounded-4xl border border-slate-200 bg-slate-50 px-7 py-14 md:px-12">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                  Let's build
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Have an idea worth building?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Tell me what you're working on and let's figure out the
                  best way to turn the idea into a real digital experience.
                </p>

              </div>

              <Link
                to="/book-consultation"
                className="button group inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-violet-600"
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