import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { site } from "../config/site";
import { SectionPhotoBg, sectionBg } from "./SectionPhotoBg";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
      <SectionPhotoBg
        imageUrl={sectionBg.contact}
        imageClassName="opacity-[0.14] bg-cover bg-[position:50%_60%] sm:opacity-[0.22]"
        overlayClassName="bg-gradient-to-b from-slate-950/96 via-slate-950/94 to-slate-950"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Contact Our Team</h2>
          <p className="mt-4 text-slate-400">
            All communications are in <strong className="font-medium text-slate-300">{site.language}</strong>.
            Use your broker referral token below if you were referred by an approved partner.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="flex flex-col gap-4 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">WhatsApp</p>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-200"
                >
                  {site.whatsapp.display}
                </a>
                <p className="mt-2 text-xs text-slate-500">Primary contact · Sri Lanka</p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Email</p>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-3 block text-sm font-medium text-white hover:text-blue-200 break-all"
                  >
                    {site.email}
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-slate-400">Provided at registration — contact via WhatsApp</p>
                )}
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-5 sm:col-span-2 lg:col-span-1">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-300">LinkedIn</p>
                {site.linkedIn ? (
                  <a
                    href={site.linkedIn}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 block text-sm font-medium text-white hover:text-sky-200 break-all"
                  >
                    View profile
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-slate-400">Link coming soon — reach us on WhatsApp</p>
                )}
              </div>
            </div>

   
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-6 py-4 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp — {site.whatsapp.display}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}