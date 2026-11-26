import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-classic-global");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-classic-global"} />;
}
