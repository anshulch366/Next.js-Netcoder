import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-browser-comparison");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-browser-comparison"} />;
}
