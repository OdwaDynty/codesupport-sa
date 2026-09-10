import { supabase } from "@/lib/supabase";

const STORAGE_PREFIX = "codesupport_progress_";

function getLocalCompletedTopics(language) {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(STORAGE_PREFIX + language);
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function setLocalCompletedTopics(language, slugs) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_PREFIX + language, JSON.stringify(slugs));
}

// Returns the completed topic slugs for this language.
// Uses the student's account if logged in, otherwise falls back
// to this browser's localStorage.
export async function getCompletedTopics(language) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return getLocalCompletedTopics(language);
  }

  const { data, error } = await supabase
    .from("learner_progress")
    .select("topic_slug")
    .eq("user_id", user.id)
    .eq("language", language);

  if (error || !data) {
    return getLocalCompletedTopics(language);
  }

  return data.map((row) => row.topic_slug);
}

// Marks a topic complete. Saves to the student's account if logged in,
// otherwise saves to this browser's localStorage.
export async function markTopicComplete(language, slug) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const existing = getLocalCompletedTopics(language);
    if (!existing.includes(slug)) {
      setLocalCompletedTopics(language, [...existing, slug]);
    }
    return;
  }

  await supabase.from("learner_progress").upsert(
    { user_id: user.id, language, topic_slug: slug },
    { onConflict: "user_id,language,topic_slug" }
  );
}

// Called once when a student lands on their account page after logging in.
// Copies any progress they made anonymously (in this browser) into their
// account, so they don't lose it just because they created an account later.
export async function syncLocalProgressToAccount(user) {
  const languages = ["java", "python"];

  for (const language of languages) {
    const localSlugs = getLocalCompletedTopics(language);
    if (localSlugs.length === 0) continue;

    const rows = localSlugs.map((slug) => ({
      user_id: user.id,
      language,
      topic_slug: slug,
    }));

    await supabase
      .from("learner_progress")
      .upsert(rows, { onConflict: "user_id,language,topic_slug" });
  }
}