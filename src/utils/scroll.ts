/**
 * Scroll helpers tuned for sticky headers + mobile drawers that change layout height.
 */

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerH = header?.getBoundingClientRect().height ?? 72;
  const gap = 10;
  const y = el.getBoundingClientRect().top + window.scrollY - headerH - gap;

  window.scrollTo({
    top: Math.max(0, y),
    behavior: "smooth",
  });
}

/** Delay scroll until after a collapsing mobile menu finishes (layout stabilizes on real phones). */
export function navigateToSectionAfterMenu(
  id: string,
  opts: { menuWasOpen: boolean; closeDelayMs?: number }
) {
  const closeDelayMs = opts.closeDelayMs ?? 300;
  const delay = opts.menuWasOpen ? closeDelayMs : 0;

  window.setTimeout(() => {
    scrollToSection(id);
    try {
      window.history.replaceState(null, "", `#${id}`);
    } catch {
      /* ignore */
    }
  }, delay);
}
