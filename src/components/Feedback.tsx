import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";
import malith from "../Img/Malitha malli.jpeg";

const testimonials = [
  {
    quote:
      "Peritus Research Bootcamp provided valuable hands-on experience in AI and Machine Learning with strong mentorship and research guidance. The practical projects, viva evaluations, and research focused learning environment helped me improve my technical and problem solving skills while gaining real-world exposure.",
    name: "Malith Weerarathne",
    role: "IT Undergraduate, Faculty of Information Technology, University of Moratuwa",
    avatar: malith,
    rating: 5,
  },
];

function Stars({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden={true}>
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
  return (
    <section id="feedback" className="relative overflow-hidden border-t border-white/[0.06] py-14 md:py-20">

      <SectionPhotoBg
  imageUrl="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2070&q=80"
  imageClassName="bg-cover bg-center opacity-90"
  overlayClassName="bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"
/>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
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
            <p className="mt-3 text-slate-300">
              Real stories from our learners — what they built, learned, and achieved.
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
              <span className="text-lg font-bold text-white">5.0</span>
              <span className="text-sm text-slate-400">/ 5</span>
            </div>
            <p className="text-xs text-slate-400">Learner satisfaction rating</p>
          </motion.div>
        </motion.div>

        {/* Single testimonial — centred, wider card */}
        <ul className="mt-12 flex justify-center">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="w-full max-w-2xl flex flex-col rounded-2xl border border-white/[0.1] bg-slate-950/65 p-8 shadow-xl backdrop-blur-md"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-200">
                "{t.quote}"
              </blockquote>
              <div className="mt-7 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-violet-500/40"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        <p className="mt-14 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. {site.tagline}.
        </p>
      </div>
    </section>
  );
}