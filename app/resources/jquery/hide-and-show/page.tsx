import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "hide-show");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"hide-show"} />;
}
