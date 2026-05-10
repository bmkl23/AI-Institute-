import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "team", label: "Team" },
  { id: "syllabus", label: "Syllabus" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("home");
          }}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.45)]">
            AI
          </span>
          <span className="text-sm font-semibold tracking-wide text-white md:text-base">
            Apex<span className="text-violet-300">Institute</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => handleNavigate(l.id)}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-6 flex-col justify-center gap-1.5">
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-full rounded-full bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.08] bg-slate-950/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(l.id)}
                    className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
