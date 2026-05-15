/**
 * Full-bleed photographic background with dark gradient scrim for readability.
 * Use inside a `relative overflow-hidden` section; place content in a sibling with `relative z-10`.
 */
type SectionPhotoBgProps = {
  imageUrl: string;
  /** Tailwind classes on the image layer (cover, position, opacity). */
  imageClassName?: string;
  /** Gradient / solid scrim on top of the image. */
  overlayClassName?: string;
};

export function SectionPhotoBg({
  imageUrl,
  imageClassName = "opacity-35 bg-cover bg-center sm:opacity-45",
  overlayClassName = "bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950",
}: SectionPhotoBgProps) {
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-slate-950" />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-no-repeat [background-size:cover] ${imageClassName}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div aria-hidden className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
    </>
  );
}

/**
 * High-resolution sources (`fit=max`, wide `w`, high `q`) for crisp full-width backgrounds.
 * Replace with `/your-file.jpg` in `public/` for fully offline control.
 */
export const sectionBg = {
  hero: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=max&w=3840&q=90",
  about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=max&w=3200&q=88",
  feedback:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=max&w=3840&q=90",
  contact: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=max&w=3200&q=88",
} as const;
