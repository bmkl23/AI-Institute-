import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

const highlights = [
  "Research Publication Opportunities",
  "Hands-on AI & Machine Learning Projects",
  "One-on-One Expert Mentorship",
  "Real-World Problem Solving Experience",
  "Viva-Based Evaluations",
  "Paid Internship (Full-Time or Part-Time)",
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

          {/* Trust badges row */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Money-back guarantee */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2">
              <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <span className="text-xs font-bold text-emerald-300">30-Day Money-Back Guarantee</span>
            </div>

            {/* Interview-based selection */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2">
              <svg className="h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-xs font-bold text-amber-300">Interview-Based Selection</span>
            </div>

            {/* Paid internship */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2">
              <svg className="h-4 w-4 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <span className="text-xs font-bold text-violet-300">Paid Internship for Top Performers</span>
            </div>
          </div>

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

            {/* Bottom callout inside card */}
            <div className="mt-5 rounded-xl border border-amber-500/25 bg-amber-500/8 px-4 py-3">
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">⚡ Limited Seats Available</p>
              <p className="mt-1 text-xs text-slate-400">
                Enrollment requires a short interview to ensure program fit and commitment.
              </p>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-500/25 bg-emerald-500/8 px-4 py-3">
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-wide">🛡 Risk-Free Enrollment</p>
              <p className="mt-1 text-xs text-slate-400">
                Not satisfied in the first month? Get a full refund — no questions asked.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}