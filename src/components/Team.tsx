import { motion } from "framer-motion";

import subath from "../Img/subath.jpeg";
import rukshan from "../Img/rukshan.jpeg";
import { SectionPhotoBg } from "./SectionPhotoBg";

type Publication = {
  venue: string;
  date: string;
  title: string;
  authors: string;
  description: string;
  url?: string | null;
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
          "Published at GCCIT 2024.",
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
          "Sinhala metaphor dataset benchmarking GPT-4 and DeepSeek-V3.",
        url: "https://ieeexplore.ieee.org/document/11499936",
      },
      {
        venue: "IEEE SCSE 2026",
        date: "Mar 2026",
        title:
          "What Do Students Need from Mobile Learning Platforms?",
        authors: "R. J. Senanayaka and G. U. Ganegoda",
        description:
          "Mobile learning feature study across Sri Lanka.",
        url: "https://ieeexplore.ieee.org/document/11499819",
      },
      {
        venue: "ICITR 2024",
        date: "Dec 2024",
        title:
          "SingRAG: A Translation-Augmented Framework for Code-Mixed Singlish Processing.",
        authors: "R. J. Senanayaka et al.",
        description:
          "RAG-based Sinhala-English code-mixed NLP system.",
        url: "https://ieeexplore.ieee.org/document/10857714",
      },
    ],
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-b border-white/[0.06] py-20 md:py-28"
    >
      {/* Background */}
      <SectionPhotoBg
        imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=2070&q=80"
        overlayClassName="bg-slate-950/30"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
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
            A hybrid faculty of research leads, engineers, and strategists.
          </p>
        </motion.div>

        {/* Cards */}
        <ul className="mt-14 grid gap-10 sm:grid-cols-2">
          {team.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>

              <div className="p-5 pb-4">
                <p className="text-lg font-semibold text-white">{m.name}</p>
                <p className="mt-1 text-sm text-violet-200/90">{m.role}</p>
              </div>

              <div className="border-t border-white/[0.06] px-5 pb-6 pt-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-400">
                  Research Publications
                </p>

                <ul className="flex flex-col gap-3">
                  {m.publications.map((pub, j) => {
                    const accent = pubAccents[j % pubAccents.length];

                    return (
                      <li
                        key={`${pub.title}-${j}`}
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

                        <p className="mt-2 text-xs font-semibold text-white">
                          {pub.title}
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {pub.authors}
                        </p>

                        <p className="mt-2 text-[11px] text-slate-400">
                          {pub.description}
                        </p>

                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex text-[11px] font-semibold text-blue-400 hover:text-blue-300"
                          >
                            View Publication
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