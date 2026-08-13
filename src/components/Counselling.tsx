import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import subathImg  from "../Img/subath.jpeg";
import rukshanImg from "../Img/rukshan.jpeg";

type PersonId = "subhath" | "rukshan";
type ThemeId  = "research" | "aiml" | "industry";

const RESOURCE_PERSONS: {
  id: PersonId; name: string; role: string; rate: number; image: string;
}[] = [
  { id: "subhath", name: "Subhath Abeysekara",   role: "Software & AI Solutions Architect | Tech Lead", rate: 2000, image: subathImg  },
  { id: "rukshan", name: "Rukshan J Senanayake", role: "AI Researcher & IEEE Author",                   rate: 2000, image: rukshanImg },
];

const THEMES: { id: ThemeId; label: string; icon: string; desc: string }[] = [
  { id: "research", label: "Research",              icon: "🔬", desc: "Academic & scientific research guidance" },
  { id: "aiml",     label: "AI/ML & IT",            icon: "🤖", desc: "Artificial intelligence & tech topics"  },
  { id: "industry", label: "Industrial Experience", icon: "🏢", desc: "Career, industry & professional growth"  },
];

const TOPICS: Record<ThemeId, string[]> = {
  research: [
    "Research Topic Selection & Idea Development",
    "Research Problem Identification",
    "Research Gap Identification",
    "Research Proposal Development",
    "Research Methodology Selection",
    "Literature Review & Systematic Literature Review",
    "Research Question & Objective Formulation",
    "Hypothesis Development",
    "Dataset Selection & Data Collection",
    "Research Framework & Architecture Design",
    "Experimental Design & Evaluation",
    "Statistical Analysis for Research",
    "Machine Learning Research",
    "AI Research",
    "Research Paper Writing",
    "Conference & Journal Paper Preparation",
    "Research Publication Strategy",
    "Selecting Suitable Journals & Conferences",
    "Research Ethics & Data Privacy",
    "Final-Year / Undergraduate Research Project Guidance",
    "MSc / PhD Research Guidance",
    "Research Project Troubleshooting",
  ],
  aiml: [
    "Artificial Intelligence Fundamentals",
    "Machine Learning Fundamentals",
    "Deep Learning",
    "Generative AI & LLMs",
    "Prompt Engineering",
    "Retrieval-Augmented Generation (RAG)",
    "Computer Vision",
    "Natural Language Processing (NLP)",
    "Reinforcement Learning",
    "AI Agents & Agentic AI",
    "AI Model Selection & Architecture",
    "Dataset Preparation & Data Processing",
    "Model Training & Fine-Tuning",
    "Model Evaluation & Performance Improvement",
    "AI Application Development",
    "AI API Integration",
    "AI Solution Architecture",
    "Software Architecture & System Design",
    "Full-Stack Application Development",
    "Python & Backend Development",
    "Cloud & AI Infrastructure",
    "MLOps & AI Deployment",
    "Database Design & Architecture",
    "Cybersecurity & Application Security",
    "Blockchain & Web3",
    "IT Project / Final-Year Project Guidance",
    "Choosing an AI/IT Career Path",
  ],
  industry: [
    "Starting a Career in IT",
    "Choosing an IT Career Path",
    "Becoming an AI/ML Engineer",
    "Becoming a Software Engineer",
    "Becoming a Data Scientist",
    "Industry-Ready Skill Development",
    "Building a Professional Portfolio",
    "CV & LinkedIn Profile Guidance",
    "Technical Interview Preparation",
    "Software Engineering Best Practices",
    "Working on Real-World Software Projects",
    "AI/ML Projects in Industry",
    "Research-to-Industry Transition",
    "Academic-to-Industry Transition",
    "Freelancing & Remote IT Careers",
    "Starting an IT/AI Business",
    "Developing a Digital Product",
    "Startup & Product Idea Validation",
    "Building an AI-Based Product",
    "Technology & Business Strategy",
    "Software Project Planning",
    "Working with Clients & Requirements",
    "IT Team & Project Management",
    "Career Growth & Professional Development",
    "Industry Expectations & Skills Gap",
  ],
};

