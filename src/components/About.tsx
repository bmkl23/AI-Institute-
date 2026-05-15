import { motion } from "framer-motion";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

const whyUs = [
  {
    title: "Industry Expert Trainers",
    body: "Learn from practitioners shipping models and data products at frontier labs and scale-ups.",
    icon: (
      <svg className="h-7 w-7 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.716 50.716 0 0 1 12 13.489a50.716 50.716 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Hands-on Projects",
    body: "Kaggle-grade pipelines, end-to-end apps, and team sprints mirrored on real stakeholder briefs.",
    icon: (
      <svg className="h-7 w-7 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22 12l-4.75 5.25m-10.5 0L2 12l4.75-5.25" />
      </svg>
    ),
  },
  {
    title: "Job Placement Support",
    body: "Resume reviews, mock interviews, and referral introductions with our hiring partner network.",
    icon: (
      <svg className="h-7 w-7 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Learning",
    body: "Evening cohorts, async modules, office hours recordings, and global-friendly timezones.",
    icon: (
      <svg className="h-7 w-7 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">About</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-white md:text-4xl">
            A flagship institute built for builders in AI &amp; analytics
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Apex AI Institute empowers professionals to design, evaluate, and deploy machine learning responsibly.
            From statistical foundations through modern deep architectures, cohorts rehearse rigor alongside velocity—
            aligning research-grade thinking with tooling your teams rely on today.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/55 to-slate-900/40 p-6 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">Vision</p>
            <p className="mt-4 text-lg font-semibold text-white">Elevate trustworthy AI literacy worldwide</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              We envision classrooms where reproducibility is default, experimentation is fearless, and every graduate
              can communicate trade-offs from data contract to SLA.
            </p>
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-950/45 to-slate-900/40 p-6 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-violet-300">Mission</p>
            <p className="mt-4 text-lg font-semibold text-white">Ship outcome-driven AI education</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Our mission is to pair structured curriculum with coaching that reflects how high-performing ML orgs ship:
              notebooks to production, observability baked in, and narratives that persuade stakeholders.
            </p>
          </motion.article>
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.08 }} className="mt-16">
          <h3 className="text-xl font-bold text-white">Why choose us</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Every touchpoint reinforces practice: code reviews, design critiques, and portfolio storytelling.
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
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  {item.icon}
                </div>
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
