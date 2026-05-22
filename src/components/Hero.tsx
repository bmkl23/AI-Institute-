import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

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
      {/* ✅ Background (FIXED) */}
      <SectionPhotoBg
        imageUrl={sectionBg.hero}
        imageClassName="bg-cover bg-center md:bg-[position:52%_40%]"
        overlayClassName="bg-gradient-to-br from-slate-950/80 via-slate-950/65 to-blue-950/78"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pb-28 pt-14 md:grid-cols-2 md:px-6 md:pb-36 md:pt-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200">
            {site.tagline} · {site.language}
          </p>

          <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Build the Future with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Artificial Intelligence, Machine Learning & Research Innovation
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            A 6-Month Intensive AI Research Bootcamp designed for students,
            undergraduates, and graduates who want to master practical AI development,
            research methodologies, and real-world problem solving.
          </p>

          <p className="mt-5 max-w-xl text-base font-semibold text-sky-300">
            Move Beyond Theory — Learn AI Through Research, Innovation, and Real-World Implementation.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            This bootcamp bridges the gap between academic theory and industry
            expectations through projects, mentorship, and research-based learning.
          </p>

          <p className="mt-8 max-w-md text-sm text-slate-400">
            Research-focused pathways for After A/L students, undergraduates, and fresh graduates across Sri Lanka.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase text-blue-300">
              Program Highlights
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              Research to Industry
            </p>

            <ul className="mt-6 space-y-2.5">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-800/70 px-3 py-2 text-sm text-slate-200"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/40 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}