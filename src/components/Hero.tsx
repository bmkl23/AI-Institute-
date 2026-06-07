import { motion } from "framer-motion";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

const highlights = [
  { icon: "📄", label: "Research Publication Opportunities", featured: true, medal: "🥇" },
  { icon: "💼", label: "Paid Internship (Full-Time or Part-Time)", featured: true, medal: "🥇" },
  { icon: "🧠", label: "Hands-on AI & Machine Learning Projects" },
  { icon: "👤", label: "One-on-One Expert Mentorship" },
  { icon: "🌍", label: "Real-World Problem Solving Experience" },
  { icon: "🎤", label: "Viva-Based Evaluations" },
  { icon: "🔬", label: "Industry & Research Focused Learning" },
  { icon: "🎓", label: "Graded Professional Certification" },
];

const badges = [
  {
    cls: "border-emerald-500/35 bg-emerald-500/10 text-emerald-300",
    iconCls: "text-emerald-400",
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    label: "30-Day Money-Back Guarantee",
  },
  {
    cls: "border-amber-500/35 bg-amber-500/10 text-amber-300",
    iconCls: "text-amber-400",
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    label: "Interview-Based Selection",
  },
  {
    cls: "border-violet-500/35 bg-violet-500/10 text-violet-300",
    iconCls: "text-violet-400",
    icon: (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
    label: "Paid Internship for Top Performers",
  },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.06 } } },
  item: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950"
    >
      <SectionPhotoBg
        imageUrl={sectionBg.hero}
        imageClassName="bg-cover bg-center md:bg-[position:52%_40%]"
        overlayClassName="bg-gradient-to-br from-slate-950/85 via-slate-950/70 to-blue-950/80"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-14 md:grid-cols-[1fr_400px] md:gap-10 md:px-6 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-col"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-400/80">
            6-Month AI Research Bootcamp · 2026
          </p>

          <h1 className="text-[2rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[2.6rem] lg:text-[3rem]">
            Build the Future{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
              with AI, Machine Learning
            </span>{" "}
            &amp; Research Innovation
          </h1>

          <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-slate-300">
            A structured, research-oriented program for students, undergraduates,
            and graduates who want to master practical AI development, research
            methodologies, and real-world problem-solving.
          </p>

          <p className="mt-2.5 max-w-lg text-sm font-semibold text-sky-400">
            Move Beyond Theory — Learn AI Through Research, Innovation &amp; Real-World Implementation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map(({ cls, iconCls, icon, label }) => (
              <div
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${cls}`}
              >
                <span className={iconCls}>{icon}</span>
                <span className="text-[11px] font-bold">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Open to After A/L students, undergraduates &amp; fresh graduates across Sri Lanka.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400">
                  Program Highlights
                </p>
                <p className="mt-0.5 text-lg font-bold text-white">Research to Industry</p>
              </div>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                2026
              </span>
            </div>

            <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.ul
              variants={stagger.container}
              initial="initial"
              animate="animate"
              className="space-y-1.5"
            >
              {highlights.map(({ icon, label, featured, medal }) => (
                <motion.li
                  key={label}
                  variants={stagger.item}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
                    featured
                      ? "border-amber-500/35 bg-amber-500/[0.09] hover:bg-amber-500/[0.14]"
                      : "border-white/[0.05] bg-slate-800/50 hover:border-blue-500/20 hover:bg-slate-800/80"
                  }`}
                >
                  <span className="text-sm leading-none">{icon}</span>
                  <span
                    className={`text-[12.5px] font-medium leading-snug ${
                      featured ? "text-amber-100" : "text-slate-200"
                    }`}
                  >
                    {label}
                  </span>
                  {medal && (
                    <span className="ml-auto text-base leading-none">{medal}</span>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.07] px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wide text-amber-300">⚡ Limited Seats</p>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-400">Short interview required.</p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-300">🛡 Risk-Free</p>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-400">Full refund in month 1.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}