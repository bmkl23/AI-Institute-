import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionPhotoBg } from "./SectionPhotoBg";

type Module = { title: string; topics: string[]; practicals: string[] };
type CourseSyllabus = { id: string; name: string; duration: string; color: string; objective: string; modules: Module[] };

const syllabi: CourseSyllabus[] = [
  {
    id: "ml",
    name: "Machine Learning",
    duration: "3 Months · 12 Weeks",
    color: "from-violet-500 to-indigo-500",
    objective:
      "To build strong theoretical and practical foundations in Machine Learning, covering modern learning paradigms, model development workflows, evaluation methodologies, and research applications.",
    modules: [
      {
        title: "Introduction to ML & Supervised Learning",
        topics: [
          "Introduction to Machine Learning — what amazing things can be done with AI & ML",
          "Types of Machine Learning",
          "Regression Techniques",
          "Classification Techniques",
          "Linear Regression",
          "Logistic Regression",
          "Decision Trees",
          "Random Forest",
          "Support Vector Machines (SVM)",
        ],
        practicals: ["Dataset preprocessing", "Training basic ML models", "Prediction pipelines"],
      },
      {
        title: "Unsupervised Learning",
        topics: [
          "Clustering Concepts",
          "K-Means Clustering",
          "Hierarchical Clustering",
          "Dimensionality Reduction",
          "Principal Component Analysis (PCA)",
          "Anomaly Detection",
        ],
        practicals: ["Customer segmentation", "Pattern discovery", "Visualization of clusters", "Research proposal preparation", "Research discussion presentations"],
      },
      {
        title: "Semi-Supervised Learning",
        topics: [
          "Introduction to Semi-Supervised Learning",
          "Label scarcity challenges",
          "Pseudo-labeling techniques",
          "Expert-guided labeling",
          "Hybrid training approaches",
        ],
        practicals: ["Semi-supervised classification implementation", "Label generation workflows"],
      },
      {
        title: "Self-Supervised Learning (Introduction)",
        topics: [
          "Fundamentals of Self-Supervised Learning",
          "Contrastive Learning",
          "Representation Learning",
          "Modern AI training paradigms",
        ],
        practicals: ["Feature representation experiments", "Introduction to transformer pretraining concepts"],
      },
      {
        title: "Feature Engineering",
        topics: [
          "Data Cleaning",
          "Feature Extraction",
          "Feature Selection",
          "Handling Missing Data",
          "Encoding Techniques",
          "Scaling & Normalization",
          "Data Augmentation",
        ],
        practicals: ["Building feature pipelines", "Optimization of input data quality"],
      },
      {
        title: "Training & Validation",
        topics: [
          "Training Workflows",
          "Validation Techniques",
          "Bias vs Variance",
          "Overfitting & Underfitting",
          "Cross Validation",
          "Hyperparameter Tuning",
          "Introduction to Deep Learning",
          "Neural Networks",
          "Classifier Optimization",
        ],
        practicals: ["Deep learning model training", "Validation experiments", "Hyperparameter optimization"],
      },
      {
        title: "Testing & Evaluation",
        topics: [
          "Model Evaluation Metrics",
          "Accuracy, Precision, Recall, F1-Score",
          "ROC-AUC",
          "Confusion Matrix",
          "Regression Metrics",
          "Error Analysis",
          "Model Interpretability",
          "Common fit failures in Machine Learning",
        ],
        practicals: ["Performance evaluation reports", "Comparative model analysis"],
      },
      {
        title: "Research Usage of Machine Learning",
        topics: [
          "ML Research Methodology",
          "Reading Research Papers",
          "Experimental Design",
          "Dataset Preparation for Research",
          "Research Ethics",
          "Publication Standards",
          "AI Research Trends",
        ],
        practicals: ["Paper analysis sessions", "Research discussion presentations"],
      },
    ],
  },
  {
    id: "ds",
    name: "Data Science",
    duration: "1 Month · 4 Weeks",
    color: "from-sky-500 to-cyan-400",
    objective:
      "To develop practical data handling, visualization, analytics, and reporting skills using industry-standard tools in Data Science.",
    modules: [
      {
        title: "Python for Data Science",
        topics: ["Data Manipulation with Pandas", "Numerical Computing with NumPy", "Data Cleaning", "Exploratory Data Analysis (EDA)"],
        practicals: ["Dataset analysis projects", "Data preprocessing pipelines"],
      },
      {
        title: "Data Visualization & Reporting",
        topics: ["Data Visualization Principles", "Matplotlib & Seaborn", "Reporting Techniques", "Dashboard Concepts"],
        practicals: ["Analytical report creation", "Visualization exercises"],
      },
      {
        title: "Power BI for Analytics",
        topics: ["Dashboard Development", "Data Connections", "Business Analytics", "Interactive Reporting"],
        practicals: ["Real-world dashboard projects"],
      },
      {
        title: "Data Science Project Workflow",
        topics: ["End-to-End Data Science Lifecycle", "Data Collection", "Data Processing", "Insight Generation", "Presentation Techniques"],
        practicals: ["Mini Data Science Project"],
      },
    ],
  },
  {
    id: "ai",
    name: "Artificial Intelligence & LLM Engineering",
    duration: "2 Months · 8 Weeks",
    color: "from-rose-500 to-orange-400",
    objective:
      "To introduce advanced AI concepts and modern intelligent systems including Artificial Intelligence, Large Language Models, Retrieval-Augmented Generation, and Reinforcement Learning.",
    modules: [
      {
        title: "Self-Supervised Learning (Advanced)",
        topics: ["Advanced Representation Learning", "Contrastive Learning", "Embedding Models", "Transformer Foundations"],
        practicals: ["Embedding experiments", "Self-supervised workflows"],
      },
      {
        title: "Transformer Architecture & LLM Foundations",
        topics: ["Introduction to LLMs", "Deep Learning Foundations for LLMs", "Transformer Architecture", "Self-Attention Mechanism", "Tokenization", "LLM Training Pipeline", "Pretraining and Fine-Tuning Basics"],
        practicals: ["Tokenization experiments", "Attention visualization", "Text generation using LLMs", "Hugging Face Transformers basics", "Running small LLMs locally"],
      },
      {
        title: "Prompt Engineering, Open-Source LLMs & AI Agents",
        topics: ["Prompt Engineering", "Fine-Tuning Concepts", "Open Source LLMs", "AI Agents", "RAG and Vector Databases", "LLM Integration"],
        practicals: ["Prompt engineering projects", "Chatbot development", "LLM API integration", "AI assistant development", "Simple AI agent implementation"],
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        topics: ["RAG Architecture", "Vector Databases", "Embeddings", "Semantic Search", "Knowledge Retrieval Systems", "AI Chatbot Architecture"],
        practicals: ["Building RAG systems", "Document-aware chatbot development"],
      },
      {
        title: "Reinforcement Learning",
        topics: ["Introduction to Reinforcement Learning", "Agents & Environments", "Reward Functions", "Q-Learning", "Policy Optimization", "Deep Reinforcement Learning"],
        practicals: ["RL simulations", "Decision-making agents"],
      },
      {
        title: "Final AI Research & Viva Preparation",
        topics: ["Research Project Finalization", "Publication Guidance", "Technical Presentation Skills", "Viva Preparation", "AI Ethics & Future Trends"],
        practicals: ["Final project presentation", "Mock viva sessions", "Research paper review"],
      },
    ],
  },
];

