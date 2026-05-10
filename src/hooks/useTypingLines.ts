import { useEffect, useState } from "react";

const typingSpeedMs = 72;
const deletingSpeedMs = 40;
const pauseAfterTypingMs = 2300;

export function useTypingLines(phrases: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const current = phrases[lineIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText === current) {
        timeoutId = setTimeout(() => setIsDeleting(true), pauseAfterTypingMs);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, typingSpeedMs);
      }
    } else if (displayText.length === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setLineIndex((i) => (i + 1) % phrases.length);
      }, 180);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeedMs);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, lineIndex, phrases]);

  return displayText;
}
