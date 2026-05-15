import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

const testimonials = [
  {
    quote:
      "The capstone mirrored our company’s stack. I went from notebooks to a monitored deployment in eight weeks—mentors actually read my design doc.",
    name: "Samira Okonkwo",
    role: "ML Engineer · FinTech",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
  },
  {
    quote:
      "Placement support was blunt in the best way: mock panels, live coding, and referrals that matched my seniority instead of spamming junior roles.",
    name: "Leo Martins",
    role: "Senior Data Scientist · Health",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
  },
  {
    quote:
      "Flexible evenings + async labs meant I could keep my job. Syllabus depth on LLMs and governance finally closed gaps my self-study skipped.",
    name: "Hannah Cho",
    role: "Product Manager → AI Ops",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
  },
];

function Stars({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden>
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "opacity-100" : "opacity-25"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ))}
    </span>
  );
}

export function Feedback() {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <section
      id="feedback"
      className="relative overflow-hidden border-b border-white/[0.06] py-20 md:py-28"
    >
      <SectionPhotoBg
        imageUrl={sectionBg.feedback}
        imageClassName="bg-[position:48%_35%] opacity-[0.58] sm:opacity-[0.62]"
        overlayClassName="bg-gradient-to-b from-slate-950/88 via-slate-950/72 to-slate-950/93"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90">Feedback</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Voices from our cohorts</h2>
            <p className="mt-4 text-slate-300">
              Like many training portals, we surface public testimonials up front and invite quick ratings so visitors
              see social proof before they apply—pair this block with your real reviews or Trustpilot embed later.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex shrink-0 flex-col items-start gap-1 rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 backdrop-blur-md md:items-end"
          >
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="text-lg font-bold text-white">4.9</span>
              <span className="text-sm text-slate-400">/ 5</span>
            </div>
            <p className="text-xs text-slate-400">Aggregated learner satisfaction · last 12 cohorts</p>
          </motion.div>
        </motion.div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex h-full flex-col rounded-2xl border border-white/[0.1] bg-slate-950/65 p-6 shadow-xl backdrop-blur-md"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-violet-500/30"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/[0.1] bg-slate-950/70 p-6 backdrop-blur-md md:p-8"
        >
          <p className="text-center text-sm font-semibold text-white">Share quick feedback</p>
          <p className="mt-2 text-center text-xs text-slate-400">
            Static demo — connect to your CRM or Forms endpoint when you&apos;re ready.
          </p>
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="fb-name" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Name <span className="font-normal text-slate-500">(optional)</span>
              </label>
              <input
                id="fb-name"
                name="name"
                autoComplete="name"
                placeholder="Jamie Patel"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/30"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Overall rating</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                      rating === n
                        ? "border-violet-500/60 bg-violet-600/25 text-white"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    {n}★
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="fb-comment" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Comment
              </label>
              <textarea
                id="fb-comment"
                name="comment"
                rows={4}
                required
                placeholder="What stood out in your cohort or browsing experience?"
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-amber-500/90 to-orange-600 px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(251,191,36,0.25)] transition hover:brightness-110"
            >
              {submitted ? "Thanks — we’ve logged your note (demo)" : "Submit feedback"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
