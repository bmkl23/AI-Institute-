import { motion } from "framer-motion";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";
import malith from "../Img/Malitha malli.jpeg";
import isumi from "../Img/isumi.jpeg";
import rashmi from "../Img/rashmi.jpeg";
import thisara from "../Img/thisara.jpeg";
import vinuk from "../Img/vinuk.jpeg";
import shenuka from "../Img/Shenuka.jpeg"

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
  initials: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Working under the supervision of Subhath Abeysekara provided valuable hands-on experience in AI and Machine Learning with strong mentorship and research guidance. The practical research work, continuous evaluations, and project-focused learning environment helped me improve my technical and problem-solving skills while gaining real-world exposure. Regular feedback sessions and discussions throughout the project greatly supported the successful completion of the research and preparation for evaluations.",
    name: "Malith Weerarathne",
    role: "IT Undergraduate, Faculty of Information Technology, University of Moratuwa",
    avatar: malith,
    initials: "MW",
    rating: 5,
  },
  {
    quote:
      "I'm happy to provide feedback regarding the mentorship experience under Mr. Rukshan J Senanayake. His mentorship throughout the project has been excellent and highly supportive. He consistently schedules progress meetings, follows up regularly, and continuously monitors our work to ensure we stay on the right track. This level of supervision helped us maintain steady progress and remain focused throughout the project journey. In addition, he is always approachable and willing to help whenever we have questions or require guidance. The progress discussions and mentorship sessions were extremely valuable for both our technical learning and overall project development experience. I truly appreciate his dedication, guidance, and continuous support throughout the mentorship process.",
    name: "Isumi Aranika Abeywardana",
    role: "IT Undergraduate, Faculty of Information Technology, University of Moratuwa",
    avatar: isumi,
    initials: "IA",
    rating: 5,
  },
  {
    quote:
      "I'm happy to provide feedback regarding the mentorship experience under Mr. Rukshan J Senanayake. Throughout my individual project journey, his mentorship has been extremely valuable, supportive, and motivating. The weekly meetings, regular progress tracking, and constructive feedback helped me stay focused and continuously improve my work throughout the project. One thing I truly appreciated was his ability to carefully identify mistakes and clearly explain the correct approaches, best practices, and professional methodologies required for successful project development. His guidance not only helped me solve technical problems, but also introduced me to many new concepts and industry-level ways of thinking. Every meeting became a valuable learning opportunity, and I genuinely feel that I gained significant knowledge, confidence, and professional insight through his mentorship. I am truly grateful for his continuous support, guidance, encouragement, and dedication throughout this journey.",
    name: "S.M. Rashmi Dananjana Senavirathna",
    role: "IT Undergraduate, Faculty of Information Technology, University of Moratuwa",
    avatar: rashmi,
    initials: "RS",
    rating: 5,
  },
  {
    quote:
      "I believe I made the right choice in selecting Mr. Rukshan J Senanayake as the mentor for my third-year individual project at the university. He is a humble and highly supportive mentor who is very easy to work with. Even within a few months of working under his supervision, I was able to learn a great deal both technically and professionally. One thing I truly appreciate is the way he explains concepts — he never limits his guidance only to the project domain; instead, he takes the time to explain all related concepts clearly and in depth. His mentorship helped me not only improve my technical understanding, but also develop a professional approach toward problem-solving and project execution. Overall, he is one of the best mentors I have worked with, and I am genuinely grateful for his continuous support, guidance, and encouragement throughout my learning journey.",
    name: "Thisara Jayasooriya",
    role: "IT Undergraduate, Faculty of Information Technology, University of Moratuwa",
    avatar: thisara,
    initials: "TJ",
    rating: 5,
  },
  {
    quote:
      "I had the opportunity to work under the supervision of Mr. Subhath Abeysekara for my research project focused on PHP vulnerability detection and explainable solutions using RAG and Machine Learning classification techniques. His guidance and supervision were extremely valuable in helping me improve both the technical quality and research direction of the work. Regular meetings helped identify weaknesses and continuously refine the implementation and research approach. One of the most valuable aspects was the way he explained complex concepts and guided me toward practical and research-oriented thinking. His support also helped me prepare confidently for evaluations and presentations, contributing greatly to achieving a strong final outcome and a better academic grade. Overall, the supervision experience was highly professional, supportive, and academically enriching.",
    name: "Vinuk Senadheera",
    role: "Cyber Security Engineer",
    avatar: vinuk,
    initials: "VS",
    rating: 5,
  },
  {
    quote:
      "Working under the supervision of Subhath Abeysekara was a highly valuable and supportive experience throughout my project journey. The guidance provided during the development of the Airport Queue Management System helped me successfully complete the project and confidently face the evaluations. Regular meetings, continuous progress tracking, and detailed feedback sessions helped me improve both the technical and research aspects of the system — covering Machine Learning classification, MongoDB, React.js, and web application development. Mistakes and improvements were clearly identified, allowing me to continuously refine the system and achieve better results. Through this mentorship, I gained valuable real-world experience, technical knowledge, and confidence in handling research and software development projects.",
    name: "Shenuka Fernando",
    role: "Postgraduate Researcher & MSc Candidate in Computer Science, UK",
    avatar: shenuka,
    initials: "SF",
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

function Avatar({ src, initials, name }: { src: string | null; initials: string; name: string }) {
  if (src !== null) {
    return (
      <img
        src={src}
        alt={name}
        className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-violet-500/40"
      />
    );
  }
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/60 to-fuchsia-600/60 ring-2 ring-violet-500/40">
      <span className="text-sm font-bold text-white">{initials}</span>
    </div>
  );
}

export function Feedback() {
  return (
    <section
      id="feedback"
      className="relative overflow-hidden border-t border-white/[0.06] py-14 md:py-20"
    >
      <SectionPhotoBg
        imageUrl={sectionBg.feedback}
        imageClassName="bg-[position:48%_35%] opacity-[0.58] sm:opacity-[0.62]"
        overlayClassName="bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-2 md:px-4">
        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10"></div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/90">
              Feedback
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Voices from our cohorts
            </h2>
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

        {/* Testimonial grid */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex flex-col rounded-2xl border border-white/[0.1] bg-slate-950/65 p-6 shadow-xl backdrop-blur-md"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <Avatar src={t.avatar} initials={t.initials} name={t.name} />
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