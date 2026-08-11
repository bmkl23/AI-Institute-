import { motion } from "framer-motion";
import { SectionPhotoBg } from "./SectionPhotoBg";

import subath  from "../Img/subath.jpeg";
import rukshan from "../Img/rukshan.jpeg";
import hashini from "../Img/hashini.jpeg";
import lalana  from "../Img/Lalana.jpeg";
import udara   from "../Img/Udara.jpeg";

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
  badge: string;
  role: string;
  image: string;
  publications?: Publication[];
};

const pubAccents = [
  { badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",      border: "border-blue-500/20"   },
  { badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300", border: "border-indigo-500/20" },
  { badge: "border-violet-500/30 bg-violet-500/10 text-violet-300", border: "border-violet-500/20" },
];

const mentors: Member[] = [
  {
    name:  "Subhath Abeysekara",
    badge: "Lead Mentor",
    role:  "Software & AI Solutions Architect | Tech Lead | AI & Blockchain Researcher | IEEE & Springer Published Author | Research Supervisor – BIT Program, University of Moratuwa | B.Sc. (Hons.) in IT, University of Moratuwa",
    image: subath,
    publications: [
      {
        venue:       "GCCIT 2024",
        date:        "2024",
        title:       "A Hybrid Blockchain for User Rating in Social Media",
        authors:     "Subhath Abeysekara",
        description: "Published at GCCIT 2024.",
        url:         null,
      },
      {
        venue:       "ICTIS 2026",
        date:        "2026",
        title:       "Bug Severity and Priority Prediction using Semi-supervised Expert-guided Labelling",
        authors:     "Subhath Abeysekara",
        description: "International Conference on Information and Communication Technology for Intelligent Systems — Thailand.",
        url:         null,
      },
    ],
  },
  {
    name:  "Rukshan J. Senanayaka",
    badge: "Lead Mentor",
    role:  "Founder & Lead, ALevellers.lk | Visiting Lecturer at UCL Sri Lanka | MPhil Candidate, University of Moratuwa | B.Sc. (Hons.) IT (First Class Honours)",
    image: rukshan,
    publications: [
      {
        venue:       "IEEE SCSE 2026",
        date:        "Mar 2026",
        title:       "How Well Do LLMs Understand Sinhala Metaphors? Insights from SinMet-5K.",
        authors:     "R. J. Senanayaka and T. Thanthriwatta",
        description: "Sinhala metaphor dataset benchmarking GPT-4 and DeepSeek-V3.",
        url:         "https://ieeexplore.ieee.org/document/11499936",
      },
      {
        venue:       "IEEE SCSE 2026",
        date:        "Mar 2026",
        title:       "What Do Students Need from Mobile Learning Platforms?",
        authors:     "R. J. Senanayaka and G. U. Ganegoda",
        description: "Mobile learning feature study across Sri Lanka.",
        url:         "https://ieeexplore.ieee.org/document/11499819",
      },
      {
        venue:       "ICITR 2024",
        date:        "Dec 2024",
        title:       "SingRAG: A Translation-Augmented Framework for Code-Mixed Singlish Processing.",
        authors:     "R. J. Senanayaka et al.",
        description: "RAG-based Sinhala-English code-mixed NLP system.",
        url:         "https://ieeexplore.ieee.org/document/10857714",
      },
    ],
  },
];

const staff: Member[] = [
  {
    name:  "Lalana Gurusinghe",
    badge: "Lab Instructor",
    role:  "Machine Learning Enthusiast · Intern Software Engineer · Third Year Undergraduate, Faculty of Information Technology, University of Moratuwa",
    image: lalana,
  },
  {
    name:  "Udara Bandara",
    badge: "Trainee Lecturer",
    role:  "Data Engineer | AI Researcher | Final-Year Undergraduate | B.Sc. (Hons.) in Artificial Intelligence, University of Moratuwa",
    image: udara,
  },
  {
    name:  "Hasini Sachintha",
    badge: "Coordinator",
    role:  "Final Year Undergraduate, Faculty of Information Technology, University of Moratuwa",
    image: hashini,
  },
];

// solid, fully opaque badge styles — visible on any background
const badgeStyle: Record<string, string> = {
  "Lead Mentor":      "bg-fuchsia-600 text-white border-fuchsia-500",
  "Lab Instructor":   "bg-sky-600 text-white border-sky-500",
  "Trainee Lecturer": "bg-emerald-600 text-white border-emerald-500",
  "Coordinator":      "bg-rose-600 text-white border-rose-500",
};

export function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-b border-white/[0.06] py-16 md:py-24"
    >
      <SectionPhotoBg
        imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=2070&q=80"
        overlayClassName="bg-slate-950/30"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">Team</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Mentors who ship, teach, and iterate
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A hybrid faculty of research leads, engineers, and strategists.
          </p>
        </motion.div>

        {/* ── Lead Mentors ── */}
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:items-start">
          {mentors.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden md:h-96">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover object-[center_15%] transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
                <span className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg ${badgeStyle[m.badge]}`}>
                  {m.badge}
                </span>
              </div>

              {/* Name & role */}
              <div className="px-6 py-5">
                <p className="text-xl font-bold text-white">{m.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-violet-200/80">{m.role}</p>
              </div>

              {/* Publications */}
              {m.publications && m.publications.length > 0 && (
                <div className="border-t border-white/[0.06] px-6 pb-6 pt-4">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-fuchsia-400">
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
                            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}>
                              {pub.venue}
                            </span>
                            <span className="text-xs text-slate-500">{pub.date}</span>
                          </div>
                          <p className="mt-2 text-sm font-semibold leading-snug text-white">{pub.title}</p>
                          <p className="mt-1 text-xs text-slate-500">{pub.authors}</p>
                          <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{pub.description}</p>
                          {pub.url && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
                            >
                              View Publication
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-12"
        >
          {/* top line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* label */}
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-slate-900 px-6 py-2.5 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
                Lab &amp; Support Staff
              </p>
              <span className="h-2 w-2 rounded-full bg-slate-400" />
            </div>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* bottom line */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>

        {/* ── Staff Cards ── */}
        <ul className="grid gap-6 sm:grid-cols-3">
          {staff.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden md:h-80">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover object-[center_20%] transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                <span className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg ${badgeStyle[m.badge]}`}>
                  {m.badge}
                </span>
              </div>

              {/* Info — full details visible */}
              <div className="px-5 py-5">
                <p className="text-lg font-bold text-white">{m.name}</p>
                <div className="mt-3 border-t border-white/[0.06] pt-3">
                  <p className="text-sm leading-relaxed text-slate-300">{m.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
}