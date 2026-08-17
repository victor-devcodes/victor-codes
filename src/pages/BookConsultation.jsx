import { useState } from "react";
import { motion } from "framer-motion";

import { sendConsultationEmail } from "../services/emailService";

import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheck,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const expectations = [
  "Understand your project and goals",
  "Discuss the functionality you need",
  "Identify the best technical approach",
  "Talk through timeline and budget",
  "Answer your questions",
];

export default function BookConsultation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
        ...previous,
        [name]: value,
    }));
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
        await sendConsultationEmail(formData);

        setStatus("success");

        setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
        });
    } catch (error) {
        console.error("Consultation email failed:", error);

        setStatus("error");
    }
    };


  return (
    <main>

      {/* HERO */}

      <section className="bg-slate-950 text-white">

        <Container>

          <div className="py-20 md:py-28">

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              <FiArrowLeft />
              Back to contact
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-12 max-w-4xl"
            >

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                Free consultation
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Let's figure out
                <span className="text-violet-300">
                  {" "}what to build.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Tell me about your project, your goals and what you're
                trying to achieve. We'll use the conversation to determine
                the right next step.
              </p>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* CONSULTATION FORM */}

      <Section>

        <Container>

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">

            {/* LEFT */}

            <div>

              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-xl text-violet-600">
                <FiCalendar />
              </div>

              <h2 className="mt-6 text-3xl font-black tracking-tight">
                What we'll discuss
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                This isn't a sales pitch. It's an opportunity to understand
                your project and see whether I'm the right person to help.
              </p>

              <ul className="mt-8 space-y-4">

                {expectations.map((item) => (

                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >

                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
                      <FiCheck className="text-xs" />
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

              <div className="mt-10 rounded-3xl bg-slate-50 p-6">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Before you submit
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  You don't need to have everything figured out. A rough
                  description of your idea is enough to start the
                  conversation.
                </p>

              </div>

                <div className="flex gap-4 mt-8">

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

            </div>


            {/* FORM */}

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-4xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="consult-name"
                    className="text-sm font-semibold"
                  >
                    Name
                  </label>

                  <input
                    id="consult-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                </div>


                <div>

                  <label
                    htmlFor="consult-email"
                    className="text-sm font-semibold"
                  >
                    Email
                  </label>

                  <input
                    id="consult-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                  />

                </div>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="consult-company"
                  className="text-sm font-semibold"
                >
                  Company / project name
                </label>

                <input
                  id="consult-company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or project"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />

              </div>


              <div className="mt-6">

                <label
                  htmlFor="consult-service"
                  className="text-sm font-semibold"
                >
                  What are you looking to build?
                </label>

                <select
                  id="consult-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                >

                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Business website">
                    Business website
                  </option>

                  <option value="Landing page">
                    Landing page
                  </option>

                  <option value="Web application">
                    Web application
                  </option>

                  <option value="E-commerce website">
                    E-commerce website
                  </option>

                  <option value="Full-stack application">
                    Full-stack application
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="consult-budget"
                  className="text-sm font-semibold"
                >
                  Approximate budget
                </label>

                <select
                  id="consult-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                >

                  <option value="" disabled>
                    Select a range
                  </option>

                  <option value="under-500">
                    Under $500
                  </option>

                  <option value="500-1000">
                    $500 – $1,000
                  </option>

                  <option value="1000-2500">
                    $1,000 – $2,500
                  </option>

                  <option value="2500-5000">
                    $2,500 – $5,000
                  </option>

                  <option value="5000-plus">
                    $5,000+
                  </option>

                  <option value="not-sure">
                    I'm not sure yet
                  </option>

                </select>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="consult-timeline"
                  className="text-sm font-semibold"
                >
                  Desired timeline
                </label>

                <select
                  id="consult-timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                >

                  <option value="" disabled>
                    Select a timeline
                  </option>

                  <option value="asap">
                    As soon as possible
                  </option>

                  <option value="2-4-weeks">
                    2–4 weeks
                  </option>

                  <option value="1-2-months">
                    1–2 months
                  </option>

                  <option value="flexible">
                    I'm flexible
                  </option>

                </select>

              </div>


              <div className="mt-6">

                <label
                  htmlFor="consult-message"
                  className="text-sm font-semibold"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="consult-message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What are you trying to build? What problem should it solve?"
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
                />

              </div>


            <button
                type="submit"
                disabled={status === "sending"}
                className="
                    mt-7 inline-flex w-full items-center justify-center gap-2
                    rounded-xl bg-slate-950 px-6 py-3.5
                    text-sm font-bold text-white
                    transition
                    hover:-translate-y-0.5
                    hover:bg-violet-600
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
                >
                {status === "sending" ? (
                    "Sending request..."
                ) : (
                    <>
                    Request consultation
                    <FiArrowUpRight />
                    </>
                )}
            </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                No commitment required. I'll review your information and
                follow up with the next steps.
              </p>

            {status === "success" && (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p className="font-semibold text-emerald-800">
                    Consultation request sent!
                    </p>

                    <p className="mt-1 text-sm leading-6 text-emerald-700">
                    Thanks for reaching out. I've received your project details and
                    will get back to you shortly.
                    </p>
                </div>
            )}               
            
            {status === "error" && (
                <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5">
                    <p className="font-semibold text-red-800">
                    Something went wrong.
                    </p>

                    <p className="mt-1 text-sm leading-6 text-red-700">
                    Your request couldn't be sent. Please try again or contact me
                    directly.
                    </p>
                </div>
            )}             
            </motion.form>

          </div>

        </Container>

      </Section>

    </main>
  );
}