import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "interview-qa");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"interview-qa"} />;
}
