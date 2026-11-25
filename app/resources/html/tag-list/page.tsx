import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-lookup-html-tag-list");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-lookup-html-tag-list"} />;
}
