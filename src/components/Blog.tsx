import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useBlogs, Blog as BlogPost } from "../hooks/useBlogs";
import { SectionPhotoBg } from "./SectionPhotoBg";

const BLOG_BG = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=max&w=3840&q=90";

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  },
};

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-300">
      {label}
    </span>
  );
}

/* ─── MODAL ─── */
function BlogModal({ blog, onClose }: { blog: BlogPost; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" />
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/60"
        >
          {blog.imageUrl && (
            <div className="relative h-52 w-full overflow-hidden rounded-t-2xl bg-slate-800">
              <img src={blog.imageUrl} alt={blog.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
            </div>
          )}
          <div className="p-6 md:p-8">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-800/80 text-slate-400 transition hover:text-white"
              aria-label="Close"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-3">
              <CategoryBadge label={blog.category || "Blog"} />
            </div>
            <h2 className="text-xl font-extrabold leading-snug text-white md:text-2xl">{blog.title}</h2>
            <div className="mt-3 flex items-center gap-3 border-b border-white/[0.07] pb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-[11px] font-bold text-blue-300">
                {blog.author?.[0] ?? "A"}
              </div>
              <span className="text-[12px] text-slate-400">{blog.author}</span>
              <span className="text-slate-600">·</span>
              <span className="text-[12px] text-slate-500">{blog.date}</span>
              {blog.readTime && (
                <>
                  <span className="text-slate-600">·</span>
                  <span className="text-[12px] text-slate-500">{blog.readTime}</span>
                </>
              )}
            </div>
            <div className="mt-5 text-[14px] leading-relaxed text-slate-300 whitespace-pre-line">
              {blog.content || blog.description}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── CARD ─── */
function BlogCard({ blog, onClick }: { blog: BlogPost; onClick: () => void }) {
  const { title, date, author, category, description, readTime, imageUrl } = blog;
  return (
    <motion.div
      variants={stagger.item}
      onClick={onClick}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-900/70 shadow-xl shadow-black/30 backdrop-blur-md transition hover:border-blue-500/25 hover:shadow-blue-950/40"
    >
      <div className="relative h-56 w-full overflow-hidden bg-slate-800">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl opacity-20">📝</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <CategoryBadge label={category || "Blog"} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-[15px] font-bold leading-snug text-white transition group-hover:text-blue-300">{title}</h3>
        <p className="text-[12.5px] leading-relaxed text-slate-400 line-clamp-3">{description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-300">
              {author?.[0] ?? "A"}
            </div>
            <span className="text-[11px] text-slate-400">{author}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span>{date}</span>
            {readTime && <><span>·</span><span>{readTime}</span></>}
          </div>
        </div>
        <p className="mt-1 text-[11px] font-semibold text-blue-400/70 transition group-hover:text-blue-400">
          Read article →
        </p>
      </div>
    </motion.div>
  );
}

/* ─── MAIN SECTION ─── */
export function Blog() {
  const { blogs, loading, error } = useBlogs();
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <>
      <section
        id="blog"
        className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950 py-16 md:py-20"
      >
        {/* Background */}
        <SectionPhotoBg
          imageUrl={BLOG_BG}
          imageClassName=" bg-cover bg-center"
          overlayClassName="bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-blue-950/80"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col items-start gap-2 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-400/80">
                Latest Articles
              </p>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                From the{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
                  Blog
                </span>
              </h2>
              <p className="mt-2 max-w-md text-sm text-slate-400">
                Insights, research updates, and guides from our team.
              </p>
            </div>
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-2 w-2 animate-bounce rounded-full bg-blue-400/60" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center py-20">
              <p className="text-sm text-slate-500">{error}</p>
            </div>
          )}

          {!loading && !error && blogs.length === 0 && (
            <div className="flex items-center justify-center py-20">
              <p className="text-sm text-slate-500">No blog posts yet. Check back soon!</p>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && blogs.length > 0 && (
            <motion.div
              variants={stagger.container}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {blogs.map((blog, i) => (
                <BlogCard key={i} blog={blog} onClick={() => setSelected(blog)} />
              ))}
            </motion.div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {selected && <BlogModal blog={selected} onClose={() => setSelected(null)} />}
    </>
  );
}