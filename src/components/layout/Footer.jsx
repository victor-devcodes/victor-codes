import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
      <div className="py-20">

        <div className="grid gap-16 lg:grid-cols-[1.4fr_.6fr_.8fr]">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-slate-950">
                VC
              </span>

              Victor Codes
              <span className="text-violet-400">.</span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              I design and build modern, responsive web experiences
              for businesses, startups and ambitious ideas.
            </p>

            <div className="mt-7 flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-800 text-slate-400 transition duration-300 hover:border-white hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-800 text-slate-400 transition duration-300 hover:border-white hover:text-white"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </p>

            <div className="mt-6 grid gap-4 text-sm">
              <Link
                to="/about"
                className="text-slate-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="text-slate-400 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/services"
                className="text-slate-400 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/pricing"
                className="text-slate-400 transition hover:text-white"
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Start a project
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Have an idea, project or opportunity in mind? Let's
              talk about how we can turn it into something useful.
            </p>

            <Link
              to="/book-consultation"
              className="link group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-violet-200"
            >
              Let's talk
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Victor Codes. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
      </Container>
    </footer>
  );
}