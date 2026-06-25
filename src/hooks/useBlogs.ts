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
  // Tokenize the entire CSV respecting quoted fields (which may contain \n)
  const records: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const ch = text[i];

    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        // Escaped quote ""
        cell += '"';
        i += 2;
      } else {
        inQuotes = !inQuotes;
        i++;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(cell);
      cell = "";
      i++;
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      // Real row boundary — only outside quotes
      if (ch === '\r' && text[i + 1] === '\n') i++; // CRLF
      row.push(cell);
      cell = "";
      // Skip completely empty rows
      if (row.some(c => c.trim() !== "")) {
        records.push(row);
      }
      row = [];
      i++;
    } else {
      // Newlines INSIDE quotes become spaces so content stays in one card
      if ((ch === '\n' || ch === '\r') && inQuotes) {
        cell += ' ';
        if (ch === '\r' && text[i + 1] === '\n') i++;
      } else {
        cell += ch;
      }
      i++;
    }
  }

  // Push last row
  row.push(cell);
  if (row.some(c => c.trim() !== "")) records.push(row);

  if (records.length < 2) return [];

  const headers = records[0].map(h => h.trim().replace(/^"|"$/g, ""));

  return records.slice(1).map((cols) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, idx) => {
      obj[h] = (cols[idx] ?? "").trim().replace(/^"|"$/g, "");
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