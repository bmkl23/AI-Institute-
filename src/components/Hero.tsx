import { motion } from "framer-motion";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";
import { scrollToSection } from "../utils/scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950"
    >
      <SectionPhotoBg
        imageUrl={sectionBg.hero}
        imageClassName="bg-cover bg-center md:bg-[position:52%_40%]"
        overlayClassName="bg-gradient-to-br from-slate-950/80 via-slate-950/65 to-indigo-950/78"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pb-28 pt-20 md:grid-cols-2 md:px-6 md:pb-36 md:pt-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-200"
          >
            Data Science · ML · Deep Learning
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Master AI &amp; Data Science With Industry Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-200 sm:text-xl"
          >
            Learn with mentors from leading AI research labs and practitioners shipping models in production—from
            foundations to deployment-ready portfolios.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollToSection("courses")}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.35)] transition hover:brightness-110"
            >
              Explore Courses
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("team")}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Meet Our Team
            </button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 max-w-md text-sm text-slate-400"
          >
            Cohort intakes quarterly — live mentor hours, graded capstones,
            interview prep labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.55 }}
            className="mt-8 md:hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-300">
              Curriculum snapshot
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Notebook → staging → dashboards</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Data", "Training", "MLOps", "Launch"].map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative mx-auto hidden h-[420px] w-full max-w-md md:block"
        >
          <div className="absolute inset-3 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-[1px] shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[1.875rem] bg-slate-900/85 p-6 backdrop-blur">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Curriculum snapshot
                </p>
                <p className="mt-2 text-2xl font-bold text-white">Model Lifecycle</p>
                <div className="mt-6 space-y-3">
                  {["Data ingestion & quality", "Feature engineering", "Training & tuning", "MLOps deployment"].map(
                    (step, i) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.1 }}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-800/70 px-3 py-2.5 text-sm text-slate-200"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/40 to-violet-600/35 text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="rounded-xl border border-violet-500/25 bg-violet-500/10 px-4 py-3 text-xs font-medium text-violet-100"
              >
                Your capstone ships to a staging environment with observability dashboards.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
