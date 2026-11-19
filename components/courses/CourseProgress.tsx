"use client";

import { useSyncExternalStore } from "react";
import { PageLink as Link } from "@/components/layout/PageTransition";
import type { Lesson } from "@/types/lesson";

const prefix = "fieldnotes:v1:";
const changed = "fieldnotes-progress";
const memory = new Map<string, boolean>();

function key(lesson: Lesson) {
  return prefix + lesson.course + "/" + lesson.slug;
}

function isComplete(lesson: Lesson) {
  const id = key(lesson);
  if (memory.has(id)) return memory.get(id) === true;
  try { return localStorage.getItem(id) === "1"; } catch { return false; }
}

function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener(changed, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(changed, notify);
  };
}

export function useCompletedCount(lessons: Lesson[]) {
  return useSyncExternalStore(subscribe, () => lessons.filter(isComplete).length, () => 0);
}

export function ResumeCourse({ lessons }: { lessons: Lesson[] }) {
  const nextIndex = useSyncExternalStore(subscribe, () => lessons.findIndex((lesson) => !isComplete(lesson)), () => 0);
  const completed = useCompletedCount(lessons);
  const next = lessons[nextIndex];
  if (!lessons.length) return null;
  if (!next) return <Link className="text-link" href={`/courses/${lessons[0].course}`}>Review course</Link>;
  return <Link className="text-link" href={`/courses/${next.course}/lessons/${next.slug}`}>
    {completed ? "Continue learning" : "Start learning"} · {next.title}
  </Link>;
}

export function CompletionButton({ lesson }: { lesson: Lesson }) {
  const done = useCompletedCount([lesson]) === 1;
  function toggle() {
    const id = key(lesson);
    const next = !isComplete(lesson);
    try {
      if (next) localStorage.setItem(id, "1");
      else localStorage.removeItem(id);
      memory.delete(id);
    } catch {
      memory.set(id, next);
    }
    window.dispatchEvent(new Event(changed));
  }
  return <button className="button" aria-pressed={done} onClick={toggle}>{done ? "Completed ✓" : "Mark as complete"}</button>;
}

export default function CourseProgress({ lessons }: { lessons: Lesson[] }) {
  const count = useCompletedCount(lessons);
  return <div className="progress"><span>{count} of {lessons.length} lessons complete</span>
    <progress value={count} max={lessons.length} aria-label="Course progress" /></div>;
}
