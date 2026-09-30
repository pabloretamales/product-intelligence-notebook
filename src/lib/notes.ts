import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "content/notes");
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export type NoteSource = {
  title: string;
  url: string;
};

export type Note = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  created: string;
  updated: string;
  sources: NoteSource[];
  agent: string;
  content: string;
};

function asDate(value: unknown, field: string, file: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string" && ISO_DATE.test(value)) return value;
  throw new Error(`${file}: ${field} must be YYYY-MM-DD`);
}

function asSources(value: unknown, file: string): NoteSource[] {
  if (value == null) return [];
  if (!Array.isArray(value)) {
    throw new Error(`${file}: sources must be a list of { title, url }`);
  }
  return value.map((item, index) => {
    if (!item || typeof item !== "object") {
      throw new Error(`${file}: sources[${index}] must be an object`);
    }
    const source = item as Record<string, unknown>;
    if (typeof source.title !== "string" || typeof source.url !== "string") {
      throw new Error(`${file}: sources[${index}] needs title and url strings`);
    }
    return { title: source.title, url: source.url };
  });
}

function parseNote(filePath: string): Note {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const file = path.basename(filePath);
  if (!data || typeof data !== "object") {
    throw new Error(`${file}: missing frontmatter`);
  }
  const frontmatter = data as Record<string, unknown>;

  if (typeof frontmatter.title !== "string" || frontmatter.title.trim() === "") {
    throw new Error(`${file}: title is required`);
  }
  if (typeof frontmatter.summary !== "string" || frontmatter.summary.trim() === "") {
    throw new Error(`${file}: summary is required`);
  }
  if (!Array.isArray(frontmatter.tags) || frontmatter.tags.length === 0) {
    throw new Error(`${file}: tags must be a non-empty list`);
  }
  if (frontmatter.tags.some((tag) => typeof tag !== "string" || tag.trim() === "")) {
    throw new Error(`${file}: every tag must be a non-empty string`);
  }
  if (typeof frontmatter.agent !== "string" || frontmatter.agent.trim() === "") {
    throw new Error(`${file}: agent is required`);
  }

  return {
    slug: path.basename(file, ".md"),
    title: frontmatter.title.trim(),
    summary: frontmatter.summary.trim(),
    tags: frontmatter.tags.map((tag) => tag.trim()),
    created: asDate(frontmatter.created, "created", file),
    updated: asDate(frontmatter.updated, "updated", file),
    sources: asSources(frontmatter.sources, file),
    agent: frontmatter.agent.trim(),
    content: content.trim(),
  };
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  const files = fs
    .readdirSync(NOTES_DIR)
    .filter((name) => name.endsWith(".md"))
    .sort();

  return files
    .map((name) => parseNote(path.join(NOTES_DIR, name)))
    .sort((a, b) => {
      if (a.updated !== b.updated) return a.updated < b.updated ? 1 : -1;
      return a.title.localeCompare(b.title, "es");
    });
}

export function getNote(slug: string): Note | undefined {
  return getAllNotes().find((note) => note.slug === slug);
}
