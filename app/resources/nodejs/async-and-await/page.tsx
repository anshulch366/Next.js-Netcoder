import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-async-await");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-async-await"} />;
}
