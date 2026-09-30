import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-serif text-4xl text-ink">Note not found</h1>
      <p className="mt-3 text-muted">That page is not in the notebook.</p>
      <p className="mt-6">
        <Link href="/" className="text-moss underline">
          Back to all notes
        </Link>
      </p>
    </div>
  );
}