export function Syllabus() {
  const [openId, setOpenId] = useState<string | null>("ml");

  return (
    <section
      id="syllabus"
      className="relative overflow-hidden border-b border-white/[0.06] py-14 md:py-20"
    >
      {/* Background photo — deep AI/neural network theme */}
      <SectionPhotoBg
        imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2070&q=80"
        imageClassName="bg-cover bg-center"
        overlayClassName="bg-slate-950/80"
      />

      {/* Colour-tinted gradient on top of the photo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(109,40,217,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(14,165,233,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(244,63,94,0.10) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }} />
        <div className="absolute -right-24 bottom-32 h-80 w-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }} />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #f43f5e, transparent 70%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
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
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            A structured, research-oriented program covering Machine Learning, Data Science, and Advanced AI — designed to take you from foundations to publication-ready research.
          </p>

          {/* Duration badges */}
          <div className="mt-5 flex flex-wrap gap-3">
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
        <div className="mt-10 space-y-3">
          {syllabi.map((course, i) => {
            const isOpen = openId === course.id;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-950/70 backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : course.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${course.color}`} />
                    <div>
                      <span className="text-base font-semibold text-white">{course.name}</span>
                      <span className="ml-3 text-xs text-slate-500">{course.duration}</span>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
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
                      {/* Objective */}
                      <div className="px-6 pt-4 pb-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Objective</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{course.objective}</p>
                      </div>

                      {/* Module cards */}
                      <div className="grid gap-3 p-4 sm:grid-cols-2 md:p-5 lg:grid-cols-3">
                        {course.modules.map((mod) => (
                          <div key={mod.title} className="rounded-xl border border-white/[0.07] bg-slate-900/80 p-3.5">
                            <p className="text-sm font-semibold text-white">{mod.title}</p>

                            <p className={`mt-2.5 bg-gradient-to-r ${course.color} bg-clip-text text-[10px] font-bold uppercase tracking-widest text-transparent`}>
                              Topics
                            </p>
                            <ul className="mt-1 space-y-1">
                              {mod.topics.map((t) => (
                                <li key={t} className="flex items-start gap-2 text-[11px] text-slate-400">
                                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${course.color}`} />
                                  {t}
                                </li>
                              ))}
                            </ul>

                            <p className={`mt-3 bg-gradient-to-r ${course.color} bg-clip-text text-[10px] font-bold uppercase tracking-widest text-transparent`}>
                              Practical Components
                            </p>
                            <ul className="mt-1 space-y-1">
                              {mod.practicals.map((p) => (
                                <li key={p} className="flex items-start gap-2 text-[11px] text-slate-400">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full border border-slate-500 opacity-60" />
                                  {p}
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
          className="mt-10 rounded-2xl border border-white/[0.08] bg-slate-950/60 p-5 backdrop-blur-md md:p-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Final Outcomes</p>
          <h3 className="mt-1.5 text-lg font-bold text-white">What you'll walk away with</h3>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {[
              { icon: "🎓", label: "Graded Certificate Completion" },
              { icon: "🔬", label: "Research Project Experience" },
              { icon: "🎤", label: "Viva Evaluation Experience" },
              { icon: "📄", label: "Opportunity for Research Publication" },
              { icon: "💼", label: "Internship Opportunities for Top Performers" },
              { icon: "🤝", label: "Industry & Research Mentorship Experience" },
            ].map((o) => (
              <div key={o.label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5">
                <span className="text-lg">{o.icon}</span>
                <span className="text-sm font-medium text-slate-300">{o.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}