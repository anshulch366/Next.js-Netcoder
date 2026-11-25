import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-lookup-html-global-attributes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-lookup-html-global-attributes"} />;
}
