import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("r", "course-lists");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"r"} lessonId={"course-lists"} />;
}
