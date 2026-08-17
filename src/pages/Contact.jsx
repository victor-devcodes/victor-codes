import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiClock,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

export default function Contact() {
  return (
    <main>

      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        
        <Container>

          <div className="py-20 md:py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                Contact
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Let's talk about
                <span className="text-violet-300">
                  {" "}your project.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Have an idea, a project or a problem you need help solving?
                Send me a message and let's figure out the next step.
              </p>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* CONTACT AREA */}

      <Section>

        <Container>

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            {/* INFO */}

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                Get in touch
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Tell me what you're working on.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                The more context you provide, the easier it is for me to
                understand what you need and recommend the right approach.
              </p>


              <div className="mt-10 space-y-6">

                <div className="flex gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                    <FiMail />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Email
                    </p>

                    <a
                      href="mailto:hello@victorcodes.dev"
                      className="mt-1 block text-sm text-slate-500 hover:text-violet-600"
                    >
                      hello@victorcodes.dev
                    </a>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                    <FiPhone />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Phone
                    </p>

                    <a
                      href="tel:+13432550473"
                      className="mt-1 block text-sm text-slate-500 hover:text-violet-600"
                    >
                      +1 (343) 255- 0473
                    </a>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                    <FiClock />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Response time
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Usually within 24 hours.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-50 text-violet-600">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Availability
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Available for remote projects.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-4xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                </div>


                <div>

                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                </div>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="project"
                  className="text-sm font-semibold text-slate-800"
                >
                  What do you need?
                </label>

                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="website">
                    Business website
                  </option>

                  <option value="frontend">
                    Frontend development
                  </option>

                  <option value="web-app">
                    Web application
                  </option>

                  <option value="full-stack">
                    Full-stack development
                  </option>

                  <option value="other">
                    Something else
                  </option>

                </select>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="budget"
                  className="text-sm font-semibold text-slate-800"
                >
                  Estimated budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                >

                  <option value="" disabled>
                    Select a range
                  </option>

                  <option value="under-500">
                    Under €500
                  </option>

                  <option value="500-1000">
                    €500 – €1,000
                  </option>

                  <option value="1000-2500">
                    €1,000 – €2,500
                  </option>

                  <option value="2500-plus">
                    €2,500+
                  </option>

                  <option value="not-sure">
                    I'm not sure yet
                  </option>

                </select>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-800"
                >
                  Tell me about the project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="What are you building? What do you need help with?"
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />

              </div>


              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-600"
              >
                Send message
                <FiArrowUpRight />
              </button>


              <p className="mt-4 text-center text-xs text-slate-400">
                I'll review your message and get back to you as soon as
                possible.
              </p>

            </motion.form>

          </div>

        </Container>

      </Section>


      {/* CTA */}

      <section className="pb-24">

        <Container>

          <div className="rounded-4xl bg-slate-50 p-8 md:p-12">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="flex items-center gap-2 text-violet-600">

                  <FiMessageCircle />

                  <p className="text-xs font-bold uppercase tracking-[0.2em]">
                    Prefer a call?
                  </p>

                </div>

                <h2 className="mt-3 text-2xl font-black">
                  Book a free consultation instead.
                </h2>

              </div>

              <a
                href="/book-consultation"
                className="button justify-center inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-violet-600"
              >
                Book consultation
                <FiArrowUpRight />
              </a>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}