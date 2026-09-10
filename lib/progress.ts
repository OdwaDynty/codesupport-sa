const STORAGE_PREFIX = "codesupport_progress_";

export function getCompletedTopics(language) {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(STORAGE_PREFIX + language);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function markTopicComplete(language, slug) {
  if (typeof window === "undefined") return;

  const existing = getCompletedTopics(language);
  if (existing.includes(slug)) return;

  localStorage.setItem(
    STORAGE_PREFIX + language,
    JSON.stringify([...existing, slug])
  );
}