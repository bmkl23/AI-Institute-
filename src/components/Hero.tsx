import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";
import { scrollToSection } from "../utils/scroll";

const highlights = [
  "Research Publication Opportunities",
  "Hands-on AI & Machine Learning Projects",
  "One-on-One Expert Mentorship",
  "Real-World Problem Solving Experience",
  "Viva-Based Evaluations",
  "Internship Opportunities for Top Performers",
  "Industry & Research Focused Learning",
  "Graded Professional Certification",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950"
    >
      <SectionPhotoBg
        imageUrl={sectionBg.hero}
        imageClassName="bg-cover bg-center md:bg-[position:52%_40%]"
        overlayClassName="bg-gradient-to-br from-slate-950/80 via-slate-950/65 to-blue-950/78"
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto hidden max-w-6xl justify-center px-4 pt-16 md:flex md:px-6 md:pt-20"
      />

<div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pb-28 pt-14 md:grid-cols-2 md:px-6 md:pb-36 md:pt-10">        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200">
            {site.tagline} · {site.language}
          </p>

          <h1 className="max-w-xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Build the Future with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Artificial Intelligence, Machine Learning &amp; Research Innovation
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-200 sm:text-xl">
            A 6-Month Intensive AI Research Bootcamp designed for students,
            undergraduates, and graduates who want to master practical AI
            development, research methodologies, and real-world problem solving.
          </p>

          <p className="mt-5 max-w-xl text-base font-semibold text-sky-300">
            Move Beyond Theory — Learn AI Through Research, Innovation, and Real-World Implementation.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            This bootcamp bridges the gap between academic theory and industry
            expectations by combining practical implementation, research-driven
            learning, and expert mentorship. Students will work on real AI
            projects, develop research capabilities, and gain the confidence to
            build intelligent solutions for modern challenges.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            
            {/* <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Contact Us
            </button> */}
          </div>

          <p className="mt-8 max-w-md text-sm text-slate-400">
            Research-focused pathways for After A/L students, undergraduates, and fresh graduates across Sri Lanka.
          </p>

          {/* Mobile highlight chips */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur md:hidden">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-300">Program highlights</p>
            <motion.div className="mt-3 flex flex-wrap gap-2">
              {highlights.map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right column — desktop card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative mx-auto hidden h-auto w-full max-w-md md:block"
        >
          <div className="absolute inset-3 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-[1px] shadow-2xl">
            <motion.div className="flex h-full flex-col justify-between rounded-[1.875rem] bg-slate-900/85 p-6 backdrop-blur">
              <motion.div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">Program highlights</p>
                <p className="mt-2 text-2xl font-bold text-white">Research to Industry</p>
                <motion.ul className="mt-6 space-y-2.5">
                  {highlights.map((step, i) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.07 }}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-800/70 px-3 py-2 text-sm text-slate-200"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/40 to-indigo-600/35 text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="mt-5 rounded-xl border border-blue-500/25 bg-blue-500/10 px-4 py-3 text-xs font-medium text-sky-100"
              >
                Building ethically responsible AI professionals for Sri Lanka&apos;s technology ecosystem.
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}