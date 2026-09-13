import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock the Supabase client before importing progress.ts, so no real
// network calls happen and we control what "logged in" looks like.
vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
    },
    from: vi.fn(),
  },
}));

import { getCompletedTopics, markTopicComplete } from "@/lib/progress";

describe("progress tracking (anonymous / localStorage fallback)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns an empty array when nothing has been completed", async () => {
    const result = await getCompletedTopics("java");
    expect(result).toEqual([]);
  });

  it("marks a topic complete and can read it back", async () => {
    await markTopicComplete("java", "introduction");

    const result = await getCompletedTopics("java");
    expect(result).toEqual(["introduction"]);
  });

  it("does not duplicate a topic marked complete twice", async () => {
    await markTopicComplete("java", "introduction");
    await markTopicComplete("java", "introduction");

    const result = await getCompletedTopics("java");
    expect(result).toEqual(["introduction"]);
  });

  it("keeps progress separate between languages", async () => {
    await markTopicComplete("java", "introduction");
    await markTopicComplete("python", "introduction");

    const javaProgress = await getCompletedTopics("java");
    const pythonProgress = await getCompletedTopics("python");

    expect(javaProgress).toEqual(["introduction"]);
    expect(pythonProgress).toEqual(["introduction"]);
  });

  it("accumulates multiple completed topics for the same language", async () => {
    await markTopicComplete("javascript", "introduction");
    await markTopicComplete("javascript", "variables-data-types");

    const result = await getCompletedTopics("javascript");
    expect(result).toEqual(
      expect.arrayContaining(["introduction", "variables-data-types"])
    );
    expect(result).toHaveLength(2);
  });
});