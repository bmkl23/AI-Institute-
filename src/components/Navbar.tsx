import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { navigateToSectionAfterMenu } from "../utils/scroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "syllabus", label: "Syllabus" },
  { id: "contact", label: "Contact" },
  { id: "feedback", label: "Feedback" },
];

function scrollNav(id: string, menuWasOpen: boolean) {
  navigateToSectionAfterMenu(id, { menuWasOpen });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id: string) => {
    const wasOpen = open;
    setOpen(false);
    scrollNav(id, wasOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <BrandLogo
          imageClassName="h-9 w-9 object-contain md:h-10 md:w-10"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("home");
          }}
        />

        <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
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
          className="inline-flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/12 text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm outline-none ring-offset-2 ring-offset-slate-950 focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden active:bg-white/20"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.12] bg-slate-950 shadow-[0_12px_40px_rgba(0,0,0,0.45)] lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(l.id)}
                    className="w-full rounded-xl px-4 py-3.5 text-left text-base font-medium text-white transition hover:bg-white/10 active:bg-white/15"
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
