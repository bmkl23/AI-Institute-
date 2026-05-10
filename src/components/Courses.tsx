import { motion } from "framer-motion";

const courses = [
  {
    title: "Data Science",
    description:
      "Exploratory analysis, statistical inference, experimentation, and storytelling with modern Python & SQL stacks.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z" />
      </svg>
    ),
    accent: "from-sky-500/30 to-indigo-500/20",
  },
  {
    title: "Machine Learning",
    description:
      "Supervised & unsupervised learning, feature design, model selection, and validation under real-world constraints.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 0 0-3.09 3.09z" />
      </svg>
    ),
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "Deep Learning",
    description:
      "Neural nets, CNNs, sequence models, attention, and efficient training using PyTorch with GPU workflows.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z" />
      </svg>
    ),
    accent: "from-indigo-500/35 to-purple-500/22",
  },
  {
    title: "AI Applications",
    description:
      "LLM integration, retrieval systems, multimodal pipelines, governance, and productizing AI-assisted features safely.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75.002v-.002c0-.652-.068-1.28-.164-1.902m-.164 1.902c-.35.097-.697.173-1.047.237M12 21c-2.17 0-4.236-.583-6-1.627M12 6.366a17.734 17.734 0 0 1 5.934 11.943m-.008.003a17.95 17.95 0 0 1-2.983 10.957M18.75 21H5.25" />
      </svg>
    ),
    accent: "from-teal-500/25 to-cyan-500/15",
  },
];

export function Courses() {
  return (
    <section id="courses" className="border-b border-white/[0.06] bg-slate-900/35 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Courses</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Programs engineered for mastery</h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              Choose a specialization or stack certificates—each pathway culminates in a mentor-reviewed portfolio piece.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            New cohort applications open
          </motion.div>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/60 p-6 shadow-xl"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition group-hover:opacity-90 ${c.accent}`}
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
