import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-foundations-html-styles");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-foundations-html-styles"} />;
}
