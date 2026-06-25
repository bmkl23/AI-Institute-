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
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""));
  return lines.slice(1).map((line) => {
    // Handle commas inside quoted fields
    const cols: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === "," && !inQuotes) {
        cols.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    cols.push(current.trim());
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