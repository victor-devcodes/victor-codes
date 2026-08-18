import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiDatabase,
  FiLayers,
  FiLayout,
  FiSmartphone,
  FiZap,
  FiShield,
  FiSearch,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const services = [
  {
    number: "01",
    icon: FiLayout,
    title: "Business Websites",
    description:
      "Professional websites designed to establish credibility, communicate your value and turn visitors into customers.",
    features: [
      "Custom responsive design",
      "Multi-page websites",
      "Contact and enquiry forms",
      "SEO-friendly structure",
      "Performance optimization",
      "Deployment and launch",
    ],
  },

  {
    number: "02",
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Modern React interfaces built with reusable components, clean architecture and smooth interactions.",
    features: [
      "React development",
      "Reusable components",
      "Interactive interfaces",
      "Animations and micro-interactions",
      "API integration",
      "Responsive layouts",
    ],
  },

  {
    number: "03",
    icon: FiLayers,
    title: "Web Applications",
    description:
      "Functional web applications built around real business workflows, users and product requirements.",
    features: [
      "Custom dashboards",
      "Authentication",
      "User interfaces",
      "Forms and workflows",
      "Third-party integrations",
      "Scalable architecture",
    ],
  },

  {
    number: "04",
    icon: FiDatabase,
    title: "Full-Stack Development",
    description:
      "Complete web solutions connecting polished frontends with APIs, databases and backend functionality.",
    features: [
      "Frontend development",
      "REST APIs",
      "Database integration",
      "Authentication systems",
      "Backend functionality",
      "Deployment support",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "We start by understanding your goals, audience, requirements and what success looks like for the project.",
  },
  {
    number: "02",
    title: "Planning",
    text: "I define the structure, user flow, technology and development approach before writing the main code.",
  },
  {
    number: "03",
    title: "Design & Build",
    text: "The interface is designed and developed with responsive layouts, reusable components and thoughtful interactions.",
  },
  {
    number: "04",
    title: "Testing",
    text: "The project is tested across screen sizes and common user scenarios to catch issues before launch.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Once everything is ready, the website or application is deployed and prepared for real users.",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express",
  "REST APIs",
  "Firebase",
  "Git",
  "GitHub",
  "Vite",
];

const reasons = [
  {
    icon: FiZap,
    title: "Performance focused",
    text: "I build with speed, responsive behavior and a smooth user experience in mind.",
  },
  {
    icon: FiLayers,
    title: "Clean architecture",
    text: "Projects are structured with reusable components so the codebase can grow without becoming difficult to maintain.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive by default",
    text: "Your website should feel natural whether someone visits from a phone, tablet or desktop.",
  },
  {
    icon: FiShield,
    title: "Built for reliability",
    text: "I pay attention to accessibility, validation, error states and the details that make a product feel dependable.",
  },
  {
    icon: FiSearch,
    title: "SEO conscious",
    text: "I build with semantic HTML, proper page structure and technical SEO fundamentals from the beginning.",
  },
  {
    icon: FiCode,
    title: "Modern development",
    text: "I use modern React workflows and development practices to create maintainable digital products.",
  },
];

const faqs = [
  {
    question: "What type of websites do you build?",
    answer:
      "I build business websites, landing pages, portfolio websites, real estate websites, e-commerce interfaces and custom web applications.",
  },
  {
    question: "Can you work with an existing website?",
    answer:
      "Yes. I can improve an existing website, rebuild parts of it, add new functionality or migrate it to a more modern frontend architecture.",
  },
  {
    question: "Do you build websites from designs?",
    answer:
      "Yes. If you already have a Figma or other design file, I can translate the design into a responsive React website.",
  },
  {
    question: "Do you provide backend development?",
    answer:
      "Yes. For projects that require it, I can work with APIs, authentication, databases and backend functionality.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Responsive behavior is part of the development process rather than something added at the end.",
  },
  {
    question: "Can you help after the website launches?",
    answer:
      "Yes. Depending on the project, ongoing maintenance, improvements and additional features can be arranged.",
  },
];

export default function Services() {
  return (
    <main>

        <SEO
          title="Web Development Services"
          description="Professional web development services including responsive websites, React applications, frontend development, full-stack development and custom web solutions."
          path="/services"
        />
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>

          <div className="relative py-20 md:py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >

              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                Services
              </p>

              <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Digital products built
                <span className="text-violet-300"> to do more.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                From professional business websites to custom web
                applications, I design and develop digital experiences that
                are fast, responsive and built around your goals.
              </p>

              <div className="mt-9 grid lg:flex flex-wrap gap-8">

                <Link
                  to="/book-consultation"
                  className="link inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Start a project
                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand hover:-translate-y-0.5"
                >
                  View my work
                </Link>

              </div>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <Section>

        <Container>

          <div className="max-w-2xl ">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
              What I do
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Development services built around your project.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Whether you need a simple marketing website or a more complex
              application, the goal is the same: create something useful,
              polished and easy to maintain.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl md:p-9"
                >

                  <div className="flex items-start justify-between">

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-xl text-violet-600">
                      <Icon />
                    </div>

                    <span className="text-xs font-bold tracking-[0.15em] text-slate-300">
                      {service.number}
                    </span>

                  </div>

                  <h3 className="mt-8 text-2xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-slate-100 pt-7">

                    {service.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >

                        <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-50 text-violet-600">
                          <FiCheck className="text-xs" />
                        </span>

                        {feature}

                      </li>

                    ))}

                  </ul>

                </motion.article>
              );
            })}

          </div>

        </Container>

      </Section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                  My process
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                  A clear process from idea to launch.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  Good development starts before the first line of code.
                  Every project follows a structured process designed to
                  keep things clear and moving forward.
                </p>

              </div>


              <div className="space-y-0">

                {process.map((step, index) => (

                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="grid grid-cols-[60px_1fr] gap-5 border-b border-slate-200 py-7 first:pt-0"
                  >

                    <span className="text-sm font-black text-violet-600">
                      {step.number}
                    </span>

                    <div>

                      <h3 className="text-xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {step.text}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <Section>

        <Container>

          <div className="rounded-4xl bg-slate-950 p-8 text-white md:p-12">

            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                  Technology
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Tools I use to bring ideas to life.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  The technology is selected around the requirements of the
                  project rather than forcing every project into the same
                  stack.
                </p>

              </div>


              <div className="flex flex-wrap gap-3">

                {technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-violet-400/50 hover:bg-violet-500/10"
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
          WHY WORK WITH ME
      ====================================================== */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                Why work with me
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                More than just making things look good.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                A strong website needs to look good, but it also needs to
                work well, load quickly and make sense to the people using
                it.
              </p>

            </div>


            <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

              {reasons.map((reason) => {

                const Icon = reason.icon;

                return (
                  <div key={reason.title}>

                    <Icon className="text-2xl text-violet-600" />

                    <h3 className="mt-5 text-lg font-bold">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {reason.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </Container>

        </Section>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <Section>

        <Container>

          <div className="grid gap-12">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Questions, answered.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                A few common questions about working together.
              </p>

            </div>


            <div className="divide-y bg-brand-light/10 px-6 divide-black/40 border-y border-black/40">

              {faqs.map((faq) => (

                <details
                  key={faq.question}
                  className="group py-6"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-slate-950">

                    {faq.question}

                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-45">
                      <span className="text-xl font-light">
                        +
                      </span>
                    </span>

                  </summary>

                  <p className="max-w-2xl pt-4 text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>

                </details>

              ))}

            </div>

          </div>

        </Container>

      </Section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="pb-24">

        <Container>

          <div className="overflow-hidden rounded-4xl bg-violet-600 px-7 py-14 text-white md:px-12 md:py-20">

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
                  Have a project in mind?
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                  Let's build something worth remembering.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-violet-100">
                  Tell me what you're building, what you need help with and
                  where you'd like to take it.
                </p>

              </div>

              <Link
                to="/book-consultation"
                className="link inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
              >
                Start a conversation
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}