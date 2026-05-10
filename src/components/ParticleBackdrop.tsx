import { motion } from "framer-motion";
import { useMemo } from "react";

export function ParticleBackdrop() {
  const particles = useMemo(() => {
    const rng = (s: number) => {
      const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      x: rng(i + 1) * 100,
      y: rng(i + 11) * 100,
      scale: 0.45 + rng(i + 3) * 0.85,
      duration: 12 + rng(i + 7) * 14,
      yAmp: 25 + rng(i + 17) * 40,
      delay: rng(i + 31) * 0.85,
      opacityPeak: 0.45 + rng(i + 41) * 0.35,
    }));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-violet-600/35 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-[100px]"
        animate={{
          x: [-20, 30, -20],
          y: [-10, 20, -10],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-8 h-[320px] w-[320px] rounded-full bg-sky-500/20 blur-[90px]"
        animate={{
          x: [10, -25, 10],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-indigo-200/55"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ opacity: 0.15, scale: p.scale }}
          animate={{
            y: [0, -p.yAmp, 0],
            opacity: [0.05, p.opacityPeak, 0.05],
            scale: [p.scale * 0.85, p.scale * 1.2, p.scale * 0.85],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.id * 0.04 + p.delay,
          }}
        />
      ))}
    </div>
  );
}
