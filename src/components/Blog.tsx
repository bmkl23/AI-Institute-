import { useState, useEffect } from "react";

export interface Blog {
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
  readTime: string;
  imageUrl: string;
  content: string;
}

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPxkrt_RJ1pp3Dq3ir6mz5B5bHvyQGjnECKZWe7uQGNxV6CuoEzLCnFTewJqvZvKFKvm8FYk8bBwgQ/pub?output=csv";

function parseCSV(text: string): Blog[] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const nextCh = text[i + 1];

    if (ch === '"') {
      if (inQuotes && nextCh === '"') {
        // escaped quote inside quoted field
        currentCell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = "";
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      // skip \r\n as single newline
      if (ch === '\r' && nextCh === '\n') i++;
      currentRow.push(currentCell.trim());
      if (currentRow.some(c => c !== "")) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentCell = "";
    } else {
      currentCell += ch;
    }
  }
  // last cell
  currentRow.push(currentCell.trim());
  if (currentRow.some(c => c !== "")) rows.push(currentRow);

  if (rows.length < 2) return [];

  const headers = rows[0].map(h => h.replace(/"/g, ""));
  return rows.slice(1).map((cols) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = cols[i] ?? "";
    });
    return obj as unknown as Blog;
  });
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((res) => res.text())
      .then((text) => {
        setBlogs(parseCSV(text));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  return { blogs, loading, error };
}