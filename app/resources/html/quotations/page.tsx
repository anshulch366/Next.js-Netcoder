import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-foundations-html-quotations");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-foundations-html-quotations"} />;
}
