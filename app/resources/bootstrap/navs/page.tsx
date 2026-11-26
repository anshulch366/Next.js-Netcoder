import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "navs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"navs"} />;
}
