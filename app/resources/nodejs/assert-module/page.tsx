import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-assert");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-assert"} />;
}
