import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const subjects = [
  { icon: "⚛️", label: "Physics" },
  { icon: "🧪", label: "Chemistry" },
  { icon: "📐", label: "Combined Mathematics" },
  { icon: "💻", label: "ICT" },
  { icon: "🌿", label: "Biology" },
];

const stages = [
  {
    step: "Step 1",
    months: "Months 1–2",
    color: "border-purple-500/40 bg-purple-500/10",
    labelColor: "text-purple-300",
    icon: "🌱",
    title: "One deep concept per session",
    points: ["Build foundation", "Understand basics", "Solve simple questions"],
  },
  {
    step: "Step 2",
    months: "Months 3–4",
    color: "border-blue-500/40 bg-blue-500/10",
    labelColor: "text-blue-300",
    icon: "🌿",
    title: "Two concepts per session",
    points: ["Make connections", 'Ask "why?"', "Solve moderate questions"],
  },
  {
    step: "Step 3",
    months: "Months 5–6",
    color: "border-emerald-500/40 bg-emerald-500/10",
    labelColor: "text-emerald-300",
    icon: "🌳",
    title: "Three or more concepts per session",
    points: ["Think deeper", "Combine ideas", "Tackle challenging problems"],
  },
  {
    step: "Step 4",
    months: "Months 7–8",
    color: "border-amber-500/40 bg-amber-500/10",
    labelColor: "text-amber-300",
    icon: "🧠",
    title: "Solve complex questions with ease",
    points: ["Apply concepts freely", "Think independently", "Build exam confidence"],
  },
];

const outcomes = [
  "Thinks Conceptually",
  "Loves the Subject",
  "Solves Complex Problems",
  "Passes the A/L Cut-off",
  "Ready for University & Beyond",
  "Creates New Things for the World",
];

const howItWorks = [
  { icon: "❓", label: "Question Based Discussions" },
  { icon: "🧠", label: "Think, Explore & Solve" },
  { icon: "📈", label: "Gradual Increase in Complexity" },
  { icon: "👥", label: "Moderated & Guided by Mentors" },
];

const pricing = [
  {
    label: "First Month",
    price: "LKR 3,000",
    note: "Trial month to experience the bootcamp",
    color: "border-blue-500/30 bg-blue-500/[0.07]",
    badge: "Start Here",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    label: "Monthly (2nd onwards)",
    price: "LKR 6,000",
    note: "Per month, maximum 10 students per group",
    color: "border-indigo-500/30 bg-indigo-500/[0.07]",
    badge: "Most Flexible",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  },
  {
    label: "5-Month Bundle",
    price: "LKR 25,000",
    note: "One-time payment for months 2–6 — save LKR 5,000",
    color: "border-amber-500/30 bg-amber-500/[0.07]",
    badge: "Best Value",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.07 } } },
  item: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  },
};