const FORMSPREE_URL = "https://formspree.io/f/xqpzbgrd";
const STEPS = ["Mentor", "Duration", "Theme", "Topic", "Details"];

export function Counselling() {
  const [step, setStep]                       = useState(0);
  const [selectedPersons, setSelectedPersons] = useState<PersonId[]>([]);
  const [duration, setDuration]               = useState<number | null>(null);
  const [theme, setTheme]                     = useState<ThemeId | null>(null);
  const [topic, setTopic]                     = useState<string>("");
  const [name, setName]                       = useState<string>("");
  const [email, setEmail]                     = useState<string>("");
  const [note, setNote]                       = useState<string>("");
  const [sent, setSent]                       = useState<boolean>(false);
  const [submitting, setSubmitting]           = useState<boolean>(false);
  const [error, setError]                     = useState<string>("");

  const price = useMemo(() => {
    if (!duration || selectedPersons.length === 0) return null;
    const ratePerHour = selectedPersons.length === 2 ? 3000 : 2000;
    return ratePerHour * duration;
  }, [selectedPersons, duration]);

  const togglePerson = (id: PersonId) => {
    setSelectedPersons((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleThemeChange = (id: ThemeId) => {
    setTheme(id);
    setTopic("");
  };

  const allValid =
    selectedPersons.length > 0 &&
    duration !== null &&
    theme !== null &&
    topic !== "" &&
    name.trim() !== "" &&
    email.trim() !== "";

  const handleSubmit = async () => {
    if (!allValid || !theme || !duration || price === null) return;

    setSubmitting(true);
    setError("");

    const personNames = selectedPersons
      .map((id) => RESOURCE_PERSONS.find((p) => p.id === id)?.name)
      .join(" & ");
    const themeLabel  = THEMES.find((t) => t.id === theme)?.label ?? theme;
    const ratePerHour = selectedPersons.length === 2 ? 3000 : 2000;

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          // Formspree uses "_subject" and "email" as special fields
          _subject:         `Counselling Request – ${themeLabel} | ${name}`,
          email,
          name,
          // Session details
          mentor:           personNames,
          duration:         `${duration} hour${duration > 1 ? "s" : ""}`,
          rate_per_hour:    `LKR ${ratePerHour.toLocaleString()}/hour`,
          total_price:      `LKR ${price.toLocaleString()}`,
          theme:            themeLabel,
          topic,
          additional_notes: note.trim() || "(none)",
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json();
        setError(data?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSent(false);
    setStep(0);
    setSelectedPersons([]);
    setDuration(null);
    setTheme(null);
    setTopic("");
    setName("");
    setEmail("");
    setNote("");
    setError("");
  };

  // ── Reusable nav buttons ──────────────────────────────────────────────────
  const NavButtons = ({
    prevStep,
    nextStep,
    nextDisabled,
    nextLabel = "Continue",
    isSubmit = false,
  }: {
    prevStep?: number;
    nextStep?: number;
    nextDisabled?: boolean;
    nextLabel?: string;
    isSubmit?: boolean;
  }) => (
    <div className="mt-6 flex items-center justify-between">
      {prevStep !== undefined ? (
        <button
          type="button"
          onClick={() => setStep(prevStep)}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>
      ) : <div />}

      <button
        type="button"
        disabled={nextDisabled || submitting}
        onClick={isSubmit ? handleSubmit : () => nextStep !== undefined && setStep(nextStep)}
        className={`flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold transition ${
          !nextDisabled && !submitting
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:brightness-110"
            : "cursor-not-allowed bg-slate-800 text-slate-500"
        }`}
      >
        {submitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            {nextLabel}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>
    </div>
  );

  return (
    <section
      id="counselling"
      className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* ── Success Popup ── */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm"
          >
            <div className="w-full max-w-md rounded-2xl border border-emerald-500/30 bg-slate-900 p-8 text-center shadow-[0_0_60px_rgba(16,185,129,0.15)]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">Booking Request Sent!</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Your counselling session request has been submitted successfully. Our team will
                review your details and confirm your session within{" "}
                <span className="font-semibold text-white">24 hours</span>.
              </p>
              <div className="mt-5 space-y-1.5 rounded-xl border border-white/[0.07] bg-slate-800/60 px-4 py-3 text-left text-xs text-slate-400">
                <p>👤 <span className="text-white">{selectedPersons.map((id) => RESOURCE_PERSONS.find((p) => p.id === id)?.name).join(" & ")}</span></p>
                <p>🎯 <span className="text-white">{topic}</span></p>
                <p>⏱ <span className="text-white">{duration}h · LKR {price?.toLocaleString()}</span></p>
                <p>📧 Confirmation to <span className="text-blue-300">{email}</span></p>
              </div>
              <button
                type="button"
                onClick={resetForm}
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            1-on-1 Counselling
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Book a Session with Our Mentors
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            Personalised guidance from IEEE-published AI researchers. Choose your mentor,
            topic, and duration — we'll confirm within 24 hours.
          </p>
        </motion.div>

        {/* ── Stepper ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 flex items-center justify-center"
        >
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                    i < step
                      ? "bg-blue-500 text-white"
                      : i === step
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_16px_rgba(99,102,241,0.5)]"
                      : "border border-white/15 bg-white/5 text-slate-500"
                  }`}
                >
                  {i < step ? (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : i + 1}
                </span>
                <span className={`hidden text-[10px] font-medium sm:block ${i === step ? "text-blue-300" : i < step ? "text-slate-400" : "text-slate-600"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-1 mb-4 h-px w-8 transition-all duration-500 sm:w-14 ${i < step ? "bg-blue-500" : "bg-white/10"}`} />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Step Panels ── */}
        <div className="mt-8">
          <AnimatePresence mode="wait">

            {/* STEP 0 — Mentor */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="mb-6 text-center">
                  <p className="text-lg font-semibold text-white">Who would you like to meet?</p>
                  <p className="mt-1 text-sm text-slate-400">You can select one or both mentors</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {RESOURCE_PERSONS.map((p) => {
                    const active = selectedPersons.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => togglePerson(p.id)}
                        className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                          active
                            ? "border-blue-500/50 bg-gradient-to-br from-blue-950/60 to-indigo-950/40 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                            : "border-white/[0.08] bg-slate-900/60 hover:border-white/20"
                        }`}
                      >
                        {active && (
                          <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 shadow-lg">
                            <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        )}
                        <div className="flex items-center gap-4">
                          <div className={`h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ${active ? "ring-blue-500/60" : "ring-white/10"}`}>
                            <img src={p.image} alt={p.name} className="h-full w-full object-cover object-top" />
                          </div>
                          <div>
                            <p className="text-base font-semibold text-white">{p.name}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{p.role}</p>
                            <p className="mt-3 inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                              LKR {p.rate.toLocaleString()} / hour
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedPersons.length === 2 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-3 rounded-xl border border-indigo-500/25 bg-indigo-500/10 px-4 py-3">
                    <span className="text-lg">✨</span>
                    <p className="text-xs text-indigo-300">Both mentors selected — combined rate is <span className="font-bold text-white">LKR 3,000/hour</span></p>
                  </motion.div>
                )}
                <NavButtons nextStep={1} nextDisabled={selectedPersons.length === 0} />
              </motion.div>
            )}

            {/* STEP 1 — Duration */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="mb-6 text-center">
                  <p className="text-lg font-semibold text-white">How long do you need?</p>
                  <p className="mt-1 text-sm text-slate-400">Choose your session duration</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[1, 2, 3].map((h) => {
                    const rate   = selectedPersons.length === 2 ? 3000 : 2000;
                    const total  = rate * h;
                    const active = duration === h;
                    return (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setDuration(h)}
                        className={`relative rounded-2xl border p-6 text-center transition-all duration-300 ${
                          active
                            ? "border-blue-500/50 bg-gradient-to-br from-blue-950/60 to-indigo-950/40 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                            : "border-white/[0.08] bg-slate-900/60 hover:border-white/20"
                        }`}
                      >
                        {active && (
                          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                            <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        )}
                        <p className="text-3xl font-bold text-white">{h}</p>
                        <p className="mt-1 text-sm text-slate-400">{h === 1 ? "hour" : "hours"}</p>
                        <div className="mt-4 rounded-lg border border-white/10 bg-white/5 py-2">
                          <p className="text-xs text-slate-400">Total</p>
                          <p className="text-sm font-bold text-emerald-400">LKR {total.toLocaleString()}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <NavButtons prevStep={0} nextStep={2} nextDisabled={duration === null} />
              </motion.div>
            )}

            {/* STEP 2 — Theme */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="mb-6 text-center">
                  <p className="text-lg font-semibold text-white">What would you like to focus on?</p>
                  <p className="mt-1 text-sm text-slate-400">Pick a theme — topics will follow</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {THEMES.map((t) => {
                    const active = theme === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleThemeChange(t.id)}
                        className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                          active
                            ? "border-violet-500/50 bg-gradient-to-br from-violet-950/60 to-purple-950/40 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                            : "border-white/[0.08] bg-slate-900/60 hover:border-white/20"
                        }`}
                      >
                        {active && (
                          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500">
                            <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                        )}
                        <span className="text-3xl">{t.icon}</span>
                        <p className="mt-3 font-semibold text-white">{t.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">{t.desc}</p>
                      </button>
                    );
                  })}
                </div>
                <NavButtons prevStep={1} nextStep={3} nextDisabled={theme === null} />
              </motion.div>
            )}

            {/* STEP 3 — Topic */}
            {step === 3 && theme && (
              <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="mb-6 text-center">
                  <p className="text-lg font-semibold text-white">Select your topic</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {TOPICS[theme].length} topics under{" "}
                    <span className="text-violet-300">{THEMES.find((t) => t.id === theme)?.label}</span>
                  </p>
                </div>
                <div className="grid max-h-72 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
                  {TOPICS[theme].map((t, i) => (
                    <motion.button
                      key={t}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02 }}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                        topic === t
                          ? "border-violet-500/50 bg-violet-500/10 text-white"
                          : "border-white/[0.06] bg-slate-900/50 text-slate-400 hover:border-white/15 hover:bg-slate-800/60 hover:text-slate-200"
                      }`}
                    >
                      <span className={`mr-2 text-xs ${topic === t ? "text-violet-400" : "text-slate-600"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t}
                    </motion.button>
                  ))}
                </div>
                {topic && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-2.5">
                    <span className="text-sm">✅</span>
                    <p className="text-xs text-violet-300">
                      Selected: <span className="font-semibold text-white">{topic}</span>
                    </p>
                  </motion.div>
                )}
                <NavButtons prevStep={2} nextStep={4} nextDisabled={topic === ""} />
              </motion.div>
            )}

            {/* STEP 4 — Details */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="mb-6 text-center">
                  <p className="text-lg font-semibold text-white">Almost done!</p>
                  <p className="mt-1 text-sm text-slate-400">Enter your details and confirm</p>
                </div>

                {/* Summary */}
                <div className="mb-6 rounded-2xl border border-white/[0.08] bg-slate-900/60 p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-300">Session Summary</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-2.5">
                      <span className="text-base">👤</span>
                      <div>
                        <p className="text-[10px] text-slate-500">Mentor(s)</p>
                        <p className="text-xs font-medium text-white">
                          {selectedPersons.map((id) => RESOURCE_PERSONS.find((p) => p.id === id)?.name).join(" & ")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-2.5">
                      <span className="text-base">⏱</span>
                      <div>
                        <p className="text-[10px] text-slate-500">Duration & Price</p>
                        <p className="text-xs font-medium text-white">
                          {duration}h · <span className="text-emerald-400">LKR {price?.toLocaleString()}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-2.5 sm:col-span-2">
                      <span className="text-base">🎯</span>
                      <div>
                        <p className="text-[10px] text-slate-500">Theme & Topic</p>
                        <p className="text-xs font-medium text-white">
                          {THEMES.find((t) => t.id === theme)?.label} → {topic}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form inputs */}
                <div className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-xl border border-white/[0.08] bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
                    />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-xl border border-white/[0.08] bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Any additional notes? (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    {error}
                  </motion.div>
                )}

                <NavButtons
                  prevStep={3}
                  nextDisabled={!allValid}
                  nextLabel="Send Booking Request"
                  isSubmit
                />
                <p className="mt-4 text-center text-xs text-slate-500">
                  Your request is sent directly to our team · We confirm within 24 hours
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}