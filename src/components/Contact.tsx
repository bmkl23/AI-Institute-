import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Plan your next cohort with us</h2>
          <p className="mt-4 text-slate-400">
            Share your goals—our admissions desk replies within two business days with pathway recommendations.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            onSubmit={onSubmit}
            className="lg:col-span-2 space-y-4 rounded-2xl border border-white/[0.08] bg-slate-900/50 p-6 md:p-8"
          >
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Alex Rivera"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none ring-violet-500/0 transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/35"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/35"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your background and preferred start date..."
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/35"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.35)] transition hover:brightness-110"
            >
              {status === "sent" ? "Message received!" : "Send message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="flex flex-col gap-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-300">Address</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  450 Townsend Street
                  <br />
                  San Francisco, CA 94107
                  <br />
                  United States
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-300">Phone</p>
                <a href="tel:+14155550123" className="mt-3 block text-sm font-medium text-white hover:text-violet-200">
                  +1 (415) 555-0123
                </a>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-300">Email</p>
                <a
                  href="mailto:admissions@apexai.institute"
                  className="mt-3 block text-sm font-medium text-white hover:text-violet-200 break-all"
                >
                  admissions@apexai.institute
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/40 shadow-2xl">
              <iframe
                title="Apex AI Institute location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019672467374!2d-122.39628968468144!3d37.77655997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807eded7d697%3A0xdee61d7c484c6971!2s450%20Townsend%20St%2C%20San%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="h-[280px] w-full border-0 md:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Apex AI Institute. Crafted for learners pursuing responsible AI.
        </p>
      </div>
    </section>
  );
}