export function ALBootcamp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Peritus Research
          </button>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-300">
              A/L Bootcamp
            </span>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pb-16 pt-6 md:pb-24 md:pt-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-950/30 via-slate-950 to-blue-950/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400/80">
              Peritus A/L · GCE A/L Conceptual Thinking Bootcamp
            </p>
            <h1 className="text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.2rem]">
              Think Deeper.{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solve Smarter.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              A 7–8 month intensive bootcamp designed to transform how Sri Lankan GCE A/L students learn.
              Not just to pass A/L — but to build thinkers, creators and problem solvers.
            </p>
            <p className="mt-3 text-sm font-semibold text-violet-400">
              Not what to memorize — but how to think.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#pricing"
                className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
              >
                View Pricing
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </motion.div>

          {/* Infographic Image 1 */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40"
          >
            <img
              src="/src/Img/Img01.png"
              alt="From Questions to Greater Minds — Bootcamp Overview"
              className="w-full object-cover"
            />
            <figcaption className="border-t border-white/10 bg-slate-900/70 py-2 text-center text-[11px] font-semibold uppercase tracking-wider text-violet-300">
              From Questions to Greater Minds
            </figcaption>
          </motion.figure>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative border-b border-white/[0.06] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400/80">The Approach</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              How It{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
              2 sessions per week · 2 hours per session · 4 hours total per week
            </p>
          </motion.div>

          <motion.div
            variants={stagger.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {howItWorks.map(({ icon, label }) => (
              <motion.div
                key={label}
                variants={stagger.item}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.07] bg-slate-900/60 p-6 text-center backdrop-blur-sm"
              >
                <span className="text-3xl">{icon}</span>
                <p className="text-[13px] font-semibold text-slate-200">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Infographic Image 2 */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40"
          >
            <img
              src="/src/Img/Img02.png"
              alt="Peritus Conceptual Thinking Bootcamp — How It Works"
              className="w-full object-cover"
            />
            <figcaption className="border-t border-white/10 bg-slate-900/70 py-2 text-center text-[11px] font-semibold uppercase tracking-wider text-violet-300">
              How It Works
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="relative border-b border-white/[0.06] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400/80">Subjects</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Available{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Subjects
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {subjects.map(({ icon, label }) => (
              <motion.div
                key={label}
                variants={stagger.item}
                className="flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.07] px-6 py-4 backdrop-blur-sm"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-slate-200">{label}</span>
                <span className="text-emerald-400">✅</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IMPROVEMENT JOURNEY */}
      <section className="relative border-b border-white/[0.06] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400/80">The Journey</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Stepwise{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Improvement
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">Small steps. Big transformation.</p>
          </motion.div>

          <motion.div
            variants={stagger.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stages.map(({ step, months, color, labelColor, icon, title, points }) => (
              <motion.div
                key={step}
                variants={stagger.item}
                className={`flex flex-col rounded-2xl border p-5 ${color}`}
              >
                <p className={`text-[10px] font-bold uppercase tracking-wider ${labelColor}`}>{step}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{months}</p>
                <span className="mt-3 text-3xl">{icon}</span>
                <p className="mt-2 text-[13px] font-bold text-white leading-snug">{title}</p>
                <ul className="mt-3 space-y-1">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-1.5 text-[12px] text-slate-400">
                      <span className="mt-0.5 text-emerald-400">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-6"
          >
            <p className="mb-4 text-center text-sm font-bold text-violet-300">🎯 The Outcome</p>
            <div className="flex flex-wrap justify-center gap-3">
              {outcomes.map((o) => (
                <div key={o} className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-2">
                  <span className="text-emerald-400 text-xs">✅</span>
                  <span className="text-[12px] font-medium text-slate-200">{o}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-b border-white/[0.06] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400/80">Pricing</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Simple &{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Transparent
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              Free initial consultation with Peritus founders to assess your level.
            </p>
          </motion.div>

          <motion.div
            variants={stagger.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-3"
          >
            {pricing.map(({ label, price, note, color, badge, badgeColor }) => (
              <motion.div
                key={label}
                variants={stagger.item}
                className={`flex flex-col rounded-2xl border p-6 ${color}`}
              >
                <span className={`self-start rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
                  {badge}
                </span>
                <p className="mt-4 text-sm font-semibold text-slate-300">{label}</p>
                <p className="mt-1 text-2xl font-extrabold text-white">{price}</p>
                <p className="mt-2 text-[12px] text-slate-500">{note}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5 text-center"
          >
            <p className="text-sm font-semibold text-emerald-300">
              🛡 Maximum 10 students per group · Free initial consultation · No hidden fees
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-violet-400/80">Our Mission</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Building{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Better Thinkers
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              In a world where AI can provide information instantly, creative thinking, logical reasoning,
              and problem-solving have become the most valuable human abilities. This program is designed
              to strengthen those abilities without sacrificing creativity.
            </p>
            <p className="mt-4 text-base font-semibold text-violet-300 italic">
              "Let's nurture creative thinkers. Let's win the future — without harming the humans."
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              PERITUS RESEARCH · Better Thinkers · A Brighter Sri Lanka · A Better World
            </p>

            <div className="mt-8">
              <a
                href="#pricing"
                className="inline-block rounded-xl bg-violet-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
              >
                Get Started — Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-6 text-center">
        <p className="text-[11px] text-slate-600">
          © 2026 Peritus Research · A/L Conceptual Thinking Bootcamp ·{" "}
          <button onClick={() => navigate("/")} className="text-slate-500 hover:text-slate-300 transition">
            Back to Main Site
          </button>
        </p>
      </footer>
    </div>
  );
}