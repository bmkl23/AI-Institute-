import { motion } from "framer-motion";

import subath from "../Img/subath.jpeg";
import rukshan from "../Img/rukshan.jpeg";

type Publication = {
  venue: string;
  date: string;
  title: string;
  authors: string;
  description: string;
  url: string | null;
};

type Member = {
  name: string;
  role: string;
  image: string;
  publications: Publication[];
};

type PubAccent = {
  badge: string;
  border: string;
};

const pubAccents: PubAccent[] = [
  {
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    border: "border-blue-500/20",
  },
  {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    border: "border-indigo-500/20",
  },
  {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    border: "border-violet-500/20",
  },
];

const team: Member[] = [
  {
    name: "Subhath Abeysekara",
    role:
      "Lead AI Engineer | AI & Blockchain Researcher | IEEE & Springer Published Author | Research Supervisor – BIT Program, University of Moratuwa | B.Sc. (Hons.) in IT, University of Moratuwa",
    image: subath,
    publications: [
      {
        venue: "GCCIT 2024",
        date: "2024",
        title: "A Hybrid Blockchain for User Rating in Social Media",
        authors: "Subhath Abeysekara",
        description:
          "Published at the 2024 Global Conference on Communications and Information Technologies (GCCIT).",
        url: null,
      },
      {
        venue: "ICTIS 2026",
        date: "2026",
        title:
          "Bug Severity and Priority Prediction using Semi-supervised Expert-guided Labelling",
        authors: "Subhath Abeysekara",
        description:
          "International Conference on Information and Communication Technology for Intelligent Systems — Thailand.",
        url: null,
      },
    ],
  },
  {
    name: "Rukshan J. Senanayaka",
    role:
      "Founder & Lead, ALevellers.lk | Visiting Lecturer at UCL Sri Lanka | MPhil Candidate, University of Moratuwa | B.Sc. (Hons.) IT (First Class Honours)",
    image: rukshan,
    publications: [
      {
        venue: "IEEE SCSE 2026",
        date: "Mar 2026",
        title:
          "How Well Do LLMs Understand Sinhala Metaphors? Insights from SinMet-5K.",
        authors: "R. J. Senanayaka and T. Thanthriwatta",
        description:
          "Introduces SinMet-5K, the first multi-annotator Sinhala metaphor dataset (5,000 lyric sentences, three-tier evaluation design). Benchmarks GPT-4 and DeepSeek-V3 zero-shot — reaching up to 90% accuracy across variants.",
        url: "https://ieeexplore.ieee.org/document/11499936",
      },
      {
        venue: "IEEE SCSE 2026",
        date: "Mar 2026",
        title:
          "What Do Students Need from Mobile Learning Platforms for High-Stakes Examination Preparation?",
        authors: "R. J. Senanayaka and G. U. Ganegoda",
        description:
          "Cross-sectional needs assessment (N=135, 17 districts) identifying five priority mobile-learning feature categories; informs alevellers.lk.",
        url: "https://ieeexplore.ieee.org/document/11499819",
      },
      {
        venue: "ICITR 2024",
        date: "Dec 2024",
        title:
          "SingRAG: A Translation-Augmented Framework for Code-Mixed Singlish Processing.",
        authors: "R. J. Senanayaka, N. Dulsara, and N. Premadasa",
        description:
          "LLaMA-2 7B framework combining a custom transliterator and bidirectional translation with RAG for low-resource Sinhala-English code-mixed processing.",
        url: "https://ieeexplore.ieee.org/document/10857714",
      },
    ],
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="border-b border-white/[0.06] bg-slate-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">
            Team
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Mentors who ship, teach, and iterate
          </h2>

          <p className="mt-4 text-slate-400">
            A hybrid faculty of research leads, staff engineers, and product
            strategists—aligned on practical craft.
          </p>
        </motion.div>

        {/* Mentor cards */}
        <ul className="mt-14 grid gap-10 sm:grid-cols-2">
          {team.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/55"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>

              {/* Bio */}
              <div className="p-5 pb-4">
                <p className="text-lg font-semibold text-white">{m.name}</p>

                <p className="mt-1 text-sm leading-relaxed text-violet-200/90">
                  {m.role}
                </p>
              </div>

              {/* Publications */}
              <div className="border-t border-white/[0.06] px-5 pb-6 pt-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-400">
                  Research Publications
                </p>

                <ul className="flex flex-col gap-3">
                  {m.publications.map((pub, j) => {
                    const accent = pubAccents[j % pubAccents.length];

                    return (
                      <li
                        key={pub.title}
                        className={`rounded-xl border ${accent.border} bg-slate-900/70 p-4`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${accent.badge}`}
                          >
                            {pub.venue}
                          </span>

                          <span className="text-[11px] text-slate-500">
                            {pub.date}
                          </span>
                        </div>

                        <p className="mt-2 text-xs font-semibold leading-snug text-white">
                          {pub.title}
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {pub.authors}
                        </p>

                        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                          {pub.description}
                        </p>

                        {pub.url !== null && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-400 transition hover:text-blue-300"
                          >
                            View on IEEEXplore

                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}