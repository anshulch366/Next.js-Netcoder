import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-publishingguide-html-head");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-publishingguide-html-head"} />;
}
