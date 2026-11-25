import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-practice-html-exercises");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-practice-html-exercises"} />;
}
