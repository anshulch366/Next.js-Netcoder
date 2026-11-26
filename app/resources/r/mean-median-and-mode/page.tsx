import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "course-mean-median-mode");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"course-mean-median-mode"} />;
}
