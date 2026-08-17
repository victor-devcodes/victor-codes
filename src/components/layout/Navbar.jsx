import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
} from "react-icons/hi";
import {
  IoClose,
} from "react-icons/io5";
import {
  FiChevronDown,
  FiArrowUpRight,
  FiCode,
  FiDollarSign,
} from "react-icons/fi";

import Container from "../ui/Container";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const workLinks = [
  {
    title: "Services",
    description: "Web development & digital solutions",
    href: "/services",
    icon: FiCode,
  },
  {
    title: "Pricing",
    description: "Simple starting points for every project",
    href: "/pricing",
    icon: FiDollarSign,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

      <Container>

        <div className="flex h-18 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={close}
            className="group flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-dark-blue text-sm font-black text-white transition duration-300 group-hover:-rotate-3">
              VC
            </span>

            <span className="text-lg text-dark-blue font-bold tracking-tight">
              Victor Codes
              <span className="text-violet-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

            {links.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-slate-950"
                      : "text-violet-600 hover:text-slate-950"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}

                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-600" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 py-2 text-sm font-medium  transition hover:text-slate-900"
              >
                Work With Me

                <FiChevronDown
                  className={`transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="absolute right-0 top-full mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-950/10"
                  >
                    {workLinks.map(
                      ({
                        title,
                        description,
                        href,
                        icon: Icon,
                      }) => (
                        <Link
                          key={href}
                          to={href}
                          onClick={close}
                          className="group flex gap-4 rounded-xl p-4 transition hover:bg-slate-50"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                            <Icon />
                          </span>

                          <span>
                            <span className="flex items-center gap-2 text-sm font-bold text-slate-950">
                              {title}
                              <FiArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
                            </span>

                            <span className="mt-1 block text-xs leading-5 text-slate-500">
                              {description}
                            </span>
                          </span>
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              to="/book-consultation"
              className="button group ml-2 inline-flex items-center gap-2 rounded-xl bg-dark-blue px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand"
            >
              Let's talk
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center  border border-slate-200 text-2xl text-slate-950 transition hover:border-slate-950 lg:hidden"
          >
            {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="overflow-hidden lg:hidden"
            >
              <nav className="border-t border-slate-200 py-4">

                {links.map(([label, href]) => (
                  <NavLink
                    key={href}
                    to={href}
                    onClick={close}
                    className={({ isActive }) =>
                      `block border-b border-slate-100 py-4 text-sm font-medium ${
                        isActive
                          ? "text-violet-600"
                          : "text-slate-700"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}

                {/* Mobile Work Links */}
                <div className="border-b border-slate-100 py-3">

                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Work With Me
                  </p>

                  {workLinks.map(
                    ({
                      title,
                      description,
                      href,
                    }) => (
                      <Link
                        key={href}
                        to={href}
                        onClick={close}
                        className="block py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {description}
                        </p>
                      </Link>
                    )
                  )}

                </div>

                <Link
                  to="/book-consultation"
                  onClick={close}
                  className="button mt-5 flex items-center justify-center gap-2 rounded-xl bg-dark-blue px-5 py-3.5 text-sm font-semibold text-white hover:bg-brand"
                >
                  Let's talk
                  <FiArrowUpRight />
                </Link>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </header>
  );
}