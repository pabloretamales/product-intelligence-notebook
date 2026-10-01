const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

export function formatDate(iso: string): string {
  const match = ISO_DATE.exec(iso);
  if (!match) return iso;
  const month = MONTHS[Number(match[2]) - 1];
  if (!month) return iso;
  return `${Number(match[3])} ${month} ${match[1]}`;
}

/** True when `updated` falls inside the last `days` days, measured from noon UTC. */
export function isUpdatedWithinDays(
  updated: string,
  days: number,
  now = Date.now(),
): boolean {
  const match = ISO_DATE.exec(updated);
  if (!match) return false;
  const stamp = Date.parse(`${updated}T12:00:00Z`);
  if (Number.isNaN(stamp)) return false;
  const delta = now - stamp;
  return delta >= 0 && delta <= days * 24 * 60 * 60 * 1000;
}
