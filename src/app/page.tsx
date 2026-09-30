import Link from "next/link";
import { NotebookHome } from "@/components/notebook-home";
import { formatDate, isUpdatedWithinDays } from "@/lib/dates";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const recent = notes.filter((note) => isUpdatedWithinDays(note.updated, 7));

  return (
    <div>
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stamp">
        Field notes
      </p>
      <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
        Product Intelligence Notebook
      </h1>
      <p className="mt-4 max-w-2xl font-serif text-xl italic leading-snug text-muted sm:text-2xl">
        Research notebook on AI products, models, and tools.
      </p>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink">
        Grok Bot creates and manages this notebook: the archive, the updates, and
        the notes published here.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          href="https://cursor.com"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-paper"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#e7a08a]" aria-hidden />
          Curated &amp; maintained by Grok Bot
        </a>
        <p className="text-sm text-muted">por Pablo Retamales</p>
      </div>

      {recent.length > 0 ? (
        <section
          aria-label="What's new"
          className="mt-8 border border-line bg-card px-4 py-3"
        >
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-stamp">
            What&apos;s new
          </h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {recent.map((note) => (
              <li key={note.slug} className="text-sm">
                <Link href={`/notes/${note.slug}`} className="text-moss underline-offset-2 hover:underline">
                  {note.title}
                </Link>
                <span className="text-muted"> · {formatDate(note.updated)}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <NotebookHome
        notes={notes.map((note) => ({
          slug: note.slug,
          title: note.title,
          summary: note.summary,
          tags: note.tags,
          updated: note.updated,
          agent: note.agent,
        }))}
      />
    </div>
  );
}
