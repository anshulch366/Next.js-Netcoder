import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "filtering");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"filtering"} />;
}
