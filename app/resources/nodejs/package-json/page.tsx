import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-package-json");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-package-json"} />;
}
