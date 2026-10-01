"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatDate } from "@/lib/dates";

export type NoteCard = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  updated: string;
  agent: string;
};

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

export function NotebookHome({ notes }: { notes: NoteCard[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const note of notes) {
      for (const tag of note.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [notes]);

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    return notes.filter((note) => {
      if (activeTag && !note.tags.includes(activeTag)) return false;
      if (!needle) return true;
      const haystack = normalize(
        [note.title, note.summary, note.tags.join(" ")].join(" "),
      );
      return haystack.includes(needle);
    });
  }, [notes, query, activeTag]);

  return (
    <section className="mt-10" aria-label="Notes">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="note-search" className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
            Search
          </label>
          <input
            id="note-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Titles, tags, summaries"
            className="mt-1.5 w-full rounded-md border border-line bg-card px-3 py-2.5 text-base text-ink outline-none ring-moss placeholder:text-muted/70 focus:ring-2"
          />
        </div>
        <div>
          <p id="tag-filter-label" className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
            Tags
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2" role="group" aria-labelledby="tag-filter-label">
            <button
              type="button"
              aria-pressed={activeTag === null}
              onClick={() => setActiveTag(null)}
              className={tagClass(activeTag === null)}
            >
              All
            </button>
            {tags.map(([tag, count]) => (
              <button
                key={tag}
                type="button"
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={tagClass(activeTag === tag)}
              >
                {tag}
                <span className="ml-1 opacity-70">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "note" : "notes"}
        {activeTag ? ` · ${activeTag}` : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-4 border-t border-line py-8 text-muted">
          No notes match this search.
        </p>
      ) : (
        <ol className="mt-2 divide-y divide-line border-y border-line">
          {filtered.map((note) => (
            <li key={note.slug}>
              <article className="group py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <time
                    dateTime={note.updated}
                    className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-stamp"
                  >
                    {formatDate(note.updated)}
                  </time>
                  <ul className="flex flex-wrap gap-x-2 gap-y-1">
                    {note.tags.map((tag) => (
                      <li key={tag} className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-ink">
                  <Link
                    href={`/notes/${note.slug}`}
                    className="decoration-stamp/40 underline-offset-4 group-hover:underline"
                  >
                    {note.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-3xl text-[1.02rem] leading-relaxed text-muted">
                  {note.summary}
                </p>
                <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                  {note.agent}
                </p>
              </article>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function tagClass(active: boolean): string {
  return [
    "rounded-full border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em]",
    active
      ? "border-ink bg-ink text-paper"
      : "border-line bg-card text-ink hover:border-ink",
  ].join(" ");
}
