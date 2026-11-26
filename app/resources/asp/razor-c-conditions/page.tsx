import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-razor-csharp-logic");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-razor-csharp-logic"} />;
}
