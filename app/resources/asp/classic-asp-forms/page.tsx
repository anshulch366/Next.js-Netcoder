import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-classic-forms");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-classic-forms"} />;
}
