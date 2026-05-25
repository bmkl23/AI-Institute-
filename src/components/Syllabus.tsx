import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Module = { title: string; weeks: string; topics: string[] };
type CourseSyllabus = { id: string; name: string; duration: string; color: string; modules: Module[] };

const syllabi: CourseSyllabus[] = [
  {
    id: "ml",
    name: "Machine Learning",
    duration: "3 Months · 12 Weeks",
    color: "from-violet-500 to-indigo-500",
    modules: [
      {
        title: "Supervised Learning",
        weeks: "Week 1–2",
        topics: ["Linear & Logistic Regression", "Decision Trees", "Random Forest", "Support Vector Machines (SVM)", "Dataset Preprocessing", "Prediction Pipelines"],
      },
      {
        title: "Unsupervised Learning",
        weeks: "Week 3–4",
        topics: ["K-Means & Hierarchical Clustering", "Principal Component Analysis (PCA)", "Dimensionality Reduction", "Anomaly Detection", "Customer Segmentation", "Research Proposal Preparation"],
      },
      {
        title: "Semi-Supervised & Self-Supervised Learning",
        weeks: "Week 5–6",
        topics: ["Label Scarcity Challenges", "Pseudo-Labeling Techniques", "Hybrid Training Approaches", "Contrastive Learning", "Representation Learning", "Transformer Pretraining Concepts"],
      },
      {
        title: "Feature Engineering",
        weeks: "Week 7–8",
        topics: ["Data Cleaning & Extraction", "Feature Selection", "Handling Missing Data", "Encoding Techniques", "Scaling & Normalization", "Data Augmentation"],
      },
      {
        title: "Training & Validation",
        weeks: "Week 9–10",
        topics: ["Bias vs Variance", "Overfitting & Underfitting", "Cross Validation", "Hyperparameter Tuning", "Neural Networks & Deep Learning Intro", "Classifier Optimization"],
      },
      {
        title: "Testing, Evaluation & ML Research",
        weeks: "Week 11–12",
        topics: ["Accuracy, Precision, Recall, F1-Score", "ROC-AUC & Confusion Matrix", "Model Interpretability", "ML Research Methodology", "Experimental Design", "Publication Standards"],
      },
    ],
  },
  {
    id: "ds",
    name: "Data Science",
    duration: "1 Month · 4 Weeks",
    color: "from-sky-500 to-cyan-400",
    modules: [
      {
        title: "Python for Data Science",
        weeks: "Week 13",
        topics: ["Data Manipulation with Pandas", "Numerical Computing with NumPy", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Dataset Analysis Projects", "Data Preprocessing Pipelines"],
      },
      {
        title: "Data Visualization & Reporting",
        weeks: "Week 14",
        topics: ["Visualization Principles", "Matplotlib & Seaborn", "Reporting Techniques", "Dashboard Concepts", "Analytical Report Creation", "Visualization Exercises"],
      },
      {
        title: "Power BI for Analytics",
        weeks: "Week 15",
        topics: ["Dashboard Development", "Data Connections", "Business Analytics", "Interactive Reporting", "Real-World Dashboard Projects"],
      },
      {
        title: "Data Science Project Workflow",
        weeks: "Week 16",
        topics: ["End-to-End Data Science Lifecycle", "Data Collection & Processing", "Insight Generation", "Presentation Techniques", "Mini Data Science Project"],
      },
    ],
  },
  {
    id: "ai",
    name: "Artificial Intelligence & LLM Engineering",
    duration: "2 Months · 8 Weeks",
    color: "from-rose-500 to-orange-400",
    modules: [
      {
        title: "Self-Supervised Learning (Advanced)",
        weeks: "Week 17",
        topics: ["Advanced Representation Learning", "Contrastive Learning", "Embedding Models", "Transformer Foundations", "Embedding Experiments", "Self-Supervised Workflows"],
      },
      {
        title: "Transformer Architecture & LLM Foundations",
        weeks: "Week 18–19",
        topics: ["Introduction to LLMs", "Transformer Architecture", "Self-Attention Mechanism", "Tokenization", "LLM Training Pipeline", "Hugging Face Transformers & Running LLMs Locally"],
      },
      {
        title: "Prompt Engineering, Open-Source LLMs & AI Agents",
        weeks: "Week 20",
        topics: ["Prompt Engineering", "Fine-Tuning Concepts", "Open Source LLMs", "AI Agents", "RAG & Vector Databases", "Chatbot & AI Assistant Development"],
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        weeks: "Week 21–22",
        topics: ["RAG Architecture", "Vector Databases", "Embeddings & Semantic Search", "Knowledge Retrieval Systems", "AI Chatbot Architecture", "Document-Aware Chatbot Development"],
      },
      {
        title: "Reinforcement Learning",
        weeks: "Week 23–24",
        topics: ["Agents & Environments", "Reward Functions", "Q-Learning", "Policy Optimization", "Deep Reinforcement Learning", "Decision-Making Agents"],
      },
      {
        title: "Final AI Research & Viva Preparation",
        weeks: "Week 25",
        topics: ["Research Project Finalization", "Publication Guidance", "Technical Presentation Skills", "Viva Preparation", "AI Ethics & Future Trends", "Mock Viva Sessions"],
      },
    ],
  },
];

export function Syllabus() {
  const [openId, setOpenId] = useState<string | null>("ml");

  return (
    <section
      id="syllabus"
      className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-32"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 10% 20%, rgba(109,40,217,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 90% 80%, rgba(14,165,233,0.15) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 50% 50%, rgba(244,63,94,0.08) 0%, transparent 60%),
          linear-gradient(135deg, #04050f 0%, #080c1a 40%, #050810 100%)
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute -right-24 bottom-32 h-80 w-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #f43f5e, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
            Peritus Research Bootcamp 2026
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            AI/ML &amp; Data Science
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-rose-400 bg-clip-text text-transparent">
              6-Month Research Curriculum
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            A structured, research-oriented program covering Machine Learning, Data Science, and Advanced AI — designed to take you from foundations to publication-ready research.
          </p>

          {/* Duration badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "Machine Learning", dur: "3 Months", color: "border-violet-500/40 text-violet-300 bg-violet-500/10" },
              { label: "Data Science", dur: "1 Month", color: "border-sky-500/40 text-sky-300 bg-sky-500/10" },
              { label: "AI & LLM", dur: "2 Months", color: "border-rose-500/40 text-rose-300 bg-rose-500/10" },
            ].map((b) => (
              <span key={b.label} className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${b.color}`}>
                <span>{b.label}</span>
                <span className="opacity-60">·</span>
                <span>{b.dur}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="mt-14 space-y-4">
          {syllabi.map((course, i) => {
            const isOpen = openId === course.id;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-950/60 backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : course.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${course.color}`} />
                    <div>
                      <span className="text-lg font-semibold text-white">{course.name}</span>
                      <span className="ml-3 text-xs text-slate-500">{course.duration}</span>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/[0.06]"
                    >
                      <div className="grid gap-3 p-5 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
                        {course.modules.map((mod) => (
                          <div
                            key={mod.title}
                            className="rounded-xl border border-white/[0.07] bg-slate-900/70 p-4"
                          >
                            <p className={`bg-gradient-to-r ${course.color} bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent`}>
                              {mod.weeks}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white">{mod.title}</p>
                            <ul className="mt-3 space-y-1.5">
                              {mod.topics.map((t) => (
                                <li key={t} className="flex items-start gap-2 text-xs text-slate-400">
                                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${course.color}`} />
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

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 rounded-2xl border border-white/[0.08] bg-slate-950/50 p-6 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Final Outcomes</p>
          <h3 className="mt-2 text-xl font-bold text-white">What you'll walk away with</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "", label: "Graded Completion Certificate" },
              { icon: "", label: "Research Project Experience" },
              { icon: "", label: "Viva Evaluation Experience" },
              { icon: "", label: "Research Publication Opportunity" },
              { icon: "", label: "Internship Opportunities (Top Performers)" },
              { icon: "", label: "Industry & Research Mentorship" },
            ].map((o) => (
              <div key={o.label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                <span className="text-xl">{o.icon}</span>
                <span className="text-sm font-medium text-slate-300">{o.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}