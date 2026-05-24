import { motion } from "framer-motion";

// ✅ Import images properly (THIS FIXES VERCEL BUILD ISSUE)
import subath from "../Img/subath.jpeg";
import rukshan from "../Img/rukshan.jpeg";

type Member = {
  name: string;
  role: string;
  image: string;
};

const team: Member[] = [
  {
    name: "Subhath Abeysekara",
    role:
      "Lead AI Engineer | AI & Blockchain Researcher | IEEE & Springer Published Author | Research Supervisor – BIT Program, University of Moratuwa | B.Sc. (Hons.) in IT, University of Moratuwa",
    image: subath,
  },
  {
    name: "Rukshan J. Senanayaka",
    role:
      "Founder & Lead, ALevellers.lk | Visiting Lecturer at UCL Sri Lanka | MPhil Candidate, University of Moratuwa | B.Sc. (Hons.) IT (First Class Honours)",
    image: rukshan,
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="border-b border-white/[0.06] bg-slate-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
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

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/55"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-lg font-semibold text-white">{m.name}</p>
                <p className="mt-1 text-sm text-violet-200/90">{m.role}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}