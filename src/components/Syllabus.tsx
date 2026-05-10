import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Module = { title: string; topics: string[] };

type CourseSyllabus = { id: string; name: string; modules: Module[] };

const syllabi: CourseSyllabus[] = [
  {
    id: "ds",
    name: "Data Science",
    modules: [
      {
        title: "Module 1 — Foundations & tooling",
        topics: ["Python for analytics", "NumPy & Pandas patterns", "SQL for feature stores", "Git & reproducible notebooks"],
      },
      {
        title: "Module 2 — Statistics & experiments",
        topics: ["Probability refresher", "Hypothesis testing", "A/B testing design", "Causal intuition"],
      },
      {
        title: "Module 3 — Visualization & communication",
        topics: ["Storytelling with charts", "Dashboards with modern BI", "Stakeholder briefings", "Ethical data narratives"],
      },
    ],
  },
  {
    id: "ml",
    name: "Machine Learning",
    modules: [
      {
        title: "Module 1 — Classical ML",
        topics: ["Linear & tree models", "Ensembles & boosting", "Cross-validation strategy", "Imbalanced datasets"],
      },
      {
        title: "Module 2 — Feature & model engineering",
        topics: ["Feature selection", "Hyperparameter search", "Model debugging", "Calibration & thresholds"],
      },
      {
        title: "Module 3 — Operational concerns",
        topics: ["Latency budgets", "Batch vs online scoring", "Monitoring drift", "Documentation for handoff"],
      },
    ],
  },
  {
    id: "dl",
    name: "Deep Learning",
    modules: [
      {
        title: "Module 1 — Neural fundamentals",
        topics: ["Autograd & tensors", "Optimization & regularization", "CNN architectures", "Transfer learning"],
      },
      {
        title: "Module 2 — Sequences & attention",
        topics: ["RNNs & LSTMs", "Transformers overview", "Positional encodings", "Fine-tuning recipes"],
      },
      {
        title: "Module 3 — Training at scale",
        topics: ["Mixed precision", "Distributed training intro", "Experiment tracking", "Checkpointing & recovery"],
      },
    ],
  },
  {
    id: "ai",
    name: "AI Applications",
    modules: [
      {
        title: "Module 1 — LLM product patterns",
        topics: ["Prompt design", "Retrieval augmented generation", "Evaluation harnesses", "Safety guardrails"],
      },
      {
        title: "Module 2 — Multimodal & agents",
        topics: ["Vision-language models", "Tool use patterns", "Orchestration frameworks", "Observability for agents"],
      },
      {
        title: "Module 3 — Governance & launch",
        topics: ["Risk assessment", "Red teaming basics", "Human-in-the-loop UX", "Launch checklists"],
      },
    ],
  },
];

export function Syllabus() {
  const [openId, setOpenId] = useState<string | null>("ds");

  return (
    <section id="syllabus" className="border-b border-white/[0.06] bg-slate-900/35 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Syllabus</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Transparent modules, topic by topic</h2>
          <p className="mt-4 text-slate-400">
            Expand a course to preview weekly themes. Live sessions align with these outlines and adapt to cohort pace.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {syllabi.map((course, i) => {
            const isOpen = openId === course.id;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/55"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : course.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03] md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">{course.name}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-violet-200"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="border-t border-white/[0.06]"
                    >
                      <div className="space-y-4 px-5 py-5 md:px-6 md:py-6">
                        {course.modules.map((mod) => (
                          <div
                            key={mod.title}
                            className="rounded-xl border border-white/[0.06] bg-slate-900/60 p-4 md:p-5"
                          >
                            <p className="text-sm font-semibold text-violet-200">{mod.title}</p>
                            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                              {mod.topics.map((t) => (
                                <li key={t} className="flex items-start gap-2 text-sm text-slate-300">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/90" />
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
