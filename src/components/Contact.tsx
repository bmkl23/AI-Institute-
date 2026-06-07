import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "../config/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-28"
    >
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
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#25D366" />
                  <path
                    d="M23.5 8.5A10.47 10.47 0 0 0 16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 1.84.48 3.63 1.39 5.21L5.5 26.5l5.43-1.42A10.46 10.46 0 0 0 16 26.5c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.09-5.43-3-7.5Zm-7.5 16.15a8.7 8.7 0 0 1-4.44-1.21l-.32-.19-3.22.84.86-3.13-.21-.33A8.7 8.7 0 0 1 7.3 16c0-4.8 3.9-8.7 8.7-8.7 2.32 0 4.5.9 6.14 2.55A8.64 8.64 0 0 1 24.7 16c0 4.8-3.9 8.65-8.7 8.65Zm4.76-6.5c-.26-.13-1.54-.76-1.78-.84-.24-.09-.41-.13-.58.13-.17.26-.65.84-.8 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.08-1.28a7.8 7.8 0 0 1-1.44-1.79c-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14 0 1.27.92 2.49 1.05 2.66.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.54-.63 1.76-1.24.22-.6.22-1.12.15-1.24-.06-.11-.24-.17-.5-.3Z"
                    fill="white"
                  />
                </svg>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  WhatsApp
                </p>
              </div>
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
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#EA4335" />
                  <path d="M7 11.5v10A1.5 1.5 0 0 0 8.5 23h15A1.5 1.5 0 0 0 25 21.5v-10l-9 6-9-6Z" fill="white" />
                  <path d="M25 10H7l9 6 9-6Z" fill="#FFDDD9" />
                </svg>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  Email
                </p>
              </div>
              {site.email ? (
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm font-medium text-white break-all hover:text-blue-200"
                  >
                    {site.email}
                  </a>
                  <button
                    onClick={handleCopy}
                    title="Copy email"
                    className="ml-1 shrink-0 rounded-md p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    {copied ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    )}
                  </button>
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-400">Contact via WhatsApp</p>
              )}
              {copied && (
                <p className="mt-1 text-xs text-emerald-400">Copied!</p>
              )}
            </div>

            {/* LinkedIn */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 shrink-0">
                  <circle cx="16" cy="16" r="16" fill="#0A66C2" />
                  <path
                    d="M10.5 13.5h-3v9h3v-9ZM9 12a1.75 1.75 0 1 0 0-3.5A1.75 1.75 0 0 0 9 12ZM22.5 22.5h-3v-4.75c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5v4.83h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73Z"
                    fill="white"
                  />
                </svg>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  LinkedIn
                </p>
              </div>
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
                <p className="mt-3 text-sm text-slate-400">Coming soon</p>
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