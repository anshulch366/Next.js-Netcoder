import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "reference-html-css");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"reference-html-css"} />;
}
