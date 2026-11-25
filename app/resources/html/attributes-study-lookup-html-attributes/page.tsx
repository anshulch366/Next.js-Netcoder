import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-lookup-html-attributes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-lookup-html-attributes"} />;
}
