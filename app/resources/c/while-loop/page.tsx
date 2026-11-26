import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "while");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"while"} />;
}
