import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

const whyUs = [
  {
    title: "Research-Focused Learning",
    body: "Bridge academic theory and industry practice with mentorship, publications, and rigorous research habits.",
    icon: (
      <svg className="h-7 w-7 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.716 50.716 0 0 1 12 13.489a50.716 50.716 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Hands-on Projects & Viva",
    body: "Apply skills through practical implementation, viva evaluations, and portfolio-ready deliverables.",
    icon: (
      <svg className="h-7 w-7 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22 12l-4.75 5.25m-10.5 0L2 12l4.75-5.25" />
      </svg>
    ),
  },
  {
    title: "Industry-Oriented Guidance",
    body: "Learn with mentors who align your work with real AI-driven industry expectations and ethics.",
    icon: (
      <svg className="h-7 w-7 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Built for Sri Lankan Learners",
    body: "Designed for After A/L students, undergraduates, and fresh graduates entering AI/ML careers.",
    icon: (
      <svg className="h-7 w-7 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950 py-20 md:py-28">
      <SectionPhotoBg
        imageUrl={sectionBg.about}
        imageClassName="opacity-[0.18] bg-cover bg-center sm:opacity-[0.28]"
        overlayClassName="bg-gradient-to-b from-slate-950/95 via-slate-900/92 to-slate-950"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">About</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">{site.name}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">{site.aboutLead}</p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }} className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/55 to-slate-900/40 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Vision</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{site.vision}</p>
          </article>

          <article className="rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/45 to-slate-900/40 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">Mission</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{site.mission}</p>
          </article>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.08 }} className="mt-16">
          <h3 className="text-xl font-bold text-white">Why choose Peritus</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Innovation, critical thinking, and ethical responsibility—supported through every stage of the bootcamp.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.08] bg-slate-900/65 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-[2px]"
              >
                <motion.div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  {item.icon}
                </motion.div>
                <p className="mt-4 text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
