import { motion } from "framer-motion";
import { site } from "../config/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-28"
    >
      {/* Background fallback (prevents build failure) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Contact Our Team
          </h2>

          <p className="mt-4 text-slate-400">
            All communications are in{" "}
            <strong className="font-medium text-slate-300">
              {site.language}
            </strong>
            .
          </p>
        </motion.div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* WhatsApp */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                WhatsApp
              </p>

              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex text-sm font-medium text-white hover:text-emerald-200"
              >
                {site.whatsapp.display}
              </a>

              <p className="mt-2 text-xs text-slate-500">
                Primary contact · Sri Lanka
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                Email
              </p>

              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block text-sm font-medium text-white break-all hover:text-blue-200"
                >
                  {site.email}
                </a>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  Contact via WhatsApp
                </p>
              )}
            </div>

            {/* LinkedIn */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                LinkedIn
              </p>

              {site.linkedIn ? (
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 block text-sm font-medium text-white break-all hover:text-sky-200"
                >
                  View profile
                </a>
              ) : (
                <p className="mt-3 text-sm text-slate-400">
                  Coming soon
                </p>
              )}
            </div>
          </motion.div>

          {/* CTA */}
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-6 py-4 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
          >
            Chat on WhatsApp — {site.whatsapp.display}
          </a>
        </div>
      </div>
    </section>
  );
}