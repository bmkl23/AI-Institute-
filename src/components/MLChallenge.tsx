import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const SHEET_ID      = "1E7gzVx1O985CqAgYI5GNvdUUQua0Eou8P5haFtgAwmg";
const FORMSPREE_URL = "https://formspree.io/f/mzepalbo";

// const sheetUrl = (tab: string) =>
//   `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${tab}`;

const sheetUrl = (tab: string) =>
     `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${tab}&headers=1`;

// ─── Types ────────────────────────────────────────────────────────────────────
type Challenge = {
  title: string;
  description: string;
  deadline: string;
  prize: string;
  registration_open: string;
};

type Winner = {
  month: string;
  challenge_title: string;
  winner_name: string;
  accuracy: string;
  prize_won: string;
  mentor_comment: string;
};

// ─── Google Sheets JSON parser ────────────────────────────────────────────────
function parseSheet(raw: string): Record<string, string>[] {
  try {
    const json = JSON.parse(raw.substring(47).slice(0, -2));
    const cols: string[] = json.table.cols.map((c: { label: string }) =>
      c.label.toLowerCase().replace(/ /g, "_")
    );
    return json.table.rows
      .filter((r: { c: ({ v: string | null } | null)[] }) =>
        r.c.some((cell) => cell?.v !== null && cell?.v !== "")
      )
      .map((r: { c: ({ v: string | null } | null)[] }) => {
        const obj: Record<string, string> = {};
        r.c.forEach((cell, i) => {
          obj[cols[i]] = cell?.v?.toString() ?? "";
        });
        return obj;
      });
  } catch {
    return [];
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export function MLChallenge() {
  const [challenge, setChallenge]   = useState<Challenge | null>(null);
  const [winners, setWinners]       = useState<Winner[]>([]);
  const [loading, setLoading]       = useState(true);
  const [showWinners, setShowWinners] = useState(false);
  const [showForm, setShowForm]     = useState(false);

  // form fields
  const [regNumber, setRegNumber] = useState("");
  const [regName, setRegName]     = useState("");
  const [regEmail, setRegEmail]   = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent]           = useState(false);
  const [error, setError]         = useState("");

  // ── Load sheet data ──────────────────────────────────────────────────────
  useEffect(() => {
    async function load() {
      try {
        const [cRes, wRes] = await Promise.all([
          fetch(sheetUrl("challenge")),
          fetch(sheetUrl("winners")),
        ]);
        const cRows = parseSheet(await cRes.text());
        const wRows = parseSheet(await wRes.text());

        // challenge tab: rows are key-value pairs
        const obj: Record<string, string> = {};
        cRows.forEach((r) => {
          if (r.column && r.value) obj[r.column] = r.value;
        });
        setChallenge(obj as unknown as Challenge);
        setWinners(wRows as unknown as Winner[]);
      } catch (e) {
        console.error("Sheet load error:", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const registrationOpen = challenge?.registration_open?.toUpperCase() === "YES";

  // ── Submit registration ──────────────────────────────────────────────────
  const handleRegister = async () => {
    if (!regNumber.trim() || !regName.trim() || !regEmail.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject:            `ML Challenge Registration – ${regNumber} | ${regName}`,
          email:               regEmail,
          name:                regName,
          registration_number: regNumber,
          challenge:           challenge?.title ?? "",
          deadline:            challenge?.deadline ?? "",
          message: [
            `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            `ML CHALLENGE REGISTRATION`,
            `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            `Name                : ${regName}`,
            `Email               : ${regEmail}`,
            `Registration Number : ${regNumber}`,
            `Challenge           : ${challenge?.title}`,
            `Deadline            : ${challenge?.deadline}`,
          ].join("\n"),
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setSent(false);
    setRegNumber("");
    setRegName("");
    setRegEmail("");
    setError("");
  };

  // ── Loading state ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <section id="challenge" className="flex items-center justify-center bg-slate-950 py-28">
        <div className="flex items-center gap-3 text-slate-400">
          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Loading challenge...
        </div>
      </section>
    );
  }

  return (
    <section
      id="challenge"
      className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950 py-20 md:py-28"
    >
      {/* backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(234,179,8,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* ── Registration Modal ── */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-slate-900 p-6 shadow-2xl"
            >
              {!sent ? (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Challenge Registration</h3>
                      <p className="mt-0.5 text-xs text-slate-400">{challenge?.title}</p>
                    </div>
                    <button type="button" onClick={resetForm} className="text-slate-500 hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-2 rounded-xl border border-yellow-500/20 bg-yellow-500/8 px-4 py-2.5 text-xs text-yellow-300">
                    💡 Enter the registration number given to you by the institute
                  </div>

                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Registration Number (e.g. PER-001)"
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.08] bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
                    />
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.08] bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
                    />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.08] bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
                    />
                  </div>

                  {error && (
                    <p className="mt-3 flex items-center gap-2 text-xs text-red-400">
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>
                      {error}
                    </p>
                  )}

                  <button
                    type="button"
                    disabled={submitting || !regNumber.trim() || !regName.trim() || !regEmail.trim()}
                    onClick={handleRegister}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
                      !submitting && regNumber.trim() && regName.trim() && regEmail.trim()
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-950 hover:brightness-110"
                        : "cursor-not-allowed bg-slate-800 text-slate-500"
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting…
                      </>
                    ) : "Submit Registration →"}
                  </button>
                </>
              ) : (
                <div className="py-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                    <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Registration Submitted!</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Your registration has been received. The Peritus team will confirm via email.
                  </p>
                  <div className="mt-4 rounded-xl border border-white/[0.07] bg-slate-800/60 px-4 py-3 text-left text-xs space-y-1 text-slate-400">
                    <p>🎫 <span className="text-white">{regNumber}</span></p>
                    <p>👤 <span className="text-white">{regName}</span></p>
                    <p>📧 <span className="text-blue-300">{regEmail}</span></p>
                    <p>🏆 <span className="text-yellow-300">{challenge?.title}</span></p>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-5 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-sm font-semibold text-white hover:brightness-110"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/25 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />
            Monthly Challenge
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">ML Challenge</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Compete monthly, sharpen your skills, and win real prizes. Open to all Peritus students.
          </p>
        </motion.div>

        {/* ── Challenge Card ── */}
        {challenge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/30 to-slate-900/60 p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">Current Challenge</p>
                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{challenge.description}</p>
              </div>
              {/* Prize */}
              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-6 py-5 text-center">
                <p className="text-xs font-semibold text-yellow-400">🏆 Winner Prize</p>
                <p className="mt-1 text-3xl font-bold text-white">
                  LKR {Number(challenge.prize).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span className="text-slate-300">
                  Deadline: <span className="font-semibold text-white">{challenge.deadline}</span>
                </span>
              </div>

              <div className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold ${
                registrationOpen
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                  : "border-red-500/30 bg-red-500/10 text-red-300"
              }`}>
                <span className={`h-2 w-2 rounded-full ${registrationOpen ? "animate-pulse bg-emerald-400" : "bg-red-400"}`} />
                Registration {registrationOpen ? "Open" : "Closed"}
              </div>
            </div>

            {/* Register button — only shows when open */}
            {registrationOpen && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                type="button"
                onClick={() => { setShowForm(true); setSent(false); setError(""); }}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(234,179,8,0.25)] transition hover:brightness-110"
              >
                Register Now
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </motion.button>
            )}
          </motion.div>
        )}

        {/* ── Past Winners Toggle ── */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowWinners((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg>
            {showWinners ? "Hide" : "View"} Past Challengers &amp; Winners
          </button>
        </div>

        {/* ── Winners Table ── */}
        <AnimatePresence>
          {showWinners && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 overflow-hidden"
            >
              {winners.length === 0 ? (
                <div className="rounded-2xl border border-white/[0.06] bg-slate-900/40 py-12 text-center">
                  <p className="text-4xl">🏆</p>
                  <p className="mt-3 text-sm text-slate-400">No past winners yet — be the first!</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.08] bg-slate-900/80">
                        {["Month", "Challenge", "Winner", "Accuracy", "Prize", "Mentor Comment"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {winners.map((w, i) => (
                        <tr key={i} className="border-b border-white/[0.05] bg-slate-900/40 transition hover:bg-slate-800/40">
                          <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{w.month}</td>
                          <td className="px-4 py-3 font-medium text-white">{w.challenge_title}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="font-semibold text-yellow-300">🏆 {w.winner_name}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="rounded-lg bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-400">
                              {w.accuracy}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-emerald-400 whitespace-nowrap">{w.prize_won}</td>
                          <td className="px-4 py-3 max-w-xs text-xs text-slate-400">{w.mentor_comment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}