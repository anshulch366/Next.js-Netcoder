import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "home");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"home"} />;
}
