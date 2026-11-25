import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-advanced-multiple-columns");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-advanced-multiple-columns"} />;
}
