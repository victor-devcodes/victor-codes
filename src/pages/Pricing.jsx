import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiHelpCircle,
  FiMessageCircle,
} from "react-icons/fi";
import SEO from "../components/seo/SEO";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const packages = [
  {
    name: "Starter",
    price: "$299+",
    description:
      "A focused website for individuals, freelancers and small projects that need a professional online presence.",
    features: [
      "1–3 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "Performance optimization",
      "1 revision",
    ],
  },

  {
    name: "Professional",
    price: "$699+",
    description:
      "A polished multi-page website designed to help an established business build credibility and generate enquiries.",
    popular: true,
    features: [
      "Up to 7 pages",
      "Custom UI design",
      "Responsive development",
      "Animations & interactions",
      "Forms & analytics",
      "SEO optimization",
      "2 revisions",
    ],
  },

  {
    name: "Custom",
    price: "Let's talk",
    description:
      "For web applications, integrations, dashboards and projects that require a custom development approach.",
    features: [
      "Custom frontend",
      "Backend functionality",
      "Database integration",
      "Authentication",
      "API integrations",
      "Deployment",
      "Project-specific support",
    ],
  },
];

const rows = [
  ["Website pages", "1–3", "Up to 7", "Custom"],
  ["Responsive design", "Included", "Included", "Included"],
  ["Custom UI", "—", "Included", "Included"],
  ["Contact forms", "Basic", "Advanced", "Custom"],
  ["SEO", "Basic", "Optimized", "Custom"],
  ["Animations", "—", "Included", "Included"],
  ["Analytics", "—", "Included", "Included"],
  ["Backend / database", "—", "Optional", "Included"],
  ["API integrations", "—", "Optional", "Included"],
  ["Authentication", "—", "—", "Included"],
  ["Revisions", "1", "2", "Scoped per project"],
];

const faqs = [
  {
    question: "Are these fixed prices?",
    answer:
      "No. These are starting points designed to give you an idea of where projects begin. The final price depends on the scope, features, content, integrations and complexity of the project.",
  },
  {
    question: "Can you build something that doesn't fit these packages?",
    answer:
      "Absolutely. The Custom package is designed for projects such as dashboards, web applications, portals, integrations and other products that require a more tailored development approach.",
  },
  {
    question: "What happens if my project needs more pages?",
    answer:
      "Additional pages can be added depending on the project requirements. I'll include the full scope and pricing in the project proposal.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. Maintenance, updates, improvements and additional functionality can be arranged after the initial project is completed.",
  },
];

