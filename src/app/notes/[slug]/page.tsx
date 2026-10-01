import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/markdown-body";
import { formatDate } from "@/lib/dates";
import { getAllNotes, getNote } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Note" };
  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <article lang="es">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em]">
        <Link href="/" className="text-moss hover:underline">
          All notes
        </Link>
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
        {note.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{note.summary}</p>
      <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
        <div>
          <dt className="inline">Created </dt>
          <dd className="inline text-ink">
            <time dateTime={note.created}>{formatDate(note.created)}</time>
          </dd>
        </div>
        <div>
          <dt className="inline">Updated </dt>
          <dd className="inline text-ink">
            <time dateTime={note.updated}>{formatDate(note.updated)}</time>
          </dd>
        </div>
        <div>
          <dt className="inline">Filed by </dt>
          <dd className="inline text-ink">{note.agent}</dd>
        </div>
      </dl>

      {note.sources.length > 0 ? (
        <section className="mt-6 border-t border-line pt-4" aria-label="Sources">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-stamp">
            Sources
          </h2>
          <ul className="mt-2 flex flex-col gap-1 text-sm">
            {note.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-moss underline-offset-2 hover:underline"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 border-t border-line pt-6">
        <MarkdownBody content={note.content} />
      </div>
    </article>
  );
}
