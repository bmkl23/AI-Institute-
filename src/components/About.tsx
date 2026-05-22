import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

const whyUs = [
  {
    title: "Research-Oriented Learning",
    body: "Go beyond model training and learn how to conduct real AI research, experimentation, and innovation.",
    icon: (
      <svg className="h-7 w-7 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.716 50.716 0 0 1 12 13.489a50.716 50.716 0 0 1 7.74-3.342"
        />
      </svg>
    ),
  },

  {
    title: "Hands-on Practical Experience",
    body: "Work on real-world projects using modern AI tools, frameworks, and datasets.",
    icon: (
      <svg className="h-7 w-7 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22 12l-4.75 5.25m-10.5 0L2 12l4.75-5.25m7.5-9-3 16.5"
        />
      </svg>
    ),
  },

  {
    title: "Expert Mentorship",
    body: "Receive direct monthly mentorship and guidance from experienced AI researchers and industry professionals.",
    icon: (
      <svg className="h-7 w-7 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },

  {
    title: "Publication Opportunities",
    body: "Get the opportunity to contribute to research papers and academic publications.",
    icon: (
      <svg className="h-7 w-7 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },

  {
    title: "Internship Pathway",
    body: "Top-performing students will be selected for a 6-month internship opportunity to gain industry exposure.",
    icon: (
      <svg className="h-7 w-7 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    ),
  },

  {
    title: "Personalized Learning Environment",
    body: "Limited batch sizes ensure strong interaction, personalized support, and effective supervision.",
    icon: (
      <svg className="h-7 w-7 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },

  {
    title: "Industry-Relevant Skill Development",
    body: "Learn modern technologies and workflows used in real AI and Machine Learning industries.",
    icon: (
      <svg className="h-7 w-7 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },

  {
    title: "Viva & Presentation Training",
    body: "Improve technical communication, confidence, and analytical thinking through structured evaluations.",
    icon: (
      <svg className="h-7 w-7 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
        />
      </svg>
    ),
  },

  {
    title: "Portfolio & Career Growth",
    body: "Build strong technical portfolios with projects, research work, and implementation experience.",
    icon: (
      <svg className="h-7 w-7 text-fuchsia-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
  },

  {
    title: "Professional Certification",
    body: "Earn a graded certificate that validates both your technical skills and research capabilities.",
    icon: (
      <svg className="h-7 w-7 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
];

type PubColor = "blue" | "indigo" | "violet";

type Publication = {
  venue: string;
  date: string;
  title: string;
  authors: string;
  description: string;
  url: string;
  color: PubColor;
};

const publications: Publication[] = [
  {
    venue: "IEEE SCSE 2026",
    date: "Mar 2026",
    title:
      "How Well Do LLMs Understand Sinhala Metaphors? Insights from SinMet-5K.",
    authors: "R. J. Senanayaka and T. Thanthriwatta",
    description:
      "Introduces SinMet-5K, the first multi-annotator Sinhala metaphor dataset.",
    url: "https://ieeexplore.ieee.org/document/11499936",
    color: "blue",
  },

  {
    venue: "IEEE SCSE 2026",
    date: "Mar 2026",
    title:
      "What Do Students Need from Mobile Learning Platforms for High-Stakes Examination Preparation?",
    authors: "R. J. Senanayaka and G. U. Ganegoda",
    description:
      "Cross-sectional needs assessment identifying five priority mobile-learning feature categories.",
    url: "https://ieeexplore.ieee.org/document/11499819",
    color: "indigo",
  },

  {
    venue: "ICITR 2024",
    date: "Dec 2024",
    title:
      "SingRAG: A Translation-Augmented Framework for Code-Mixed Singlish Processing.",
    authors: "R. J. Senanayaka, N. Dulsara, and N. Premadasa",
    description:
      "Framework combining transliteration and RAG for low-resource Singlish processing.",
    url: "https://ieeexplore.ieee.org/document/10857714",
    color: "violet",
  },
];

const pubStyles = {
  blue: {
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    border: "border-blue-500/20",
  },

  indigo: {
    badge: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    border: "border-indigo-500/20",
  },

  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    border: "border-violet-500/20",
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },

  whileInView: { opacity: 1, y: 0 },

  viewport: {
    once: true,
    margin: "-60px",
  },
};

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950 py-20 md:py-28"
    >
      <SectionPhotoBg
        imageUrl={sectionBg.about}
        imageClassName="opacity-[0.18] bg-cover bg-center sm:opacity-[0.28]"
        overlayClassName="bg-gradient-to-b from-slate-950/95 via-slate-900/92 to-slate-950"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            About
          </p>

          <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
            {site.name}
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            {site.aboutLead}
          </p>
        </motion.div>

        {/* Vision Mission */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          <article className="rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/55 to-slate-900/40 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
              Vision
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {site.vision}
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/45 to-slate-900/40 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Mission
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {site.mission}
            </p>
          </article>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-white">
            Why choose Peritus
          </h3>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Innovation, critical thinking, and ethical responsibility —
            supported through every stage of the bootcamp.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-slate-900/65 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-[2px]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Publications */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Research
          </p>

          <h3 className="mt-3 text-xl font-bold text-white">
            Mentor Research Publications
          </h3>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Our instructors are active IEEE-published researchers.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {publications.map((pub, i) => {
              const s = pubStyles[pub.color];

              return (
                <motion.li
                  key={pub.url}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-2xl border ${s.border} bg-slate-900/65 p-5 backdrop-blur-sm md:p-7`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${s.badge}`}
                    >
                      {pub.venue}
                    </span>

                    <span className="text-xs text-slate-500">
                      {pub.date}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold leading-snug text-white md:text-base">
                    {pub.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {pub.authors}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {pub.description}
                  </p>

                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    View on IEEEXplore

                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}