export default function Pricing() {
  return (
    <main>

      <SEO
        title="Web Development Pricing"
        description="Explore straightforward starting prices for responsive websites, business websites, web applications and custom development projects."
        path="/pricing"
      />
      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <Container>

          <div className="relative py-20 md:py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                Pricing
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">
                Simple starting points.
                <span className="text-violet-300">
                  {" "}Custom when it matters.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Clear starting prices for common project types, with flexible
                options when your requirements go beyond a standard website.
              </p>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* PACKAGES */}

      <Section>

        <Container>

          <div className="grid gap-5 lg:grid-cols-3">

            {packages.map((pkg, index) => (

              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`relative rounded-4xl border p-8 ${
                  pkg.popular
                    ? "border-violet-600 bg-slate-950 text-white shadow-2xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                <Link
                  to="/book-consultation">

                {pkg.popular && (
                  <span className="absolute right-7 top-7 rounded-full bg-violet-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Most popular
                  </span>
                )}

                <p
                  className={`text-sm font-bold ${
                    pkg.popular
                      ? "text-violet-300"
                      : "text-violet-600"
                  }`}
                >
                  {pkg.name}
                </p>

                <p className="mt-6 text-4xl font-black tracking-tight">
                  {pkg.price}
                </p>

                <p
                  className={`mt-4 min-h-24 text-sm leading-7 ${
                    pkg.popular
                      ? "text-slate-300"
                      : "text-slate-500"
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`mt-7 border-t pt-7 ${
                    pkg.popular
                      ? "border-white/10"
                      : "border-slate-100"
                  }`}
                >

                  <p
                    className={`text-xs font-bold uppercase tracking-[0.18em] ${
                      pkg.popular
                        ? "text-slate-500"
                        : "text-slate-400"
                    }`}
                  >
                    Includes
                  </p>

                  <ul className="mt-5 space-y-3">

                    {pkg.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >

                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            pkg.popular
                              ? "bg-violet-500/20 text-violet-300"
                              : "bg-violet-50 text-violet-600"
                          }`}
                        >
                          <FiCheck className="text-xs" />
                        </span>

                        {feature}

                      </li>

                    ))}

                  </ul>

                </div>

                <div
                  className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    pkg.popular
                      ? "bg-white link hover:-translate-y-0.5"
                      : "bg-slate-950 button hover:-translate-y-0.5 hover:bg-violet-600"
                  }`}
                >
                  {pkg.name === "Custom"
                    ? "Discuss your project"
                    : "Get started"}

                  <FiArrowUpRight />

                </div>
                    </Link>
              </motion.article>

            ))}

          </div>

        </Container>

      </Section>


      {/* COMPARISON */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                Compare
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Choose the right starting point.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Every project is different, but this comparison gives you a
                quick idea of what is included at each level.
              </p>

            </div>


            <div className="mt-12 overflow-x-auto rounded-4xl border border-slate-200 bg-white">

              <table className="w-full min-w-190 text-left text-sm">

                <thead className="bg-slate-50">

                  <tr>

                    <th className="p-5 font-bold">
                      Feature
                    </th>

                    <th className="p-5 font-bold">
                      Starter
                    </th>

                    <th className="p-5 font-bold">
                      Professional
                    </th>

                    <th className="p-5 font-bold">
                      Custom
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {rows.map((row) => (

                    <tr
                      key={row[0]}
                      className="border-t border-slate-100"
                    >

                      <th className="p-5 font-semibold text-slate-800">
                        {row[0]}
                      </th>

                      {row.slice(1).map((value, index) => (

                        <td
                          key={index}
                          className="p-5 text-slate-500"
                        >
                          {value}
                        </td>

                      ))}

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </Container>

        </Section>

      </section>


      {/* HOW PRICING WORKS */}

      <Section>

        <Container>

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                How it works
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                No guesswork. No surprise scope.
              </h2>

            </div>

            <div className="grid gap-5 sm:grid-cols-3">

              {[
                ["01", "Tell me what you need", "Share your goals, requirements and timeline."],
                ["02", "Get a clear scope", "I'll recommend the right approach and define the project."],
                ["03", "Build & launch", "Once everything is agreed, development begins."],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="rounded-3xl border border-slate-200 p-6"
                >

                  <span className="text-xs font-black text-violet-600">
                    {number}
                  </span>

                  <h3 className="mt-5 text-lg font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </Container>

      </Section>


      {/* FAQ */}

      <section className="bg-slate-50">

        <Section>

          <Container>

            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

              <div>

                <FiHelpCircle className="text-2xl text-violet-600" />

                <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
                  Pricing questions?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Here are some of the questions clients commonly have before
                  starting a project.
                </p>

              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">

                {faqs.map((faq) => (

                  <details
                    key={faq.question}
                    className="group py-6"
                  >

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold">

                      {faq.question}

                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-slate-500 transition group-open:rotate-45">
                        +
                      </span>

                    </summary>

                    <p className="pt-4 text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>

                  </details>

                ))}

              </div>

            </div>

          </Container>

        </Section>

      </section>


      {/* CTA */}

      <section className="pb-24">

        <Container>

          <div className="rounded-4xl bg-violet-600 px-7 py-14 text-white md:px-12 md:py-16">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
                  Have something specific in mind?
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
                  Let's work out what your project actually needs.
                </h2>

              </div>

              <Link
                to="/book-consultation"
                className="link inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
              >
                Book a consultation
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}